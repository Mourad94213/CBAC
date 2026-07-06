import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import { buildMetadata, breadcrumbLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionTitle } from "@/components/site/section-title";
import { Reveal } from "@/components/site/reveal";
import { SocialIcons } from "@/components/site/social-icons";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { association } from "@/lib/data/site";

export const metadata: Metadata = buildMetadata({
  title: "Actualités",
  description:
    "Initiations, stages, temps d'échanges et vie de l'association : suivez les actualités du CBAC, et recevez « Les news du ring » une fois par mois.",
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
            intro="Initiations, stages, temps d'échanges, sorties : tout ce qui fait battre le cœur de l'association se racontera ici."
          />
        </div>
      </section>

      {/* Fil des actualités — les vraies actus de l'association seront publiées ici. */}
      <section className="container-wide pb-20 lg:pb-24">
        <Reveal>
          <div className="flex flex-col items-start gap-4 rounded-4xl border border-noir-line bg-noir-surface p-8 shadow-soft sm:p-10">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-or-tint text-or">
              <Newspaper className="h-6 w-6" strokeWidth={1.6} />
            </span>
            <h2 className="font-display text-xl text-craie">Les premières actus arrivent</h2>
            <p className="max-w-2xl text-[15px] leading-relaxed text-craie-soft">
              L&apos;association publiera ici le récit de ses actions : les initiations menées dans
              les structures, les stages avec les partenaires, les temps d&apos;échanges et les
              sorties boxe. En attendant, le meilleur moyen de suivre le CBAC, c&apos;est de nous
              suivre sur les réseaux — ou de nous écrire.
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-4">
              <SocialIcons />
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 font-condensed text-sm font-semibold uppercase tracking-wide text-or transition-colors hover:text-craie"
              >
                Nous contacter
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Link>
            </div>
          </div>
        </Reveal>
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
                  Une fois par mois, l’essentiel de l’association dans votre boîte mail : les
                  prochains rendez-vous et la vie de l&apos;asso — court, utile, sans blabla.
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
