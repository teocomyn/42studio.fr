import { clientNames } from "@/data/clients";

export function ClientStrip() {
  const row = clientNames.join(" · ");

  return (
    <div
      aria-label="Marques accompagnées"
      className="relative z-10 overflow-hidden border-b border-white/10 bg-[var(--bg)] py-4"
    >
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.14em] text-white/60">
        {Array.from({ length: 3 }).map((_, index) => (
          <span key={index} className="flex gap-12">
            <span>{row}</span>
            <span className="text-white/75">{row}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
