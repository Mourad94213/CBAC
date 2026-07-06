import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarPlus, Clock, Info } from "lucide-react";
import { buildMetadata, breadcrumbLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionTitle } from "@/components/site/section-title";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { FramedImage } from "@/components/site/framed-image";
import { Button } from "@/components/ui/button";
import { DevisButton } from "@/components/devis/devis-button";
import { WeeklySchedule } from "@/components/planning/weekly-schedule";
import { CalendrierMois } from "@/components/planning/mois-calendar";
import { association, hours } from "@/lib/data/site";
import { creneaux, days } from "@/lib/data/schedule";

export const metadata: Metadata = buildMetadata({
  title: "Calendrier & planning des cours",
  description:
    "Le planning hebdomadaire du CBAC à Nanterre : boxe éducative, loisir, compétition et cardio-boxe, du lundi au samedi. Plus les rendez-vous du mois — galas, stages vacances, sorties et séances découverte.",
  path: "/calendrier",
});

const lieux = Array.from(new Set(creneaux.map((c) => c.lieu)));

const reperes = [
  { valeur: `${creneaux.length}`, label: "créneaux chaque semaine" },
  { valeur: `${days.length} j/7`, label: "du lundi au samedi" },
  { valeur: `${lieux.length}`, label: "lieux d'entraînement à Nanterre" },
  { valeur: "Sam. 14h", label: "séance d'essai tous publics" },
];

export default function CalendrierPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Accueil", path: "/" },
          { name: "Calendrier", path: "/calendrier" },
        ])}
      />

      {/* ── Round 01 · Planning hebdomadaire ─────────────────── */}
      <section className="spotlight relative overflow-hidden">
        <div className="container-wide py-12 lg:py-16">
          <SectionTitle
            as="h1"
            eyebrow="Round 01 · Le planning de la semaine"
            title="Une semaine dans les gants"
            intro="Filtrez par jour ou par activité, touchez un créneau pour voir le détail — lieu, public, contenu — et réservez votre séance d'essai dans la foulée."
          />

          {/* Repères chiffrés de la semaine — nus, typo + espace */}
          <Stagger className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 lg:grid-cols-4">
            {reperes.map((r) => (
              <StaggerItem key={r.label}>
                <p className="font-condensed text-3xl font-semibold leading-none text-or">
                  {r.valeur}
                </p>
                <p className="mt-1.5 text-xs leading-snug text-craie-soft">{r.label}</p>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1}>
            <p className="mt-8 flex items-start gap-2.5 text-sm text-craie-muted">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-or" strokeWidth={1.75} />
              <span>
                Planning de la saison 2026-2027, susceptible d'évoluer à la rentrée. Les changements
                sont toujours annoncés en séance et sur{" "}
                <strong className="text-craie">{association.socials.instagram.handle}</strong>.
              </span>
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-8">
            <WeeklySchedule />
          </Reveal>
        </div>
      </section>

      {/* ── Bande première fois — or-tint, grille asymétrique ── */}
      <section className="container-wide py-16 lg:py-20">
        <Reveal>
          <div className="grid overflow-hidden rounded-4xl border border-or/20 bg-or-tint lg:grid-cols-[1.35fr_1fr]">
            <div className="flex flex-col items-start justify-center gap-4 p-8 sm:p-10">
              <span className="eyebrow">Première fois sur le ring ?</span>
              <h2 className="text-2xl sm:text-3xl">
                Le samedi à 14h, on vous passe les gants
              </h2>
              <p className="max-w-xl text-[15px] leading-relaxed text-craie-soft">
                La séance d'initiation-découverte du samedi est ouverte à toutes et à tous, sans
                matériel et sans engagement : gants et bandes sont prêtés. On échauffe, on apprend
                deux gestes, on repart avec le sourire.
              </p>
              <Button asChild size="lg" className="mt-1">
                <Link href="/adhesion">
                  Réserver ma séance d'essai
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </Link>
              </Button>
            </div>
            <FramedImage
              src="/images/cours-1.svg"
              alt="Séance d'initiation au CBAC : premiers pas gants aux poings"
              ratio="aspect-[4/3] lg:aspect-auto"
              className="rounded-none border-0 lg:min-h-full"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </Reveal>
      </section>

      <div className="ring-ropes" aria-hidden="true" />

      {/* ── Round 02 · Les rendez-vous du mois ───────────────── */}
      <section className="container-wide py-16 lg:py-20">
        <SectionTitle
          eyebrow="Round 02 · Les rendez-vous du mois"
          title="Juillet 2026, un mois qui cogne"
          intro="Galas amicaux, stages vacances, sorties boxe et séances découverte : la vie du club ne s'arrête pas aux entraînements."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.55fr_1fr] lg:items-start">
          <Reveal>
            <CalendrierMois />
          </Reveal>

          {/* Colonne latérale : image, iCal, permanences */}
          <div className="flex flex-col gap-8 lg:sticky lg:top-24">
            <Reveal delay={0.05}>
              <FramedImage
                src="/images/evenement-1.svg"
                alt="Événement du club CBAC : le public autour du ring"
                ratio="aspect-[4/3]"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-4xl border border-noir-line bg-noir-card p-6 shadow-soft sm:p-7">
                <span className="flex items-center gap-2 font-condensed text-xs font-semibold uppercase tracking-brand text-bleu-light">
                  <CalendarPlus className="h-4 w-4" strokeWidth={1.75} />
                  Le club dans votre poche
                </span>
                <h3 className="mt-2.5 text-xl">Abonnez-vous au calendrier</h3>
                <p className="mt-2 text-sm leading-relaxed text-craie-soft">
                  Ajoutez les événements du CBAC à votre agenda : chaque gala, stage ou sortie
                  apparaît automatiquement, mises à jour comprises.
                </p>
                <Button asChild variant="secondary" size="sm" className="mt-4">
                  <a href="webcal://www.cbac-boxe.fr/calendrier/cbac.ics">
                    S'abonner au flux iCal
                    <ArrowRight className="h-4 w-4" strokeWidth={2} />
                  </a>
                </Button>
                <p className="mt-3 text-xs text-craie-muted">
                  Compatible Google Agenda, Apple Calendrier et Outlook. (Lien de démonstration —
                  maquette.)
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <span className="flex items-center gap-2 font-condensed text-xs font-semibold uppercase tracking-brand text-or">
                <Clock className="h-4 w-4" strokeWidth={1.75} />
                Permanences au gymnase
              </span>
              <ul className="mt-4 flex flex-col gap-2.5">
                {hours.map((h) => (
                  <li
                    key={h.label}
                    className="flex items-baseline justify-between gap-4 border-b border-noir-line pb-2.5 text-sm last:border-0 last:pb-0"
                  >
                    <span className="text-craie-soft">{h.label}</span>
                    <span className="font-condensed font-semibold tracking-wide text-craie">
                      {h.value}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-craie-muted">
                {association.address.full} · {association.phone}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA final ─────────────────────────────────────────── */}
      <section className="container-wide pb-20 lg:pb-24">
        <Reveal>
          <div className="grain relative flex flex-col items-center gap-5 overflow-hidden rounded-5xl border border-noir-line bg-noir-surface px-8 py-14 text-center">
            <div className="spotlight absolute inset-0" aria-hidden="true" />
            <div className="relative flex flex-col items-center gap-5">
              <span className="eyebrow">Dernier round</span>
              <h2 className="max-w-2xl text-balance text-2xl sm:text-3xl">
                Un créneau vous fait de l'œil ?
              </h2>
              <p className="max-w-md text-[15px] leading-relaxed text-craie-soft">
                Venez l'essayer gratuitement : on vous accueille, on vous équipe et on ajuste
                ensemble votre programme. Structure, école ou entreprise ? On crée aussi des
                événements rien que pour vous.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/adhesion">
                    Réserver une séance d'essai
                    <ArrowRight className="h-4 w-4" strokeWidth={2} />
                  </Link>
                </Button>
                <DevisButton variant="outline" size="lg">
                  Demander un devis structure
                </DevisButton>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
