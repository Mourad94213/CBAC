import type { Metadata } from "next";
import Link from "next/link";
import { CalendarRange, HeartHandshake, MessageCircle, Users } from "lucide-react";
import { buildMetadata, breadcrumbLd, faqLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionTitle } from "@/components/site/section-title";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { FramedImage } from "@/components/site/framed-image";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { GroupeForm } from "@/components/forms/groupe-form";
import { DevisButton } from "@/components/devis/devis-button";
import { faqSecurite } from "@/lib/data/content";
import { association } from "@/lib/data/site";

export const metadata: Metadata = buildMetadata({
  title: "Stages",
  description:
    "Les stages du CBAC sont organisés avec et dans les structures partenaires, notamment pendant les vacances scolaires. Les dates sont annoncées au fil de l'année — contactez-nous pour monter un stage avec votre structure.",
  path: "/stages",
});

/* Le principe des stages, tel que décrit dans le dossier de l'association. */
const principes = [
  {
    icon: HeartHandshake,
    title: "Montés avec nos partenaires",
    text: "Les partenariats développés par l'association permettent d'organiser des stages directement dans les structures partenaires.",
  },
  {
    icon: CalendarRange,
    title: "Pendant les vacances scolaires",
    text: "C'est le moment privilégié des stages : plusieurs jours de pratique pour aller plus loin que la séance ponctuelle.",
  },
  {
    icon: Users,
    title: "Une expérience plus riche",
    text: "Un stage offre au public une expérience plus riche et diversifiée : on progresse, on se dépasse, on vit un vrai moment de groupe.",
  },
  {
    icon: MessageCircle,
    title: "L'échange, toujours",
    text: "Comme pour les initiations, la discussion et le lien social font partie intégrante de chaque journée de stage.",
  },
];

/* Questions les plus posées avant un stage (FAQ commune de l'association). */
const faqStages = faqSecurite.slice(0, 4);

export default function StagesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Accueil", path: "/" },
            { name: "Stages", path: "/stages" },
          ]),
          faqLd(faqStages),
        ]}
      />

      {/* Hero */}
      <section className="spotlight relative">
        <div className="container-wide py-14 lg:py-20">
          <SectionTitle
            as="h1"
            eyebrow="Stages"
            title="Des stages montés avec nos structures partenaires"
            intro="Grâce aux partenariats développés, le CBAC organise des stages dans les structures partenaires — notamment pendant les vacances scolaires. Une expérience plus riche et diversifiée que la séance ponctuelle."
          />
          <Reveal delay={0.15} className="mt-6 flex flex-wrap gap-2">
            <Badge tone="craie">
              <HeartHandshake className="h-3.5 w-3.5" strokeWidth={1.75} />
              Avec {association.impact.structures} structures partenaires
            </Badge>
            <Badge tone="craie">
              <CalendarRange className="h-3.5 w-3.5" strokeWidth={1.75} />
              Notamment pendant les vacances scolaires
            </Badge>
          </Reveal>
        </div>
      </section>

      {/* Round 01 — Le principe */}
      <section className="container-wide pb-16 pt-2 lg:pb-20">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionTitle
              eyebrow="Round 01 · Le principe"
              title="Comment naissent nos stages"
              intro="Pas de programme figé : chaque stage se construit avec la structure partenaire, autour de son public et de ses objectifs."
            />
            <Reveal delay={0.15} className="mt-8">
              <FramedImage
                src="/images/activite-stage-vacances.svg"
                alt="Jeunes boxeurs pendant un stage de boxe anglaise"
                ratio="aspect-[3/4]"
                className="max-w-sm shadow-card"
                sizes="(max-width: 1024px) 100vw, 35vw"
              />
            </Reveal>
          </div>

          <Stagger className="grid gap-8 sm:grid-cols-2 lg:col-span-7">
            {principes.map((p) => (
              <StaggerItem key={p.title} className="h-full">
                <article className="flex h-full flex-col gap-3 border-t border-noir-line pt-5">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-or-tint text-or">
                    <p.icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <h3 className="font-display text-lg text-craie">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-craie-soft">{p.text}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Prochaines dates — pas d'invention : elles seront annoncées. */}
        <Reveal className="mt-14 flex flex-col items-start gap-3 rounded-4xl border border-noir-line bg-noir-surface p-7 shadow-soft sm:p-8">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-or-tint text-or">
            <CalendarRange className="h-5 w-5" strokeWidth={1.75} />
          </span>
          <h3 className="font-display text-lg text-craie">Les prochaines dates arrivent</h3>
          <p className="max-w-2xl text-sm leading-relaxed text-craie-soft">
            Les stages sont annoncés au fil de l&apos;année, dès qu&apos;ils sont calés avec les
            structures partenaires. Suivez le{" "}
            <Link href="/calendrier" className="link-underline font-semibold text-craie">
              calendrier du mois
            </Link>{" "}
            et nos réseaux, ou contactez-nous directement pour connaître les prochaines sessions.
          </p>
        </Reveal>
      </section>

      <div className="ring-ropes" aria-hidden />

      {/* Round 02 — Questions fréquentes */}
      <section className="container-wide py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionTitle
              eyebrow="Round 02 · Vos questions"
              title="Avant de mettre les gants"
              intro="Les réponses aux questions qu'on nous pose le plus souvent. Pour tout le reste, l'équipe répond au téléphone et par e-mail."
            />
            <Reveal delay={0.1} className="mt-6 flex flex-col gap-2">
              <Link href="/association#faq" className="link-underline text-sm font-semibold text-or">
                Voir toutes les questions fréquentes
              </Link>
              <Link href="/adhesion" className="link-underline text-sm font-semibold text-craie">
                Envie de participer à la vie de l&apos;asso ? Adhérer
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

      {/* Round 03 — Structures : la page se termine sur le formulaire. */}
      <section className="bg-noir-deep py-16 lg:py-24">
        <div className="container-wide grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionTitle
              eyebrow="Round 03 · Votre structure"
              title="Et si le prochain stage se montait chez vous ?"
              intro="Foyers, centres sociaux, accueils de loisirs, écoles, structures d'insertion : c'est avec vous que les stages se construisent."
            />
            <Reveal delay={0.1}>
              <ul className="mt-6 space-y-3">
                {[
                  "Un stage construit avec vos équipes, dans vos locaux",
                  "Autour du sport et de l'échange : on boxe, et on discute",
                  "Ouvert aux débutants comme aux plus à l'aise",
                  "Notamment pendant les vacances scolaires",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-craie-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-or" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <DevisButton variant="secondary" cible="foyers">
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
