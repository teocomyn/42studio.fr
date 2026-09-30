"use client";

import { useState } from "react";
import { TrackedLink } from "@/components/TrackedLink";
import type { JournalTool as Tool } from "@/data/journal";

export function JournalTool({ tool, slug, href }: { tool: Tool; slug: string; href: string }) {
  const [selected, setSelected] = useState<string[]>([]);
  const [draft, setDraft] = useState<Record<string, string>>({});
  const [downloaded, setDownloaded] = useState(false);
  const isChecklist = tool.mode === "checklist";
  const isStory = tool.mode === "storyboard";
  const isComparison = tool.mode === "comparison";
  const chosen = tool.items.filter((item) => selected.includes(item.id));
  const remaining = tool.items.filter((item) => !selected.includes(item.id));
  const result = isChecklist ? remaining : chosen;
  const canDownload = isChecklist || (isStory ? tool.items.every((item) => draft[item.id]?.trim()) : selected.length > 0);

  function toggle(id: string) {
    setDownloaded(false);
    setSelected((previous) => isComparison ? [id] : previous.includes(id) ? previous.filter((value) => value !== id) : [...previous, id]);
  }

  function download() {
    const lines = [
      `# ${tool.title}`, "", "Cadrage préparé depuis le Journal de 42studio.",
      `Source : https://42studio.fr/journal/${slug}`, "", "Ce document est un support de préparation, pas un devis ni un audit.", "",
      ...(isStory ? tool.items.flatMap((item) => [`## ${item.label}`, draft[item.id]?.trim() ?? "À préciser", ""]) : [
        ...tool.items.flatMap((item) => [
          `${isChecklist ? (selected.includes(item.id) ? "[Prêt]" : "[À préparer]") : (selected.includes(item.id) ? "[Sélectionné]" : "[Non retenu]")} ${item.label}`,
          item.detail, ""
        ])
      ])
    ];
    const url = URL.createObjectURL(new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `42studio-${slug}.txt`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setDownloaded(true);
  }

  return (
    <section id="outil" aria-labelledby="journal-tool-title" className="mt-12 scroll-mt-28 border border-white/25 bg-white/[0.04] p-5 md:p-8">
      <p className="mono-label">À vous de jouer</p>
      <h2 id="journal-tool-title" className="mt-4 text-2xl font-light leading-tight tracking-[-0.03em]">{tool.title}</h2>
      <p className="mt-4 text-sm leading-7 text-white/75">{tool.intro}</p>
      <fieldset className="mt-6 space-y-3">
        <legend className="sr-only">{isStory ? "Votre scénario" : isComparison ? "Votre situation principale" : isChecklist ? "Points déjà prêts" : "Besoins à prévoir"}</legend>
        {tool.items.map((item, index) => (
          isStory ? (
            <div key={item.id} className="block">
              <label htmlFor={`story-${item.id}`} className="block text-sm text-white">{index + 1}. {item.label}</label>
              <span id={`${item.id}-help`} className="mt-2 block text-xs leading-6 text-white/65">{item.detail}</span>
              <textarea
                id={`story-${item.id}`} rows={3} maxLength={600} value={draft[item.id] ?? ""} aria-describedby={`${item.id}-help`}
                onChange={(event) => { setDraft((previous) => ({ ...previous, [item.id]: event.target.value })); setDownloaded(false); }}
                className="mt-2 w-full resize-y border border-white/25 bg-black p-3 text-sm leading-6 text-white"
              />
            </div>
          ) : (
            <label key={item.id} className={`flex cursor-pointer items-start gap-3 border p-4 transition ${selected.includes(item.id) ? "border-white/60 bg-white/[0.06]" : "border-white/15 hover:border-white/40"}`}>
              <input type={isComparison ? "radio" : "checkbox"} name={isComparison ? `choice-${slug}` : item.id} checked={selected.includes(item.id)} onChange={() => toggle(item.id)} className="mt-1 h-4 w-4 shrink-0 accent-white" />
              <span className="text-sm leading-6 text-white/90">{item.label}</span>
            </label>
          )
        ))}
      </fieldset>
      <div className="mt-6 border-t border-white/20 pt-5" aria-live={isStory ? "off" : "polite"} aria-atomic="true">
        <h3 className="text-base font-medium">
          {isStory ? "Votre trame de storyboard" : isChecklist ? `${selected.length} point${selected.length > 1 ? "s" : ""} prêt${selected.length > 1 ? "s" : ""} sur ${tool.items.length}` : isComparison ? "La piste à explorer" : "Les sujets à cadrer"}
        </h3>
        {isStory ? (
          <ol className="mt-4 space-y-4">
            {tool.items.map((item, index) => <li key={item.id} className="border-l border-white/40 pl-4"><span className="font-mono text-[11px] text-white/60">PLAN {index + 1}</span><p className="mt-1 whitespace-pre-wrap break-words text-sm leading-7 text-white/80">{draft[item.id]?.trim() || "À écrire dans le champ ci-dessus."}</p></li>)}
          </ol>
        ) : result.length ? (
          <div className="mt-3 space-y-4">
            {result.map((item) => <div key={item.id}><p className="text-sm font-medium">{isChecklist ? "À préparer : " : ""}{item.label}</p><p className="mt-1 text-sm leading-7 text-white/75">{item.detail}</p></div>)}
          </div>
        ) : <p className="mt-3 text-sm leading-7 text-white/75">{isChecklist ? "Tous les points sont déclarés prêts. Vérifiez la matière avec les personnes qui valident le projet ; cette liste ne remplace pas un échange de cadrage." : "Choisissez un besoin pour afficher les points à discuter."}</p>}
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button type="button" disabled={!canDownload} onClick={download} className="min-h-12 border border-white/40 px-4 font-mono text-[10px] uppercase tracking-[0.08em] hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-40">Télécharger mon cadrage ↓</button>
        <button type="button" onClick={() => { setSelected([]); setDraft({}); setDownloaded(false); }} className="min-h-12 px-3 text-xs text-white/75 underline underline-offset-4">Réinitialiser</button>
      </div>
      <p role="status" className="mt-3 text-xs leading-6 text-white/65">{downloaded ? "Le fichier est prêt dans vos téléchargements. Vous pouvez reprendre son contenu dans votre message au studio." : "Vos réponses restent dans cette page. Aucun envoi ni inscription ; elles sont effacées au rechargement."}</p>
      <noscript><p className="mt-3 text-sm">Activez JavaScript pour utiliser l’outil. Vous pouvez aussi reprendre les questions ci-dessus dans votre brief.</p></noscript>
      <TrackedLink href={href} trackId={`journal_tool_${slug}`} trackLocation="journal_tool" className="mt-5 inline-flex min-h-12 items-center gap-3 font-mono text-[11px] uppercase tracking-[0.08em] underline underline-offset-4">Discuter de ce cadrage <span aria-hidden>↗</span></TrackedLink>
    </section>
  );
}
