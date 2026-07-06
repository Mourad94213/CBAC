import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarPlus, MapPin, Phone } from "lucide-react";
import { buildMetadata, breadcrumbLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionTitle } from "@/components/site/section-title";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { FramedImage } from "@/components/site/framed-image";
import { Button } from "@/components/ui/button";
import { DevisButton } from "@/components/devis/devis-button";
import { CalendrierMois } from "@/components/planning/mois-calendar";
import { association } from "@/lib/data/site";
import { eventsMois } from "@/lib/data/schedule";

export const metadata: Metadata = buildMetadata({
  title: "Calendrier du mois — où nous trouver",
  description:
    "Les lieux et événements du CBAC sur le mois à venir : galas amicaux, stages vacances, séances d'initiation et sorties boxe, dans les gymnases, foyers et centres sociaux de Nanterre et des Hauts-de-Seine.",
  path: "/calendrier",
});

const lieux = Array.from(new Set(eventsMois.map((e) => e.lieu)));

const reperes = [
  { valeur: `${eventsMois.length}`, label: "rendez-vous ce mois-ci" },
  { valeur: `${lieux.length}`, label: "lieux différents — on se déplace" },
  { valeur: "2", label: "stages vacances cet été" },
  { valeur: "0 €", label: "la première initiation est offerte" },
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

      {/* ── Le calendrier du mois : les lieux avant tout ─────── */}
      <section className="spotlight relative overflow-hidden">
        <div className="container-wide py-12 lg:py-16">
          <SectionTitle
            as="h1"
            eyebrow="Le calendrier du mois"
            title="Où nous trouver en juillet"
            intro="Pas de salle attitrée, pas de planning hebdo : chaque mois, l'association publie ici les lieux et événements où la croiser — gymnases mis à disposition, foyers, centres sociaux, salles municipales."
          />

          {/* Repères chiffrés du mois — nus, typo + espace */}
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
        </div>
      </section>

      {/* ── Événements du mois + colonne latérale ─────────────── */}
      <section className="container-wide py-12 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[1.55fr_1fr] lg:items-start">
          <Reveal>
            <CalendrierMois />
            <p className="mt-4 flex items-start gap-2.5 text-sm text-craie-muted">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-or" strokeWidth={1.75} />
              <span>
                Les lieux sont confirmés au fil du mois, selon les disponibilités des salles.
                Les changements sont toujours annoncés sur{" "}
                <strong className="text-craie">{association.socials.instagram.handle}</strong>.
              </span>
            </p>
          </Reveal>

          {/* Colonne latérale : image, iCal, contact */}
          <div className="flex flex-col gap-8 lg:sticky lg:top-24">
            <Reveal delay={0.05}>
              <FramedImage
                src="/images/evenement-1.svg"
                alt="Événement de l'association CBAC : le public autour du ring"
                ratio="aspect-[4/3]"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-4xl border border-noir-line bg-noir-card p-6 shadow-soft sm:p-7">
                <span className="flex items-center gap-2 font-condensed text-xs font-semibold uppercase tracking-brand text-bleu-light">
                  <CalendarPlus className="h-4 w-4" strokeWidth={1.75} />
                  L&apos;asso dans votre poche
                </span>
                <h3 className="mt-2.5 text-xl">Abonnez-vous au calendrier</h3>
                <p className="mt-2 text-sm leading-relaxed text-craie-soft">
                  Ajoutez les événements du CBAC à votre agenda : chaque gala, stage ou sortie
                  apparaît automatiquement, lieu compris, mises à jour incluses.
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
              <div className="rounded-4xl border border-noir-line bg-noir-card p-6 shadow-soft sm:p-7">
                <span className="flex items-center gap-2 font-condensed text-xs font-semibold uppercase tracking-brand text-or">
                  <Phone className="h-4 w-4" strokeWidth={1.75} />
                  Un doute sur un lieu ou un horaire ?
                </span>
                <p className="mt-3 text-sm leading-relaxed text-craie-soft">
                  Appelez-nous au{" "}
                  <a href={association.phoneHref} className="link-underline font-semibold text-craie">
                    {association.phone}
                  </a>{" "}
                  (permanence du lundi au vendredi, 9h30 — 18h) : on vous confirme le rendez-vous
                  et on vous dit quoi apporter — en général, juste une tenue de sport.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="ring-ropes" aria-hidden="true" />

      {/* ── CTA final ─────────────────────────────────────────── */}
      <section className="container-wide py-16 lg:py-20">
        <Reveal>
          <div className="grain relative flex flex-col items-center gap-5 overflow-hidden rounded-5xl border border-noir-line bg-noir-surface px-8 py-14 text-center">
            <div className="spotlight absolute inset-0" aria-hidden="true" />
            <div className="relative flex flex-col items-center gap-5">
              <span className="eyebrow">Dernier round</span>
              <h2 className="max-w-2xl text-balance text-2xl sm:text-3xl">
                Un rendez-vous vous fait de l'œil ?
              </h2>
              <p className="max-w-md text-[15px] leading-relaxed text-craie-soft">
                Venez comme vous êtes : on vous accueille, on vous équipe, on vous explique tout.
                Et si vous voulez que le prochain lieu soit le vôtre — structure, école,
                entreprise —, on organise ça ensemble.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/adhesion">
                    Participer à une initiation
                    <ArrowRight className="h-4 w-4" strokeWidth={2} />
                  </Link>
                </Button>
                <DevisButton variant="outline" size="lg">
                  Accueillir le CBAC chez vous
                </DevisButton>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
