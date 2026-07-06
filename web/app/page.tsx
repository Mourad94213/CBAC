import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays, Flame, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DevisButton } from "@/components/devis/devis-button";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { SectionTitle } from "@/components/site/section-title";
import { Divider } from "@/components/site/divider";
import { ParallaxImage } from "@/components/site/parallax";
import { ImpactCounter } from "@/components/site/impact-counter";
import { Quiz } from "@/components/site/quiz";
import { TestimonialSlider } from "@/components/site/testimonial-slider";
import { ActiviteCard } from "@/components/activites/activite-card";
import { CoachCard } from "@/components/coachs/coach-card";
import { CalendrierMois } from "@/components/planning/mois-calendar";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, eventLd } from "@/lib/seo";
import { association } from "@/lib/data/site";
import { activites } from "@/lib/data/activites";
import { coachs, fondateur } from "@/lib/data/coachs";
import { eventsMois } from "@/lib/data/schedule";
import { instaPosts, partenaires, stages } from "@/lib/data/content";

export const metadata = buildMetadata({
  title: "Boxe anglaise & éducation populaire à Nanterre",
  description:
    "CBAC, club de boxe anglaise associatif à Nanterre : boxe éducative dès 6 ans, loisir, compétition, cardio-boxe, stages vacances et interventions sur mesure. Séance d’essai gratuite.",
  path: "/",
});

/** Trois portes d’entrée — jeunes & familles, structures, entreprises. */
const portes = [
  {
    name: "Jeunes & familles",
    href: "/activites",
    img: "/images/cours-2.svg",
    note: "Boxe éducative dès 6 ans, loisir ados & adultes, stages vacances.",
    alt: "Groupe de boxe éducative 6-11 ans en cercle autour du coach",
  },
  {
    name: "Structures & collectivités",
    href: "/interventions",
    img: "/images/centre-social-1.svg",
    note: "Centres sociaux, écoles, insertion : des cycles éducatifs co-construits.",
    alt: "Séance découverte de boxe dans un centre social partenaire",
  },
  {
    name: "Entreprises",
    href: "/interventions#entreprises",
    img: "/images/corporate-1.svg",
    note: "Team building aux gants : cohésion maximale, zéro coup reçu.",
    alt: "Atelier team building boxe avec une équipe d’entreprise",
  },
];

const stageOuvert = stages.find((s) => s.statut === "ouvert")!;

export default function HomePage() {
  return (
    <>
      <JsonLd data={eventLd(stageOuvert)} />

      {/* ── HERO — split asymétrique, entrée dramatique sous projecteur ── */}
      <div className="spotlight grain relative overflow-hidden">
        <section className="container-wide relative grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-20">
          <Reveal className="order-2 flex flex-col gap-6 lg:order-1">
            <span className="eyebrow">Boxe anglaise &amp; éducation populaire · Nanterre</span>
            <h1 className="text-balance text-4xl leading-[1.04] sm:text-5xl lg:text-[3.6rem]">
              La boxe anglaise comme <span className="text-or">école de vie.</span>
            </h1>
            <p className="max-w-md text-pretty text-base leading-relaxed text-craie-soft">
              {association.promise}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/adhesion">
                  Séance d’essai gratuite
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </Link>
              </Button>
              <DevisButton variant="outline" size="lg" />
            </div>
            <p className="flex items-center gap-2 text-sm text-craie-muted">
              <MapPin className="h-4 w-4 shrink-0 text-bleu-light" strokeWidth={1.75} />
              {association.address.venue}, {association.address.city} · dès 6 ans · matériel fourni
            </p>
          </Reveal>

          <Reveal delay={0.12} className="order-1 lg:order-2">
            <div className="relative">
              <ParallaxImage
                src="/images/hero-ring.svg"
                alt="Boxeur à l’entraînement sur le ring du gymnase Léo-Lagrange, sous les projecteurs"
                priority
                amount={40}
                className="aspect-[4/5] rounded-5xl border border-noir-line shadow-card sm:aspect-[5/6]"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute -bottom-6 -left-4 hidden w-44 overflow-hidden rounded-3xl border-4 border-noir shadow-lift sm:block">
                <Image
                  src="/images/transmission.svg"
                  alt="Un coach du CBAC passe le gant à un enfant — la transmission avant tout"
                  width={240}
                  height={180}
                  className="aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </Reveal>
        </section>
      </div>

      {/* ── IMPACT — les chiffres qui comptent (bande teintée bleu) ── */}
      <section className="border-y border-noir-line bg-bleu-tint/60 py-14 sm:py-16">
        <div className="container-wide">
          <h2 className="sr-only">L’impact du CBAC en chiffres</h2>
          <Stagger className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            <StaggerItem>
              <ImpactCounter value={association.impact.jeunes} suffix="+" label="Jeunes accompagnés" />
            </StaggerItem>
            <StaggerItem>
              <ImpactCounter value={association.impact.structures} label="Structures partenaires" />
            </StaggerItem>
            <StaggerItem>
              <ImpactCounter value={association.impact.annees} label="Ans d’engagement" />
            </StaggerItem>
            <StaggerItem>
              <ImpactCounter value={association.impact.seances} label="Séances par an" />
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* ── ROUND 01 — nos actions, en scroll horizontal ── */}
      <section className="py-20">
        <div className="container-wide flex flex-wrap items-end justify-between gap-4">
          <SectionTitle
            eyebrow="Round 01 · Nos actions"
            title="De la première touche au premier combat"
            intro="Six façons de mettre les gants, de la boxe éducative dès 6 ans à la compétition."
          />
          <Button asChild variant="outline" size="md" className="shrink-0">
            <Link href="/activites">Toutes les activités</Link>
          </Button>
        </div>
        <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 md:px-8 lg:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {activites.map((activite) => (
            <div key={activite.slug} className="w-[74vw] shrink-0 snap-start sm:w-[40vw] lg:w-[19.5rem]">
              <ActiviteCard activite={activite} />
            </div>
          ))}
        </div>
        <Reveal delay={0.1} className="container-wide mt-8">
          <p className="flex flex-wrap items-center gap-2 text-[15px] text-craie-soft">
            <Flame className="h-4 w-4 shrink-0 text-rouge" strokeWidth={1.75} />
            Pendant les vacances, les stages « Premiers gants » et « Ring d’été » sont ouverts aux non-adhérents.
            <Link
              href="/stages"
              className="inline-flex items-center gap-1.5 font-condensed text-sm font-semibold uppercase tracking-wide text-or transition-colors hover:text-craie"
            >
              Voir les stages
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </p>
        </Reveal>
      </section>

      {/* ── ROUND 02 — trois portes d'entrée ── */}
      <section className="container-wide pb-20">
        <SectionTitle
          eyebrow="Round 02 · Pour qui ?"
          title="Trois portes d’entrée sur le ring"
          intro="Que vous veniez seul·e, en famille, avec votre structure ou votre équipe : il y a un gant à votre taille."
          align="center"
          className="items-center text-center"
        />
        <Stagger className="mt-10 grid gap-5 md:grid-cols-3">
          {portes.map((porte) => (
            <StaggerItem key={porte.href}>
              <Link href={porte.href} className="group relative block aspect-[4/5] overflow-hidden rounded-4xl border border-noir-line">
                <Image
                  src={porte.img}
                  alt={porte.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir-deep/90 via-noir-deep/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-2xl text-craie">{porte.name}</h3>
                  <p className="mt-1 text-sm text-craie-soft">{porte.note}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 font-condensed text-sm font-semibold uppercase tracking-wide text-or">
                    Découvrir
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <div className="ring-ropes" aria-hidden />

      {/* ── ROUND 03 — quiz d'orientation (bande teintée or) ── */}
      <section className="border-y border-noir-line bg-or-tint/40 py-20">
        <div className="container-wide">
          <SectionTitle
            eyebrow="Round 03 · Quel programme ?"
            title="Trouvez votre programme en quatre questions"
            intro="Enfant, ado, adulte, structure ou entreprise : répondez en trente secondes, on vous oriente vers le bon créneau — sans détour."
            align="center"
            className="items-center text-center"
          />
          <Reveal delay={0.1} className="mt-10">
            <Quiz />
          </Reveal>
        </div>
      </section>

      {/* ── ROUND 04 — le coin des coachs ── */}
      <section className="container-wide py-20">
        <SectionTitle
          eyebrow="Round 04 · Le coin des coachs"
          title="Des coachs diplômés, exigeants et bienveillants"
          intro="BPJEPS, DEJEPS, brevets fédéraux : les diplômes sont affichés au gymnase — et ici. Parce que la confiance, ça se prouve."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_2fr]">
          <Reveal className="group relative overflow-hidden rounded-4xl border border-noir-line">
            <Image
              src={fondateur.image}
              alt={`${fondateur.name}, fondateur et président du CBAC`}
              width={720}
              height={900}
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir-deep/90 via-noir-deep/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <span className="pill bg-or text-noir-deep">Fondateur &amp; président</span>
              <h3 className="mt-2 font-display text-2xl text-craie">{fondateur.name}</h3>
              <p className="mt-1 max-w-sm text-sm text-craie-soft">
                Ancien compétiteur amateur, prévôt fédéral, il a fondé le CBAC il y a douze ans.
                Premier arrivé au gymnase, dernier à éteindre les projecteurs.
              </p>
            </div>
          </Reveal>
          <Stagger className="grid gap-5 sm:grid-cols-3">
            {coachs.filter((c) => !c.founder).map((coach) => (
              <StaggerItem key={coach.slug} className="h-full">
                <CoachCard coach={coach} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
        <Reveal delay={0.1} className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild variant="outline" size="md">
            <Link href="/coachs">Rencontrer toute l’équipe</Link>
          </Button>
          <Button asChild variant="ghost" size="md">
            <Link href="/association">Découvrir l’association</Link>
          </Button>
        </Reveal>
      </section>

      {/* ── ROUND 05 — témoignages + partenaires ── */}
      <section className="container-wide py-20">
        <SectionTitle
          eyebrow="Round 05 · Ils en parlent"
          title="Sur le ring, la confiance se gagne"
          intro="Parents, adhérents, structures partenaires : ils en parlent mieux que nous."
        />
        <div className="mt-12">
          <TestimonialSlider />
        </div>
        <Reveal delay={0.1} className="mt-16 flex flex-col items-center gap-5 text-center">
          <p className="font-condensed text-sm font-semibold uppercase tracking-brand text-craie-muted">
            Ils nous font confiance
          </p>
          <ul className="flex flex-wrap justify-center gap-2">
            {partenaires.map((p) => (
              <li
                key={p.name}
                className="rounded-full border border-noir-line bg-noir-card/70 px-4 py-2 text-sm text-craie-soft transition-colors duration-300 hover:border-or hover:text-craie"
              >
                {p.name}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ── ROUND 06 — la vie du club : calendrier du mois + coulisses Instagram ── */}
      <section className="container-wide py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle
            eyebrow="Round 06 · La vie du club"
            title="Gala, stages, coulisses : le club vit toute l’année"
            intro="Les rendez-vous du mois — et les dernières images d’entre les cordes."
          />
          <Button asChild variant="outline" size="md" className="shrink-0">
            <Link href="/calendrier">
              <CalendarDays className="h-4 w-4" strokeWidth={1.75} />
              Tout le calendrier
            </Link>
          </Button>
        </div>
        <Reveal delay={0.1} className="mt-10">
          <CalendrierMois events={eventsMois.slice(0, 3)} />
        </Reveal>
        <Stagger className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {instaPosts.map((post) => (
            <StaggerItem key={post.image}>
              <a
                href={association.socials.instagram.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Publication Instagram : ${post.caption}`}
                className="group relative block aspect-square overflow-hidden rounded-3xl border border-noir-line bg-noir-card"
              >
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                />
              </a>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.1} className="mt-6">
          <a
            href={association.socials.instagram.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-condensed text-sm font-semibold uppercase tracking-wide text-or transition-colors hover:text-craie"
          >
            Suivre {association.socials.instagram.handle}
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </a>
        </Reveal>
      </section>

      <div className="ring-ropes" aria-hidden />

      {/* ── ROUND FINAL — CTA rouge grain ── */}
      <section className="container-wide py-20 lg:pb-24">
        <div className="grain relative overflow-hidden rounded-5xl bg-gradient-to-br from-rouge to-rouge-dark px-8 py-16 text-center shadow-glow-rouge sm:py-20">
          <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center gap-6">
            <Divider className="w-40 opacity-60" picto={false} />
            <span className="font-condensed text-xs font-semibold uppercase tracking-brand text-craie">
              Round final · À vous de jouer
            </span>
            <h2 className="text-balance text-3xl leading-tight sm:text-4xl">
              Prêt·e à enfiler les gants&nbsp;?
            </h2>
            <p className="text-pretty text-craie">
              Séance d’essai gratuite pour les particuliers, devis sous 48h pour les structures et
              les entreprises. Le ring vous attend.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <DevisButton
                variant="secondary"
                size="lg"
                className="bg-craie text-rouge hover:bg-craie/90"
              >
                Demander un devis
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </DevisButton>
              <Button asChild variant="ghost" size="lg" className="ring-1 ring-craie/40 hover:bg-craie/10">
                <Link href="/adhesion">Adhérer au club</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
