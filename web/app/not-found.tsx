import type { Metadata } from "next";
import Link from "next/link";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Page introuvable" };

export default function NotFound() {
  return (
    <section className="container-wide relative flex min-h-[60dvh] flex-col items-center justify-center gap-6 py-24 text-center spotlight">
      <p className="eyebrow">Erreur 404</p>
      <h1 className="text-balance text-3xl sm:text-4xl">Hors des cordes.</h1>
      <p className="max-w-md text-[15px] text-craie-soft">
        La page que vous cherchez est sortie du ring — elle n&apos;existe pas, ou plus.
      </p>
      <Button asChild size="lg">
        <Link href="/">
          <Home className="h-4 w-4" strokeWidth={1.75} />
          Retour à l&apos;accueil
        </Link>
      </Button>
    </section>
  );
}
