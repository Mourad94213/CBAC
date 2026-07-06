import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  // "/espace-partenaires" est volontairement absent : la page est en noindex.
  const routes = [
    "/",
    "/association",
    "/actions",
    "/stages",
    "/interventions",
    "/coachs",
    "/calendrier",
    "/adhesion",
    "/galerie",
    "/actualites",
    "/contact",
  ];

  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
