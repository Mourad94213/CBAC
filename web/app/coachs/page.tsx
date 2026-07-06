import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, HeartHandshake, MessageCircle, Users } from "lucide-react";
import { buildMetadata, breadcrumbLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionTitle } from "@/components/site/section-title";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CoachCard } from "@/components/coachs/coach-card";
import { DevisButton } from "@/components/devis/devis-button";
import { coachs, fondateur } from "@/lib/data/coachs";
import { association } from "@/lib/data/site";

export const metadata: Metadata = buildMetadata({
  title: "L'équipe",
  description:
    "L'équipe du CBAC : Soungui Gomis, président fondateur, entouré de jeunes coachs issus de la boxe amateur. Une équipe de bénévoles motivés, présentée à chaque structure avant l'intervention.",
  path: "/coachs",
});

const equipe = coachs.filter((c) => !c.founder);

/* Ce qui caractérise vraiment l'encadrement CBAC — sans rien inventer. */
const engagements = [
  {
    icon: Users,
    title: "Une équipe de bénévoles motivés",
    text: "L'association s'appuie sur les compétences et les valeurs portées par son équipe de bénévoles — c'est le socle du projet associatif.",
  },
  {
    icon: MessageCircle,
    title: "On boxe, et on discute",
    text: "L'interaction et la discussion font partie de chaque séance : c'est par l'échange que passent le lien social et la transmission des valeurs.",
  },
  {
    icon: HeartHandshake,
    title: "Présentée avant chaque intervention",
    text: "L'équipe encadrante est présentée à chaque structure avant l'intervention — vous savez qui vient, et comment on travaille.",
  },
];

export default function CoachsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Accueil", path: "/" },
          { name: "L'équipe", path: "/coachs" },
        ])}
      />

      {/* Hero éditorial */}
      <section className="spotlight container-wide py-12 lg:py-16">
        <SectionTitle
          as="h1"
          eyebrow="L'équipe du ring"
          title="L'équipe"
          intro="Autour de son président fondateur, le CBAC s'appuie sur de jeunes coachs issus de la boxe amateur — une équipe de bénévoles motivés, avec une même conviction : la boxe anglaise se transmet avec exigence et bienveillance."
        />
      </section>

      {/* Round 01 — le fondateur à l'honneur */}
      <section className="container-wide">
        <Reveal className="relative overflow-hidden rounded-5xl border border-noir-line bg-bleu-tint p-6 sm:p-8 lg:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[5fr_7fr] lg:gap-14">
            <div className="relative aspect-[4/5] overflow-hidden rounded-4xl border border-noir-line bg-noir-surface shadow-card">
              <Image
                src={fondateur.image}
                alt={`${fondateur.name}, président fondateur du CBAC`}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
                className="object-cover"
              />
              <span className="pill absolute left-4 top-4 bg-or text-noir-deep">Fondateur</span>
            </div>

            <div className="flex flex-col items-start gap-4">
              <span className="eyebrow">Round 01 · Le président fondateur</span>
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
            </div>
          </div>
        </Reveal>
      </section>

      <div className="ring-ropes my-16 lg:my-20" aria-hidden />

      {/* Round 02 — les coachs */}
      <section className="container-wide">
        <SectionTitle
          eyebrow="Round 02 · Les coachs"
          title="Deux jeunes boxeurs aux côtés de Soungui"
          intro="Issus de la boxe amateur, ils animent les temps forts de l'association — et connaissent le ring de l'intérieur."
        />
        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:max-w-3xl">
          {equipe.map((coach) => (
            <StaggerItem key={coach.slug} className="h-full">
              <CoachCard coach={coach} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Round 03 — nos engagements */}
      <section className="mt-20 bg-noir-surface py-20 lg:mt-24 lg:py-24">
        <div className="container-wide">
          <SectionTitle
            eyebrow="Round 03 · Notre façon de faire"
            title="Un cadre exigeant, un vrai temps d'échange"
            intro="La confiance des structures qui nous accueillent se gagne séance après séance. Voici comment l'équipe travaille."
          />

          <Stagger className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-3">
            {engagements.map((g) => (
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
        </div>
      </section>

      {/* CTA final */}
      <section className="container-wide py-20 lg:py-24">
        <Reveal className="relative overflow-hidden rounded-5xl border border-noir-line bg-noir-card px-8 py-14 text-center grain spotlight">
          <div className="relative flex flex-col items-center gap-5">
            <span className="eyebrow">Dernier round</span>
            <h2 className="max-w-2xl text-balance text-2xl sm:text-3xl">
              Venez les rencontrer sur une de nos actions
            </h2>
            <p className="max-w-md text-[15px] leading-relaxed text-craie-soft">
              Le meilleur moyen de se faire une idée, c’est d’enfiler les gants — et de rester
              discuter après la séance.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/calendrier">
                  Voir les prochains rendez-vous
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
