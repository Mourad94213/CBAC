import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { association, hours } from "@/lib/data/site";
import { actions } from "@/lib/data/actions";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { SocialIcons } from "@/components/site/social-icons";

const assoNav: { label: string; href: string }[] = [
  { label: "Qui sommes-nous ?", href: "/association" },
  { label: "Nos coachs", href: "/coachs" },
  { label: "Interventions sur mesure", href: "/interventions" },
  { label: "Calendrier du mois", href: "/calendrier" },
  { label: "Adhésion & soutien", href: "/adhesion" },
  { label: "Galerie", href: "/galerie" },
  { label: "Actualités", href: "/actualites" },
  { label: "Espace partenaires", href: "/espace-partenaires" },
];

const legalNav: { label: string; href: string }[] = [
  { label: "Mentions légales", href: "/contact#mentions" },
  { label: "Confidentialité", href: "/contact#confidentialite" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-noir-line bg-noir-deep">
      <div className="ring-ropes" aria-hidden />

      <div className="container-wide grid gap-12 py-16 lg:grid-cols-[1.4fr_2fr]">
        <div className="flex flex-col gap-5">
          <Link href="/" aria-label="CBAC, accueil" className="w-fit">
            <Image
              src="/images/logo-cbac.jpg"
              alt="CBAC"
              width={140}
              height={140}
              className="h-16 w-16 rounded-2xl border border-noir-line object-cover"
            />
          </Link>
          <p className="max-w-xs text-[15px] leading-relaxed text-craie-soft">
            {association.tagline}. Boxe anglaise &amp; éducation populaire à Nanterre — pour les
            enfants, les ados, les adultes et les structures.
          </p>
          <SocialIcons />

          <div className="mt-2">
            <h3 className="font-condensed text-sm font-bold uppercase tracking-brand text-or">
              Les news du ring
            </h3>
            <p className="mt-3 max-w-xs text-sm text-craie-soft">
              Stages, galas, nouveaux lieux d&apos;intervention et coulisses de l&apos;association — une fois par mois, jamais
              plus.
            </p>
            <NewsletterForm className="mt-4 max-w-md" />
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          <nav aria-label="L'association">
            <h3 className="font-condensed text-sm font-bold uppercase tracking-brand text-or">L&apos;association</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {assoNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-craie-soft transition-colors hover:text-or">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Nos actions">
            <h3 className="font-condensed text-sm font-bold uppercase tracking-brand text-or">Nos actions</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {actions.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/actions#${a.slug}`}
                    className="text-sm text-craie-soft transition-colors hover:text-or"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/interventions" className="text-sm text-craie-soft transition-colors hover:text-or">
                  Interventions sur mesure
                </Link>
              </li>
              <li>
                <Link href="/actions" className="text-sm font-semibold text-craie transition-colors hover:text-or">
                  Toutes nos actions
                </Link>
              </li>
            </ul>
          </nav>

          <address className="not-italic">
            <h3 className="font-condensed text-sm font-bold uppercase tracking-brand text-or">Contact &amp; horaires</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-craie-soft">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-rouge-light" strokeWidth={1.75} />
                <span>{association.address.full}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-rouge-light" strokeWidth={1.75} />
                <a href={association.phoneHref} className="transition-colors hover:text-or">
                  {association.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-rouge-light" strokeWidth={1.75} />
                <a href={association.emailHref} className="transition-colors hover:text-or">
                  {association.email}
                </a>
              </li>
              {hours.map((h) => (
                <li key={h.label} className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-rouge-light" strokeWidth={1.75} />
                  <span>
                    {h.label} : {h.value}
                  </span>
                </li>
              ))}
            </ul>
          </address>
        </div>
      </div>

      <div className="border-t border-noir-line">
        <div className="container-wide flex flex-col gap-4 py-6 text-xs text-craie-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {association.legalName} — association loi 1901. Tous droits réservés.</p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalNav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-or">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <p>Maquette de démonstration — coordonnées fictives.</p>
        </div>
      </div>
    </footer>
  );
}
