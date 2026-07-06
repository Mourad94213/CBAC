"use client";

import { useState } from "react";
import { Check, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, Input, Select } from "@/components/ui/form";

/** Inscription groupe simplifiée pour les structures (utilisée sur /stages). */
export function GroupeForm() {
  const [sent, setSent] = useState(false);
  const [structure, setStructure] = useState("");

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-4xl border border-noir-line bg-noir-card p-8 text-center shadow-soft">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-or-tint text-or">
          <Check className="h-7 w-7" strokeWidth={1.6} />
        </span>
        <h3 className="font-display text-xl text-craie">Demande reçue !</h3>
        <p className="max-w-sm text-sm leading-relaxed text-craie-soft">
          Merci{structure ? ` à ${structure}` : ""} pour votre confiance. On revient vers vous sous
          48h ouvrées avec les disponibilités et un devis adapté à votre groupe.
        </p>
        <Button variant="outline" size="sm" onClick={() => setSent(false)}>
          Nouvelle demande
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        // brancher l'envoi des demandes de groupe (e-mail / CRM) ici
      }}
      className="flex flex-col gap-4 rounded-4xl border border-noir-line bg-noir-card p-6 shadow-soft sm:p-7"
    >
      <Field label="Votre structure" htmlFor="g-structure">
        <Input
          id="g-structure"
          required
          value={structure}
          onChange={(e) => setStructure(e.target.value)}
          autoComplete="organization"
          placeholder="Centre social, école, accueil de loisirs…"
        />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Effectif du groupe" htmlFor="g-effectif">
          <Input id="g-effectif" type="number" min={4} max={40} required placeholder="12" />
        </Field>
        <Field label="Tranche d'âge" htmlFor="g-ages">
          <Select id="g-ages" required defaultValue="">
            <option value="" disabled>
              Choisir une tranche d&apos;âge…
            </option>
            <option>6-10 ans</option>
            <option>11-14 ans</option>
            <option>15-17 ans</option>
            <option>Adultes</option>
            <option>Groupe mixte</option>
          </Select>
        </Field>
      </div>

      <Field label="Période souhaitée" htmlFor="g-periode">
        <Select id="g-periode" required defaultValue="">
          <option value="" disabled>
            Choisir une période…
          </option>
          <option>Vacances d&apos;été 2026</option>
          <option>Vacances d&apos;automne 2026</option>
          <option>Vacances de Noël 2026</option>
          <option>Pendant l&apos;année scolaire</option>
          <option>À définir ensemble</option>
        </Select>
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Votre nom" htmlFor="g-nom">
          <Input id="g-nom" required autoComplete="name" />
        </Field>
        <Field label="E-mail" htmlFor="g-email">
          <Input id="g-email" type="email" required autoComplete="email" />
        </Field>
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        <Send className="h-4 w-4" strokeWidth={1.75} />
        Réserver pour mon groupe
      </Button>
      <p className="text-xs text-craie-muted">
        Association à but non lucratif : on construit le projet avec vous, selon vos moyens.
        Maquette : aucune donnée n&apos;est réellement envoyée.
      </p>
    </form>
  );
}
