import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/utils";
import { activites } from "@/lib/data/activites";

export default function sitemap(): MetadataRoute.Sitemap {
  // "/espace-partenaires" est volontairement absent : la page est en noindex.
  const routes = [
    "/",
    "/association",
    "/activites",
    "/stages",
    "/interventions",
    "/coachs",
    "/calendrier",
    "/tarifs",
    "/adhesion",
    "/galerie",
    "/actualites",
    "/contact",
  ];

  const staticPages: MetadataRoute.Sitemap = routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));

  const activitePages: MetadataRoute.Sitemap = activites.map((a) => ({
    url: `${SITE_URL}/activites/${a.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...activitePages];
}
