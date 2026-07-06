import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { buildMetadata, breadcrumbLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionTitle } from "@/components/site/section-title";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { FramedImage } from "@/components/site/framed-image";
import { Button } from "@/components/ui/button";
import { ActiviteCard } from "@/components/activites/activite-card";
import { DevisButton } from "@/components/devis/devis-button";
import { getActivite } from "@/lib/data/activites";

export const metadata: Metadata = buildMetadata({
  title: "Nos activités — boxe anglaise pour tous",
  description:
    "Toutes les activités du CBAC à Nanterre : boxe éducative dès 6 ans, boxe loisir ados et adultes, compétition, cardio-boxe santé & forme, séances découverte et stages vacances.",
  path: "/activites",
});

const sections: {
  id: string;
  eyebrow: string;
  title: string;
  line: string;
  slugs: string[];
}[] = [
  {
    id: "enfants",
    eyebrow: "Round 01 · Enfants & ados",
    title: "Grandir avec les gants",
    line: "La boxe éducative comme un grand jeu — toucher sans faire mal, gagner en confiance, apprendre à respecter les règles — et des stages à chaque période de vacances.",
    slugs: ["boxe-educative", "stage-vacances"],
  },
  {
    id: "ados-adultes",
    eyebrow: "Round 02 · Ados & adultes",
    title: "Boxer à votre rythme",
    line: "Du défouloir cardio du midi à la préparation aux combats amateurs : trois façons de mettre les gants, avec le même socle — technique, exigence et bienveillance.",
    slugs: ["boxe-loisir", "boxe-sante-forme", "boxe-competition"],
  },
];

const ancres: { label: string; href: string }[] = [
  { label: "Enfants & ados", href: "#enfants" },
  { label: "Ados & adultes", href: "#ados-adultes" },
  { label: "Initiation & découverte", href: "#decouverte" },
];

export default function ActivitesPage() {
  const initiation = getActivite("initiation-decouverte");

  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Accueil", path: "/" },
          { name: "Activités", path: "/activites" },
        ])}
      />

      {/* Intro + ancres par public */}
      <section className="spotlight relative">
        <div className="container-wide py-14 lg:py-20">
          <SectionTitle
            as="h1"
            eyebrow="Nos activités"
            title="Une boxe pour chaque parcours"
            intro="Six façons de monter sur le ring, de 6 à 66 ans : on commence par jouer, on continue pour se dépasser — et personne ne reste au bord des cordes."
          />

          <Stagger className="mt-8 flex flex-wrap gap-3">
            {ancres.map((ancre) => (
              <StaggerItem key={ancre.href}>
                <a
                  href={ancre.href}
                  className="pill border border-noir-line bg-noir-card text-craie-soft transition-colors duration-300 ease-smooth hover:border-or hover:text-or"
                >
                  {ancre.label}
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Grilles d'activités par public */}
      {sections.map((section) => {
        const list = section.slugs
          .map((slug) => getActivite(slug))
          .filter((a): a is NonNullable<typeof a> => Boolean(a));
        return (
          <section
            key={section.id}
            id={section.id}
            className="container-wide scroll-mt-24 pb-16 lg:pb-20"
          >
            <Reveal className="flex flex-col gap-3">
              <span className="eyebrow">{section.eyebrow}</span>
              <h2 className="text-2xl sm:text-3xl">{section.title}</h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-craie-soft">
                {section.line}
              </p>
            </Reveal>

            <Stagger className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((activite) => (
                <StaggerItem key={activite.slug} className="h-full">
                  <ActiviteCard activite={activite} />
                </StaggerItem>
              ))}
            </Stagger>
          </section>
        );
      })}

      <div className="ring-ropes" aria-hidden />

      {/* Bande initiation & découverte — dernier round, tient lieu de CTA final */}
      {initiation && (
        <section id="decouverte" className="container-wide scroll-mt-24 py-14 lg:py-20 lg:pb-24">
          <div className="relative overflow-hidden rounded-5xl border border-noir-line bg-bleu-tint">
            <div className="spotlight pointer-events-none absolute inset-0" aria-hidden />
            <div className="relative grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14 lg:p-14">
              <div className="flex flex-col items-start gap-5">
                <span className="eyebrow">Round 03 · Découverte</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl">
                  Première fois sur le ring&nbsp;? On vous prête les gants.
                </h2>
                <p className="max-w-xl text-[15px] leading-relaxed text-craie-soft sm:text-base">
                  {initiation.short} Séance d&apos;essai gratuite pour les particuliers,
                  formats clé en main pour les structures et les entreprises — au gymnase
                  ou dans vos locaux.
                </p>

                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {initiation.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-craie-soft">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-or-tint text-or">
                        <Check className="h-3 w-3" strokeWidth={2.5} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg">
                    <Link href="/activites/initiation-decouverte">
                      Réserver une séance d&apos;essai
                      <ArrowRight className="h-4 w-4" strokeWidth={2} />
                    </Link>
                  </Button>
                  <DevisButton variant="outline" size="lg">
                    Vous êtes une structure&nbsp;? Demandez un devis
                  </DevisButton>
                </div>
              </div>

              <Reveal y={24} className="mx-auto w-full max-w-sm lg:max-w-none">
                <FramedImage
                  src={initiation.image}
                  alt="Séance d'initiation à la boxe anglaise au CBAC — matériel fourni"
                  fallbackLabel={initiation.name}
                  ratio="aspect-[3/4]"
                  sizes="(max-width: 1024px) 90vw, 38vw"
                />
              </Reveal>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
