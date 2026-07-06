"use client";

import { useState } from "react";
import { Check, Send, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/form";
import { activites } from "@/lib/data/activites";

/* Seules les activités à l'année sont proposées à l'adhésion
   (l'initiation se réserve via l'essai gratuit, les stages via /stages). */
const activitesAdhesion = activites.filter(
  (a) => a.slug !== "initiation-decouverte" && a.slug !== "stage-vacances",
);

function computeAge(dateStr: string): number | null {
  if (!dateStr) return null;
  const birth = new Date(dateStr);
  if (Number.isNaN(birth.getTime())) return null;
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age -= 1;
  return age;
}

/** Pré-inscription d'adhésion particulier — succès simulé (maquette). */
export function AdhesionForm() {
  const [sent, setSent] = useState(false);
  const [prenom, setPrenom] = useState("");
  const [naissance, setNaissance] = useState("");
  const [droitImage, setDroitImage] = useState(false);

  const age = computeAge(naissance);
  const mineur = age !== null && age < 18;

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-4xl border border-noir-line bg-noir-card p-8 text-center shadow-soft">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-or-tint text-or">
          <Check className="h-7 w-7" strokeWidth={1.6} />
        </span>
        <h3 className="font-display text-xl text-craie">
          Bienvenue au club{prenom ? `, ${prenom}` : ""} !
        </h3>
        <p className="max-w-md text-sm leading-relaxed text-craie-soft">
          Votre demande d&apos;adhésion est bien pré-enregistrée. On vous recontacte sous 48h
          ouvrées pour caler votre <strong className="text-craie">séance d&apos;essai gratuite</strong> —
          venez simplement en tenue de sport, les gants vous attendent au gymnase.
        </p>
        <p className="max-w-md text-xs text-craie-muted">
          Pensez à préparer le questionnaire de santé (ou le certificat médical pour les adultes)
          pour finaliser la licence.
        </p>
        <Button variant="outline" size="sm" onClick={() => setSent(false)}>
          Inscrire un autre adhérent
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        // brancher l'enregistrement réel des adhésions (dossier + licence FFBoxe) ici
      }}
      className="flex flex-col gap-4 rounded-4xl border border-noir-line bg-noir-card p-6 shadow-soft sm:p-7"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Prénom de l'adhérent·e" htmlFor="a-prenom">
          <Input
            id="a-prenom"
            required
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            autoComplete="given-name"
          />
        </Field>
        <Field label="Nom de l'adhérent·e" htmlFor="a-nom">
          <Input id="a-nom" required autoComplete="family-name" />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Date de naissance"
          htmlFor="a-naissance"
          hint={mineur ? `${age} ans : la partie « responsable légal » s'affiche ci-dessous.` : undefined}
        >
          <Input
            id="a-naissance"
            type="date"
            required
            value={naissance}
            onChange={(e) => setNaissance(e.target.value)}
            autoComplete="bday"
          />
        </Field>
        <Field label="Activité souhaitée" htmlFor="a-activite">
          <Select id="a-activite" required defaultValue="">
            <option value="" disabled>
              Choisir une activité…
            </option>
            {activitesAdhesion.map((a) => (
              <option key={a.slug} value={a.slug}>
                {a.name} · {a.ages}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="E-mail" htmlFor="a-email">
          <Input id="a-email" type="email" required autoComplete="email" />
        </Field>
        <Field label="Téléphone" htmlFor="a-tel">
          <Input id="a-tel" type="tel" required autoComplete="tel" placeholder="06…" />
        </Field>
      </div>

      {mineur && (
        <div className="flex flex-col gap-4 rounded-2xl bg-noir-surface p-4">
          <p className="flex items-center gap-2 font-condensed text-sm font-semibold uppercase tracking-[0.08em] text-or">
            <ShieldCheck className="h-4 w-4" strokeWidth={1.75} />
            Responsable légal (adhérent·e mineur·e)
          </p>
          <div className="grid gap-4 sm:grid-cols-[2fr_1fr]">
            <Field label="Prénom & nom du responsable" htmlFor="a-resp">
              <Input id="a-resp" required autoComplete="name" />
            </Field>
            <Field label="Lien" htmlFor="a-lien">
              <Select id="a-lien" defaultValue="Mère">
                <option>Mère</option>
                <option>Père</option>
                <option>Tuteur·rice légal·e</option>
              </Select>
            </Field>
          </div>
          <p className="text-xs text-craie-muted">
            Le dossier d&apos;adhésion d&apos;un·e mineur·e devra être signé par le responsable légal au
            gymnase.
          </p>
        </div>
      )}

      <Field
        label="Un mot sur vos attentes (facultatif)"
        htmlFor="a-msg"
        hint="Niveau, objectifs, jours préférés… tout ce qui nous aide à bien vous accueillir."
      >
        <Textarea id="a-msg" placeholder="Première fois que je mets les gants…" className="min-h-20" />
      </Field>

      <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-noir-line px-4 py-3 text-sm text-craie-soft transition-colors hover:border-or/40">
        <input
          type="checkbox"
          checked={droitImage}
          onChange={() => setDroitImage((v) => !v)}
          className="mt-0.5 h-4 w-4 shrink-0 accent-or"
        />
        <span>
          J&apos;autorise le CBAC à utiliser les photos prises pendant les cours, galas et stages sur
          ses supports (site, réseaux sociaux). <span className="text-craie-muted">Révocable à tout moment, sans incidence sur l&apos;adhésion.</span>
        </span>
      </label>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        <Send className="h-4 w-4" strokeWidth={1.75} />
        Envoyer ma demande d&apos;adhésion
      </Button>
      <p className="text-xs text-craie-muted">
        Maquette de démonstration : aucune donnée n&apos;est réellement envoyée. La séance d&apos;essai
        reste gratuite et sans engagement.
      </p>
    </form>
  );
}
