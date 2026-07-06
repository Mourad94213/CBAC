import type { Metadata } from "next";
import {
  Bus,
  CalendarClock,
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
  title: "Contact & accès",
  description:
    "Contactez le CBAC : Gymnase Léo-Lagrange, 12 rue du Ring, 92000 Nanterre. Téléphone, e-mail, horaires d'accueil et formulaire adapté à votre profil — particulier, entreprise, école ou structure sociale.",
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
            title="Poussez la porte du gymnase"
            intro="Une question, un projet, une envie d'essayer ? Écrivez-nous ou appelez-nous : on répond vite, et toujours avec le sourire."
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
                    Adresse
                  </span>
                  <span className="mt-0.5 block text-sm text-craie-soft">
                    {association.address.full}
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
                  <Bus className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <span>
                  <span className="block font-condensed text-sm font-semibold uppercase tracking-brand text-craie">
                    Accès
                  </span>
                  <span className="mt-0.5 block text-sm text-craie-soft">
                    Bus 304, arrêt Léo-Lagrange, puis 2 minutes à pied. Parking gratuit le long de
                    la rue du Ring, arceaux vélos devant le gymnase.
                  </span>
                </span>
              </div>

              {/* Horaires d'accueil */}
              <div className="border-t border-noir-line pt-5">
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-or-tint text-or">
                    <Clock className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 className="font-condensed text-sm font-semibold uppercase tracking-brand text-craie">
                      Horaires d&apos;accueil
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
                      Pendant les vacances scolaires, appelez avant de passer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-noir-line pt-5">
                <SocialIcons />
                <span className="text-sm text-craie-muted">
                  Suivez la vie du club au quotidien.
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

        {/* Plan d'accès stylisé */}
        <Reveal className="mt-16">
          <h2 className="font-display text-xl text-craie sm:text-2xl">Nous trouver à Nanterre</h2>
          <div className="mt-6 overflow-hidden rounded-4xl border border-noir-line shadow-card">
            <svg
              viewBox="0 0 960 480"
              role="img"
              aria-label="Plan stylisé du quartier : le gymnase Léo-Lagrange, rue du Ring à Nanterre, entre le parc et l'arrêt de bus Léo-Lagrange."
              className="h-auto w-full"
            >
              <title>Plan d&apos;accès stylisé au gymnase Léo-Lagrange</title>
              <defs>
                <linearGradient id="plan-fond" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#10141C" />
                  <stop offset="1" stopColor="#0B0E14" />
                </linearGradient>
                <radialGradient id="plan-halo" cx="0.42" cy="0.42" r="0.55">
                  <stop offset="0" stopColor="#2159D8" stopOpacity="0.18" />
                  <stop offset="1" stopColor="#2159D8" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* fond + halo projecteur sur le gymnase */}
              <rect width="960" height="480" fill="url(#plan-fond)" />
              <rect width="960" height="480" fill="url(#plan-halo)" />

              {/* trame d'îlots */}
              <g fill="#151A24" stroke="#242B3A" strokeWidth="1.5">
                <rect x="40" y="40" width="240" height="130" rx="14" />
                <rect x="40" y="220" width="240" height="110" rx="14" />
                <rect x="40" y="380" width="240" height="120" rx="14" />
                <rect x="330" y="40" width="220" height="130" rx="14" />
                <rect x="600" y="40" width="320" height="130" rx="14" />
                <rect x="600" y="380" width="320" height="120" rx="14" />
              </g>

              {/* parc des Anciennes-Mairies */}
              <rect x="600" y="220" width="320" height="110" rx="14" fill="#101B33" stroke="#2159D8" strokeOpacity="0.45" strokeWidth="1.5" />
              <g fill="none" stroke="#2159D8" strokeOpacity="0.5" strokeWidth="1.5">
                <circle cx="670" cy="262" r="13" />
                <circle cx="712" cy="290" r="10" />
                <circle cx="860" cy="268" r="12" />
                <circle cx="812" cy="296" r="9" />
              </g>
              <text x="760" y="279" textAnchor="middle" fill="#8E939E" fontSize="14" fontFamily="var(--font-barlow), system-ui, sans-serif">
                Parc des Anciennes-Mairies
              </text>

              {/* rues */}
              <g stroke="#242B3A" strokeWidth="22" strokeLinecap="round">
                <path d="M20 195 H940" />
                <path d="M20 355 H940" />
                <path d="M305 20 V460" />
                <path d="M575 20 V460" />
              </g>
              <g stroke="#0B0E14" strokeWidth="2" strokeDasharray="10 12" opacity="0.9">
                <path d="M20 195 H940" />
                <path d="M20 355 H940" />
                <path d="M305 20 V460" />
                <path d="M575 20 V460" />
              </g>

              {/* noms de rues */}
              <g fill="#8E939E" fontSize="13" fontFamily="var(--font-barlow-condensed), system-ui, sans-serif" letterSpacing="2">
                <text x="90" y="188">RUE DU RING</text>
                <text x="640" y="348">AVENUE DE LA RÉPUBLIQUE</text>
                <text x="318" y="452" transform="rotate(-90 318 452)">RUE DES GANTS D&apos;OR</text>
              </g>

              {/* gymnase Léo-Lagrange */}
              <g>
                <rect x="330" y="220" width="220" height="110" rx="14" fill="#151A24" stroke="#E4CE7E" strokeOpacity="0.7" strokeWidth="2" />
                <rect x="352" y="244" width="60" height="40" rx="6" fill="none" stroke="#E4CE7E" strokeOpacity="0.55" strokeWidth="1.5" />
                <path d="M352 254 h60 M352 274 h60" stroke="#E4CE7E" strokeOpacity="0.35" strokeWidth="1.5" />
                <text x="430" y="262" fill="#F2EFE6" fontSize="15" fontWeight="600" fontFamily="var(--font-barlow), system-ui, sans-serif">
                  Gymnase
                </text>
                <text x="430" y="282" fill="#F2EFE6" fontSize="15" fontWeight="600" fontFamily="var(--font-barlow), system-ui, sans-serif">
                  Léo-Lagrange
                </text>
                <text x="352" y="312" fill="#8E939E" fontSize="12" fontFamily="var(--font-barlow), system-ui, sans-serif">
                  12 rue du Ring — entrée côté parvis
                </text>
              </g>

              {/* repère CBAC */}
              <g>
                <circle cx="440" cy="204" r="26" fill="#D7263D" opacity="0.16" />
                <circle cx="440" cy="204" r="16" fill="#D7263D" opacity="0.28" />
                <circle cx="440" cy="204" r="8" fill="#D7263D" />
                <circle cx="440" cy="204" r="3" fill="#F2EFE6" />
                <text x="470" y="209" fill="#E4CE7E" fontSize="14" fontWeight="700" fontFamily="var(--font-barlow-condensed), system-ui, sans-serif" letterSpacing="2">
                  CBAC — C&apos;EST ICI
                </text>
              </g>

              {/* arrêt de bus */}
              <g>
                <circle cx="575" cy="355" r="11" fill="#10141C" stroke="#2159D8" strokeWidth="2" />
                <text x="575" y="360" textAnchor="middle" fill="#4E7FEA" fontSize="11" fontWeight="700" fontFamily="var(--font-barlow), system-ui, sans-serif">
                  B
                </text>
                <text x="596" y="378" fill="#8E939E" fontSize="12" fontFamily="var(--font-barlow), system-ui, sans-serif">
                  Bus 304 · arrêt Léo-Lagrange
                </text>
              </g>

              {/* boussole */}
              <g transform="translate(896 64)">
                <circle r="20" fill="none" stroke="#242B3A" strokeWidth="1.5" />
                <path d="M0 -12 L5 6 L0 2 L-5 6 Z" fill="#E4CE7E" />
                <text y="-26" textAnchor="middle" fill="#8E939E" fontSize="12" fontFamily="var(--font-barlow), system-ui, sans-serif">
                  N
                </text>
              </g>
            </svg>
          </div>
          <p className="mt-4 text-sm text-craie-muted">
            Plan de maquette, non contractuel. Si vous tournez en rond, appelez-nous au{" "}
            <a href={association.phoneHref} className="link-underline text-craie hover:text-or">
              {association.phone}
            </a>
            , on vient vous chercher au coin de la rue.
          </p>
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
                Un coach référent vous écoute et vous oriente vers le bon programme : boxe
                éducative pour votre enfant, cardio-boxe pour reprendre en douceur, intervention
                sur mesure pour votre structure. Pas de case toute faite — un vrai conseil.
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
                Venez voir un cours, rencontrer l&apos;équipe et poser toutes vos questions — au
                gymnase ou en visio pour les structures. Trente minutes suffisent pour sentir
                l&apos;esprit du club et repartir avec un plan clair.
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
                  Appeler le club
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
