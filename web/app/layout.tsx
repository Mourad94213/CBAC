import type { Metadata, Viewport } from "next";
import { Anton, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/utils";
import { association } from "@/lib/data/site";
import { localBusinessLd } from "@/lib/seo";
import { DevisProvider } from "@/components/devis/devis-store";
import { DevisRoot } from "@/components/devis/devis-root";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileActionBar } from "@/components/layout/mobile-action-bar";
import { RappelFlottant } from "@/components/layout/rappel-flottant";
import { JsonLd } from "@/components/seo/json-ld";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CBAC · Boxe anglaise & éducation populaire à Nanterre",
    template: "%s · CBAC",
  },
  description:
    "CBAC, association loi 1901 à Nanterre : cours d'initiation, stages vacances, galas amicaux et interventions itinérantes dans les gymnases, foyers, centres sociaux, écoles et entreprises. La boxe anglaise comme école de vie.",
  applicationName: association.name,
  keywords: [
    "boxe anglaise Nanterre",
    "association boxe 92",
    "boxe éducative enfant",
    "cardio-boxe",
    "team building boxe",
    "éducation populaire",
    "CBAC",
  ],
  authors: [{ name: association.legalName }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: association.name,
    url: SITE_URL,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0B0E14",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${anton.variable} ${barlow.variable} ${barlowCondensed.variable}`}>
      <body className="min-h-dvh">
        <JsonLd data={localBusinessLd()} />
        <DevisProvider>
          <AnnouncementBar />
          <Header />
          <main className="pb-20 lg:pb-0">{children}</main>
          <Footer />
          <MobileActionBar />
          <RappelFlottant />
          <DevisRoot />
        </DevisProvider>
      </body>
    </html>
  );
}
