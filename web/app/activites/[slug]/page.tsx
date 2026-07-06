import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CalendarClock,
  Clock,
  GraduationCap,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";
import { buildMetadata, activiteLd, breadcrumbLd, faqLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionTitle } from "@/components/site/section-title";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { Divider } from "@/components/site/divider";
import { FramedImage } from "@/components/site/framed-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ActiviteCard } from "@/components/activites/activite-card";
import { DevisButton } from "@/components/devis/devis-button";
import { activites, getActivite } from "@/lib/data/activites";
import { creneaux } from "@/lib/data/schedule";
import { association } from "@/lib/data/site";

/** Teinte du badge d'âge par activité — cohérente avec ActiviteCard. */
const badgeTone: Record<string, "or" | "bleu" | "rouge" | "craie"> = {
  "boxe-educative": "or",
  "boxe-loisir": "bleu",
  "boxe-competition": "rouge",
  "boxe-sante-forme": "craie",
  "initiation-decouverte": "or",
  "stage-vacances": "bleu",
};

export async function generateStaticParams() {
  return activites.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const activite = getActivite(slug);
  if (!activite) {
    return { title: "Activité introuvable · CBAC" };
  }
  return buildMetadata({
    title: `${activite.name} — ${activite.ages}`,
    description: `${activite.short} ${activite.audience}, ${activite.ages} : séances au gymnase Léo-Lagrange à Nanterre avec les coachs diplômés du CBAC.`,
    path: `/activites/${activite.slug}`,
    image: activite.image,
  });
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const activite = getActivite(slug);
  if (!activite) notFound();

  const tone = badgeTone[activite.slug] ?? "or";
  const activiteCreneaux = creneaux.filter((c) => c.activite === activite.slug);
  const isStage = activite.slug === "stage-vacances";
  const idx = activites.findIndex((a) => a.slug === activite.slug);
  const related = [...activites.slice(idx + 1), ...activites.slice(0, idx)].slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          activiteLd(activite),
          breadcrumbLd([
            { name: "Accueil", path: "/" },
            { name: "Activités", path: "/activites" },
            { name: activite.name, path: `/activites/${activite.slug}` },
          ]),
          ...(activite.faq ? [faqLd(activite.faq)] : []),
        ]}
      />

      {/* Hero, split asymétrique */}
      <section className="spotlight relative">
        <div className="container-wide py-12 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <div className="flex flex-col items-start gap-5">
              <Badge tone={tone}>{activite.ages}</Badge>
              <SectionTitle as="h1" title={activite.name} intro={activite.short} className="gap-3" />

              <Reveal className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-craie-soft">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-or" strokeWidth={1.6} />
                  {activite.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-or" strokeWidth={1.6} />
                  {activite.audience}
                </span>
                <span className="flex items-center gap-1.5">
                  <GraduationCap className="h-4 w-4 text-or" strokeWidth={1.6} />
                  {activite.levels.join(", ")}
                </span>
              </Reveal>

              <Reveal delay={0.05} className="mt-1 flex flex-col gap-3 sm:flex-row">
                {isStage ? (
                  <Button asChild size="lg">
                    <Link href="/stages">
                      Voir les stages de l&apos;été
                      <ArrowRight className="h-4 w-4" strokeWidth={2} />
                    </Link>
                  </Button>
                ) : (
                  <Button asChild size="lg">
                    <Link href="/adhesion">
                      Réserver une séance d&apos;essai
                      <ArrowRight className="h-4 w-4" strokeWidth={2} />
                    </Link>
                  </Button>
                )}
                <Button asChild variant="outline" size="lg">
                  <Link href="/calendrier">Voir les créneaux</Link>
                </Button>
              </Reveal>
            </div>

            <Reveal y={24} className="mx-auto w-full max-w-sm lg:max-w-none">
              <FramedImage
                src={activite.image}
                alt={`${activite.name} au CBAC — ${activite.ages}`}
                fallbackLabel={activite.name}
                ratio="aspect-[3/4]"
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Description + points forts */}
      <section className="container-wide py-8 lg:py-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Round 01 · L&apos;activité</span>
            <h2 className="mt-3 text-2xl sm:text-3xl">Ce qu&apos;on y travaille</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-craie-soft sm:text-base">
              {activite.description}
            </p>
          </Reveal>

          <Stagger className="flex flex-col gap-4 self-start lg:pt-16">
            {activite.points.map((point) => (
              <StaggerItem key={point}>
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-or" strokeWidth={1.6} />
                  <span className="text-[15px] font-medium text-craie">{point}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="container-wide">
        <Divider />
      </section>

      {/* Les créneaux de la semaine */}
      <section className="container-wide py-14 lg:py-20">
        <SectionTitle
          eyebrow="Round 02 · Les créneaux"
          title="Vos rendez-vous de la semaine"
          intro={
            isStage
              ? "Les stages se déroulent à la semaine, pendant les vacances scolaires — pas de créneau hebdomadaire fixe."
              : `Les créneaux ${activite.name.toLowerCase()} de la saison 2026-2027 — planning susceptible d'évoluer à la rentrée.`
          }
        />

        {activiteCreneaux.length > 0 ? (
          <Stagger className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {activiteCreneaux.map((c) => (
              <StaggerItem key={`${c.day}-${c.start}`}>
                <div className="flex h-full flex-col gap-4 rounded-4xl border border-noir-line bg-noir-card p-6 transition-shadow duration-300 ease-smooth hover:shadow-card">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-display text-lg uppercase text-craie">{c.day}</p>
                      <p className="mt-0.5 flex items-center gap-1.5 text-sm text-craie-soft">
                        <CalendarClock className="h-4 w-4 text-or" strokeWidth={1.6} />
                        {c.start} — {c.end}
                      </p>
                    </div>
                    <Badge tone={tone} className="shrink-0">
                      {activite.duration}
                    </Badge>
                  </div>

                  <div className="flex flex-col gap-1.5 text-xs text-craie-muted">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
                      {c.lieu}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
                      {c.audience}
                    </span>
                  </div>

                  <Button asChild variant="soft" size="sm" className="mt-auto self-start">
                    <Link href="/adhesion">
                      Essayer ce créneau
                      <ArrowRight className="h-4 w-4" strokeWidth={2} />
                    </Link>
                  </Button>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        ) : (
          <Reveal className="mt-9 flex flex-col items-start gap-4 rounded-4xl border border-noir-line bg-bleu-tint px-7 py-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-lg text-[15px] text-craie-soft">
              {isStage
                ? "Retrouvez les dates, les âges et les places disponibles des prochains stages vacances — ou inscrivez directement un groupe de votre structure."
                : "Les horaires de cette activité se calent sur la saison. Retrouvez l'ensemble des créneaux dans le planning de la semaine, ou contactez-nous pour une séance d'essai."}
            </p>
            <Button asChild variant="outline" className="shrink-0">
              <Link href={isStage ? "/stages" : "/calendrier"}>
                {isStage ? "Voir les stages" : "Voir le planning"}
              </Link>
            </Button>
          </Reveal>
        )}
      </section>

      {/* Questions fréquentes */}
      {activite.faq && activite.faq.length > 0 && (
        <section className="container-wide pb-14 lg:pb-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <SectionTitle
              eyebrow="Round 03 · Vos questions"
              title="Questions fréquentes"
              intro="Les réponses que les parents et les adhérents nous demandent le plus souvent avant de se lancer."
            />
            <Reveal>
              <Accordion type="single" collapsible className="rounded-4xl border border-noir-line bg-noir-card px-6 sm:px-8">
                {activite.faq.map((item, i) => (
                  <AccordionItem key={item.q} value={`faq-${i}`} className="last:border-b-0">
                    <AccordionTrigger>{item.q}</AccordionTrigger>
                    <AccordionContent>{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>
      )}

      {/* Activités liées */}
      {related.length > 0 && (
        <section className="container-wide py-8 lg:py-12">
          <SectionTitle
            title="À découvrir aussi"
            intro="D'autres façons de mettre les gants au CBAC — pour vous, un proche ou votre structure."
          />
          <Stagger className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((a) => (
              <StaggerItem key={a.slug} className="h-full">
                <ActiviteCard activite={a} />
              </StaggerItem>
            ))}
          </Stagger>
        </section>
      )}

      {/* CTA final */}
      <section className="container-wide py-14 lg:py-20">
        <Reveal>
          <div className="grain relative flex flex-col items-center gap-5 overflow-hidden rounded-[2.5rem] border border-noir-line bg-noir-card px-8 py-12 text-center">
            <div className="spotlight pointer-events-none absolute inset-0" aria-hidden />
            <h2 className="relative text-balance text-2xl sm:text-3xl">
              Envie d&apos;essayer&nbsp;? La première séance est offerte.
            </h2>
            <p className="relative max-w-md text-[15px] text-craie-soft">{association.promise}</p>
            <div className="relative flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href={isStage ? "/stages" : "/adhesion"}>
                  {isStage ? "M'inscrire à un stage" : "Réserver ma séance d'essai"}
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </Link>
              </Button>
              <DevisButton variant="outline" size="lg">
                Un projet pour votre structure&nbsp;?
              </DevisButton>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
