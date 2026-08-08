import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarClock,
  CalendarDays,
  Clock,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  PhoneCall,
} from "lucide-react";
import { buildMetadata, breadcrumbLd, localBusinessLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionTitle } from "@/components/site/section-title";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { ContactForm } from "@/components/forms/contact-form";
import { SocialIcons } from "@/components/site/social-icons";
import { Button } from "@/components/ui/button";
import { DevisButton } from "@/components/devis/devis-button";
import { association, hours } from "@/lib/data/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contactez le CBAC : téléphone, e-mail, permanences et formulaire adapté à votre profil — particulier, entreprise, école ou structure sociale. L'association n'a pas de local d'accueil : on se joint, puis on se retrouve sur un lieu d'intervention.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessLd(),
          breadcrumbLd([
            { name: "Accueil", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="spotlight relative">
        <div className="container-wide py-12 lg:py-16">
          <SectionTitle
            as="h1"
            eyebrow="Contact"
            title="On n'a pas de porte — mais on répond toujours"
            intro="Pas de local d'accueil au CBAC : tout commence par un appel, un e-mail ou ce formulaire. Ensuite, on se retrouve sur l'un de nos lieux d'intervention. On répond vite, et toujours avec le sourire."
          />
        </div>
      </section>

      {/* Coordonnées, horaires, formulaire & plan — une seule section */}
      <section className="container-wide pb-20 lg:pb-24">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          {/* Coordonnées + horaires */}
          <Reveal>
            <div className="flex flex-col gap-5 rounded-4xl border border-noir-line bg-noir-card p-7 shadow-soft sm:p-8">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-bleu-tint text-bleu-light">
                  <MapPin className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <span>
                  <span className="block font-condensed text-sm font-semibold uppercase tracking-brand text-craie">
                    Siège social
                  </span>
                  <span className="mt-0.5 block text-sm text-craie-soft">
                    {association.address.full}
                    <span className="mt-0.5 block text-craie-muted">
                      Adresse administrative uniquement — les séances ont lieu sur nos lieux
                      d&apos;intervention.
                    </span>
                  </span>
                </span>
              </div>

              <a href={association.phoneHref} className="group flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-rouge-tint text-rouge-light">
                  <Phone className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <span>
                  <span className="block font-condensed text-sm font-semibold uppercase tracking-brand text-craie">
                    Téléphone
                  </span>
                  <span className="mt-0.5 block text-sm text-craie-soft transition-colors group-hover:text-or">
                    {association.phone}
                  </span>
                </span>
              </a>

              <a href={association.emailHref} className="group flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-or-tint text-or">
                  <Mail className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <span>
                  <span className="block font-condensed text-sm font-semibold uppercase tracking-brand text-craie">
                    E-mail
                  </span>
                  <span className="mt-0.5 block break-all text-sm text-craie-soft transition-colors group-hover:text-or">
                    {association.email}
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-bleu-tint text-bleu-light">
                  <CalendarDays className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <span>
                  <span className="block font-condensed text-sm font-semibold uppercase tracking-brand text-craie">
                    Nous rencontrer
                  </span>
                  <span className="mt-0.5 block text-sm text-craie-soft">
                    Le plus simple : venir sur l&apos;une de nos actions. Le{" "}
                    <Link href="/calendrier" className="link-underline font-semibold text-craie">
                      calendrier du mois
                    </Link>{" "}
                    indique les lieux et les dates dès qu&apos;ils sont calés.
                  </span>
                </span>
              </div>

              {/* Permanences */}
              <div className="border-t border-noir-line pt-5">
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-or-tint text-or">
                    <Clock className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 className="font-condensed text-sm font-semibold uppercase tracking-brand text-craie">
                      Permanences
                    </h2>
                    <ul className="mt-1 flex flex-col divide-y divide-noir-line">
                      {hours.map((h) => (
                        <li key={h.label} className="flex items-baseline justify-between gap-4 py-2">
                          <span className="text-sm text-craie-soft">{h.label}</span>
                          <span className="font-condensed text-base font-semibold tracking-wide text-craie">
                            {h.value}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-2 text-sm text-craie-muted">
                      Pendant les séances, on est dans les gants : laissez un message, on rappelle.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-noir-line pt-5">
                <SocialIcons />
                <span className="text-sm text-craie-muted">
                  Suivez la vie de l&apos;association au quotidien.
                </span>
              </div>
            </div>
          </Reveal>

          {/* Formulaire */}
          <Reveal delay={0.05} className="flex flex-col gap-3">
            <h2 className="font-display text-xl text-craie sm:text-2xl">
              Envoyez votre direct
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-craie-soft">
              Particulier, entreprise, école ou structure sociale : dites-nous qui vous êtes, le
              formulaire s&apos;adapte. Réponse sous 24h ouvrées, promis.
            </p>
            <div className="mt-1">
              <ContactForm />
            </div>
          </Reveal>
        </div>

        {/* Où nous croiser — l'association n'a pas d'adresse à visiter, elle a des rendez-vous */}
        <Reveal className="mt-16">
          <h2 className="font-display text-xl text-craie sm:text-2xl">Où nous croiser</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-craie-soft">
            Pas de plan d&apos;accès à afficher : en attendant nos propres locaux, on pose les
            gants chez nos structures partenaires — foyers, centres sociaux, écoles,
            entreprises — et les rendez-vous sont annoncés au calendrier dès qu&apos;ils sont calés.
          </p>
          <div className="mt-6">
            <Button asChild variant="outline" size="md">
              <Link href="/calendrier">
                Voir le calendrier du mois
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>

      <div className="ring-ropes" aria-hidden />

      {/* Votre corner */}
      <section className="spotlight relative bg-noir-surface">
        <div className="container-wide py-20 lg:py-24">
          <SectionTitle
            align="center"
            eyebrow="Votre corner"
            title="Entre les rounds, on est dans votre coin"
            intro="Sur un ring, le corner conseille, encourage et veille sur le boxeur. Au CBAC, c'est exactement notre rôle pour vous, du premier contact à la première séance."
          />

          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <StaggerItem className="flex flex-col gap-4 rounded-4xl border border-noir-line bg-noir-card p-7 shadow-soft">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-or-tint text-or">
                <HeartHandshake className="h-6 w-6" strokeWidth={1.6} />
              </span>
              <h3 className="font-display text-lg text-craie">Accompagnement personnalisé</h3>
              <p className="text-sm leading-relaxed text-craie-soft">
                Un coach référent vous écoute et vous oriente vers la bonne action : initiation ou
                stage pour votre enfant, séance découverte pour vous, intervention sur mesure pour
                votre structure. Pas de case toute faite — un vrai conseil.
              </p>
            </StaggerItem>

            <StaggerItem className="flex flex-col gap-4 rounded-4xl border border-noir-line bg-noir-card p-7 shadow-soft">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-rouge-tint text-rouge-light">
                <PhoneCall className="h-6 w-6" strokeWidth={1.6} />
              </span>
              <h3 className="font-display text-lg text-craie">Rappel sous 24h</h3>
              <p className="text-sm leading-relaxed text-craie-soft">
                Pas le temps d&apos;écrire ? Laissez-nous votre numéro via le bouton rouge « Rappel
                sous 24h » en bas de page — ou cochez la case dans le formulaire. On vous rappelle
                sous 24h ouvrées, sur le créneau qui vous arrange.
              </p>
            </StaggerItem>

            <StaggerItem className="flex flex-col gap-4 rounded-4xl border border-noir-line bg-noir-card p-7 shadow-soft sm:col-span-2 lg:col-span-1">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-bleu-tint text-bleu-light">
                <CalendarClock className="h-6 w-6" strokeWidth={1.6} />
              </span>
              <h3 className="font-display text-lg text-craie">Rendez-vous de présentation</h3>
              <p className="text-sm leading-relaxed text-craie-soft">
                Venez voir une séance sur l&apos;un de nos lieux d&apos;intervention, ou échangez en
                visio pour les structures. Trente minutes suffisent pour sentir l&apos;esprit de
                l&apos;association et repartir avec un plan clair.
              </p>
            </StaggerItem>
          </Stagger>

          <Reveal delay={0.1} className="mt-10 flex flex-col items-center gap-4 text-center">
            <p className="max-w-xl text-sm leading-relaxed text-craie-muted">
              {association.promise}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <a href={association.phoneHref}>
                  <Phone className="h-4 w-4" strokeWidth={1.75} />
                  Appeler l&apos;association
                </a>
              </Button>
              <DevisButton variant="secondary" size="lg" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mentions légales & confidentialité (maquette) — cibles des liens du footer */}
      <section className="container-wide py-16 lg:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <section id="mentions" className="scroll-mt-24">
            <h2 className="font-display text-lg text-craie">Mentions légales</h2>
            <p className="mt-3 text-sm leading-relaxed text-craie-soft">
              Site édité par l’{association.legalName}, association loi 1901 —{" "}
              {association.address.full}. Directeur de la publication :{" "}
              {association.president}, président. Maquette de démonstration : coordonnées,
              contenus et visuels fictifs, présentés à titre d’exemple uniquement.
            </p>
          </section>
          <section id="confidentialite" className="scroll-mt-24">
            <h2 className="font-display text-lg text-craie">Confidentialité</h2>
            <p className="mt-3 text-sm leading-relaxed text-craie-soft">
              Les formulaires de cette maquette n’envoient aucune donnée : rien n’est collecté,
              stocké ni transmis. Sur le site réel, vos informations serviraient uniquement à
              répondre à votre demande, sans cession à des tiers, avec droit d’accès, de
              rectification et de suppression sur simple demande à{" "}
              <a href={association.emailHref} className="link-underline text-craie hover:text-or">
                {association.email}
              </a>
              .
            </p>
          </section>
        </div>
      </section>
    </>
  );
}
