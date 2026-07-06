"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Cible } from "@/lib/data/publics";

// brancher l'envoi réel des demandes de devis (e-mail / CRM partenaires) ici.

/** Qui demande le devis : une des cibles B2B/B2A, ou un particulier. */
export type CibleDevis = Cible["key"] | "particulier";

export type DevisData = {
  cible: CibleDevis | "";
  /** Identifiant du format choisi (découverte, cycle, stage, team building, gala…). */
  format: string;
  objectifs: string[];
  effectif: string;
  lieu: string;
  periode: string;
  precisions: string;
  prenom: string;
  nom: string;
  structure: string;
  email: string;
  tel: string;
};

const EMPTY_DATA: DevisData = {
  cible: "",
  format: "",
  objectifs: [],
  effectif: "",
  lieu: "",
  periode: "",
  precisions: "",
  prenom: "",
  nom: "",
  structure: "",
  email: "",
  tel: "",
};

type DevisContext = {
  /** Le wizard (Dialog global) est-il ouvert ? */
  open: boolean;
  openDevis: (preset?: Partial<DevisData>) => void;
  closeDevis: () => void;
  /** Étape courante : 0-3 = configurateur, 4 = écran de succès. */
  step: number;
  setStep: (step: number) => void;
  data: DevisData;
  update: (patch: Partial<DevisData>) => void;
  /** Référence de dossier générée à l'envoi (succès simulé). */
  reference: string | null;
  /** Simule l'envoi de la demande : génère la référence et affiche le succès. */
  confirm: () => void;
};

const Ctx = createContext<DevisContext | null>(null);

function genReference() {
  const n = Math.floor(1000 + Math.random() * 9000);
  return `CBAC-${new Date().getFullYear()}-${n}`;
}

export function DevisProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [data, setData] = useState<DevisData>(EMPTY_DATA);
  const [reference, setReference] = useState<string | null>(null);

  const openDevis = useCallback((preset: Partial<DevisData> = {}) => {
    setStep(0);
    setReference(null);
    setData({ ...EMPTY_DATA, ...preset });
    setOpen(true);
  }, []);

  const closeDevis = useCallback(() => setOpen(false), []);

  const update = useCallback((patch: Partial<DevisData>) => {
    setData((d) => ({ ...d, ...patch }));
  }, []);

  const confirm = useCallback(() => {
    // Maquette : aucune requête réseau, la demande est simplement "confirmée".
    setReference(genReference());
    setStep(4);
  }, []);

  const value = useMemo<DevisContext>(
    () => ({ open, openDevis, closeDevis, step, setStep, data, update, reference, confirm }),
    [open, openDevis, closeDevis, step, data, update, reference, confirm],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useDevis() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useDevis doit être utilisé dans <DevisProvider>");
  return ctx;
}
