import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  Download,
  FileText,
  Handshake,
  HeartPulse,
  Mountain,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { buildMetadata, breadcrumbLd, faqLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionTitle } from "@/components/site/section-title";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { Divider } from "@/components/site/divider";
import { ParallaxImage } from "@/components/site/parallax";
import { DevisButton } from "@/components/devis/devis-button";
import { association } from "@/lib/data/site";
import { fondateur } from "@/lib/data/coachs";
import { faqSecurite } from "@/lib/data/content";

export const metadata: Metadata = buildMetadata({
  title: "L'association",
  description:
    "CBAC, association d'éducation populaire qui crée du lien social à travers la boxe anglaise. Nos valeurs, le mot du président Soungui Gomis, notre démarche et nos réponses à vos questions.",
  path: "/association",
});

const valeurs = [
  {
    icon: Handshake,
    title: "Le respect",
    text: "On salue son partenaire, son coach et l'arbitre. On écoute, on attend son tour, on prend soin du matériel. Ici, personne ne monte sur le ring sans avoir d'abord appris à respecter celui d'en face.",
  },
  {
    icon: HeartPulse,
    title: "La gestion des émotions",
    text: "La colère, la peur, le trac : la boxe les met à nu pour mieux apprendre à les maîtriser. Souffler, garder sa garde, encaisser sans exploser — des réflexes qui servent sur le ring comme dans la vie.",
  },
  {
    icon: Mountain,
    title: "Le dépassement de soi",
    text: "Un round de plus, une esquive enfin maîtrisée, un premier assaut devant du public : chacun repousse ses propres limites, à son rythme. La seule victoire qui compte, c'est sur soi-même.",
  },
];

/** Ce qu'on sait vraiment, en chiffres — l'histoire détaillée sera ajoutée quand l'association fournira son document. */
const reperes = [
  {
    chiffre: `${association.impact.annees} ans`,
    titre: "D'existence",
    texte:
      "Le CBAC est une jeune association d'éducation populaire, qui vise à créer du lien social à travers le sport — particulièrement la boxe anglaise.",
  },
  {
    chiffre: `${association.impact.actions}+`,
    titre: "Actions menées dans des structures",
    texte:
      "Initiations, cours et temps d'échanges, menés directement dans les structures qui accueillent l'association — foyers en tête.",
  },
  {
    chiffre: `${association.impact.structures}`,
    titre: "Structures partenaires",
    texte:
      "Des partenariats qui permettent d'élargir les actions de l'association et d'offrir une expérience plus riche à son public.",
  },
];

const documents = [
  {
    title: "Dossier de présentation CBAC",
    description:
      "Qui nous sommes, nos actions, nos publics et nos axes de développement : le dossier de présentation de l'association, à partager avec vos équipes ou vos financeurs.",
    href: "/docs/projet-pedagogique-cbac.pdf",
    meta: "PDF",
    cta: "Télécharger le dossier",
  },
  {
    title: "Plaquette entreprises & structures",
    description:
      "Nos formats d'intervention pour les structures et les entreprises, en un document à glisser dans votre prochaine réunion.",
    href: "/docs/plaquette-entreprises-cbac.pdf",
    meta: "PDF",
    cta: "Télécharger la plaquette",
  },
];

const garanties = [
  { icon: Award, text: "Une équipe de bénévoles motivés, présentée à chaque structure avant l'intervention" },
  { icon: ShieldCheck, text: "Un cadre clair posé dès la première séance : respect, écoute, dépassement de soi" },
  { icon: Sparkles, text: "Un temps d'échange et de discussion intégré à chaque séance" },
];

export default function AssociationPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Accueil", path: "/" },
            { name: "L'association", path: "/association" },
          ]),
          faqLd(faqSecurite),
        ]}
      />

      {/* HERO — split éditorial asymétrique sous projecteur */}
      <section className="spotlight">
        <div className="container-wide grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-16">
          <SectionTitle
            as="h1"
            eyebrow="L'association"
            title="Pas de salle, une école de vie"
            intro={`${association.legalName}, association d'éducation populaire née il y a ${association.impact.annees} ans, fait de la boxe anglaise un outil de lien social. Sans gymnase attitré, elle intervient là où on l'accueille — et on y apprend bien plus que le jab.`}
          />

          <Reveal delay={0.12}>
            <div className="relative">
              <ParallaxImage
                src="/images/hero-ring.svg"
                alt="Un ring de boxe sous les projecteurs, silhouette d'un boxeur"
                priority
                amount={40}
                className="aspect-[4/5] rounded-5xl border border-noir-line shadow-card sm:aspect-[5/6]"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute -right-3 top-6 rounded-2xl border border-noir-line bg-noir-card/95 px-4 py-3 shadow-lift backdrop-blur">
                <p className="font-condensed text-xs font-semibold uppercase tracking-brand text-or">déjà</p>
                <p className="font-display text-2xl leading-none text-craie">{association.impact.actions}+ actions</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HISTOIRE — image transmission à gauche, récit + jalons à droite */}
      <section className="container-wide py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
          <Reveal delay={0.1} className="relative lg:sticky lg:top-28 lg:self-start">
            <ParallaxImage
              src="/images/transmission.svg"
              alt="Un coach du CBAC passe le gant à un enfant — la transmission, cœur du projet associatif"
              amount={30}
              className="aspect-[4/3] rounded-4xl border border-noir-line shadow-card"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <figure className="mt-6 border-l-2 border-or pl-5">
              <blockquote className="font-display text-lg leading-snug text-craie">
                « {association.promise} »
              </blockquote>
              <figcaption className="mt-3 font-condensed text-xs font-semibold uppercase tracking-brand text-or">
                La promesse de l&apos;association
              </figcaption>
            </figure>
          </Reveal>

          <Reveal className="flex flex-col gap-6">
            <span className="eyebrow">Round 01 · L’association en bref</span>
            <h2 className="max-w-xl text-3xl leading-[1.08] sm:text-4xl">
              Deux ans d’éducation populaire, gants aux poings
            </h2>
            <p className="max-w-xl text-[15px] leading-relaxed text-craie-soft">
              Le CBAC vise à créer du lien social à travers le sport, particulièrement la boxe
              anglaise : en transmettant les valeurs de ce sport à travers ses actions,
              l’association construit un projet ambitieux et durable, porté par les compétences et
              les valeurs de son équipe de bénévoles motivés.
            </p>

            <ol className="mt-2 flex flex-col">
              {reperes.map((r, i) => (
                <li
                  key={r.titre}
                  className={`relative border-l border-noir-line pl-8 ${i === reperes.length - 1 ? "" : "pb-8"}`}
                >
                  <span
                    className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-or shadow-glow-or"
                    aria-hidden
                  />
                  <p className="font-condensed text-2xl font-semibold leading-none text-or">{r.chiffre}</p>
                  <h3 className="mt-2 font-display text-lg text-craie">{r.titre}</h3>
                  <p className="mt-1.5 max-w-lg text-[15px] leading-relaxed text-craie-soft">{r.texte}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <div className="ring-ropes" aria-hidden />

      {/* VALEURS — bande teintée bleu, 3 piliers */}
      <section className="bg-bleu-tint py-20">
        <div className="container-wide">
          <SectionTitle
            eyebrow="Round 02 · Nos valeurs"
            title="Ce qu'on apprend ici ne reste pas sur le ring"
            intro="Trois piliers guident chaque séance, du premier salut au dernier gong — et une quatrième valeur les traverse toutes : la transmission, des anciens vers les plus jeunes."
          />
          <Stagger className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {valeurs.map((v) => (
              <StaggerItem key={v.title}>
                <div className="flex flex-col gap-4">
                  <v.icon className="h-7 w-7 text-or" strokeWidth={1.6} />
                  <h3 className="font-display text-xl text-craie">{v.title}</h3>
                  <p className="text-[15px] leading-relaxed text-craie-soft">{v.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* MOT DU PRÉSIDENT — bande éditoriale sombre, portrait + parole */}
      <section className="spotlight bg-noir-deep py-20">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-[1fr_1.25fr]">
          <Reveal className="group relative overflow-hidden rounded-4xl border border-noir-line shadow-card">
            <Image
              src={fondateur.image}
              alt={`${fondateur.name}, président fondateur du CBAC, au bord du ring`}
              width={760}
              height={950}
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir-deep/85 via-noir-deep/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <Badge tone="or">Président fondateur</Badge>
              <h3 className="mt-2 font-display text-2xl text-craie">{fondateur.name}</h3>
              <p className="mt-0.5 text-sm text-craie-soft">{fondateur.role}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-6">
            <span className="eyebrow">Round 03 · Le mot du président</span>
            <h2 className="max-w-xl text-3xl leading-[1.08] sm:text-4xl">
              « Créer du lien social à travers le sport. »
            </h2>
            {/* Texte repris du dossier de présentation de l'association (mot du président). */}
            <div className="flex max-w-xl flex-col gap-4 text-[15px] leading-relaxed text-craie-soft">
              <p>
                « Le CBAC est une association d’éducation populaire, qui vise à créer du lien social
                à travers le sport, particulièrement la boxe anglaise. En associant et transmettant
                les valeurs de ce sport à travers ses diverses actions, le CBAC souhaite construire
                et développer un projet ambitieux et durable, en s’appuyant sur les compétences et
                les valeurs portées par son équipe de bénévoles motivés.
              </p>
              <p>
                Le respect, la gestion des émotions, le dépassement de soi et bien d’autres valeurs
                sont des facteurs de réussite dans le sport et la vie en société. Nous souhaitons
                valoriser notre public en lui créant un environnement sportif sain et convivial,
                favorisant son épanouissement par la performance et l’évolution sportive.
              </p>
              <p>
                Le CBAC est destiné à tous les publics, aussi bien expérimentés en boxe que
                débutants. Et souhaite particulièrement travailler et mettre en place des activités
                pour des structures et dispositifs privés ou publics. »
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-or" aria-hidden />
              <p className="font-condensed text-sm font-semibold uppercase tracking-brand text-or">
                {fondateur.name} · Président du CBAC
              </p>
            </div>
            <div>
              <Button asChild variant="outline" size="md">
                <Link href="/coachs">
                  Rencontrer toute l’équipe
                  <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DOCUMENTS — bande teintée or, PDF téléchargeables */}
      <section className="bg-or-tint/50 py-20">
        <div className="container-wide">
          <SectionTitle
            eyebrow="Round 04 · Nos documents"
            title="Tout est écrit, tout est téléchargeable"
            intro="Le dossier de présentation de l'association et la plaquette d'intervention sont publics. Servez-vous, partagez, imprimez."
          />
          <Stagger className="mt-10 grid gap-5 md:grid-cols-2">
            {documents.map((doc) => (
              <StaggerItem key={doc.href} className="h-full">
                <div className="flex h-full flex-col gap-5 rounded-4xl border border-noir-line bg-noir-card p-7 shadow-soft sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-bleu-tint text-bleu-light">
                      <FileText className="h-6 w-6" strokeWidth={1.6} />
                    </span>
                    <Badge tone="outline">{doc.meta}</Badge>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <h3 className="font-display text-xl text-craie">{doc.title}</h3>
                    <p className="text-[15px] leading-relaxed text-craie-soft">{doc.description}</p>
                  </div>
                  <div className="mt-auto">
                    <Button asChild variant="secondary" size="md">
                      <a href={doc.href} download>
                        <Download className="h-4 w-4" strokeWidth={1.75} />
                        {doc.cta}
                      </a>
                    </Button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <div className="ring-ropes" aria-hidden />

      {/* FAQ SÉCURITÉ — accordéon + garanties */}
      <section id="faq" className="container-wide scroll-mt-24 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
            <SectionTitle
              eyebrow="Round 05 · Vos questions"
              title="Comment ça se passe, concrètement ?"
              intro="Les réponses aux questions qu'on nous pose le plus souvent — sur le déroulé des séances, l'encadrement et les publics concernés."
            />
            <Reveal delay={0.08} className="flex flex-col gap-4">
              <p className="font-condensed text-xs font-semibold uppercase tracking-brand text-or">
                Nos engagements
              </p>
              <ul className="flex flex-col gap-3.5">
                {garanties.map((g) => (
                  <li key={g.text} className="flex items-start gap-3 text-[15px] leading-relaxed text-craie-soft">
                    <g.icon className="mt-0.5 h-5 w-5 shrink-0 text-or" strokeWidth={1.6} />
                    {g.text}
                  </li>
                ))}
              </ul>
              <Link href="/coachs" className="link-underline self-start text-sm font-semibold text-bleu-light">
                Rencontrer l’équipe
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="border-t border-noir-line">
              {faqSecurite.map((item, i) => (
                <AccordionItem key={item.q} value={`faq-${i}`}>
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* CTA final — bande rouge grain */}
      <section className="container-wide pb-24">
        <div className="grain relative overflow-hidden rounded-5xl bg-gradient-to-br from-rouge to-rouge-dark px-8 py-16 text-center shadow-glow-rouge sm:py-20">
          <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center gap-6">
            <Divider className="w-40 opacity-60" picto={false} />
            <h2 className="text-balance text-3xl leading-tight sm:text-4xl">
              Venez voir par vous-même
            </h2>
            <p className="text-pretty text-craie">
              La meilleure façon de comprendre l’esprit CBAC, c’est de venir à l’une de nos
              séances : on boxe, on discute, on repart avec le sourire.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="secondary" className="bg-craie text-rouge hover:bg-craie/90 hover:shadow-none">
                <Link href="/adhesion">
                  Rejoindre l’association
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </Link>
              </Button>
              <DevisButton size="lg" variant="ghost" className="text-craie ring-1 ring-craie/40 hover:bg-craie/10">
                Vous êtes une structure ? Demandez un devis
              </DevisButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
