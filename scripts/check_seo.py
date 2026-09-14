"""Check server-rendered SEO across the sitemap. Run against a completed, running build."""

import concurrent.futures
import json
import subprocess
import sys
import xml.etree.ElementTree as ET
from collections import Counter
from html.parser import HTMLParser
from urllib.parse import urlsplit, urljoin

class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.title = ''
        self.h1 = []
        self.paragraphs = 0
        self.links = []
        self.canonical = []
        self.meta = {}
        self.schemas = []
        self.schema_errors = []
        self.mode = ''
        self.buffer = ''
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'h1':
            self.h1.append('')
            self.mode = 'h1'
        if tag == 'title': self.mode = 'title'
        if tag == 'p': self.paragraphs += 1
        if tag == 'a' and attrs.get('href'): self.links.append(attrs['href'])
        if tag == 'link' and attrs.get('rel') == 'canonical': self.canonical.append(attrs.get('href'))
        if tag == 'meta': self.meta[attrs.get('name', attrs.get('property', ''))] = attrs.get('content', '')
        if tag == 'script' and attrs.get('type') == 'application/ld+json':
            self.mode = 'schema'
            self.buffer = ''
    def handle_endtag(self, tag):
        if tag == 'script' and self.mode == 'schema':
            try: self.schemas.append(json.loads(self.buffer))
            except ValueError as error: self.schema_errors.append(str(error))
            self.mode = ''
        if tag in ('h1', 'title'): self.mode = ''
    def handle_data(self, text):
        if self.mode == 'h1': self.h1[-1] += text
        if self.mode == 'title': self.title += text
        if self.mode == 'schema': self.buffer += text

def fetch(url):
    result = subprocess.run(['curl', '--silent', '--show-error', '--max-time', '30', '--write-out', '\n%{http_code}', url], capture_output=True, text=True)
    if result.returncode: raise RuntimeError(result.stderr)
    body, status = result.stdout.rsplit('\n', 1)
    return int(status), body

def run(base):
    status, xml = fetch(base + '/sitemap.xml')
    assert status == 200, f'sitemap status {status}'
    urls = [el.text for el in ET.fromstring(xml).iter() if el.tag.endswith('}loc')]
    failures = []
    if len(urls) != len(set(urls)): failures.append('Duplicate sitemap URLs')
    extra = ['https://42studio.fr/mentions-legales', 'https://42studio.fr/confidentialite']
    def check(url):
        path = urlsplit(url).path or '/'
        status, html = fetch(base + path)
        page = Page()
        page.feed(html)
        errors = []
        if status != 200: errors.append(f'HTTP {status}')
        if len(page.h1) != 1 or not page.h1[0].strip(): errors.append('Expected one non-empty SSR h1')
        if page.paragraphs == 0: errors.append('No SSR paragraphs')
        if not page.links: errors.append('No SSR links')
        if not page.title: errors.append('Missing title')
        if page.title.lower().count('42studio') != 1: errors.append('Missing or repeated brand in title')
        if not page.meta.get('description'): errors.append('Missing description')
        if len(page.canonical) != 1 or page.canonical[0].rstrip('/') != url.rstrip('/'): errors.append('Incorrect canonical')
        if url in urls and 'noindex' in page.meta.get('robots', ''): errors.append('Noindex page in sitemap')
        if url in extra and 'noindex' not in page.meta.get('robots', ''): errors.append('Legal page lost noindex')
        errors.extend(page.schema_errors)
        entities = [s for s in page.schemas if s.get('@id') == 'https://42studio.fr/#organization']
        for entity in entities:
            if entity.get('url', '').rstrip('/') != 'https://42studio.fr': errors.append('Inconsistent organization URL')
            address = entity.get('address', {})
            if address.get('addressLocality') != 'Neuville-Vitasse' or address.get('postalCode') != '62217': errors.append('Inconsistent address')
        if not entities: errors.append('Missing organization schema')
        return {'url': url, 'status': status, 'title': page.title, 'description': page.meta.get('description'), 'h1': page.h1, 'paragraphs': page.paragraphs, 'links': page.links, 'errors': errors}
    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
        pages = list(pool.map(check, dict.fromkeys(urls + extra)))
    known = {urlsplit(p['url']).path or '/' for p in pages}
    for page in pages:
        for href in page['links']:
            target = urlsplit(urljoin(page['url'], href))
            if target.hostname == '42studio.fr' and (target.path or '/') not in known:
                page['errors'].append('Unknown internal page: ' + href)
        failures.extend(page['url'] + ': ' + e for e in page['errors'])
    for field in ('title', 'description'):
        duplicates = {k: v for k, v in Counter(p[field] for p in pages).items() if v > 1}
        if duplicates: failures.append(f'Duplicate {field}: {duplicates}')
    status, html = fetch(base + '/seo-check-page-inexistante')
    if status != 404: failures.append('Missing page does not return 404')
    if any(u in urls for u in extra): failures.append('Legal URLs still in sitemap')
    result = {'base': base, 'sitemap_pages': len(urls), 'checked_pages': len(pages), 'failures': failures, 'pages': pages}
    print(json.dumps({k: v for k, v in result.items() if k != 'pages'}, ensure_ascii=False, indent=2))
    if len(sys.argv) > 2:
        with open(sys.argv[2], 'w') as report: json.dump(result, report, ensure_ascii=False, indent=2)
    return bool(failures)

if __name__ == '__main__':
    if len(sys.argv) < 2: raise SystemExit('Usage: python3 scripts/check_seo.py BASE_URL [REPORT_JSON]')
    raise SystemExit(run(sys.argv[1].rstrip('/')))
