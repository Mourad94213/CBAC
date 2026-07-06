import type { Metadata } from "next";
import {
  ArrowRight,
  Building2,
  Clock,
  Compass,
  Download,
  GraduationCap,
  HeartHandshake,
  Medal,
  Quote,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { buildMetadata, breadcrumbLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionTitle } from "@/components/site/section-title";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { ParallaxImage } from "@/components/site/parallax";
import { FramedImage } from "@/components/site/framed-image";
import { ExitPopup } from "@/components/site/exit-popup";
import { Button } from "@/components/ui/button";
import { DevisButton } from "@/components/devis/devis-button";
import { cibles, type Cible } from "@/lib/data/publics";
import { testimonials } from "@/lib/data/content";
import { association } from "@/lib/data/site";

export const metadata: Metadata = buildMetadata({
  title: "Interventions sur mesure : entreprises, écoles & structures sociales",
  description:
    "Team building boxe, cycles éducatifs en centre social, boxe éducative à l'école, programmes insertion & PJJ : le CBAC construit votre intervention sur mesure à Nanterre et dans les Hauts-de-Seine. Devis gratuit sous 48h.",
  path: "/interventions",
  image: "/images/corporate-1.svg",
});

/* Habillage éditorial propre à chaque cible (icône, titre de section, CTA). */
const cibleExtras: Record<
  Cible["key"],
  { icon: typeof Building2; title: string; cta: string }
> = {
  entreprises: {
    icon: Building2,
    title: "Soudez vos équipes, gants aux poings",
    cta: "Devis team building",
  },
  "centres-sociaux": {
    icon: HeartHandshake,
    title: "Des cycles qui accrochent vos jeunes",
    cta: "Devis cycle éducatif",
  },
  ecoles: {
    icon: GraduationCap,
    title: "La boxe éducative, clé en main pour l'école",
    cta: "Devis intervention scolaire",
  },
  insertion: {
    icon: Compass,
    title: "Un cadre accepté, un projet documenté",
    cta: "Devis cycle insertion",
  },
};

/* Teintes de bande alternées entre les sections cibles. */
const cibleBands = ["", "border-y border-noir-line bg-bleu-tint/50", "", "border-y border-noir-line bg-or-tint/40"];

const reassurances = [
  { icon: Clock, title: "Réponse sous 48h", text: "Une proposition chiffrée et un programme détaillé, sans relance." },
  { icon: ShieldCheck, title: "Devis gratuit, sans engagement", text: "Vous décidez ensuite, à votre rythme. Aucune surprise." },
  { icon: Medal, title: "Encadrement diplômé d'État", text: "BPJEPS, DEJEPS, brevets fédéraux et PSC1 — diplômes affichés." },
  { icon: HeartHandshake, title: "Un impact qui compte double", text: "Chaque intervention finance l'accès à la boxe des jeunes de Nanterre." },
];

const etapes = [
  {
    num: "01",
    title: "Vous nous dites tout",
    text: "Configurateur en ligne en 4 étapes ou simple coup de fil : cible, objectifs, effectif, période. Deux minutes suffisent.",
  },
  {
    num: "02",
    title: "Proposition sous 48h",
    text: "Devis gratuit, programme séance par séance et coach dédié. Vous ajustez avec nous jusqu'à ce que ce soit exactement votre projet.",
  },
  {
    num: "03",
    title: "On monte sur le ring",
    text: "Dans vos locaux ou dans un gymnase mis à disposition : matériel fourni et désinfecté, encadrement diplômé, cadre posé dès la première minute.",
  },
  {
    num: "04",
    title: "Bilan écrit & suite",
    text: "Chaque cycle se conclut par un bilan transmis pour vos financeurs — et une passerelle vers l'association pour celles et ceux qui veulent continuer.",
  },
];

export default function InterventionsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Accueil", path: "/" },
          { name: "Interventions", path: "/interventions" },
        ])}
      />

      {/* ── HERO conversion — split asymétrique sous projecteur ── */}
      <section className="spotlight relative overflow-hidden">
        <div className="container-wide grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-20">
          <Reveal className="order-2 flex flex-col gap-6 lg:order-1">
            <span className="eyebrow">Interventions sur mesure · Entreprises & structures</span>
            <h1 className="text-balance text-4xl leading-[1.05] sm:text-5xl lg:text-[3.4rem]">
              Faites entrer la boxe <span className="text-or">dans votre structure</span>
            </h1>
            <p className="max-w-lg text-pretty text-base leading-relaxed text-craie-soft">
              Team building d'entreprise, cycle éducatif en centre social, boxe éducative à l'école,
              programme insertion ou PJJ : depuis {association.impact.annees} ans, le CBAC construit
              des interventions qui marquent — zéro coup reçu, un cadre clair, et un bilan écrit à la fin.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <DevisButton size="lg">
                Créer mon intervention
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </DevisButton>
              <Button asChild variant="outline" size="lg">
                <a href="/docs/plaquette-entreprises-cbac.pdf" download>
                  <Download className="h-4 w-4" strokeWidth={1.75} />
                  La plaquette (PDF)
                </a>
              </Button>
            </div>
            <p className="text-sm text-craie-muted">
              Devis gratuit sous 48h · {association.impact.structures} structures partenaires nous font déjà confiance
            </p>
          </Reveal>

          <Reveal delay={0.12} className="order-1 lg:order-2">
            <div className="relative">
              <ParallaxImage
                src="/images/corporate-2.svg"
                alt="Atelier team building boxe : collaborateurs aux pattes d'ours sous les projecteurs"
                priority
                amount={36}
                className="aspect-[16/10] rounded-5xl border border-noir-line shadow-card"
                sizes="(max-width: 1024px) 100vw, 46vw"
              />
              <div className="absolute -right-3 top-6 rounded-2xl border border-noir-line bg-noir-deep/90 px-4 py-3 shadow-lift backdrop-blur">
                <p className="font-condensed text-3xl font-semibold leading-none text-or">
                  {association.impact.structures} structures
                </p>
                <p className="mt-1 font-display text-xs uppercase tracking-wide text-craie">
                  déjà dans notre coin
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Ancres : à chaque cible son round + garanties ── */}
      <section className="container-wide pb-14">
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cibles.map((c, i) => {
            const Icon = cibleExtras[c.key].icon;
            return (
              <StaggerItem key={c.key} className="h-full">
                <a
                  href={`#${c.anchor}`}
                  className="group flex h-full flex-col gap-3 rounded-4xl border border-noir-line bg-noir-card p-6 shadow-soft transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-or/50 hover:shadow-glow-or"
                >
                  <span className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-bleu-tint text-bleu-light">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <span className="font-condensed text-sm font-semibold uppercase tracking-brand text-craie-muted">
                      Round 0{i + 1}
                    </span>
                  </span>
                  <p className="font-display text-lg uppercase leading-snug tracking-tight text-craie">{c.name}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 font-condensed text-sm font-semibold uppercase tracking-[0.12em] text-or">
                    Voir la section
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
                  </span>
                </a>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Réassurances — quatre garanties, présentées nues sous les ancres. */}
        <Stagger className="mt-12 grid gap-8 border-t border-noir-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {reassurances.map((r) => (
            <StaggerItem key={r.title}>
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-or-tint text-or">
                  <r.icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="font-display text-sm tracking-normal text-craie">{r.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-craie-soft">{r.text}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <div className="ring-ropes" aria-hidden />

      {/* ── Une section par cible — grilles asymétriques alternées ── */}
      {cibles.map((c, i) => {
        const extra = cibleExtras[c.key];
        const reversed = i % 2 === 1;
        return (
          <section key={c.key} id={c.anchor} className={cibleBands[i]}>
            <div className="container-wide grid items-start gap-10 py-16 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:py-24">
              {/* Visuel + citation persona */}
              <div className={reversed ? "lg:order-2" : ""}>
                <Reveal>
                  <FramedImage
                    src={c.image}
                    alt={`${c.name} — intervention boxe du CBAC`}
                    ratio="aspect-[16/10]"
                    className="shadow-card"
                    sizes="(max-width: 1024px) 100vw, 46vw"
                  />
                </Reveal>
                <Reveal delay={0.12} className="relative z-10 mx-4 -mt-8 sm:mx-8">
                  <blockquote className="rounded-4xl border border-noir-line bg-noir-deep/95 p-6 shadow-lift backdrop-blur sm:p-7">
                    <Quote className="h-7 w-7 text-or/60" strokeWidth={1.5} />
                    <p className="mt-3 text-[15px] font-medium leading-relaxed text-craie sm:text-base">
                      {c.persona}
                    </p>
                    <footer className="mt-3 font-condensed text-xs font-semibold uppercase tracking-brand text-craie-muted">
                      Ce qu'on entend sur le terrain — et notre réponse est juste à côté
                    </footer>
                  </blockquote>
                </Reveal>
              </div>

              {/* Argumentaire */}
              <div className={reversed ? "lg:order-1" : ""}>
                <SectionTitle
                  eyebrow={`Round 0${i + 1} · ${c.name}`}
                  title={extra.title}
                  intro={c.pitch}
                />

                <Stagger className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                  {c.points.map((point) => (
                    <StaggerItem key={point}>
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-bleu-tint text-bleu-light">
                          <ShieldCheck className="h-3.5 w-3.5" strokeWidth={2} />
                        </span>
                        <p className="text-sm leading-relaxed text-craie-soft">{point}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>

                <Reveal delay={0.1} className="mt-8 border-t border-noir-line pt-6">
                  <h3 className="flex items-center gap-2 font-display text-sm tracking-normal text-or">
                    <Sparkles className="h-4 w-4" strokeWidth={1.75} />
                    Exemples de séances déjà réalisées
                  </h3>
                  <ul className="mt-4 flex flex-col gap-3">
                    {c.exemples.map((ex) => (
                      <li key={ex} className="flex items-start gap-3 text-sm leading-relaxed text-craie-soft">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rouge" aria-hidden />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal delay={0.15} className="mt-8">
                  <DevisButton cible={c.key}>
                    {extra.cta}
                    <ArrowRight className="h-4 w-4" strokeWidth={2} />
                  </DevisButton>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      <div className="ring-ropes" aria-hidden />

      {/* ── Témoignages structures — citations nues, sans cartes ── */}
      <section className="container-wide py-20 lg:py-24">
        <SectionTitle
          eyebrow="Round 05 · Ils témoignent"
          title="Ce que les structures en disent"
          intro="DRH, direction de centre social, accueil de loisirs, éducateur PJJ : les mêmes questions que vous au départ — et leurs réponses après un cycle avec nous."
        />
        <Stagger className="mt-12 grid gap-x-14 gap-y-12 sm:grid-cols-2">
          {testimonials.slice(0, 4).map((t) => (
            <StaggerItem key={t.author} className="h-full">
              <figure className="flex h-full flex-col gap-4 border-t border-noir-line pt-6">
                <Quote className="h-7 w-7 text-or/50" strokeWidth={1.5} />
                <blockquote className="text-[15px] leading-relaxed text-craie">
                  «&nbsp;{t.quote}&nbsp;»
                </blockquote>
                <figcaption className="mt-auto text-sm text-craie-soft">
                  <span className="font-semibold text-craie">{t.author}</span> — {t.role}
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ── Round final — comment ça marche + devis + PDF, fusionnés ── */}
      <section className="container-wide pb-24">
        <SectionTitle
          eyebrow="Round 06 · Comment ça marche"
          title="De l'idée au premier coup de gong"
          intro="Un parcours balisé en quatre temps : vous savez toujours où vous en êtes, et vous ne signez rien avant d'être convaincu·e."
          align="center"
        />
        <Stagger className="mx-auto mt-12 grid max-w-5xl gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {etapes.map((etape) => (
            <StaggerItem key={etape.num}>
              <article className="flex flex-col gap-3 border-t border-noir-line pt-5">
                <span className="font-condensed text-5xl font-semibold leading-none text-or/70" aria-hidden>
                  {etape.num}
                </span>
                <h3 className="font-display text-lg leading-snug text-craie">{etape.title}</h3>
                <p className="text-sm leading-relaxed text-craie-soft">{etape.text}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-16">
          <div className="grain relative overflow-hidden rounded-5xl bg-gradient-to-br from-rouge to-rouge-dark px-8 py-16 text-center shadow-glow-rouge sm:py-20">
            <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center gap-6">
              <span className="font-condensed text-sm font-semibold uppercase tracking-wide2 text-craie">
                À vous de jouer
              </span>
              <h2 className="text-balance text-3xl leading-tight text-craie sm:text-4xl">
                Votre intervention démarre ici
              </h2>
              <p className="text-pretty text-[15px] leading-relaxed text-craie">
                Quatre étapes, deux minutes, zéro engagement : décrivez votre projet et recevez
                une proposition sur mesure sous 48h. Le reste, on s'en occupe.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <DevisButton size="lg" className="bg-craie text-rouge shadow-lift hover:bg-craie/90 hover:shadow-lift">
                  Demander un devis
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </DevisButton>
                <Button asChild variant="ghost" size="lg" className="text-craie ring-1 ring-craie/40 hover:bg-craie/10">
                  <a href={association.phoneHref}>Appeler {association.phone}</a>
                </Button>
              </div>
              <p className="text-sm text-craie/90">
                De quoi convaincre votre direction :{" "}
                <a
                  href="/docs/plaquette-entreprises-cbac.pdf"
                  download
                  className="link-underline inline-flex items-center gap-1 font-semibold text-craie"
                >
                  <Download className="h-3.5 w-3.5" strokeWidth={2} />
                  la plaquette
                </a>{" "}
                et{" "}
                <a
                  href="/docs/projet-pedagogique-cbac.pdf"
                  download
                  className="link-underline inline-flex items-center gap-1 font-semibold text-craie"
                >
                  <Download className="h-3.5 w-3.5" strokeWidth={2} />
                  le projet pédagogique
                </a>{" "}
                (PDF), à glisser dans votre dossier de financement.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Pop-up d'intention de sortie : propose la plaquette PDF (une fois par session). */}
      <ExitPopup />
    </>
  );
}
