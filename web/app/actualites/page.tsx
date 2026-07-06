import type { Metadata } from "next";
import { buildMetadata, breadcrumbLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionTitle } from "@/components/site/section-title";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { SocialIcons } from "@/components/site/social-icons";
import { ActuCard } from "@/components/actus/actu-card";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { actus } from "@/lib/data/content";
import { association } from "@/lib/data/site";

export const metadata: Metadata = buildMetadata({
  title: "Actualités",
  description:
    "Galas amicaux, stages vacances, nouveaux lieux d'intervention et cycles avec les structures du territoire : suivez toute la vie du CBAC, et recevez « Les news du ring » une fois par mois.",
  path: "/actualites",
});

export default function ActualitesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Accueil", path: "/" },
          { name: "Actualités", path: "/actualites" },
        ])}
      />

      {/* Hero éditorial */}
      <section className="spotlight">
        <div className="container-wide pb-12 pt-12 lg:pt-16">
          <SectionTitle
            as="h1"
            eyebrow="Le fil de l'asso"
            title="La vie du CBAC, round après round"
            intro="Galas amicaux, stages vacances, nouveaux lieux d'intervention : tout ce qui fait battre le cœur de l'association se raconte ici."
          />
        </div>
      </section>

      {/* Fil des actualités */}
      <section className="container-wide pb-20 lg:pb-24">
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {actus.map((actu) => (
            <StaggerItem key={actu.slug} className="h-full">
              <ActuCard actu={actu} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <div className="ring-ropes" aria-hidden />

      {/* Newsletter « Les news du ring » */}
      <section className="container-wide py-20 lg:py-24">
        <Reveal>
          <div className="grain relative overflow-hidden rounded-5xl border border-noir-line bg-bleu-tint px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
            <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <p className="eyebrow">Newsletter</p>
                <h2 className="mt-3 text-3xl sm:text-4xl">Les news du ring</h2>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-craie-soft">
                  Une fois par mois, l’essentiel de l’association dans votre boîte mail : dates des
                  stages et des galas en avant-première, résultats de nos boxeurs — court,
                  utile, sans blabla.
                </p>
              </div>

              <div>
                <NewsletterForm />
                <p className="mt-4 text-xs leading-relaxed text-craie-muted">
                  Inscription gratuite, désinscription en un clic. Vos coordonnées ne
                  quittent jamais notre corner.
                </p>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <p className="font-condensed text-xs font-semibold uppercase tracking-wide text-craie-muted">
                    Entre deux gongs, suivez {association.socials.instagram.handle}
                  </p>
                  <SocialIcons />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
