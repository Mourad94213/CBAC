"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { useDevis, type CibleDevis } from "./devis-store";

/**
 * Ouvre le configurateur de devis depuis n'importe où (header, sections, CTA).
 * `cible` pré-sélectionne l'étape « Vous êtes… » (ex. depuis /interventions#entreprises).
 */
export function DevisButton({
  cible,
  children,
  ...props
}: ButtonProps & { cible?: CibleDevis }) {
  const { openDevis } = useDevis();
  return (
    <Button onClick={() => openDevis(cible ? { cible } : undefined)} {...props}>
      {children ?? "Demander un devis"}
    </Button>
  );
}
