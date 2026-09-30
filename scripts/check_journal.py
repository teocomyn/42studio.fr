"""Verify published Journal assets, FAQ consistency and internal fragment destinations.

Run against a completed build or production: python3 scripts/check_journal.py BASE_URL.
Browser interaction tests remain separate; this checks the HTML served without JavaScript.
"""
import json
import subprocess
import sys
import xml.etree.ElementTree as ET
from collections import Counter
from html.parser import HTMLParser
from urllib.parse import urljoin, urlsplit, unquote

from check_seo import Page, fetch


class ContentText(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ignored = False
        self.parts = []

    def handle_starttag(self, tag, attrs):
        if tag in ("script", "style"):
            self.ignored = True

    def handle_endtag(self, tag):
        if tag in ("script", "style"):
            self.ignored = False

    def handle_data(self, data):
        if not self.ignored:
            self.parts.append(data)


class JournalPage(Page):
    def __init__(self):
        super().__init__()
        self.ids = []
        self.summaries = 0
        self.images = []
        self.html = ""

    def handle_starttag(self, tag, attrs):
        super().handle_starttag(tag, attrs)
        attrs = dict(attrs)
        if attrs.get("id"):
            self.ids.append(attrs["id"])
        if tag == "summary":
            self.summaries += 1
        if tag == "img":
            self.images.append(attrs)


def run(base):
    _, sitemap = fetch(base + "/sitemap.xml")
    paths = [urlsplit(node.text).path for node in ET.fromstring(sitemap).iter()
             if node.tag.endswith("}loc") and "/journal/" in node.text]
    cache = {}
    failures = []
    images = set()
    checked = []

    def page(path):
        if path not in cache:
            status, html = fetch(base + path)
            parsed = JournalPage()
            parsed.html = html
            parsed.feed(html)
            cache[path] = status, parsed
        return cache[path]

    for path in paths:
        status, parsed = page(path)
        if status != 200:
            failures.append(f"{path}: HTTP {status}")
        duplicate_ids = [key for key, count in Counter(parsed.ids).items() if count > 1]
        if duplicate_ids:
            failures.append(f"{path}: duplicate IDs {duplicate_ids}")
        if "outil" not in parsed.ids:
            continue  # Existing guides without the new interactive tools.
        checked.append(path)
        schema = next((item for item in parsed.schemas if item.get("@type") == "FAQPage"), {})
        faqs = schema.get("mainEntity", [])
        if len(faqs) != 5:
            failures.append(f"{path}: expected five authored FAQ entries")
        text_parser = ContentText()
        text_parser.feed(parsed.html)
        text = " ".join(text_parser.parts)
        for faq in faqs:
            # HTMLParser removes escaping while JSON-LD contains the original strings.
            for value in (faq["name"], faq["acceptedAnswer"]["text"]):
                if value not in text:
                    failures.append(f"{path}: FAQ schema not represented in HTML: {value[:45]}")
        cover = next((item for item in parsed.images if item.get("loading") != "lazy" and item.get("alt")), None)
        if not cover:
            failures.append(f"{path}: missing informative cover")
        if parsed.meta.get("og:image:width") != "1536" or parsed.meta.get("og:image:height") != "1024":
            failures.append(f"{path}: cover dimensions disagree with social metadata")
        image = parsed.meta.get("og:image", "")
        if not image:
            failures.append(f"{path}: missing sharing image")
        else:
            images.add(urlsplit(image).path)
        for href in parsed.links:
            target = urlsplit(urljoin("https://42studio.fr" + path, href))
            if target.hostname != "42studio.fr":
                continue
            destination = target.path or "/"
            target_status, target_page = page(destination)
            if target_status != 200:
                failures.append(f"{path}: broken link {href}")
            if target.fragment and unquote(target.fragment) not in target_page.ids:
                failures.append(f"{path}: missing fragment {href}")

    for image in sorted(images):
        result = subprocess.run(["curl", "-sS", "--max-time", "30", "-o", "/dev/null", "-w",
                                 "%{http_code} %{content_type} %{size_download}", base + image],
                                capture_output=True, text=True, check=True)
        status, content_type, size = result.stdout.split()
        if status != "200" or not content_type.startswith("image/") or int(size) == 0:
            failures.append(f"Invalid cover {image}: {result.stdout}")
    for route in ("/llms.txt", "/llms-full.txt"):
        status, body = fetch(base + route)
        for path in checked:
            if status != 200 or "https://42studio.fr" + path not in body:
                failures.append(f"Missing guide in {route}: {path}")
    if len(checked) != 10 or len(images) != 10:
        failures.append(f"Expected ten new guides and ten covers; got {len(checked)} and {len(images)}")
    return {"base": base, "new_guides": len(checked), "covers": len(images),
            "faq_entries": len(checked) * 5, "failures": failures}


if __name__ == "__main__":
    report = run(sys.argv[1].rstrip("/"))
    print(json.dumps(report, ensure_ascii=False, indent=2))
    if len(sys.argv) > 2:
        with open(sys.argv[2], "w") as output:
            json.dump(report, output, ensure_ascii=False, indent=2)
    sys.exit(bool(report["failures"]))
