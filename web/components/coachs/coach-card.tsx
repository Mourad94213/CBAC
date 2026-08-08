import Image from "next/image";
import type { Coach } from "@/lib/data/coachs";
import { cn } from "@/lib/utils";

export function CoachCard({ coach, className }: { coach: Coach; className?: string }) {
  return (
    <figure
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
      <div className="relative aspect-[4/5] overflow-hidden bg-noir-surface">
        <Image
          src={coach.image}
          alt={`${coach.name}, ${coach.role.toLowerCase()} au CBAC`}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
        />
        {coach.founder && (
          <span className="pill absolute left-3 top-3 bg-or text-noir-deep">Fondateur</span>
        )}
      </div>
      <figcaption className="flex flex-1 flex-col gap-1.5 p-4">
        <h3 className="font-display text-base text-craie">{coach.name}</h3>
        <p className="font-condensed text-xs font-semibold uppercase tracking-wide text-bleu-light">
          {coach.role}
        </p>
        {coach.metier && (
          <p className="font-condensed text-xs uppercase tracking-wide text-craie-muted">
            {coach.metier}
          </p>
        )}
        <p className="mt-2 text-xs leading-snug text-craie-muted">{coach.bio}</p>
      </figcaption>
    </figure>
  );
}
