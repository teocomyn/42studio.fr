export function Marquee() {
  const content =
    "Branding / Identité visuelle / Graphisme / Sites web / Direction artistique / Motion design / 3D / Réalisation vidéo / Naming /";

  return (
    <div aria-hidden className="relative z-10 overflow-hidden border-y border-white/10 bg-[var(--bg)] py-5">
      <div className="marquee-track flex w-max gap-14 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">
        {Array.from({ length: 4 }).map((_, index) => (
          <span key={index} className="flex gap-14">
            <span>{content}</span>
            <span className="text-white">{content}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
