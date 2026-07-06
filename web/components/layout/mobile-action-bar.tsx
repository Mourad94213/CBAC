import Link from "next/link";
import { Phone } from "lucide-react";
import { association } from "@/lib/data/site";
import { Button } from "@/components/ui/button";
import { DevisButton } from "@/components/devis/devis-button";

/** Barre d'actions collée en bas (mobile uniquement) — adhésion, devis et appel à un geste. */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-noir-line bg-noir/95 backdrop-blur-md lg:hidden">
      <div className="container-wide flex items-center gap-3 py-3">
        <Button asChild variant="outline" size="md" className="flex-1">
          <Link href="/adhesion">Adhésion</Link>
        </Button>
        <DevisButton size="md" className="flex-[1.3]">
          Devis
        </DevisButton>
        <a
          href={association.phoneHref}
          aria-label={`Appeler l'association au ${association.phone}`}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-craie/30 text-craie transition-colors hover:border-or hover:text-or"
        >
          <Phone className="h-5 w-5" strokeWidth={1.75} />
        </a>
      </div>
    </div>
  );
}
