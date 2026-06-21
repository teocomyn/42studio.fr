import { SectionHead } from "@/components/SectionHead";
import { Reveal } from "@/components/Reveal";

const pillars = [
  {
    index: "01",
    title: "Système, pas pièces détachées",
    text: "Une marque cohérente de bout en bout, jamais des assets qui ne se parlent pas."
  },
  {
    index: "02",
    title: "Pensé pour l'écran",
    text: "On designe nativement pour le digital, là où les autres partent encore du print."
  },
  {
    index: "03",
    title: "Exécution réelle",
    text: "On ne fait pas que des maquettes. On code, on déploie, ça existe vraiment."
  },
  {
    index: "04",
    title: "L'intelligence avant l'esthétique",
    text: "Le beau au service d'une stratégie. Jamais l'inverse."
  }
];

export function Approach() {
  return (
    <section id="approche" className="section-pad relative z-10 bg-[var(--bg)]">
      <SectionHead eyebrow="02 / Pourquoi nous" title="La cohérence, garantie." />
      <Reveal className="grid border border-white/10 md:grid-cols-4">
        {pillars.map((pillar) => (
          <article
            key={pillar.index}
            className="group flex min-h-72 flex-col justify-between border-b border-white/10 p-7 transition hover:bg-white hover:text-black md:border-b-0 md:border-r md:border-white/10 md:p-9 md:last:border-r-0"
          >
            <span className="font-mono text-xs text-[var(--muted)] transition group-hover:text-black/60">{pillar.index}</span>
            <div>
              <h3 className="max-w-xs text-2xl font-normal leading-tight tracking-[-0.03em]">{pillar.title}</h3>
              <p className="mt-5 text-sm leading-6 text-[var(--muted)] transition group-hover:text-black/65">{pillar.text}</p>
            </div>
          </article>
        ))}
      </Reveal>
    </section>
  );
}
