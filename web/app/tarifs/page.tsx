import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  CreditCard,
  Dumbbell,
  HandCoins,
  ShieldCheck,
  Sparkles,
  Ticket,
  Trophy,
  Users,
} from "lucide-react";
import { buildMetadata, breadcrumbLd, faqLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionTitle } from "@/components/site/section-title";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { FramedImage } from "@/components/site/framed-image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DevisButton } from "@/components/devis/devis-button";
import { tarifs } from "@/lib/data/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Tarifs & aides",
  description:
    "Les tarifs du CBAC à Nanterre : adhésion annuelle enfant, ado et adulte, cardio-boxe, option compétition. Licence FFBoxe et assurance incluses, Pass'Sport, tarif solidaire selon quotient familial et paiement en 3 fois sans frais.",
  path: "/tarifs",
});

/* La carte « Réductions & aides » du jeu de données alimente la section
   dédiée aux aides — les autres entrées forment la grille de formules. */
const AIDES_LABEL = "Réductions & aides";
const HIGHLIGHT_LABEL = "Adhésion annuelle enfant";

const formules = tarifs.filter((t) => t.label !== AIDES_LABEL);
const aidesCard = tarifs.find((t) => t.label === AIDES_LABEL);

const aidesIcons = [Ticket, HandCoins, Users, CreditCard];
const aidesTitres = ["Pass'Sport", "Tarif solidaire", "Tarif famille", "Paiement fractionné"];

const inclus = [
  {
    icon: Ticket,
    title: "Licence FFBoxe",
    text: "La licence fédérale de la saison est comprise dans chaque adhésion — rien à ajouter.",
  },
  {
    icon: ShieldCheck,
    title: "Assurance complète",
    text: "Responsabilité civile et individuelle accident couvrent chaque pratiquant, à chaque séance.",
  },
  {
    icon: Dumbbell,
    title: "Matériel fourni",
    text: "Gants, casques et pattes d'ours sont prêtés et désinfectés. Seul le protège-dents est personnel.",
  },
  {
    icon: Trophy,
    title: "La vie du club",
    text: "Gala amical, sorties boxe et événements du CBAC sont ouverts à tous les adhérents.",
  },
];

const faqPaiement: { q: string; a: string }[] = [
  {
    q: "Quand règle-t-on l'adhésion ?",
    a: "Après la séance d'essai gratuite, au moment du dépôt du dossier. L'adhésion couvre toute la saison sportive, de septembre à juin — aucune somme n'est demandée avant que vous ayez mis les gants.",
  },
  {
    q: "Peut-on payer en plusieurs fois ?",
    a: "Oui, en 3 fois sans frais : trois chèques remis à l'inscription et encaissés sur trois mois, ou trois virements échelonnés. Il suffit de le demander au moment du dossier, sans justificatif.",
  },
  {
    q: "Quels moyens de paiement acceptez-vous ?",
    a: "Chèque, virement, espèces (contre reçu) et coupons sport ANCV. Le Pass'Sport est déduit immédiatement du montant à régler pour les jeunes éligibles : apportez simplement votre code.",
  },
  {
    q: "Comment bénéficier du tarif solidaire (quotient familial) ?",
    a: "Présentez votre attestation de quotient familial CAF lors du dépôt du dossier : le barème solidaire s'applique automatiquement, jusqu'à −50 % sur l'adhésion. La démarche se fait en toute confidentialité, auprès du bureau uniquement.",
  },
  {
    q: "Et si j'arrête en cours de saison ?",
    a: "En cas de déménagement, de blessure longue ou de raison médicale justifiée, l'adhésion est remboursée au prorata des mois restants. Seule la part correspondant à la licence fédérale, reversée à la FFBoxe, ne peut pas être remboursée.",
  },
];

export default function TarifsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Accueil", path: "/" },
            { name: "Tarifs & aides", path: "/tarifs" },
          ]),
          faqLd(faqPaiement),
        ]}
      />

      {/* Hero */}
      <section className="spotlight container-wide py-12 lg:py-16">
        <SectionTitle
          as="h1"
          eyebrow="Tarifs & aides"
          title="Des tarifs clairs, un club accessible à tous"
          intro="Adhésion à l'année, licence FFBoxe et assurance incluses, matériel prêté. Et si le budget coince, on trouve une solution ensemble — c'est un principe d'éducation populaire."
        />
        <p className="mt-5 text-sm text-craie-muted">
          Tarifs de la saison 2026-2027 (maquette de démonstration) — le montant exact est confirmé
          au moment du dossier, après la séance d'essai gratuite.
        </p>
      </section>

      {/* Round 01 — Les formules */}
      <section className="container-wide pb-4">
        <SectionTitle
          eyebrow="Round 01 · Les formules"
          title="Une adhésion, une saison complète"
          intro="Chaque formule couvre la saison de septembre à juin, licence et assurance comprises."
        />
        <Stagger className="mt-10 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
          {formules.map((formule) => {
            const highlight = formule.label === HIGHLIGHT_LABEL;
            const option = formule.prix.startsWith("+");
            const [montant, periode] = formule.prix.split(" / ");
            return (
              <StaggerItem key={formule.label} className="h-full">
                <div
                  className={cn(
                    "flex h-full flex-col rounded-4xl border bg-noir-card p-7",
                    highlight
                      ? "border-or/60 shadow-glow-or"
                      : "border-noir-line shadow-soft",
                  )}
                >
                  <div className="flex min-h-6 flex-wrap items-center gap-2">
                    {highlight && (
                      <Badge tone="or">
                        <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
                        Le plus demandé
                      </Badge>
                    )}
                    {option && <Badge tone="bleu">En option</Badge>}
                  </div>

                  <h3 className="mt-4 font-display text-xl text-craie">{formule.label}</h3>
                  <p className="mt-1 font-condensed text-sm font-semibold uppercase tracking-[0.12em] text-craie-muted">
                    {formule.public}
                  </p>

                  <p className="mt-4 flex items-baseline gap-1.5">
                    <span className="font-condensed text-4xl font-semibold text-or">{montant}</span>
                    {periode && <span className="text-sm text-craie-muted">/ {periode}</span>}
                  </p>

                  <ul className="mt-5 flex-1 space-y-2.5 border-t border-noir-line pt-5">
                    {formule.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2.5 text-sm text-craie-soft">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-bleu-tint text-bleu-light">
                          <Check className="h-3 w-3" strokeWidth={2.25} />
                        </span>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 pt-1">
                    <Button asChild variant={highlight ? "primary" : "outline"} className="w-full">
                      <Link href="/adhesion">
                        S'inscrire
                        <ArrowRight className="h-4 w-4" strokeWidth={2} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* Ce qui est inclus — liste nue, sans boîtes */}
      <section className="container-wide py-20 lg:py-24">
        <SectionTitle
          eyebrow="Tout compris"
          title="Ce que chaque adhésion comprend"
          intro="Pas de frais cachés ni de suppléments surprise : tout ce qu'il faut pour boxer toute la saison est déjà dans le prix."
        />
        <Stagger className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {inclus.map((item) => (
            <StaggerItem key={item.title}>
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-bleu-tint text-bleu-light">
                <item.icon className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <h3 className="mt-4 font-display text-base text-craie">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-craie-soft">{item.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <div className="ring-ropes" aria-hidden />

      {/* Round 02 — Aides & réductions */}
      <section className="container-wide py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:items-start">
          <div className="flex flex-col gap-8">
            <SectionTitle
              eyebrow="Round 02 · Aides & réductions"
              title="Le prix ne doit jamais être un adversaire"
              intro="Pass'Sport, quotient familial, tarif famille, paiement fractionné : plusieurs coups de pouce se cumulent pour que chacun puisse monter sur le ring."
            />
            <Reveal delay={0.1}>
              <FramedImage
                src="/images/transmission.svg"
                alt="Un adulte passe le gant à un enfant — la transmission au cœur du CBAC"
                ratio="aspect-[4/3]"
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="shadow-card"
              />
            </Reveal>
          </div>

          <Stagger className="grid gap-4 sm:grid-cols-2">
            {(aidesCard?.details ?? []).map((detail, i) => {
              const Icon = aidesIcons[i % aidesIcons.length];
              return (
                <StaggerItem key={detail} className="h-full">
                  <div className="flex h-full flex-col gap-3 rounded-4xl border border-or/25 bg-or-tint p-6">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-noir-card text-or">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <h3 className="font-display text-lg text-craie">
                      {aidesTitres[i] ?? "Coup de pouce"}
                    </h3>
                    <p className="text-sm leading-relaxed text-craie-soft">{detail}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>

        <Reveal delay={0.15}>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-craie-soft">
            <strong className="text-or">Budget vraiment serré ?</strong> Passez voir le bureau
            pendant les permanences ou écrivez-nous : un échéancier personnalisé est toujours
            possible, en toute confidentialité. Au CBAC, personne ne reste hors des cordes pour une
            question d'argent.
          </p>
        </Reveal>
      </section>

      {/* Round 03 — FAQ paiement */}
      <section className="container-wide py-4 lg:py-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionTitle
            eyebrow="Round 03 · Questions paiement"
            title="Le règlement, sans zones d'ombre"
            intro="Quand payer, comment, et que se passe-t-il si la vie en décide autrement."
          />
          <Reveal>
            <Accordion
              type="single"
              collapsible
              className="rounded-4xl border border-noir-line bg-noir-card px-6 shadow-soft"
            >
              {faqPaiement.map((item) => (
                <AccordionItem key={item.q} value={item.q} className="last:border-b-0">
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* CTA final — essai gratuit + groupes/structures */}
      <section className="container-wide py-20 lg:py-24">
        <Reveal className="grain relative overflow-hidden rounded-5xl bg-gradient-to-br from-rouge to-rouge-dark p-8 text-craie shadow-glow-rouge sm:p-10">
          <div className="relative z-10 flex flex-col items-start gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <span className="pill bg-craie/15 text-craie">
                <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
                Le meilleur point de départ
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl">
                Avant de parler tarif, venez mettre les gants.
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-craie">
                La première séance est gratuite et sans engagement — vous choisissez votre formule
                après, jamais avant. Vous inscrivez un groupe ou une structure ? Les interventions
                sur mesure font l'objet d'un devis dédié, envoyé sous 48h.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-craie text-rouge shadow-none hover:bg-craie/90 hover:shadow-none"
              >
                <Link href="/adhesion">
                  Réserver mon essai gratuit
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </Link>
              </Button>
              <DevisButton variant="secondary" size="lg" />
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
