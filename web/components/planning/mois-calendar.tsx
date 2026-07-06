import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { eventsMois, type EventMois } from "@/lib/data/schedule";
import { cn } from "@/lib/utils";

const typeTone: Record<
  EventMois["type"],
  { tone: "or" | "bleu" | "rouge" | "craie" | "outline"; label: string }
> = {
  gala: { tone: "rouge", label: "Gala" },
  stage: { tone: "or", label: "Stage" },
  sortie: { tone: "bleu", label: "Sortie" },
  initiation: { tone: "craie", label: "Initiation" },
  reunion: { tone: "outline", label: "Réunion" },
};

/**
 * Calendrier du mois — liste stylée des événements (gala, stages, sorties…).
 * Par défaut, affiche tous les `eventsMois` ; passer `events` pour un teaser.
 */
export function CalendrierMois({
  events = eventsMois,
  className,
}: {
  events?: EventMois[];
  className?: string;
}) {
  return (
    <ol
      className={cn(
        "divide-y divide-noir-line overflow-hidden rounded-4xl border border-noir-line bg-noir-surface shadow-soft",
        className,
      )}
    >
      {events.map((e) => {
        const type = typeTone[e.type];
        return (
          <li
            key={`${e.date}-${e.title}`}
            className="group flex flex-col gap-3 p-5 transition-colors hover:bg-noir-card sm:flex-row sm:items-center sm:gap-6 sm:p-6"
          >
            <p className="w-full shrink-0 font-condensed text-xl font-semibold uppercase leading-none tracking-wide text-or sm:w-44 sm:text-2xl">
              {e.date}
            </p>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone={type.tone}>{type.label}</Badge>
              </div>
              <h3 className="mt-1.5 font-display text-base leading-snug text-craie sm:text-lg">
                {e.title}
              </h3>
              <p className="mt-1.5 flex items-center gap-1.5 text-sm text-craie-muted">
                <MapPin className="h-4 w-4 shrink-0 text-bleu-light" strokeWidth={1.75} />
                {e.lieu}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
