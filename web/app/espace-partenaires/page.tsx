import type { Metadata } from "next";
import Link from "next/link";
import { FlaskConical } from "lucide-react";
import { buildMetadata, breadcrumbLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { DevisButton } from "@/components/devis/devis-button";
import { PartnerPanel } from "@/components/partenaires/partner-panel";

export const metadata: Metadata = buildMetadata({
  title: "Espace partenaires",
  description:
    "L’espace privé des structures partenaires du CBAC : planning de vos interventions, documents (projet pédagogique, attestations, bilans) et factures, au même endroit.",
  path: "/espace-partenaires",
});
metadata.robots = { index: false, follow: true };

export default function EspacePartenairesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Accueil", path: "/" },
          { name: "Espace partenaires", path: "/espace-partenaires" },
        ])}
      />

      <section className="spotlight">
        <div className="container-wide py-12 lg:py-16">
          <Reveal className="mb-6 max-w-2xl">
            <p className="eyebrow">Espace partenaires</p>
            <h1 className="mt-2 text-3xl sm:text-4xl">Votre corner administratif</h1>
            <p className="mt-3 text-pretty text-[15px] leading-relaxed text-craie-soft">
              Centres sociaux, écoles, entreprises, structures d’insertion : retrouvez ici le
              planning de vos interventions, vos documents et vos factures. Connectez-vous
              pour accéder à votre suivi.
            </p>
          </Reveal>

          {/* Bandeau démo maquette */}
          <Reveal delay={0.08} className="mb-8">
            <p className="flex items-start gap-3 rounded-2xl border border-dashed border-or/40 bg-or-tint px-5 py-4 text-sm leading-relaxed text-craie-soft">
              <FlaskConical className="mt-0.5 h-5 w-5 shrink-0 text-or" strokeWidth={1.6} />
              <span>
                <strong className="font-semibold text-craie">Démo maquette</strong> — cet espace
                est une démonstration : la connexion est factice, les données affichées sont
                fictives et rien n’est transmis ni enregistré.
              </span>
            </p>
          </Reveal>

          <PartnerPanel />
        </div>
      </section>

      {/* CTA nouvelles structures */}
      <section className="container-wide py-20 lg:py-24">
        <Reveal className="mx-auto flex max-w-xl flex-col items-center gap-5 text-center">
          <h2 className="text-balance text-2xl sm:text-3xl">Pas encore partenaire du CBAC ?</h2>
          <p className="text-[15px] leading-relaxed text-craie-soft">
            Team building, cycle éducatif, stage clé en main : décrivez votre besoin en
            quatre étapes et recevez une proposition sur mesure sous 48 h ouvrées.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <DevisButton size="lg">Créer mon intervention</DevisButton>
            <Button asChild variant="outline" size="lg">
              <Link href="/interventions">Découvrir nos interventions</Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
