import Link from "next/link";

type BreadcrumbsProps = {
  items: Array<{ name: string; path: string }>;
};

// Fil d'Ariane visible, cohérent avec le BreadcrumbList JSON-LD de la page.
export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Fil d'Ariane" className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/50">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="text-white/75">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.path} className="transition hover:text-white">
                    {item.name}
                  </Link>
                  <span aria-hidden className="text-white/25">
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
