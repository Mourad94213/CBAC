"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "cbac-exit-popup-vu";

/**
 * Pop-up d'intention de sortie : se déclenche quand la souris quitte le haut
 * du viewport, une seule fois par session (sessionStorage), et propose de
 * repartir avec la plaquette entreprises en PDF.
 */
export function ExitPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      /* stockage indisponible : on n'affiche pas le pop-up en boucle */
      seen = true;
    }
    if (seen) return;

    const onMouseLeave = (event: MouseEvent) => {
      // Seule la sortie par le haut (vers la barre d'adresse / les onglets)
      // traduit une intention de quitter la page.
      if (event.clientY > 8) return;
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
      setOpen(true);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
    };

    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    return () => document.documentElement.removeEventListener("mouseleave", onMouseLeave);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md text-center">
        <span className="eyebrow mx-auto">Avant de raccrocher les gants</span>
        <DialogTitle className="font-display text-2xl uppercase leading-tight text-craie">
          Repartez avec notre plaquette
        </DialogTitle>
        <DialogDescription className="text-[15px] leading-relaxed text-craie-soft">
          Initiations, cycles de séances, stages, temps d’échanges&nbsp;: retrouvez tous nos
          formats d’intervention dans la plaquette entreprises &amp; structures du CBAC — en PDF,
          à partager avec votre équipe.
        </DialogDescription>
        <div className="mt-2 flex flex-col items-center gap-3">
          <Button asChild onClick={() => setOpen(false)}>
            <a href="/docs/plaquette-entreprises-cbac.pdf" download>
              <Download className="h-4 w-4" strokeWidth={2} />
              Télécharger la plaquette (PDF)
            </a>
          </Button>
          <DialogClose className="text-sm font-semibold text-craie-muted transition-colors hover:text-craie">
            Non merci, je continue ma visite
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
