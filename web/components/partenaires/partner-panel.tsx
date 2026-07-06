"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CalendarCheck,
  Download,
  FileText,
  Handshake,
  LogOut,
  Mail,
  MapPin,
  Phone,
  ReceiptText,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, Input } from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { DevisButton } from "@/components/devis/devis-button";
import { association } from "@/lib/data/site";
import { cn } from "@/lib/utils";

/* ── Données statiques de démonstration (maquette) ─────────────────── */

const interventions: {
  date: string;
  heure: string;
  titre: string;
  lieu: string;
  coach: string;
  statut: "Confirmée" | "À planifier";
}[] = [
  {
    date: "Mer. 8 juillet",
    heure: "14h — 16h",
    titre: "Séance 5/8 · Cycle d'initiation (démo)",
    lieu: "Votre structure",
    coach: "Soungui Gomis",
    statut: "Confirmée",
  },
  {
    date: "Mer. 15 juillet",
    heure: "14h — 16h",
    titre: "Séance 6/8 · Gestion des émotions et esquives (démo)",
    lieu: "Votre structure",
    coach: "Younes",
    statut: "Confirmée",
  },
  {
    date: "Jeu. 23 juillet",
    heure: "10h — 12h",
    titre: "Temps d'échange · rencontre avec un boxeur (démo)",
    lieu: "Votre structure",
    coach: "Soungui Gomis",
    statut: "Confirmée",
  },
  {
    date: "Sept. 2026",
    heure: "À définir",
    titre: "Restitution du cycle · bilan devant les familles (démo)",
    lieu: "Votre structure",
    coach: "Soungui Gomis",
    statut: "À planifier",
  },
];

const documents: { name: string; info: string; href?: string }[] = [
  {
    name: "Dossier de présentation CBAC",
    info: "PDF · référence éducation populaire",
    href: "/docs/projet-pedagogique-cbac.pdf",
  },
  {
    name: "Plaquette interventions & entreprises",
    info: "PDF · formats et exemples de séances",
    href: "/docs/plaquette-entreprises-cbac.pdf",
  },
  {
    name: "Attestation d’assurance 2026",
    info: "Transmise le 12 janvier 2026",
  },
  {
    name: "Bilan écrit du cycle de printemps",
    info: "Assiduité, progression, verbatims",
  },
];

const factures: {
  ref: string;
  objet: string;
  montant: string;
  date: string;
  statut: "Payée" | "En attente";
}[] = [
  {
    ref: "FAC-2026-058",
    objet: "Cycle d'initiation · été 2026 (8 séances, démo)",
    montant: "1 440 €",
    date: "1er juillet 2026",
    statut: "En attente",
  },
  {
    ref: "FAC-2026-041",
    objet: "Séances découverte · avril 2026",
    montant: "480 €",
    date: "30 avril 2026",
    statut: "Payée",
  },
  {
    ref: "FAC-2026-019",
    objet: "Cycle d'initiation · hiver 2026 (8 séances, démo)",
    montant: "1 440 €",
    date: "27 février 2026",
    statut: "Payée",
  },
];

/* ── Panneau : connexion factice puis tableau de bord statique ─────── */

export function PartnerPanel() {
  const [structure, setStructure] = useState<string | null>(null);
  return structure ? (
    <Dashboard structure={structure} onSignOut={() => setStructure(null)} />
  ) : (
    <AuthForm onSignIn={setStructure} />
  );
}

function AuthForm({ onSignIn }: { onSignIn: (structure: string) => void }) {
  const [mode, setMode] = useState<"in" | "up">("in");
  const [form, setForm] = useState({ structure: "", email: "" });

  return (
    <div className="mx-auto max-w-md rounded-4xl border border-noir-line bg-noir-card p-7 shadow-card">
      <div className="mb-5 flex rounded-full bg-noir-surface p-1">
        {(["in", "up"] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={cn(
              "flex-1 rounded-full py-2 font-condensed text-sm font-semibold uppercase tracking-wide transition-colors",
              mode === m ? "bg-bleu text-craie shadow-sm" : "text-craie-muted hover:text-craie",
            )}
          >
            {m === "in" ? "Se connecter" : "Demander un accès"}
          </button>
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (form.structure.trim() && /.+@.+\..+/.test(form.email)) onSignIn(form.structure.trim());
          // brancher l’authentification partenaire réelle ici
        }}
        className="flex flex-col gap-4"
      >
        <Field label="Votre structure" htmlFor="pp-structure">
          <Input
            id="pp-structure"
            value={form.structure}
            onChange={(e) => setForm((f) => ({ ...f, structure: e.target.value }))}
            placeholder="Nom de votre structure"
            autoComplete="organization"
            required
          />
        </Field>
        <Field
          label="E-mail professionnel"
          htmlFor="pp-email"
          hint="Maquette de démonstration : n’importe quelles valeurs ouvrent l’aperçu."
        >
          <Input
            id="pp-email"
            type="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            placeholder="contact@structure.fr"
            autoComplete="email"
            required
          />
        </Field>
        <Button type="submit" size="lg" className="w-full">
          {mode === "in" ? "Accéder à mon espace" : "Demander mon accès"}
        </Button>
      </form>

      <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-craie-muted">
        <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-or" strokeWidth={1.75} />
        Connexion factice : aucune donnée n’est envoyée ni enregistrée.
      </p>
    </div>
  );
}

function Dashboard({ structure, onSignOut }: { structure: string; onSignOut: () => void }) {
  const prochaine = interventions[0];

  return (
    <div className="flex flex-col gap-6">
      {/* En-tête de bienvenue */}
      <div className="flex flex-col gap-4 rounded-4xl border border-noir-line bg-gradient-to-br from-noir-card to-bleu-tint p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
        <div>
          <h2 className="text-2xl sm:text-3xl">Bienvenue, {structure}.</h2>
          <p className="mt-1 text-sm text-craie-soft">
            Votre partenariat avec le CBAC en un coup d’œil : séances, documents et factures.
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <DevisButton size="md" variant="secondary">
            Nouvelle intervention
          </DevisButton>
          <Button variant="ghost" size="md" onClick={onSignOut} aria-label="Se déconnecter">
            <LogOut className="h-4 w-4" strokeWidth={1.75} />
          </Button>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {/* Prochaine intervention */}
        <div className="rounded-4xl border border-noir-line bg-noir-card p-6">
          <div className="flex items-center gap-2 text-bleu-light">
            <CalendarCheck className="h-5 w-5" strokeWidth={1.6} />
            <h3 className="font-display text-sm text-craie">Prochaine intervention</h3>
          </div>
          <p className="mt-4 font-condensed text-3xl font-semibold uppercase tracking-wide text-or">
            {prochaine.date}
          </p>
          <p className="mt-1 font-condensed text-sm font-semibold uppercase tracking-wide text-craie-muted">
            {prochaine.heure}
          </p>
          <p className="mt-3 text-sm font-medium text-craie">{prochaine.titre}</p>
          <p className="mt-2 flex items-center gap-1.5 text-sm text-craie-soft">
            <MapPin className="h-4 w-4 shrink-0 text-or" strokeWidth={1.75} />
            {prochaine.lieu}
          </p>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-craie-soft">
            <UserRound className="h-4 w-4 shrink-0 text-or" strokeWidth={1.75} />
            Coach {prochaine.coach}
          </p>
          <Badge tone="bleu" className="mt-4">{prochaine.statut}</Badge>
        </div>

        {/* Documents */}
        <div className="rounded-4xl border border-noir-line bg-noir-card p-6">
          <div className="flex items-center gap-2 text-bleu-light">
            <FileText className="h-5 w-5" strokeWidth={1.6} />
            <h3 className="font-display text-sm text-craie">Documents</h3>
          </div>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {documents.map((doc) => (
              <li key={doc.name} className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate font-medium text-craie">{doc.name}</p>
                  <p className="truncate text-xs text-craie-muted">{doc.info}</p>
                </div>
                {doc.href ? (
                  <a
                    href={doc.href}
                    download
                    aria-label={`Télécharger : ${doc.name}`}
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-noir-line text-craie-soft transition-colors hover:border-or hover:text-or"
                  >
                    <Download className="h-4 w-4" strokeWidth={1.75} />
                  </a>
                ) : (
                  <Badge tone="outline" className="shrink-0">Sur demande</Badge>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Factures */}
        <div className="rounded-4xl border border-noir-line bg-noir-card p-6">
          <div className="flex items-center gap-2 text-bleu-light">
            <ReceiptText className="h-5 w-5" strokeWidth={1.6} />
            <h3 className="font-display text-sm text-craie">Factures</h3>
          </div>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {factures.map((f) => (
              <li key={f.ref} className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate font-medium text-craie">{f.objet}</p>
                  <p className="truncate text-xs text-craie-muted">
                    {f.ref} · {f.date}
                  </p>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-1">
                  <span className="font-condensed text-sm font-semibold text-craie">{f.montant}</span>
                  <Badge tone={f.statut === "Payée" ? "or" : "rouge"}>{f.statut}</Badge>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-craie-muted">
            Règlement par virement ou mandat administratif. Reçus téléchargeables (démo).
          </p>
        </div>
      </div>

      {/* Planning complet des interventions */}
      <div className="rounded-4xl border border-noir-line bg-noir-card p-6 sm:p-7">
        <div className="flex items-center gap-2 text-bleu-light">
          <CalendarCheck className="h-5 w-5" strokeWidth={1.6} />
          <h3 className="font-display text-base text-craie">Planning de vos interventions</h3>
        </div>
        <ul className="mt-5 flex flex-col divide-y divide-noir-line">
          {interventions.map((s) => (
            <li key={`${s.date}-${s.titre}`} className="flex flex-wrap items-center justify-between gap-3 py-4">
              <div className="flex min-w-0 items-center gap-4">
                <div className="grid w-24 shrink-0 place-items-center rounded-2xl bg-bleu-tint px-2 py-2.5 text-center">
                  <span className="font-condensed text-sm font-semibold uppercase leading-tight tracking-wide text-bleu-light">
                    {s.date}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-craie">{s.titre}</p>
                  <p className="mt-0.5 text-xs text-craie-muted">
                    {s.heure} · {s.lieu} · coach {s.coach}
                  </p>
                </div>
              </div>
              <Badge tone={s.statut === "Confirmée" ? "bleu" : "outline"} className="shrink-0">
                {s.statut}
              </Badge>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-craie-muted">
          Un imprévu ? Chaque séance peut être décalée jusqu’à 72 h avant, sans frais.
        </p>
      </div>

      {/* Référent */}
      <div className="rounded-4xl border border-dashed border-or/40 bg-or-tint p-6 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Handshake className="h-5 w-5 text-or" strokeWidth={1.6} />
            <h3 className="font-display text-base text-craie">Votre référent CBAC</h3>
          </div>
          <Button asChild variant="outline" size="sm">
            <Link href="/contact">Prendre rendez-vous</Link>
          </Button>
        </div>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-craie-soft">
          {association.president}, président et coach fondateur, suit personnellement chaque
          partenariat : point d’étape à mi-cycle, bilan écrit en fin de parcours, et une
          réponse sous 24 h ouvrées pour toute question.
        </p>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a href={association.phoneHref} className="link-underline flex items-center gap-1.5 text-craie">
            <Phone className="h-4 w-4 text-or" strokeWidth={1.75} />
            {association.phone}
          </a>
          <a href={association.emailHref} className="link-underline flex items-center gap-1.5 text-craie">
            <Mail className="h-4 w-4 text-or" strokeWidth={1.75} />
            {association.email}
          </a>
        </div>
      </div>
    </div>
  );
}
