"use client";

import { type ChangeEvent, type ComponentType } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Building2,
  CalendarRange,
  Check,
  Compass,
  GraduationCap,
  HeartHandshake,
  Info,
  MapPin,
  PartyPopper,
  PhoneCall,
  Send,
  Shuffle,
  Sparkles,
  Sun,
  Trophy,
  User,
  Users,
  Wand2,
} from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/form";
import { cibles } from "@/lib/data/publics";
import { cn } from "@/lib/utils";
import { useDevis, type CibleDevis } from "./devis-store";

const STEPS = ["Vous êtes", "Votre projet", "Logistique", "Coordonnées"] as const;

type IconType = ComponentType<{ className?: string; strokeWidth?: number }>;

/* Cibles du configurateur : les 4 cibles B2B/B2A + le particulier. */
const CIBLE_META: Record<CibleDevis, { icon: IconType; tagline: string }> = {
  entreprises: { icon: Briefcase, tagline: "Team building, QVT, cohésion d'équipe" },
  "centres-sociaux": { icon: HeartHandshake, tagline: "Cycles éducatifs pour vos jeunes" },
  ecoles: { icon: GraduationCap, tagline: "EPS, périscolaire, stages clé en main" },
  insertion: { icon: Compass, tagline: "Cycles insertion & PJJ, projet écrit" },
  particulier: { icon: User, tagline: "Pour vous, votre enfant ou vos proches" },
};

const CIBLE_OPTIONS: { key: CibleDevis; name: string }[] = [
  ...cibles.map((c) => ({ key: c.key as CibleDevis, name: c.name })),
  { key: "particulier", name: "Particulier" },
];

const FORMATS: { id: string; name: string; desc: string; icon: IconType }[] = [
  { id: "decouverte", name: "Séance découverte", desc: "1h à 1h30 pour mettre les gants, matériel fourni.", icon: Sparkles },
  { id: "cycle", name: "Cycle sur mesure", desc: "5 à 12 séances, objectifs définis ensemble, bilan écrit.", icon: CalendarRange },
  { id: "stage", name: "Stage vacances", desc: "Une semaine clé en main pendant les vacances scolaires.", icon: Sun },
  { id: "team-building", name: "Team building", desc: "De 1h30 à la journée, défis d'équipe, zéro coup porté.", icon: Users },
  { id: "gala", name: "Événement & mini-gala", desc: "Démonstrations, assauts amicaux, temps fort fédérateur.", icon: Trophy },
  { id: "autre", name: "Autre projet", desc: "Une idée hors cadre ? On adore. Racontez-nous tout.", icon: Wand2 },
];

const OBJECTIFS = [
  "Cohésion & esprit d'équipe",
  "Gestion des émotions",
  "Confiance en soi",
  "Remise en forme",
  "Vivre-ensemble & mixité",
  "Découverte sportive",
];

const EFFECTIFS = ["1 à 5 personnes", "6 à 12 personnes", "13 à 20 personnes", "21 à 40 personnes", "Plus de 40 personnes"];

const PERIODES = ["Dès que possible", "Ce trimestre", "Pendant les vacances scolaires", "À la rentrée 2026", "À définir ensemble"];

/** Configurateur « Créez votre intervention sur mesure » — 4 étapes + succès simulé. */
export function DevisWizard() {
  const { open, closeDevis, step, setStep, data, update, reference, confirm } = useDevis();
  const reduce = useReducedMotion();

  const isParticulier = data.cible === "particulier";
  const cibleName =
    data.cible === "particulier"
      ? "Particulier"
      : cibles.find((c) => c.key === data.cible)?.name ?? "—";
  const format = FORMATS.find((f) => f.id === data.format);
  const lieux = [
    { label: isParticulier ? "Sur le lieu de votre choix" : "Dans vos locaux", icon: Building2 },
    { label: "Au gymnase Léo-Lagrange", icon: MapPin },
    { label: "À définir ensemble", icon: Shuffle },
  ];

  const step1Valid = Boolean(data.cible);
  const step2Valid = Boolean(data.format);
  const step3Valid = Boolean(data.effectif && data.lieu && data.periode);
  const step4Valid =
    data.prenom.trim() !== "" &&
    data.nom.trim() !== "" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) &&
    (isParticulier || data.structure.trim() !== "");

  function next() {
    if (step === 3) {
      confirm();
      return;
    }
    setStep(Math.min(step + 1, 3));
  }

  const set =
    (k: "effectif" | "periode" | "precisions" | "prenom" | "nom" | "structure" | "email" | "tel") =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      update({ [k]: e.target.value });

  function toggleObjectif(o: string) {
    update({
      objectifs: data.objectifs.includes(o)
        ? data.objectifs.filter((x) => x !== o)
        : [...data.objectifs, o],
    });
  }

  return (
    <Dialog open={open} onOpenChange={(o) => !o && closeDevis()}>
      <DialogContent className="max-w-xl gap-0 p-0">
        {/* en-tête + progression */}
        <div className="border-b border-noir-line px-6 pb-4 pt-6 sm:px-7">
          <span className="eyebrow">Devis sur mesure</span>
          <DialogTitle className="mt-1 font-display text-xl text-craie">
            Créez votre intervention sur mesure
          </DialogTitle>
          <div className="mt-4 flex items-center gap-2">
            {STEPS.map((label, i) => (
              <div key={label} className="flex flex-1 flex-col gap-1.5">
                <span
                  className={cn(
                    "h-1 rounded-full transition-colors duration-500",
                    i <= step ? "bg-rouge" : "bg-noir-line",
                  )}
                />
                <span
                  className={cn(
                    "font-condensed text-[11px] font-semibold uppercase tracking-wide transition-colors",
                    i === step ? "text-or" : "text-craie-muted",
                  )}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-h-[70dvh] overflow-y-auto px-6 py-6 sm:px-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={reduce ? false : { opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, x: -14 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* ── ÉTAPE 1 · Vous êtes… ── */}
              {step === 0 && (
                <div className="flex flex-col gap-4">
                  <p className="font-condensed text-sm font-semibold uppercase tracking-[0.08em] text-craie">
                    Vous êtes…
                  </p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {CIBLE_OPTIONS.map(({ key, name }) => {
                      const Icon = CIBLE_META[key].icon;
                      const active = data.cible === key;
                      return (
                        <button
                          key={key}
                          onClick={() => update({ cible: key })}
                          className={cn(
                            "flex items-start gap-3 rounded-2xl border p-3.5 text-left transition-colors",
                            active
                              ? "border-or bg-or-tint"
                              : "border-noir-line hover:border-or/60",
                          )}
                        >
                          <span
                            className={cn(
                              "grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-colors",
                              active ? "bg-or text-noir-deep" : "bg-noir-surface text-or",
                            )}
                          >
                            <Icon className="h-5 w-5" strokeWidth={1.6} />
                          </span>
                          <span className="flex flex-col">
                            <span className="text-sm font-semibold text-craie">{name}</span>
                            <span className="mt-0.5 text-xs leading-snug text-craie-muted">
                              {CIBLE_META[key].tagline}
                            </span>
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {isParticulier && (
                    <p className="flex items-start gap-2 rounded-xl bg-bleu-tint px-4 py-3 text-xs leading-relaxed text-craie-soft">
                      <Info className="mt-0.5 h-4 w-4 shrink-0 text-or" strokeWidth={1.75} />
                      <span>
                        Bon à savoir : pour rejoindre un cours à l&apos;année, la séance d&apos;essai est
                        gratuite —{" "}
                        <Link href="/adhesion" onClick={closeDevis} className="font-semibold text-craie underline underline-offset-2">
                          direction la page Adhésion
                        </Link>
                        . Ici, on construit plutôt un projet sur mesure : anniversaire, groupe
                        d&apos;amis, coaching…
                      </span>
                    </p>
                  )}
                </div>
              )}

              {/* ── ÉTAPE 2 · Format & objectifs ── */}
              {step === 1 && (
                <div className="flex flex-col gap-5">
                  <div>
                    <p className="mb-2 font-condensed text-sm font-semibold uppercase tracking-[0.08em] text-craie">
                      Quel format ?
                    </p>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {FORMATS.map((f) => {
                        const active = data.format === f.id;
                        return (
                          <button
                            key={f.id}
                            onClick={() => update({ format: f.id })}
                            className={cn(
                              "flex items-start gap-2.5 rounded-2xl border px-3.5 py-3 text-left transition-colors",
                              active
                                ? "border-or bg-or-tint"
                                : "border-noir-line hover:border-or/60",
                            )}
                          >
                            <f.icon className="mt-0.5 h-4 w-4 shrink-0 text-or" strokeWidth={1.75} />
                            <span className="flex flex-col">
                              <span className="text-sm font-semibold text-craie">{f.name}</span>
                              <span className="mt-0.5 text-xs leading-snug text-craie-muted">{f.desc}</span>
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <p className="mb-2 font-condensed text-sm font-semibold uppercase tracking-[0.08em] text-craie">
                      Vos objectifs <span className="normal-case text-craie-muted">(plusieurs choix possibles)</span>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {OBJECTIFS.map((o) => {
                        const active = data.objectifs.includes(o);
                        return (
                          <button
                            key={o}
                            onClick={() => toggleObjectif(o)}
                            className={cn(
                              "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-semibold transition-colors",
                              active
                                ? "border-or bg-or-tint text-or"
                                : "border-noir-line text-craie-soft hover:border-or/60 hover:text-craie",
                            )}
                          >
                            {active && <Check className="h-3.5 w-3.5" strokeWidth={2} />}
                            {o}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* ── ÉTAPE 3 · Effectif, lieu, période ── */}
              {step === 2 && (
                <div className="flex flex-col gap-4">
                  <Field label="Effectif concerné" htmlFor="d-effectif">
                    <Select id="d-effectif" value={data.effectif} onChange={set("effectif")}>
                      <option value="">Choisir un effectif…</option>
                      {EFFECTIFS.map((e) => (
                        <option key={e} value={e}>
                          {e}
                        </option>
                      ))}
                    </Select>
                  </Field>

                  <div>
                    <p className="mb-1.5 font-condensed text-sm font-semibold uppercase tracking-[0.08em] text-craie">
                      Où souhaitez-vous boxer ?
                    </p>
                    <div className="grid gap-2 sm:grid-cols-3">
                      {lieux.map(({ label, icon: Icon }) => {
                        const active = data.lieu === label;
                        return (
                          <button
                            key={label}
                            onClick={() => update({ lieu: label })}
                            className={cn(
                              "flex flex-col items-start gap-2 rounded-2xl border px-3.5 py-3 text-left text-sm font-semibold transition-colors",
                              active
                                ? "border-or bg-or-tint text-craie"
                                : "border-noir-line text-craie-soft hover:border-or/60",
                            )}
                          >
                            <Icon className="h-4 w-4 text-or" strokeWidth={1.75} />
                            {label}
                          </button>
                        );
                      })}
                    </div>
                    <p className="mt-1.5 text-xs text-craie-muted">
                      Nous nous déplaçons partout dans les Hauts-de-Seine, matériel compris.
                    </p>
                  </div>

                  <Field label="Période souhaitée" htmlFor="d-periode">
                    <Select id="d-periode" value={data.periode} onChange={set("periode")}>
                      <option value="">Choisir une période…</option>
                      {PERIODES.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </Select>
                  </Field>

                  <Field
                    label="Précisions (facultatif)"
                    htmlFor="d-precisions"
                    hint="Contexte, contraintes d'horaires, budget indicatif… tout ce qui nous aide à viser juste."
                  >
                    <Textarea
                      id="d-precisions"
                      value={data.precisions}
                      onChange={set("precisions")}
                      placeholder="Notre groupe a besoin de…"
                      className="min-h-20"
                    />
                  </Field>
                </div>
              )}

              {/* ── ÉTAPE 4 · Coordonnées + récap ── */}
              {step === 3 && (
                <div className="flex flex-col gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Prénom" htmlFor="d-prenom">
                      <Input id="d-prenom" value={data.prenom} onChange={set("prenom")} autoComplete="given-name" />
                    </Field>
                    <Field label="Nom" htmlFor="d-nom">
                      <Input id="d-nom" value={data.nom} onChange={set("nom")} autoComplete="family-name" />
                    </Field>
                  </div>

                  {!isParticulier && (
                    <Field
                      label={data.cible === "entreprises" ? "Société" : "Structure"}
                      htmlFor="d-structure"
                    >
                      <Input
                        id="d-structure"
                        value={data.structure}
                        onChange={set("structure")}
                        autoComplete="organization"
                        placeholder={data.cible === "entreprises" ? "Nom de votre société" : "Nom de votre structure"}
                      />
                    </Field>
                  )}

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="E-mail" htmlFor="d-email">
                      <Input id="d-email" type="email" value={data.email} onChange={set("email")} autoComplete="email" />
                    </Field>
                    <Field label="Téléphone" htmlFor="d-tel" hint="Pour le rappel sous 24h ouvrées.">
                      <Input id="d-tel" type="tel" value={data.tel} onChange={set("tel")} autoComplete="tel" placeholder="06…" />
                    </Field>
                  </div>

                  <div className="rounded-2xl border border-noir-line bg-noir-surface p-4">
                    <p className="font-condensed text-sm font-semibold uppercase tracking-[0.08em] text-or">
                      Votre projet en un coup d&apos;œil
                    </p>
                    <dl className="mt-2 flex flex-col text-sm">
                      <Row k="Vous êtes" v={cibleName} />
                      <Row k="Format" v={format?.name ?? "—"} />
                      {data.objectifs.length > 0 && <Row k="Objectifs" v={data.objectifs.join(" · ")} />}
                      <Row k="Effectif" v={data.effectif || "—"} />
                      <Row k="Lieu" v={data.lieu || "—"} />
                      <Row k="Période" v={data.periode || "—"} />
                    </dl>
                  </div>

                  <p className="text-xs leading-relaxed text-craie-muted">
                    Devis gratuit et sans engagement, réponse sous 48h ouvrées. Maquette de
                    démonstration : aucune donnée n&apos;est réellement envoyée.
                  </p>
                </div>
              )}

              {/* ── SUCCÈS ── */}
              {step === 4 && (
                <div className="flex flex-col items-center gap-4 py-2 text-center">
                  <motion.span
                    initial={reduce ? false : { scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 15 }}
                    className="grid h-16 w-16 place-items-center rounded-full bg-or-tint text-or"
                  >
                    <PartyPopper className="h-8 w-8" strokeWidth={1.5} />
                  </motion.span>
                  <motion.div
                    initial={reduce ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.35 }}
                    className="flex w-full flex-col items-center gap-4"
                  >
                    <div>
                      <h3 className="font-display text-2xl text-craie">Demande envoyée !</h3>
                      <p className="mt-1 text-sm text-craie-soft">
                        Merci{data.prenom ? ` ${data.prenom}` : ""} ! Votre projet est entre de
                        bonnes mains : un accusé de réception vient de partir
                        {data.email ? (
                          <>
                            {" "}
                            à <strong className="text-craie">{data.email}</strong>
                          </>
                        ) : null}
                        .
                      </p>
                    </div>
                    <div className="w-full rounded-2xl border border-noir-line bg-noir-surface p-4 text-left text-sm">
                      <Row k="Référence" v={reference ?? "—"} />
                      <Row k="Vous êtes" v={cibleName} />
                      <Row k="Format" v={format?.name ?? "—"} />
                      <Row k="Période" v={data.periode || "À définir"} />
                    </div>
                    <p className="flex items-center gap-2 rounded-xl bg-bleu-tint px-4 py-3 text-xs font-medium text-craie-soft">
                      <PhoneCall className="h-4 w-4 shrink-0 text-or" strokeWidth={1.75} />
                      Notre équipe vous rappelle sous 24h ouvrées avec une première proposition.
                    </p>
                    <div className="flex w-full flex-col gap-2 sm:flex-row">
                      <Button asChild variant="primary" size="md" className="flex-1" onClick={closeDevis}>
                        <Link href="/interventions">Découvrir nos interventions</Link>
                      </Button>
                      <Button variant="outline" size="md" className="flex-1" onClick={closeDevis}>
                        Revenir au site
                      </Button>
                    </div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* navigation bas de wizard */}
        {step < 4 && (
          <div className="flex items-center justify-between gap-3 border-t border-noir-line px-6 py-4 sm:px-7">
            {step > 0 ? (
              <Button variant="ghost" size="sm" onClick={() => setStep(step - 1)}>
                <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
                Retour
              </Button>
            ) : (
              <span className="font-condensed text-xs uppercase tracking-wide text-craie-muted">
                Étape {step + 1} sur 4
              </span>
            )}
            <Button
              size="md"
              onClick={next}
              disabled={
                (step === 0 && !step1Valid) ||
                (step === 1 && !step2Valid) ||
                (step === 2 && !step3Valid) ||
                (step === 3 && !step4Valid)
              }
            >
              {step === 3 ? (
                <>
                  Envoyer ma demande
                  <Send className="h-4 w-4" strokeWidth={1.75} />
                </>
              ) : (
                <>
                  Continuer
                  <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
                </>
              )}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-start justify-between gap-4 py-1">
      <dt className="shrink-0 text-craie-muted">{k}</dt>
      <dd className="text-right font-semibold text-craie">{v}</dd>
    </div>
  );
}
