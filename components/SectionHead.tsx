import { Reveal } from "@/components/Reveal";

type SectionHeadProps = {
  eyebrow: string;
  title: string;
  body?: string;
};

export function SectionHead({ eyebrow, title, body }: SectionHeadProps) {
  return (
    <Reveal className="mb-12 flex flex-col gap-5 md:mb-20 md:grid md:grid-cols-[minmax(12rem,24rem)_1fr] md:items-end">
      <span className="mono-label">{eyebrow}</span>
      <div>
        <h2 className="max-w-4xl text-[clamp(2.2rem,5vw,5rem)] font-light leading-[0.95] tracking-[-0.045em] text-balance">
          {title}
        </h2>
        {body ? <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)]">{body}</p> : null}
      </div>
    </Reveal>
  );
}
