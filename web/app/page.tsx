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
import { ActionCard } from "@/components/actions/action-card";
import { CoachCard } from "@/components/coachs/coach-card";
import { CalendrierMois } from "@/components/planning/mois-calendar";
import { buildMetadata } from "@/lib/seo";
import { association } from "@/lib/data/site";
import { actions } from "@/lib/data/actions";
import { coachs, fondateur } from "@/lib/data/coachs";
import { listPublishedUpcoming, toEventMois } from "@/lib/events/store";
import { instaPosts } from "@/lib/data/content";

export const metadata = buildMetadata({
  title: "Boxe anglaise & éducation populaire",
  description:
    "CBAC, association d'éducation populaire qui crée du lien social par la boxe anglaise : initiations et cours, stages, temps d'échanges et sorties boxe — directement dans les structures qui nous accueillent : foyers, centres sociaux, écoles, entreprises.",
  path: "/",
});

/** Trois portes d’entrée — jeunes & familles, structures, entreprises. */
const portes = [
  {
    name: "Jeunes & familles",
    href: "/actions",
    img: "/images/cours-2.svg",
    note: "Initiations ouvertes à tous, débutants bienvenus — et des stages avec nos partenaires.",
    alt: "Groupe de jeunes en cercle autour du coach pendant une initiation",
  },
  {
    name: "Foyers, structures & collectivités",
    href: "/interventions",
    img: "/images/centre-social-1.svg",
    note: "Foyers, centres sociaux, écoles, insertion : on vient chez vous, on boxe et on discute.",
    alt: "Séance découverte de boxe dans une structure d’accueil",
  },
  {
    name: "Entreprises",
    href: "/interventions#entreprises",
    img: "/images/corporate-1.svg",
    note: "Team building aux gants — et votre séance soutient nos actions sociales.",
    alt: "Atelier team building boxe avec une équipe d’entreprise",
  },
];

export default async function HomePage() {
  const eventsMois = (await listPublishedUpcoming()).map(toEventMois);
  return (
    <>
      {/* ── HERO — split asymétrique, entrée dramatique sous projecteur ── */}
      <div className="spotlight grain relative overflow-hidden">
        <section className="container-wide relative grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-20">
          <Reveal className="order-2 flex flex-col gap-6 lg:order-1">
            <span className="eyebrow">Boxe anglaise &amp; éducation populaire</span>
            <h1 className="text-balance text-4xl leading-[1.04] sm:text-5xl lg:text-[3.6rem]">
              La boxe anglaise comme <span className="text-or">école de vie.</span>
            </h1>
            <p className="max-w-md text-pretty text-base leading-relaxed text-craie-soft">
              {association.promise}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/actions">
                  Découvrir nos actions
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </Link>
              </Button>
              <DevisButton variant="outline" size="lg" />
            </div>
            <p className="flex items-center gap-2 text-sm text-craie-muted">
              <MapPin className="h-4 w-4 shrink-0 text-bleu-light" strokeWidth={1.75} />
              Pas de gymnase attitré : on intervient là où on nous accueille
            </p>
          </Reveal>

          <Reveal delay={0.12} className="order-1 lg:order-2">
            <div className="relative">
              <ParallaxImage
                src="/images/hero-echange.png"
                alt="Deux membres du CBAC en tenue de l’association, en pleine discussion"
                priority
                amount={40}
                className="aspect-[4/5] rounded-5xl border border-noir-line shadow-card sm:aspect-[5/6]"
                imgClassName="object-[center_35%]"
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
          <Stagger className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3">
            <StaggerItem>
              <ImpactCounter value={association.impact.actions} suffix="+" label="Actions menées dans des structures" />
            </StaggerItem>
            <StaggerItem>
              <ImpactCounter value={association.impact.structures} label="Structures partenaires" />
            </StaggerItem>
            <StaggerItem>
              <ImpactCounter value={association.impact.annees} label="Ans d’existence" />
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* ── ROUND 01 — nos actions, en scroll horizontal ── */}
      <section className="py-20">
        <div className="container-wide flex flex-wrap items-end justify-between gap-4">
          <SectionTitle
            eyebrow="Round 01 · Nos actions"
            title="Pas de salle à nous : on vient à vous"
            intro="Initiations et cours, stages, temps d'échanges et sorties boxe — dans les structures qui nous accueillent : foyers, centres sociaux, écoles, entreprises. Et à chaque séance, on prend le temps de discuter : c'est comme ça qu'on crée du lien."
          />
          <Button asChild variant="outline" size="md" className="shrink-0">
            <Link href="/actions">Toutes nos actions</Link>
          </Button>
        </div>
        <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 md:px-8 lg:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {actions.map((action) => (
            <div key={action.slug} className="w-[74vw] shrink-0 snap-start sm:w-[40vw] lg:w-[19.5rem]">
              <ActionCard action={action} />
            </div>
          ))}
        </div>
        <Reveal delay={0.1} className="container-wide mt-8">
          <p className="flex flex-wrap items-center gap-2 text-[15px] text-craie-soft">
            <Flame className="h-4 w-4 shrink-0 text-rouge" strokeWidth={1.75} />
            En deux ans, plus de 30 actions menées dans des structures — foyers en tête.
            <Link
              href="/interventions"
              className="inline-flex items-center gap-1.5 font-condensed text-sm font-semibold uppercase tracking-wide text-or transition-colors hover:text-craie"
            >
              Accueillir le CBAC chez vous
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
            intro="Enfant, ado, adulte, structure ou entreprise : répondez en trente secondes, on vous oriente vers la bonne action — sans détour."
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
          eyebrow="Round 04 · L'équipe"
          title="Une équipe de bénévoles motivés"
          intro="Autour de son président fondateur, l'association s'appuie sur de jeunes coachs issus de la boxe amateur. L'équipe est présentée à chaque structure avant l'intervention."
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
                Il porte le projet associatif du CBAC : créer du lien social à travers la boxe
                anglaise, dans les structures qui accueillent l&apos;association.
              </p>
            </div>
          </Reveal>
          <Stagger className="grid gap-5 sm:grid-cols-2">
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

      {/* ── ROUND 05 — la vie de l'asso : calendrier du mois + coulisses Instagram ── */}
      <section className="container-wide py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle
            eyebrow="Round 05 · La vie de l'asso"
            title="L’association vit toute l’année"
            intro="Les prochains rendez-vous — et les dernières images d’entre les cordes."
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
              Particuliers, structures, entreprises : décrivez-nous votre projet, on construit la
              suite ensemble — et on vient à vous.
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
                <Link href="/adhesion">Adhérer à l’association</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
