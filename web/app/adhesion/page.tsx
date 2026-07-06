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
  title: "Adhésion · Rejoindre l'association",
  description:
    "Rejoindre le CBAC : une rencontre sur l'un de nos lieux d'intervention, un bulletin d'adhésion, et vous participez à la vie de l'association — initiations, stages, sorties, bénévolat.",
  path: "/adhesion",
});

const etapes = [
  {
    num: "01",
    title: "On se rencontre",
    text: "Venez à une initiation ou à un événement près de chez vous — le calendrier du mois indique où nous trouver. Tenue de sport, une gourde : on apporte les gants.",
  },
  {
    num: "02",
    title: "Le bulletin d'adhésion",
    text: "Convaincu·e ? Vous remplissez la pré-inscription en ligne ci-dessous et on finalise le bulletin ensemble, sur place, à la séance suivante. Dix minutes, pas plus.",
  },
  {
    num: "03",
    title: "Vous faites partie de l'asso",
    text: "Initiations, stages, sorties boxe, coups de main sur les événements : vous participez à la vie de l'association, à votre mesure. Bienvenue entre les cordes.",
  },
];

const documents = [
  {
    icon: HeartPulse,
    title: "Questionnaire ou certificat de santé",
    text: "Les documents de santé demandés sont précisés par l'équipe au moment de l'adhésion.",
  },
  {
    icon: Camera,
    title: "Une photo d'identité",
    text: "Une photo de téléphone bien cadrée fait parfaitement l'affaire.",
  },
  {
    icon: Wallet,
    title: "La cotisation annuelle",
    text: "Le montant est précisé sur le bulletin d'adhésion — renseignez-vous auprès de l'équipe lors de votre première rencontre.",
  },
  {
    icon: PenLine,
    title: "L'autorisation parentale (mineurs)",
    text: "Signée par le responsable légal lors de la première séance.",
  },
];

const reassurances = [
  {
    icon: Sparkles,
    title: "On se rencontre d'abord",
    text: "Venez nous voir sur une action : on discute, vous vous faites une idée avant de vous engager.",
  },
  {
    icon: HandCoins,
    title: "Ouvert à tous",
    text: "Débutants comme boxeurs expérimentés : l'association est destinée à tous les publics.",
  },
  {
    icon: ShieldCheck,
    title: "À votre mesure",
    text: "Participant·e, bénévole, coup de main sur les événements : chacun s'engage comme il peut.",
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

      {/* Hero — le CTA mène droit au formulaire. */}
      <section className="spotlight container-wide py-14 lg:py-20">
        <SectionTitle
          as="h1"
          eyebrow="Adhésion"
          title="Rejoindre l'association, en trois rounds"
          intro="Pas de parcours du combattant pour devenir adhérent·e : une rencontre, un bulletin de dix minutes — et vous faites partie de l'aventure, comme participant·e ou comme bénévole."
        />
        <Reveal delay={0.15} className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button asChild size="lg">
            <Link href="#pre-inscription">
              Demander mon adhésion
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </Button>
          <p className="max-w-sm text-sm leading-relaxed text-craie-muted">
            Enfant, ado ou adulte, débutant ou expérimenté : l&apos;association est destinée à
            tous les publics.
          </p>
        </Reveal>
      </section>

      {/* Round 01 — Le parcours */}
      <section className="container-wide py-16 lg:py-20">
        <SectionTitle
          eyebrow="Round 01 · Le parcours"
          title="De la première touche à l'adhésion"
          intro="Trois étapes, dans cet ordre — et à chaque étape, quelqu'un de l'association pour vous accompagner."
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
              title="On prépare votre adhésion ensemble"
              intro="Remplissez le formulaire : on vous rappelle sous 48h ouvrées pour vous inviter à la prochaine séance ou rencontre. Le bulletin se signe ensuite sur place."
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
                Comment nous joindre
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-craie-soft">
                L&apos;association n&apos;a pas de local d&apos;accueil : tout se passe par téléphone,
                par e-mail ou directement sur nos lieux d&apos;intervention (voir le{" "}
                <Link href="/calendrier" className="link-underline font-semibold text-craie">
                  calendrier du mois
                </Link>
                ). Siège social : {association.address.full}.
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
                Une hésitation avant de monter sur le ring ? Appelez l&apos;association au{" "}
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
