"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { galerie } from "@/lib/data/content";
import { cn } from "@/lib/utils";

type Cat = (typeof galerie)[number]["cat"];

const cats: { id: Cat | "tous"; label: string }[] = [
  { id: "tous", label: "Tous" },
  { id: "gala", label: "Galas" },
  { id: "cours", label: "Cours" },
  { id: "evenement", label: "Événements" },
];

const catLabel: Record<Cat, string> = {
  gala: "Gala",
  cours: "Cours",
  evenement: "Événement",
};

export function GalerieGrid({ className }: { className?: string }) {
  const [cat, setCat] = useState<(typeof cats)[number]["id"]>("tous");
  const [index, setIndex] = useState<number | null>(null);

  const photos = useMemo(
    () => (cat === "tous" ? galerie : galerie.filter((p) => p.cat === cat)),
    [cat],
  );

  const active = index === null ? null : photos[index];

  const prev = () =>
    setIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
  const next = () => setIndex((i) => (i === null ? null : (i + 1) % photos.length));

  return (
    <div className={className}>
      {/* Filtres par catégorie */}
      <div
        className="flex flex-wrap gap-1.5"
        role="group"
        aria-label="Filtrer la galerie par catégorie"
      >
        {cats.map((c) => (
          <button
            key={c.id}
            onClick={() => {
              setCat(c.id);
              setIndex(null);
            }}
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-semibold transition-colors",
              cat === c.id
                ? "border-or bg-or-tint text-or"
                : "border-noir-line text-craie-soft hover:border-or/60 hover:text-craie",
            )}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Grille */}
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((p, i) => (
          <button
            key={p.src}
            onClick={() => setIndex(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-noir-line bg-noir-surface text-left transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-card"
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-noir-deep/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <span className="text-xs leading-snug text-craie">{p.alt}</span>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-craie/90 text-noir-deep">
                <ZoomIn className="h-4 w-4" strokeWidth={2} />
              </span>
            </span>
            <span className="pill absolute left-3 top-3 bg-noir-deep/80 text-craie-soft backdrop-blur">
              {catLabel[p.cat]}
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <Dialog open={index !== null} onOpenChange={(o) => !o && setIndex(null)}>
        <DialogContent
          className="max-w-3xl p-3 sm:p-4"
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
          }}
        >
          {active && (
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-noir-surface">
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 flex items-center justify-between gap-4 px-1 pb-1">
                <div className="min-w-0">
                  <DialogTitle className="truncate font-sans text-sm font-semibold normal-case tracking-normal text-craie">
                    {active.alt}
                  </DialogTitle>
                  <DialogDescription className="mt-0.5 font-condensed text-xs font-semibold uppercase tracking-wide text-craie-muted">
                    {catLabel[active.cat]} · photo {(index ?? 0) + 1} / {photos.length}
                  </DialogDescription>
                </div>
                <div className="flex shrink-0 gap-2">
                  <button
                    onClick={prev}
                    aria-label="Photo précédente"
                    className="grid h-10 w-10 place-items-center rounded-full border border-noir-line text-craie-soft transition-colors hover:border-or hover:text-or"
                  >
                    <ChevronLeft className="h-5 w-5" strokeWidth={1.75} />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Photo suivante"
                    className="grid h-10 w-10 place-items-center rounded-full border border-noir-line text-craie-soft transition-colors hover:border-or hover:text-or"
                  >
                    <ChevronRight className="h-5 w-5" strokeWidth={1.75} />
                  </button>
                </div>
              </figcaption>
            </figure>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
