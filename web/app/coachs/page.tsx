import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GraduationCap, HeartPulse, ShieldCheck, Users } from "lucide-react";
import { buildMetadata, breadcrumbLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionTitle } from "@/components/site/section-title";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CoachCard } from "@/components/coachs/coach-card";
import { DevisButton } from "@/components/devis/devis-button";
import { coachs, fondateur } from "@/lib/data/coachs";
import { association } from "@/lib/data/site";

export const metadata: Metadata = buildMetadata({
  title: "Vos coachs",
  description:
    "Quatre coachs diplômés et engagés, dont le fondateur Soungui Gomis, encadrent les entraînements du CBAC à Nanterre : boxe éducative, loisir, compétition et cardio-boxe.",
  path: "/coachs",
});

const equipe = coachs.filter((c) => !c.founder);

const garanties = [
  {
    icon: GraduationCap,
    title: "Diplômes d'État et fédéraux",
    text: "BPJEPS, DEJEPS, brevets de moniteur fédéral : chaque coach est diplômé pour la discipline qu'il encadre, et poursuit sa formation continue auprès de la Fédération française de boxe.",
  },
  {
    icon: HeartPulse,
    title: "Premiers secours pour tous",
    text: "Toute l'équipe est titulaire du PSC1. Une trousse de secours complète et un défibrillateur sont disponibles au gymnase, et chaque coach connaît les protocoles d'urgence.",
  },
  {
    icon: ShieldCheck,
    title: "Matériel vérifié, contact maîtrisé",
    text: "Casques, gants et protège-dents adaptés à chaque gabarit, contrôlés à chaque séance. Chez les enfants, la boxe éducative interdit tout coup porté : on touche, on ne frappe pas.",
  },
  {
    icon: Users,
    title: "Effectifs limités",
    text: "Seize pratiquants maximum par créneau : chacun est vu, corrigé et encouragé. Les groupes sont constitués par âge et par niveau, jamais au hasard.",
  },
];

export default function CoachsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Accueil", path: "/" },
          { name: "Coachs", path: "/coachs" },
        ])}
      />

      {/* Hero éditorial */}
      <section className="spotlight container-wide py-12 lg:py-16">
        <SectionTitle
          as="h1"
          eyebrow="L'équipe du ring"
          title="Vos coachs"
          intro="Quatre coachs diplômés, quatre parcours différents, une même conviction : la boxe anglaise se transmet avec exigence et bienveillance — jamais l'une sans l'autre."
        />
      </section>

      {/* Round 01 — le fondateur à l'honneur */}
      <section className="container-wide">
        <Reveal className="relative overflow-hidden rounded-5xl border border-noir-line bg-bleu-tint p-6 sm:p-8 lg:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[5fr_7fr] lg:gap-14">
            <div className="relative aspect-[4/5] overflow-hidden rounded-4xl border border-noir-line bg-noir-surface shadow-card">
              <Image
                src={fondateur.image}
                alt={`${fondateur.name}, fondateur et entraîneur principal du CBAC`}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
                className="object-cover"
              />
              <span className="pill absolute left-4 top-4 bg-or text-noir-deep">Fondateur</span>
            </div>

            <div className="flex flex-col items-start gap-4">
              <span className="eyebrow">Round 01 · Le fondateur</span>
              <div>
                <h2 className="text-2xl leading-tight sm:text-3xl lg:text-4xl">
                  {fondateur.name}
                </h2>
                <p className="mt-1.5 font-condensed text-sm font-semibold uppercase tracking-wide text-bleu-light">
                  {fondateur.role}
                </p>
              </div>
              <p className="max-w-xl text-[15px] leading-relaxed text-craie-soft">
                {fondateur.bio}
              </p>
              <blockquote className="border-l-2 border-or pl-4 font-display text-lg leading-snug text-craie">
                « {association.promise} »
              </blockquote>
              <ul className="mt-1 flex flex-wrap gap-2">
                {fondateur.diplomes.map((d) => (
                  <li
                    key={d}
                    className="rounded-full bg-or-tint px-3 py-1.5 text-xs font-semibold leading-snug text-or"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      <div className="ring-ropes my-16 lg:my-20" aria-hidden />

      {/* Round 02 — toute l'équipe */}
      <section className="container-wide">
        <SectionTitle
          eyebrow="Round 02 · L'équipe"
          title="Trois coachs aux côtés de Soungui"
          intro="Boxe éducative, compétition, cardio-boxe : chacun encadre les groupes de sa spécialité, avec la même attention portée à chaque pratiquant — du gamin de six ans au compétiteur confirmé."
        />
        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {equipe.map((coach) => (
            <StaggerItem key={coach.slug} className="h-full">
              <CoachCard coach={coach} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Round 03 — diplômes & encadrement sécurisé */}
      <section className="mt-20 bg-noir-surface py-20 lg:mt-24 lg:py-24">
        <div className="container-wide">
          <SectionTitle
            eyebrow="Round 03 · Encadrement & sécurité"
            title="Un cadre exigeant, des gants bien attachés"
            intro="La confiance des familles et des structures partenaires se gagne séance après séance. Voici ce que nous garantissons à chaque personne qui monte sur notre ring."
          />

          <Stagger className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {garanties.map((g) => (
              <StaggerItem key={g.title} className="h-full">
                <article className="flex h-full flex-col gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-or-tint text-or">
                    <g.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="font-display text-lg text-craie">{g.title}</h3>
                  <p className="text-sm leading-relaxed text-craie-soft">{g.text}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-12 flex flex-wrap items-center gap-3 border-t border-noir-line pt-8">
            <Badge tone="craie">Honorabilité vérifiée</Badge>
            <Badge tone="bleu">Affilié FFBoxe</Badge>
            <Badge tone="or">100 % titulaires du PSC1</Badge>
          </Reveal>
        </div>
      </section>

      {/* CTA final */}
      <section className="container-wide py-20 lg:py-24">
        <Reveal className="relative overflow-hidden rounded-5xl border border-noir-line bg-noir-card px-8 py-14 text-center grain spotlight">
          <div className="relative flex flex-col items-center gap-5">
            <span className="eyebrow">Dernier round</span>
            <h2 className="max-w-2xl text-balance text-2xl sm:text-3xl">
              Venez les rencontrer au gymnase Léo-Lagrange
            </h2>
            <p className="max-w-md text-[15px] leading-relaxed text-craie-soft">
              Le meilleur moyen de choisir son coach, c'est d'enfiler les gants. Première séance
              d'essai offerte, sans engagement — on vous prête tout le matériel.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/adhesion">
                  Réserver une séance d'essai
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </Link>
              </Button>
              <DevisButton variant="outline" size="lg">
                Un projet pour votre structure ?
              </DevisButton>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
