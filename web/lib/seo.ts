import type { Metadata } from "next";
import { SITE_URL } from "./utils";
import { association } from "./data/site";
import type { Stage } from "./data/content";

const DEFAULT_OG = "/images/hero-ring.svg";

export function buildMetadata({
  title,
  description,
  path = "/",
  image = DEFAULT_OG,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: association.name,
      locale: "fr_FR",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: association.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

/* ── JSON-LD builders ──────────────────────────────────────── */

export function localBusinessLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["SportsActivityLocation", "SportsClub"],
    name: association.name,
    legalName: association.legalName,
    description:
      "Association de boxe anglaise et d'éducation populaire à Nanterre : cours d'initiation, stages vacances, galas amicaux et interventions itinérantes dans les gymnases, foyers, centres sociaux, écoles et entreprises.",
    url: SITE_URL,
    telephone: `+33${association.phone.replace(/\D/g, "").slice(1)}`,
    email: association.email,
    founder: { "@type": "Person", name: association.president },
    sport: "Boxe anglaise",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${association.address.venue}, ${association.address.street}`,
      postalCode: association.address.zip,
      addressLocality: association.address.city,
      addressCountry: "FR",
    },
    geo: { "@type": "GeoCoordinates", latitude: 48.8924, longitude: 2.2071 },
    areaServed: "Nanterre et Hauts-de-Seine",
    image: `${SITE_URL}${DEFAULT_OG}`,
    sameAs: [association.socials.instagram.url, association.socials.facebook.url],
  };
}

export function eventLd(stage: Stage) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: stage.title,
    description: stage.description,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Nanterre — gymnase communiqué à l'inscription",
      address: `${association.address.zip} ${association.address.city}`,
    },
    organizer: { "@type": "Organization", name: association.name, url: SITE_URL },
  };
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export function breadcrumbLd(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };
}
