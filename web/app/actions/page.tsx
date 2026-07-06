import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, MapPin, Users } from "lucide-react";
import { buildMetadata, breadcrumbLd, faqLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionTitle } from "@/components/site/section-title";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { FramedImage } from "@/components/site/framed-image";
import { Button } from "@/components/ui/button";
import { DevisButton } from "@/components/devis/devis-button";
import { actions } from "@/lib/data/actions";

export const metadata: Metadata = buildMetadata({
  title: "Nos actions — la boxe qui vient à vous",
  description:
    "Les actions du CBAC : initiations et cours de boxe anglaise, stages avec les structures partenaires, temps d'échanges et sorties boxe, galas amicaux en projet. Sans gymnase attitré, l'association intervient dans les structures qui l'accueillent.",
  path: "/actions",
});

/** Où l'association intervient — c'est le principe : on se déplace. Foyers en tête. */
const terrains = [
  { name: "Foyers", detail: "c'est là que l'association mène l'essentiel de ses actions : on boxe, puis on discute" },
  { name: "Centres sociaux & structures jeunesse", detail: "séances découverte et cycles construits avec les équipes" },
  { name: "Écoles & accueils de loisirs", detail: "la boxe comme support pédagogique, sur le temps scolaire ou périscolaire" },
  { name: "Structures d'insertion & d'encadrement", detail: "un cadre accepté parce qu'il vient du sport" },
  { name: "Entreprises", detail: "team building et ateliers cohésion, dans vos locaux" },
  { name: "Associations & particuliers", detail: "l'association est destinée à tous les publics" },
];

export default function ActionsPage() {
  const allFaq = actions.flatMap((a) => a.faq ?? []);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Accueil", path: "/" },
            { name: "Nos actions", path: "/actions" },
          ]),
          faqLd(allFaq),
        ]}
      />

      {/* Intro + ancres par action */}
      <section className="spotlight relative">
        <div className="container-wide py-14 lg:py-20">
          <SectionTitle
            as="h1"
            eyebrow="Nos actions"
            title="Pas de salle à nous — la boxe vient à vous"
            intro="Le CBAC n'a ni gymnase attitré ni créneaux hebdomadaires : on charge les gants dans le coffre et on vient là où on a besoin de nous — un foyer, un centre social, une école, une entreprise. Et à chaque séance, on prend le temps de discuter. Quatre façons de nous croiser sur votre route."
          />

          <Stagger className="mt-8 flex flex-wrap gap-3">
            {actions.map((action) => (
              <StaggerItem key={action.slug}>
                <a
                  href={`#${action.slug}`}
                  className="pill border border-noir-line bg-noir-card text-craie-soft transition-colors duration-300 ease-smooth hover:border-or hover:text-or"
                >
                  {action.name}
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Une section par action — image et texte alternés */}
      {actions.map((action, i) => (
        <section
          key={action.slug}
          id={action.slug}
          className="container-wide scroll-mt-24 pb-16 lg:pb-20"
        >
          <div
            className={`grid gap-10 lg:items-center lg:gap-14 ${
              i % 2 === 0 ? "lg:grid-cols-[1.15fr_0.85fr]" : "lg:grid-cols-[0.85fr_1.15fr]"
            }`}
          >
            <Reveal className={`flex flex-col items-start gap-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <span className="eyebrow">{`Round 0${i + 1} · ${action.name}`}</span>
              <h2 className="text-2xl sm:text-3xl">{action.short}</h2>
              <p className="max-w-xl text-[15px] leading-relaxed text-craie-soft">
                {action.description}
              </p>

              <ul className="grid gap-2.5 sm:grid-cols-2">
                {action.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-craie-soft">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-or-tint text-or">
                      <Check className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-noir-line pt-4 text-sm text-craie-muted">
                <span className="flex items-start gap-1.5">
                  <Users className="mt-0.5 h-4 w-4 shrink-0 text-or" strokeWidth={1.75} />
                  {action.publics}
                </span>
                <span className="flex items-start gap-1.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-or" strokeWidth={1.75} />
                  {action.lieux}
                </span>
              </div>

              <div className="mt-1 flex flex-col gap-3 sm:flex-row">
                {action.slug === "stages-vacances" ? (
                  <Button asChild size="lg">
                    <Link href="/stages">
                      Dates & inscriptions des stages
                      <ArrowRight className="h-4 w-4" strokeWidth={2} />
                    </Link>
                  </Button>
                ) : action.slug === "cours-initiation" ? (
                  <Button asChild size="lg">
                    <Link href="/calendrier">
                      Voir les prochaines séances
                      <ArrowRight className="h-4 w-4" strokeWidth={2} />
                    </Link>
                  </Button>
                ) : (
                  <Button asChild size="lg">
                    <Link href="/calendrier">
                      Voir le calendrier du mois
                      <ArrowRight className="h-4 w-4" strokeWidth={2} />
                    </Link>
                  </Button>
                )}
                <DevisButton variant="outline" size="lg">
                  Monter un projet avec nous
                </DevisButton>
              </div>
            </Reveal>

            <Reveal y={24} className={`mx-auto w-full max-w-sm lg:max-w-none ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <FramedImage
                src={action.image}
                alt={`${action.name} du CBAC — ${action.lieux}`}
                fallbackLabel={action.name}
                ratio="aspect-[3/4]"
                sizes="(max-width: 1024px) 90vw, 42vw"
              />
            </Reveal>
          </div>
        </section>
      ))}

      <div className="ring-ropes" aria-hidden />

      {/* Où nous intervenons */}
      <section className="container-wide py-16 lg:py-20">
        <SectionTitle
          eyebrow="Nos terrains"
          title="Là où on nous accueille, on installe le ring"
          intro="Chaque semaine, l'équipe et le matériel se déplacent. Voici les lieux où vous pouvez nous croiser — et si le vôtre n'y figure pas encore, il suffit de demander."
        />
        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {terrains.map((t) => (
            <StaggerItem key={t.name}>
              <div className="flex h-full flex-col gap-2 rounded-4xl border border-noir-line bg-noir-card p-6">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-bleu-tint text-bleu-light">
                  <MapPin className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <h3 className="mt-1 font-display text-base text-craie">{t.name}</h3>
                <p className="text-sm leading-relaxed text-craie-soft">{t.detail}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* CTA final */}
      <section className="container-wide pb-20 lg:pb-24">
        <Reveal>
          <div className="grain relative flex flex-col items-center gap-5 overflow-hidden rounded-5xl border border-noir-line bg-noir-surface px-8 py-14 text-center">
            <div className="spotlight absolute inset-0" aria-hidden="true" />
            <div className="relative flex flex-col items-center gap-5">
              <span className="eyebrow">Dernier round</span>
              <h2 className="max-w-2xl text-balance text-2xl sm:text-3xl">
                Envie que la boxe passe chez vous&nbsp;?
              </h2>
              <p className="max-w-md text-[15px] leading-relaxed text-craie-soft">
                Foyer, structure, école, entreprise ou simple curieux : décrivez-nous votre
                situation, on construit la suite ensemble.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <DevisButton size="lg">
                  Créer mon intervention
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </DevisButton>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Nous contacter</Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
