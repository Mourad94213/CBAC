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
    "CBAC, association loi 1901 de boxe anglaise et d'éducation populaire à Nanterre. Notre histoire, nos valeurs, le mot du président Soungui Gomis, notre projet pédagogique et toutes nos garanties d'encadrement.",
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
    text: "La colère, la peur, le trac : la boxe les met à nu pour mieux apprendre à les maîtriser. Souffler, garder sa garde, encaisser sans exploser — des réflexes qui servent au gymnase comme au collège.",
  },
  {
    icon: Mountain,
    title: "Le dépassement de soi",
    text: "Un round de plus, une esquive enfin maîtrisée, un premier assaut devant du public : chacun repousse ses propres limites, à son rythme. La seule victoire qui compte, c'est sur soi-même.",
  },
];

const jalons = [
  {
    annee: "2014",
    titre: "Le premier gong",
    texte:
      "Soungui Gomis fonde le CBAC avec deux sacs de frappe prêtés, un coin de gymnase municipal et une poignée de jeunes du quartier. L'association loi 1901 est née — sans salle à elle, et fière de l'être.",
  },
  {
    annee: "2018",
    titre: "Toujours plus loin",
    texte:
      "Écoles, centres sociaux, premiers foyers : la boxe éducative va chercher les jeunes là où ils sont. Le principe itinérant devient la marque de fabrique du CBAC.",
  },
  {
    annee: "2022",
    titre: "La relève sur le ring",
    texte:
      "Premiers galas amicaux devant des salles pleines, premières conventions avec la Ville. Les jeunes accompagnés par l'association deviennent à leur tour bénévoles et exemples pour les plus petits.",
  },
  {
    annee: "2026",
    titre: "Une maison qui compte",
    texte: `${association.impact.jeunes}+ jeunes accompagnés, ${association.impact.structures} structures partenaires et ${association.impact.seances} séances par an : le CBAC est devenu un acteur éducatif à part entière du territoire.`,
  },
];

const documents = [
  {
    title: "Projet pédagogique CBAC",
    description:
      "Notre méthode complète, noir sur blanc : objectifs éducatifs, progression par gants de couleur, protocoles de sécurité et modalités d'évaluation. Le document qui rassure les familles et sert de socle aux dossiers de nos partenaires.",
    href: "/docs/projet-pedagogique-cbac.pdf",
    meta: "PDF · 12 pages",
    cta: "Télécharger le projet pédagogique",
  },
  {
    title: "Plaquette entreprises & structures",
    description:
      "Team building, cycles éducatifs, stages clé en main : nos formats d'intervention, des exemples de séances et les témoignages de structures accompagnées. À glisser directement dans votre prochain comité de direction.",
    href: "/docs/plaquette-entreprises-cbac.pdf",
    meta: "PDF · 8 pages",
    cta: "Télécharger la plaquette",
  },
];

const garanties = [
  { icon: Award, text: "100 % de coachs diplômés (BPJEPS, DEJEPS, brevets fédéraux), diplômes présentés à chaque structure" },
  { icon: ShieldCheck, text: "Assurance de l'association couvrant chaque participant, sur tous nos lieux d'intervention" },
  { icon: Sparkles, text: "Matériel fourni et désinfecté après chaque séance" },
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
            intro={`${association.legalName}, association loi 1901 née il y a ${association.impact.annees} ans à Nanterre, fait de la boxe anglaise un outil d'éducation populaire. Sans salle attitrée, elle installe son ring là où on l'accueille — et on y apprend bien plus que le jab.`}
          />

          <Reveal delay={0.12}>
            <div className="relative">
              <ParallaxImage
                src="/images/hero-ring.svg"
                alt="Un ring sous les projecteurs lors d'un gala du CBAC, silhouette d'un boxeur"
                priority
                amount={40}
                className="aspect-[4/5] rounded-5xl border border-noir-line shadow-card sm:aspect-[5/6]"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute -right-3 top-6 rounded-2xl border border-noir-line bg-noir-card/95 px-4 py-3 shadow-lift backdrop-blur">
                <p className="font-condensed text-xs font-semibold uppercase tracking-brand text-or">depuis</p>
                <p className="font-display text-2xl leading-none text-craie">2014</p>
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
            <span className="eyebrow">Round 01 · Notre histoire</span>
            <h2 className="max-w-xl text-3xl leading-[1.08] sm:text-4xl">
              Douze ans d'éducation populaire, gants aux poings
            </h2>
            <p className="max-w-xl text-[15px] leading-relaxed text-craie-soft">
              Le CBAC est né d'une conviction simple : dans un quartier, une salle de boxe bien tenue
              change des trajectoires. Soungui Gomis a voulu offrir aux jeunes ce que le ring lui avait
              donné — un cadre, des repères, des adultes qui croient en vous.
            </p>

            <ol className="mt-2 flex flex-col">
              {jalons.map((j, i) => (
                <li
                  key={j.annee}
                  className={`relative border-l border-noir-line pl-8 ${i === jalons.length - 1 ? "" : "pb-8"}`}
                >
                  <span
                    className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-or shadow-glow-or"
                    aria-hidden
                  />
                  <p className="font-condensed text-2xl font-semibold leading-none text-or">{j.annee}</p>
                  <h3 className="mt-2 font-display text-lg text-craie">{j.titre}</h3>
                  <p className="mt-1.5 max-w-lg text-[15px] leading-relaxed text-craie-soft">{j.texte}</p>
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
              « La boxe m'a tout appris. Notre travail, c'est de le rendre. »
            </h2>
            <div className="flex max-w-xl flex-col gap-4 text-[15px] leading-relaxed text-craie-soft">
              <p>
                « J'ai grandi à Nanterre, à dix minutes du gymnase. À quinze ans, j'étais un gamin en
                colère ; c'est un entraîneur bénévole qui m'a tendu mes premiers gants — et avec eux, un
                cadre, une exigence, une fierté. Ce que cette association m'a donné, aucune médaille ne le vaut.
              </p>
              <p>
                Le CBAC, c'est cette dette que je rembourse chaque semaine, d'un gymnase à un foyer,
                d'une école à un centre social. Nous ne formons pas d'abord des champions : nous
                accompagnons des enfants qui apprennent à canaliser leur énergie, des ados qui
                reprennent confiance, des adultes qui se remettent en mouvement. Quand un ancien du
                CBAC revient aider les petits à lacer leurs gants, c'est notre plus belle victoire.
              </p>
              <p>
                Venez nous voir sur l'une de nos séances, où qu'elle soit : vous verrez du sérieux,
                de la sueur et beaucoup de sourires. Ici, tout le monde a sa place sur le ring. »
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
                  Rencontrer toute l'équipe
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
            intro="Parce que la confiance se construit sur des preuves : notre projet pédagogique et notre plaquette d'intervention sont publics. Servez-vous, partagez, imprimez."
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
              eyebrow="Round 05 · Sécurité & encadrement"
              title="Vos questions, nos garanties"
              intro="La question qu'on nous pose le plus souvent : « la boxe, ce n'est pas dangereux pour mon enfant ? ». Voici nos réponses, sans détour — la sécurité est le premier chapitre de notre projet pédagogique."
            />
            <Reveal delay={0.08} className="flex flex-col gap-4">
              <p className="font-condensed text-xs font-semibold uppercase tracking-brand text-or">
                Nos trois garanties
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
                Voir les diplômes de nos coachs
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
              La meilleure façon de comprendre l'esprit CBAC, c'est de venir à une initiation ou à
              un gala près de chez vous. Première séance offerte, gants prêtés, sourire garanti.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="secondary" className="bg-craie text-rouge hover:bg-craie/90 hover:shadow-none">
                <Link href="/adhesion">
                  Venir essayer gratuitement
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
