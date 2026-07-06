import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { buildMetadata, breadcrumbLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionTitle } from "@/components/site/section-title";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { GalerieGrid } from "@/components/galerie/galerie-grid";

export const metadata: Metadata = buildMetadata({
  title: "Galerie",
  description:
    "Initiations, temps d'échanges, sorties et interventions dans les structures : la vie du CBAC en images.",
  path: "/galerie",
});

export default function GaleriePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Accueil", path: "/" },
          { name: "Galerie", path: "/galerie" },
        ])}
      />

      {/* Hero éditorial */}
      <section className="spotlight container-wide py-12 lg:py-16">
        <SectionTitle
          as="h1"
          eyebrow="En images"
          title="La vie de l'asso, gants aux poings"
          intro="Séances d'initiation, temps d'échanges, sorties et événements : filtrez par catégorie, cliquez pour agrandir."
        />
      </section>

      {/* Grille filtrable + lightbox */}
      <section className="container-wide">
        <Reveal>
          <GalerieGrid />
        </Reveal>
        <Reveal delay={0.1} className="mt-6">
          <p className="text-xs leading-relaxed text-craie-muted">
            Photos de maquette — sur le vrai site, chaque image est publiée avec l&apos;accord
            des personnes photographiées.
          </p>
        </Reveal>
      </section>

      <div className="ring-ropes my-16 lg:my-20" aria-hidden />

      {/* CTA sobre */}
      <section className="container-wide pb-20 lg:pb-24">
        <Reveal className="mx-auto flex max-w-xl flex-col items-center gap-5 text-center">
          <h2 className="text-balance text-2xl sm:text-3xl">
            Envie d&apos;être sur la prochaine photo ?
          </h2>
          <p className="text-[15px] leading-relaxed text-craie-soft">
            Nos actions sont ouvertes à tous, débutants bienvenus — venez nous rencontrer sur
            l&apos;un de nos lieux d&apos;intervention.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/adhesion">
                Rejoindre l&apos;association
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/calendrier">
                <CalendarDays className="h-4 w-4" strokeWidth={2} />
                Les prochaines dates
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
