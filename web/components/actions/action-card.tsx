import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Action } from "@/lib/data/actions";
import { FramedImage } from "@/components/site/framed-image";
import { cn } from "@/lib/utils";

/** Teinte du badge par action — bleu CBAC, or, rouge, craie. */
const chipTint: Record<string, string> = {
  "cours-initiation": "bg-or-tint text-or",
  "stages-vacances": "bg-bleu-tint text-bleu-light",
  "temps-echanges": "bg-craie/10 text-craie",
  "galas-amicaux": "bg-rouge-tint text-rouge-light",
  projets: "bg-bleu-tint text-bleu-light",
};

/** Libellé court du badge par action. */
const chipLabel: Record<string, string> = {
  "cours-initiation": "Tous publics",
  "stages-vacances": "Avec nos partenaires",
  "temps-echanges": "Temps conviviaux",
  "galas-amicaux": "En projet",
  projets: "Sur mesure",
};

export function ActionCard({
  action,
  className,
}: {
  action: Action;
  className?: string;
}) {
  return (
    <Link
      href={`/actions#${action.slug}`}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-4xl border border-noir-line bg-noir-card transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-card",
        className,
      )}
    >
      {/* Coins de ring : coin bleu en haut à gauche, coin rouge en bas à droite. */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-10 h-5 w-5 rounded-tl-4xl border-l-2 border-t-2 border-bleu opacity-60 transition-opacity duration-300 group-hover:opacity-100"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 z-10 h-5 w-5 rounded-br-4xl border-b-2 border-r-2 border-rouge opacity-60 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="relative overflow-hidden">
        <FramedImage
          src={action.image}
          alt={`${action.name} — ${action.publics}`}
          fallbackLabel={action.name}
          ratio="aspect-[3/4]"
          className="rounded-none"
          imgClassName="transition-transform duration-700 ease-smooth group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span
          className={cn(
            "pill absolute left-3 top-3 backdrop-blur",
            chipTint[action.slug] ?? "bg-noir-deep/80 text-craie",
          )}
        >
          {chipLabel[action.slug] ?? action.publics}
        </span>
        <span className="absolute right-3 top-3 grid h-9 w-9 translate-y-1 place-items-center rounded-full bg-craie/90 text-noir-deep opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-display text-lg leading-tight text-craie">{action.name}</h3>
        <p className="text-sm leading-snug text-craie-soft">{action.short}</p>
        <div className="mt-auto flex items-start gap-1.5 pt-3 text-xs text-craie-muted">
          <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
          <span>{action.lieux}</span>
        </div>
      </div>
    </Link>
  );
}
