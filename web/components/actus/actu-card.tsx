import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/** Élément du fil d'actualités (voir lib/data/content.ts → actus). */
export type Actu = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  tag: string;
};

const tagTone: Record<string, "or" | "bleu" | "rouge" | "craie"> = {
  "Événement": "or",
  "Compétition": "rouge",
  "Sortie": "bleu",
  "Interventions": "bleu",
  "Pratique": "craie",
  "Vie du club": "craie",
};

export function ActuCard({ actu, className }: { actu: Actu; className?: string }) {
  return (
    <article
      id={actu.slug}
      className={cn(
        "group flex h-full scroll-mt-24 flex-col overflow-hidden rounded-4xl border border-noir-line bg-noir-card transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-card",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-noir-surface">
        <Image
          src={actu.image}
          alt={actu.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
        />
        <Badge tone={tagTone[actu.tag] ?? "bleu"} className="absolute left-3 top-3 backdrop-blur">
          {actu.tag}
        </Badge>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="flex items-center gap-1.5 font-condensed text-xs font-semibold uppercase tracking-wide text-craie-muted">
          <CalendarDays className="h-3.5 w-3.5 text-or" strokeWidth={1.75} />
          {actu.date}
        </p>
        <h3 className="font-display text-lg leading-tight text-craie">{actu.title}</h3>
        <p className="text-sm leading-snug text-craie-soft">{actu.excerpt}</p>
      </div>
    </article>
  );
}
