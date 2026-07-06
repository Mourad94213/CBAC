import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Clock,
  FileText,
  HandCoins,
  HeartPulse,
  PenLine,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";
import { buildMetadata, breadcrumbLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionTitle } from "@/components/site/section-title";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { AdhesionForm } from "@/components/forms/adhesion-form";
import { association, hours } from "@/lib/data/site";

export const metadata: Metadata = buildMetadata({
  title: "Adhésion · Rejoindre le club",
  description:
    "Rejoindre le CBAC à Nanterre en trois étapes : séance d'essai gratuite, dossier d'adhésion, licence FFBoxe. Pré-inscription en ligne, documents à prévoir et permanences au gymnase Léo-Lagrange.",
  path: "/adhesion",
});

const etapes = [
  {
    num: "01",
    title: "L'essai gratuit",
    text: "Vous venez en tenue de sport avec une gourde, on vous prête les gants. Une vraie séance complète, sans engagement — vous ne décidez qu'après.",
  },
  {
    num: "02",
    title: "Le dossier",
    text: "Convaincu·e ? Vous remplissez la pré-inscription en ligne ci-dessous, puis vous déposez les documents au gymnase pendant une permanence. Dix minutes, pas plus.",
  },
  {
    num: "03",
    title: "La licence",
    text: "On enregistre votre licence FFBoxe — assurance incluse — et c'est parti pour la saison. Bienvenue entre les cordes, vous faites partie du club.",
  },
];

const documents = [
  {
    icon: HeartPulse,
    title: "Questionnaire de santé ou certificat médical",
    text: "Le questionnaire suffit pour la plupart des mineurs ; certificat de non-contre-indication pour les adultes.",
  },
  {
    icon: Camera,
    title: "Une photo d'identité",
    text: "Pour la licence FFBoxe. Une photo de téléphone bien cadrée fait parfaitement l'affaire.",
  },
  {
    icon: Wallet,
    title: "Le règlement de l'adhésion",
    text: "En 1 ou 3 fois sans frais — Pass'Sport et tarif solidaire déduits directement.",
  },
  {
    icon: PenLine,
    title: "L'autorisation parentale (mineurs)",
    text: "Signée au gymnase par le responsable légal lors du dépôt du dossier.",
  },
];

const reassurances = [
  {
    icon: Sparkles,
    title: "Essai 100 % gratuit",
    text: "Première séance offerte, sans engagement ni carte bleue.",
  },
  {
    icon: HandCoins,
    title: "Aides & facilités",
    text: "Pass'Sport, tarif solidaire selon quotient familial, paiement en 3 fois.",
  },
  {
    icon: ShieldCheck,
    title: "Tout est fourni",
    text: "Gants, casques et matériel prêtés — licence et assurance incluses.",
  },
];

export default function AdhesionPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Accueil", path: "/" },
          { name: "Adhésion", path: "/adhesion" },
        ])}
      />

      {/* Hero — l'essai gratuit est l'accroche, le CTA mène droit au formulaire. */}
      <section className="spotlight container-wide py-14 lg:py-20">
        <SectionTitle
          as="h1"
          eyebrow="Adhésion"
          title="Rejoindre le club, en trois rounds"
          intro="Pas de parcours du combattant pour devenir adhérent·e : un essai gratuit, un dossier de dix minutes, une licence — et le ring est à vous pour la saison."
        />
        <Reveal delay={0.15} className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button asChild size="lg">
            <Link href="#pre-inscription">
              Réserver mon essai gratuit
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </Button>
          <p className="max-w-sm text-sm leading-relaxed text-craie-muted">
            Première séance offerte, toujours — enfant, ado ou adulte, on ne s&apos;engage pas
            sans avoir mis les gants au moins une fois.
          </p>
        </Reveal>
      </section>

      {/* Round 01 — Le parcours */}
      <section className="container-wide py-16 lg:py-20">
        <SectionTitle
          eyebrow="Round 01 · Le parcours"
          title="De la première touche à la licence"
          intro="Trois étapes, dans cet ordre — et à chaque étape, quelqu'un du club pour vous accompagner."
        />
        <Stagger className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-3">
          {etapes.map((etape) => (
            <StaggerItem key={etape.num}>
              <div className="flex flex-col gap-3 border-t border-noir-line pt-6">
                <span className="font-condensed text-5xl font-semibold leading-none text-or/70" aria-hidden>
                  {etape.num}
                </span>
                <h3 className="font-display text-xl text-craie">{etape.title}</h3>
                <p className="text-sm leading-relaxed text-craie-soft">{etape.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Réassurances — trois garanties, présentées nues sous le parcours. */}
        <Stagger className="mt-16 grid gap-8 border-t border-noir-line pt-10 sm:grid-cols-3">
          {reassurances.map((r) => (
            <StaggerItem key={r.title}>
              <div className="flex items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-or-tint text-or">
                  <r.icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="font-display text-base text-craie">{r.title}</h3>
                  <p className="mt-0.5 text-sm leading-relaxed text-craie-soft">{r.text}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <div className="ring-ropes" aria-hidden />

      {/* Round 02 — Pré-inscription : documents + formulaire */}
      <section id="pre-inscription" className="container-wide scroll-mt-24 py-16 pb-20 lg:py-20 lg:pb-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <div className="flex flex-col gap-8">
            <SectionTitle
              eyebrow="Round 02 · Pré-inscription"
              title="On prépare votre dossier ensemble"
              intro="Remplissez le formulaire : on vous rappelle sous 48h ouvrées pour caler la séance d'essai. Le dossier complet se finalise ensuite au gymnase."
            />

            <Reveal delay={0.1}>
              <h3 className="flex items-center gap-2 font-display text-lg text-craie">
                <FileText className="h-5 w-5 text-or" strokeWidth={1.75} />
                Les documents à prévoir
              </h3>
              <ul className="mt-5 space-y-4">
                {documents.map((doc) => (
                  <li key={doc.title} className="flex items-start gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-or-tint text-or">
                      <doc.icon className="h-4 w-4" strokeWidth={1.6} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-craie">{doc.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-craie-soft">{doc.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15} className="rounded-4xl border border-noir-line bg-bleu-tint p-6 sm:p-7">
              <h3 className="flex items-center gap-2 font-display text-lg text-craie">
                <Clock className="h-5 w-5 text-bleu-light" strokeWidth={1.75} />
                Permanences au gymnase
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-craie-soft">
                Pour déposer un dossier, poser vos questions ou régler l'adhésion :{" "}
                {association.address.venue}, {association.address.street},{" "}
                {association.address.city}.
              </p>
              <ul className="mt-4 space-y-2 border-t border-noir-line pt-4">
                {hours.map((h) => (
                  <li key={h.label} className="flex items-baseline justify-between gap-4 text-sm">
                    <span className="text-craie-soft">{h.label}</span>
                    <span className="font-condensed font-semibold uppercase tracking-[0.08em] text-craie">
                      {h.value}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 border-t border-noir-line pt-4 text-sm leading-relaxed text-craie-soft">
                Une hésitation avant de monter sur le ring ? Appelez le club au{" "}
                <a href={association.phoneHref} className="link-underline font-semibold text-craie">
                  {association.phone}
                </a>{" "}
                ou{" "}
                <Link href="/contact" className="link-underline font-semibold text-craie">
                  posez votre question
                </Link>{" "}
                — un coach vous rappelle sous 24h, sans jargon et sans pression.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <AdhesionForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
