import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Backpack,
  CalendarRange,
  Clock3,
  HeartHandshake,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";
import { buildMetadata, breadcrumbLd, eventLd, faqLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionTitle } from "@/components/site/section-title";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { FramedImage } from "@/components/site/framed-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { GroupeForm } from "@/components/forms/groupe-form";
import { DevisButton } from "@/components/devis/devis-button";
import { stages, faqSecurite, type Stage } from "@/lib/data/content";
import { association } from "@/lib/data/site";

export const metadata: Metadata = buildMetadata({
  title: "Stages vacances",
  description:
    "Stages de boxe anglaise pendant les vacances scolaires à Nanterre : boxe éducative dès 6 ans, semaines ados, cardio-boxe adultes. Dates, âges, places et inscription des groupes.",
  path: "/stages",
});

/* Rendu du statut d'un stage : badge + appel à l'action adaptés. */
const statuts: Record<
  Stage["statut"],
  { tone: "or" | "rouge" | "bleu"; label: string; cta: string }
> = {
  ouvert: { tone: "or", label: "Inscriptions ouvertes", cta: "Réserver une place" },
  complet: { tone: "rouge", label: "Complet", cta: "Rejoindre la liste d'attente" },
  bientot: { tone: "bleu", label: "Ouverture bientôt", cta: "Être prévenu·e" },
};

/* Déroulé d'une journée complète de stage. */
const journee = [
  {
    heure: "9h00",
    titre: "Accueil au gymnase",
    texte:
      "Dépôt des affaires, tour de parole du jour : chacun dit comment il arrive. Le stage démarre par l'écoute, pas par le sac de frappe.",
  },
  {
    heure: "9h30",
    titre: "Échauffement collectif",
    texte:
      "Corde à sauter, déplacements, jeux de réaction en musique. On chauffe le corps et on soude le groupe en même temps.",
  },
  {
    heure: "10h15",
    titre: "Atelier technique",
    texte:
      "Garde, jab, esquive : travail par petits groupes de niveau, aux pattes d'ours avec les coachs. Chacun progresse à son rythme.",
  },
  {
    heure: "12h00",
    titre: "Repas & temps calme",
    texte:
      "Pique-nique tiré du sac, tous ensemble. Un moment de vie collective à part entière : on met la table, on range, on discute.",
  },
  {
    heure: "13h30",
    titre: "Grands jeux & ateliers",
    texte:
      "Tournois sportifs, jeux d'opposition et atelier « gestion des émotions » : nommer ce qu'on ressent avant de mettre les gants.",
  },
  {
    heure: "15h30",
    titre: "Assauts éducatifs",
    texte:
      "Mises de gants à la touche, arbitrées par les coachs, uniquement pour les volontaires. Les coups appuyés sont interdits, point.",
  },
  {
    heure: "16h30",
    titre: "Retour au calme & goûter",
    texte:
      "Étirements, bilan de la journée, goûter partagé. Le gong de fin sonne, on se donne rendez-vous demain.",
  },
];

/* Questions de parents les plus posées avant un stage (extraites de la FAQ sécurité). */
const faqStages = faqSecurite.slice(0, 4);

export default function StagesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Accueil", path: "/" },
            { name: "Stages vacances", path: "/stages" },
          ]),
          ...stages.map(eventLd),
          faqLd(faqStages),
        ]}
      />

      {/* Hero */}
      <section className="spotlight relative">
        <div className="container-wide py-14 lg:py-20">
          <SectionTitle
            as="h1"
            eyebrow="Stages vacances"
            title="Des vacances qui laissent des gants pleins de souvenirs"
            intro="À chaque période de vacances scolaires, le CBAC ouvre le ring aux enfants, aux ados et aux adultes du territoire : une semaine pour découvrir la boxe anglaise, se dépasser et vivre un vrai moment de groupe. Places limitées, tarifs solidaires."
          />
          <Reveal delay={0.15} className="mt-6 flex flex-wrap gap-2">
            <Badge tone="craie">
              <MapPin className="h-3.5 w-3.5" strokeWidth={1.75} />
              {association.address.venue}, {association.address.city}
            </Badge>
            <Badge tone="craie">
              <Users className="h-3.5 w-3.5" strokeWidth={1.75} />
              Dès 6 ans
            </Badge>
            <Badge tone="craie">
              <Clock3 className="h-3.5 w-3.5" strokeWidth={1.75} />
              Demi-journée ou journée complète
            </Badge>
          </Reveal>
        </div>
      </section>

      {/* Round 01 — Les sessions 2026 */}
      <section className="container-wide pb-16 pt-2 lg:pb-20">
        <SectionTitle
          eyebrow="Round 01 · Les sessions 2026"
          title="Choisissez votre stage"
          intro="Chaque stage affiche ses dates, sa tranche d'âge et son nombre de places. Quand c'est complet, c'est complet : les petits effectifs sont notre condition d'un encadrement de qualité."
        />

        <Stagger className="mt-10 grid gap-6 sm:grid-cols-2">
          {stages.map((stage) => {
            const statut = statuts[stage.statut];
            return (
              <StaggerItem key={stage.title} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-4xl border border-noir-line bg-noir-card shadow-card">
                  <div className="relative">
                    <FramedImage
                      src={stage.image}
                      alt={`${stage.title} — stage de boxe anglaise CBAC à Nanterre`}
                      fallbackLabel={stage.title}
                      ratio="aspect-[16/10]"
                      className="rounded-none border-0"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <Badge tone={statut.tone} className="absolute left-4 top-4 shadow-soft">
                      {statut.label}
                    </Badge>
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="font-display text-xl text-craie">{stage.title}</h3>

                    <p className="mt-3 inline-flex items-center gap-2 font-condensed text-sm font-semibold uppercase tracking-[0.08em] text-or">
                      <CalendarRange className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                      {stage.dates}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge tone="bleu">{stage.ages}</Badge>
                      <Badge tone="outline">{stage.places}</Badge>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-craie-soft">
                      {stage.description}
                    </p>

                    <div className="mt-6 pt-1">
                      <Button
                        asChild
                        variant={stage.statut === "ouvert" ? "primary" : "outline"}
                        className="w-full sm:w-auto"
                      >
                        <Link href="/contact">
                          {statut.cta}
                          <ArrowRight className="h-4 w-4" strokeWidth={2} />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Réassurance parents — trois garanties, présentées nues. */}
        <Reveal className="mt-14 grid gap-8 border-t border-noir-line pt-10 sm:grid-cols-3">
          <div className="flex items-start gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-or-tint text-or">
              <ShieldCheck className="h-5 w-5" strokeWidth={1.6} />
            </span>
            <div>
              <h3 className="font-display text-base text-craie">Encadrement diplômé</h3>
              <p className="mt-1 text-sm leading-relaxed text-craie-soft">
                Un coach diplômé d&apos;État ou fédéral pour huit enfants maximum, tous formés aux
                premiers secours.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-or-tint text-or">
              <Backpack className="h-5 w-5" strokeWidth={1.6} />
            </span>
            <div>
              <h3 className="font-display text-base text-craie">Matériel fourni</h3>
              <p className="mt-1 text-sm leading-relaxed text-craie-soft">
                Gants, casques et plastrons sont prêtés et désinfectés chaque jour. Prévoyez tenue
                de sport, gourde et pique-nique.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-or-tint text-or">
              <HeartHandshake className="h-5 w-5" strokeWidth={1.6} />
            </span>
            <div>
              <h3 className="font-display text-base text-craie">Tarifs solidaires</h3>
              <p className="mt-1 text-sm leading-relaxed text-craie-soft">
                Tarification au quotient familial et Pass&apos;Sport acceptés : le prix ne doit
                jamais laisser un enfant hors des cordes.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <div className="ring-ropes" aria-hidden />

      {/* Round 02 — Journée type */}
      <section className="container-wide py-16 lg:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionTitle
              eyebrow="Round 02 · Une journée type"
              title="Du premier gong au goûter"
              intro="Un stage CBAC, ce n'est pas six heures de sac de frappe. C'est une journée rythmée où la boxe alterne avec les jeux, les temps de parole et la vie de groupe — l'éducation populaire en action."
            />
            <Reveal delay={0.15} className="mt-8 space-y-6">
              <FramedImage
                src="/images/activite-stage-vacances.svg"
                alt="Jeunes boxeurs en stage vacances dans un gymnase mis à disposition par la Ville"
                ratio="aspect-[3/4]"
                className="max-w-sm shadow-card"
                sizes="(max-width: 1024px) 100vw, 35vw"
              />
              <p className="max-w-sm text-sm leading-relaxed text-craie-muted">
                Les stages en demi-journée suivent le même esprit, resserré sur la matinée ou
                l&apos;après-midi. Le déroulé précis est remis aux familles avant chaque session.
              </p>
            </Reveal>
          </div>

          <Stagger className="lg:col-span-7">
            <ol className="relative space-y-0 border-l border-noir-line pl-8">
              {journee.map((etape) => (
                <StaggerItem key={etape.heure}>
                  <li className="relative pb-8 last:pb-0">
                    <span
                      className="absolute -left-[2.31rem] top-1.5 h-2.5 w-2.5 rounded-full bg-rouge shadow-glow-rouge"
                      aria-hidden
                    />
                    <p className="font-condensed text-2xl font-semibold text-or">{etape.heure}</p>
                    <h3 className="mt-1 font-display text-lg text-craie">{etape.titre}</h3>
                    <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-craie-soft">
                      {etape.texte}
                    </p>
                  </li>
                </StaggerItem>
              ))}
            </ol>
          </Stagger>
        </div>
      </section>

      {/* Round 03 — Questions de parents */}
      <section className="container-wide py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionTitle
              eyebrow="Round 03 · Questions de parents"
              title="Avant de mettre les gants"
              intro="Les réponses aux questions qu'on nous pose le plus souvent avant un premier stage. Pour tout le reste, l'équipe répond au téléphone et au gymnase."
            />
            <Reveal delay={0.1} className="mt-6 flex flex-col gap-2">
              <Link href="/association#faq" className="link-underline text-sm font-semibold text-or">
                Voir la FAQ sécurité complète
              </Link>
              <Link href="/adhesion" className="link-underline text-sm font-semibold text-craie">
                Envie de continuer toute l&apos;année ? Adhérer à l&apos;association
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-7">
            <Accordion type="single" collapsible className="border-t border-noir-line">
              {faqStages.map((item) => (
                <AccordionItem key={item.q} value={item.q}>
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* Round 04 — Groupes & structures : la page se termine sur le formulaire. */}
      <section className="bg-noir-deep py-16 lg:py-24">
        <div className="container-wide grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionTitle
              eyebrow="Round 04 · Groupes & structures"
              title="Vous venez avec votre groupe ?"
              intro="Centres sociaux, accueils de loisirs, écoles, structures d'insertion : nous organisons des stages dédiés à vos jeunes, pendant les vacances comme sur le temps scolaire."
            />
            <Reveal delay={0.1}>
              <ul className="mt-6 space-y-3">
                {[
                  "Sessions réservées à votre structure, dans vos locaux ou un gymnase mis à disposition",
                  "Contenu co-construit avec vos équipes autour de vos objectifs éducatifs",
                  "Encadrement diplômé, matériel complet et assurance fédérale compris",
                  "Tarifs associatifs et convention simple, adaptés aux budgets publics",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-craie-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-or" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <DevisButton variant="secondary" cible="centres-sociaux">
                  Créer une intervention sur mesure
                </DevisButton>
                <Link
                  href="/interventions"
                  className="link-underline text-sm font-semibold text-craie"
                >
                  Découvrir toutes nos interventions
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:col-span-7">
            <GroupeForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
