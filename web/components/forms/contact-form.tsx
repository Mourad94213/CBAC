"use client";

import { useState, type ReactNode } from "react";
import { CalendarClock, Check, PhoneCall, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/form";
import { cn } from "@/lib/utils";

const PROFILS = [
  { id: "particulier", label: "Particulier" },
  { id: "entreprise", label: "Entreprise" },
  { id: "centre-social", label: "Centre social / structure jeunesse" },
  { id: "ecole", label: "École / périscolaire" },
  { id: "insertion", label: "Structure d'insertion / PJJ" },
] as const;

type ProfilId = (typeof PROFILS)[number]["id"];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [profil, setProfil] = useState<ProfilId>("particulier");
  const [rappel, setRappel] = useState(false);
  const [rdv, setRdv] = useState(false);

  const isStructure = profil !== "particulier";
  const structureLabel = profil === "entreprise" ? "Société" : "Structure";

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-4xl border border-noir-line bg-noir-card p-8 text-center shadow-soft">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-or-tint text-or">
          <Check className="h-7 w-7" strokeWidth={1.6} />
        </span>
        <h3 className="font-display text-xl text-craie">Message envoyé !</h3>
        <p className="max-w-sm text-sm text-craie-soft">
          Merci de nous avoir écrit — on vous répond au plus vite.
          {rappel && " Et promis : on vous rappelle sous 24h ouvrées."}
          {rdv && " On revient vers vous avec des créneaux pour votre rendez-vous de présentation."}
        </p>
        <Button variant="outline" size="sm" onClick={() => setSent(false)}>
          Envoyer un autre message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        // brancher l'envoi du formulaire de contact (e-mail / CRM) ici
      }}
      className="flex flex-col gap-4 rounded-4xl border border-noir-line bg-noir-card p-6 shadow-soft sm:p-7"
    >
      <Field label="Vous êtes" htmlFor="c-profil">
        <Select
          id="c-profil"
          value={profil}
          onChange={(e) => setProfil(e.target.value as ProfilId)}
        >
          {PROFILS.map((p) => (
            <option key={p.id} value={p.id}>
              {p.label}
            </option>
          ))}
        </Select>
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Prénom & nom" htmlFor="c-name">
          <Input id="c-name" required autoComplete="name" />
        </Field>
        <Field label="E-mail" htmlFor="c-email">
          <Input id="c-email" type="email" required autoComplete="email" />
        </Field>
      </div>

      <Field label="Téléphone" htmlFor="c-tel" hint="Indispensable si vous demandez à être rappelé·e.">
        <Input id="c-tel" type="tel" required={rappel} autoComplete="tel" placeholder="06…" />
      </Field>

      {isStructure && (
        <div className="grid gap-4 rounded-2xl bg-noir-surface p-4 sm:grid-cols-[2fr_1fr]">
          <Field label={structureLabel} htmlFor="c-structure">
            <Input
              id="c-structure"
              required
              autoComplete="organization"
              placeholder={profil === "entreprise" ? "Nom de votre société" : "Nom de votre structure"}
            />
          </Field>
          <Field label="Effectif concerné" htmlFor="c-effectif">
            <Input id="c-effectif" type="number" min={1} placeholder="12" />
          </Field>
        </div>
      )}

      <Field label="Votre message" htmlFor="c-msg">
        <Textarea
          id="c-msg"
          required
          placeholder={
            isStructure
              ? "Bonjour, nous aimerions monter un projet boxe avec vos coachs…"
              : "Bonjour, je voudrais essayer un cours…"
          }
        />
      </Field>

      <div className="flex flex-col gap-2">
        <CheckLine checked={rappel} onChange={() => setRappel((v) => !v)}>
          <PhoneCall className="h-4 w-4 shrink-0 text-or" strokeWidth={1.75} />
          Je souhaite être rappelé·e sous 24h ouvrées
        </CheckLine>
        <CheckLine checked={rdv} onChange={() => setRdv((v) => !v)}>
          <CalendarClock className="h-4 w-4 shrink-0 text-or" strokeWidth={1.75} />
          Je souhaite prendre un rendez-vous de présentation (sur place ou en visio)
        </CheckLine>
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        <Send className="h-4 w-4" strokeWidth={1.75} />
        Envoyer
      </Button>
    </form>
  );
}

function CheckLine({
  checked,
  onChange,
  children,
}: {
  checked: boolean;
  onChange: () => void;
  children: ReactNode;
}) {
  return (
    <label
      className={cn(
        "flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 text-sm transition-colors",
        checked
          ? "border-or/60 bg-or-tint text-craie"
          : "border-noir-line text-craie-soft hover:border-or/40",
      )}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 shrink-0 accent-or"
      />
      <span className="flex items-center gap-2">{children}</span>
    </label>
  );
}
