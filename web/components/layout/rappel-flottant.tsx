"use client";

import { useState } from "react";
import { PhoneCall, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Field, Input, Select } from "@/components/ui/form";

/**
 * Bouton flottant global « Rappel sous 24h » : un mini-formulaire (prénom,
 * téléphone, créneau) dans un Dialog, avec succès simulé — maquette, aucun envoi réseau.
 */
export function RappelFlottant() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [prenom, setPrenom] = useState("");

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next) {
      // laisse l'animation de fermeture se terminer avant de réinitialiser
      setTimeout(() => {
        setSent(false);
        setPrenom("");
      }, 300);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-20 right-4 z-30 inline-flex h-12 items-center gap-2.5 rounded-full bg-rouge px-5 font-condensed text-sm font-semibold uppercase tracking-[0.12em] text-craie shadow-glow-rouge transition-colors animate-pulse-ring hover:bg-rouge-dark lg:bottom-6 lg:right-6"
      >
        <PhoneCall className="h-4 w-4" strokeWidth={2} />
        <span className="hidden sm:inline">Rappel sous 24h</span>
        <span className="sr-only sm:hidden">Être rappelé·e sous 24h</span>
      </button>

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent>
          {sent ? (
            <div className="flex flex-col items-center gap-4 py-6 text-center">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-or-tint text-or">
                <Check className="h-7 w-7" strokeWidth={2} />
              </span>
              <DialogTitle className="font-display text-2xl uppercase tracking-tight text-craie">
                C&apos;est noté{prenom ? `, ${prenom}` : ""} !
              </DialogTitle>
              <DialogDescription className="max-w-sm text-[15px] text-craie-soft">
                Un membre du CBAC vous rappelle sous 24h ouvrées sur le créneau choisi. À très
                vite entre les cordes !
              </DialogDescription>
              <Button variant="outline" size="md" onClick={() => handleOpenChange(false)}>
                Fermer
              </Button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                // maquette : brancher l'envoi réel de la demande de rappel ici
              }}
              className="flex flex-col gap-5"
            >
              <div>
                <p className="eyebrow">Votre corner</p>
                <DialogTitle className="mt-2 font-display text-2xl uppercase tracking-tight text-craie">
                  On vous rappelle sous 24h
                </DialogTitle>
                <DialogDescription className="mt-2 text-sm text-craie-soft">
                  Une question sur les cours, les stages ou une intervention ? Laissez-nous votre
                  numéro : un coach vous rappelle sous 24h ouvrées.
                </DialogDescription>
              </div>

              <Field label="Prénom" htmlFor="rappel-prenom">
                <Input
                  id="rappel-prenom"
                  name="prenom"
                  required
                  autoComplete="given-name"
                  placeholder="Votre prénom"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                />
              </Field>

              <Field label="Téléphone" htmlFor="rappel-telephone">
                <Input
                  id="rappel-telephone"
                  name="telephone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="06 12 34 56 78"
                />
              </Field>

              <Field label="Créneau préféré" htmlFor="rappel-creneau">
                <Select id="rappel-creneau" name="creneau" defaultValue="soir">
                  <option value="matin">En matinée (9h — 12h)</option>
                  <option value="midi">Le midi (12h — 14h)</option>
                  <option value="apres-midi">L&apos;après-midi (14h — 17h)</option>
                  <option value="soir">En soirée (17h — 20h)</option>
                </Select>
              </Field>

              <Button type="submit" size="lg" className="w-full">
                <PhoneCall className="h-4 w-4" strokeWidth={2} />
                Demander à être rappelé·e
              </Button>
              <p className="text-center text-xs text-craie-muted">
                Maquette de démonstration : aucune donnée n&apos;est envoyée.
              </p>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
