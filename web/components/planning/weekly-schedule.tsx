"use client";

import { useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, Clock, Filter, MapPin, Users } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { days, creneaux, type Creneau } from "@/lib/data/schedule";
import { getActivite } from "@/lib/data/activites";
import { cn } from "@/lib/utils";

/** Teintes par activité — bleu CBAC, or (valorisation), rouge (ring), craie. */
const activiteTint: Record<
  string,
  { slot: string; chip: string; dot: string }
> = {
  "boxe-educative": {
    slot: "border-or/25 bg-or-tint hover:bg-or-tint/70",
    chip: "bg-or-tint text-or",
    dot: "bg-or",
  },
  "boxe-loisir": {
    slot: "border-bleu/30 bg-bleu-tint hover:bg-bleu-tint/70",
    chip: "bg-bleu-tint text-bleu-light",
    dot: "bg-bleu-light",
  },
  "boxe-competition": {
    slot: "border-rouge/30 bg-rouge-tint hover:bg-rouge-tint/70",
    chip: "bg-rouge-tint text-rouge-light",
    dot: "bg-rouge-light",
  },
  "boxe-sante-forme": {
    slot: "border-craie/20 bg-craie/5 hover:bg-craie/10",
    chip: "bg-craie/10 text-craie",
    dot: "bg-craie",
  },
  "initiation-decouverte": {
    slot: "border-or/40 bg-noir-card hover:bg-or-tint/60",
    chip: "bg-noir-card text-or-soft",
    dot: "bg-or-deep",
  },
  "stage-vacances": {
    slot: "border-bleu/20 bg-noir-card hover:bg-bleu-tint/60",
    chip: "bg-noir-card text-bleu-light",
    dot: "bg-bleu",
  },
};

const fallbackTint = {
  slot: "border-noir-line bg-noir-card hover:bg-noir-card/70",
  chip: "bg-noir-card text-craie-soft",
  dot: "bg-craie-muted",
};

const tintFor = (slug: string) => activiteTint[slug] ?? fallbackTint;
const nameFor = (slug: string) => getActivite(slug)?.name ?? slug;

export function WeeklySchedule() {
  const [jour, setJour] = useState<string>("Tous");
  const [act, setAct] = useState<string>("toutes");
  const [active, setActive] = useState<Creneau | null>(null);

  /** Activités réellement présentes au planning, dans l'ordre d'apparition. */
  const actOptions = useMemo(
    () => Array.from(new Set(creneaux.map((c) => c.activite))),
    [],
  );

  const filtered = useMemo(
    () =>
      creneaux.filter(
        (c) =>
          (jour === "Tous" || c.day === jour) &&
          (act === "toutes" || c.activite === act),
      ),
    [jour, act],
  );

  const visibleDays = useMemo(() => (jour === "Tous" ? days : [jour]), [jour]);

  const byDay = useMemo(
    () =>
      visibleDays.map((d) =>
        filtered
          .filter((c) => c.day === d)
          .sort((a, b) => a.start.localeCompare(b.start, "fr", { numeric: true })),
      ),
    [filtered, visibleDays],
  );

  const activeActivite = active ? getActivite(active.activite) : undefined;

  return (
    <div>
      {/* Filtres */}
      <div className="flex flex-col gap-4 rounded-4xl border border-noir-line bg-noir-surface p-4 shadow-soft sm:p-5">
        <div className="flex items-center gap-2 text-sm font-semibold text-craie">
          <Filter className="h-4 w-4 text-or" strokeWidth={1.75} />
          Filtrer le planning
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <FilterGroup label="Jour">
            <Chip active={jour === "Tous"} onClick={() => setJour("Tous")}>
              Tous
            </Chip>
            {days.map((d) => (
              <Chip key={d} active={jour === d} onClick={() => setJour(d)}>
                {d}
              </Chip>
            ))}
          </FilterGroup>
          <FilterGroup label="Activité">
            <Chip active={act === "toutes"} onClick={() => setAct("toutes")}>
              Toutes
            </Chip>
            {actOptions.map((slug) => (
              <Chip key={slug} active={act === slug} onClick={() => setAct(slug)}>
                {nameFor(slug)}
              </Chip>
            ))}
          </FilterGroup>
        </div>
      </div>

      {/* Légende */}
      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-craie-soft">
        {actOptions.map((slug) => (
          <Legend key={slug} dot={tintFor(slug).dot} label={nameFor(slug)} />
        ))}
      </div>

      {/* Grille (colonnes desktop / liste par jour sur mobile) */}
      <div
        className={cn(
          "mt-6 grid gap-3",
          jour === "Tous" ? "lg:grid-cols-6" : "lg:grid-cols-1",
        )}
      >
        {visibleDays.map((dayName, i) => {
          const list = byDay[i];
          return (
            <div
              key={dayName}
              className={cn("flex-col gap-2", list.length ? "flex" : "hidden lg:flex")}
            >
              <h3 className="font-display text-sm tracking-wide text-craie lg:text-center">
                {dayName}
              </h3>
              {list.length === 0 ? (
                <p className="hidden text-center text-xs text-craie-muted lg:block">—</p>
              ) : (
                <div
                  className={cn(
                    "flex flex-col gap-2",
                    jour !== "Tous" && "lg:grid lg:grid-cols-3",
                  )}
                >
                  {list.map((c) => (
                    <button
                      key={`${c.day}-${c.start}-${c.activite}`}
                      onClick={() => setActive(c)}
                      className={cn(
                        "group flex flex-col gap-1 rounded-2xl border p-3 text-left transition-colors",
                        tintFor(c.activite).slot,
                      )}
                    >
                      <span className="flex items-center gap-1 font-condensed text-[12px] font-semibold tracking-wide text-craie">
                        <Clock className="h-3 w-3" strokeWidth={2} />
                        {c.start} – {c.end}
                      </span>
                      <span className="font-display text-[13px] leading-tight text-craie">
                        {nameFor(c.activite)}
                      </span>
                      <span className="text-[11px] leading-snug text-craie-soft">
                        {c.audience}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 rounded-2xl border border-noir-line bg-noir-card px-5 py-8 text-center text-sm text-craie-soft">
          Aucun créneau ne correspond à ces filtres. Essayez d&apos;élargir la recherche.
        </p>
      )}

      {/* Détail d'un créneau */}
      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-md">
          {active && (
            <div className="flex flex-col gap-4">
              <div>
                <span className={cn("pill", tintFor(active.activite).chip)}>
                  {nameFor(active.activite)}
                </span>
                <DialogTitle className="mt-2 font-display text-2xl uppercase tracking-tight text-craie">
                  {active.day} · {active.start} – {active.end}
                </DialogTitle>
                <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-craie-soft">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-or" strokeWidth={1.75} />
                    {active.lieu}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-or" strokeWidth={1.75} />
                    {active.audience}
                  </span>
                </p>
                {activeActivite && (
                  <p className="mt-3 text-sm leading-relaxed text-craie-muted">
                    {activeActivite.short}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <Button asChild className="w-full">
                  <Link href="/adhesion" onClick={() => setActive(null)}>
                    Réserver une séance d&apos;essai
                  </Link>
                </Button>
                {activeActivite && (
                  <Button asChild variant="outline" className="w-full">
                    <Link
                      href={`/activites/${activeActivite.slug}`}
                      onClick={() => setActive(null)}
                    >
                      Voir la fiche de l&apos;activité
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function FilterGroup({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-condensed text-xs font-semibold uppercase tracking-brand text-craie-muted">
        {label}
      </span>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors",
        active
          ? "border-or bg-or-tint text-or"
          : "border-noir-line text-craie-soft hover:border-or/60 hover:text-craie",
      )}
    >
      {children}
    </button>
  );
}

function Legend({ dot, label }: { dot: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className={cn("h-2.5 w-2.5 rounded-full", dot)} />
      {label}
    </span>
  );
}
