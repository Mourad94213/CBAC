import { promises as fs } from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { Redis } from "@upstash/redis";
import type { EventMois } from "@/lib/data/schedule";

/**
 * Store des évènements, alimenté par le backoffice (/admin).
 *
 * Persistance : Upstash Redis (intégration marketplace Vercel) dès que ses
 * variables d'environnement sont présentes ; sinon repli sur un JSON local
 * (`data/events.json`) pour le dev sans configuration. Règle actée : aucun
 * événement inventé ; le store reste vide tant que l'association n'a pas
 * saisi ses vraies dates.
 */

export const EVENT_TYPES = ["gala", "stage", "sortie", "initiation", "reunion"] as const;
export type EventType = (typeof EVENT_TYPES)[number];

export const EVENT_TYPE_LABELS: Record<EventType, string> = {
  gala: "Gala",
  stage: "Stage",
  sortie: "Sortie",
  initiation: "Initiation",
  reunion: "Réunion",
};

export type CbacEvent = {
  id: string;
  title: string;
  /** Date ISO `AAAA-MM-JJ`. */
  date: string;
  /** Heure `HH:MM` (optionnelle — certains rendez-vous n'ont pas d'horaire fixé). */
  heure?: string;
  lieu: string;
  description?: string;
  type: EventType;
  /** Seuls les évènements publiés apparaissent sur le site public. */
  published: boolean;
};

const EVENTS_FILE = path.join(process.cwd(), "data", "events.json");
const REDIS_KEY = "cbac:events";

// L'intégration Upstash nomme ses variables UPSTASH_REDIS_* ou KV_* selon
// qu'elle est branchée en « Redis » ou en compatibilité KV — on accepte les deux.
function redisConfig() {
  const url = process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;
  return url && token ? { url, token } : null;
}

let _redis: Redis | null = null;
function redis(): Redis | null {
  const config = redisConfig();
  if (!config) return null;
  if (!_redis) _redis = new Redis(config);
  return _redis;
}

async function readEvents(): Promise<CbacEvent[]> {
  const r = redis();
  if (r) return (await r.get<CbacEvent[]>(REDIS_KEY)) ?? [];
  try {
    const raw = await fs.readFile(EVENTS_FILE, "utf-8");
    return JSON.parse(raw) as CbacEvent[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw error;
  }
}

async function writeEvents(events: CbacEvent[]) {
  const r = redis();
  if (r) {
    await r.set(REDIS_KEY, events);
    return;
  }
  if (process.env.VERCEL) {
    // Sur Vercel, le système de fichiers est éphémère : sans Redis, une
    // écriture serait perdue silencieusement — on préfère échouer clairement.
    throw new Error(
      "Stockage non configuré : ajoutez l'intégration Upstash Redis au projet Vercel (voir A-VALIDER.md).",
    );
  }
  await fs.mkdir(path.dirname(EVENTS_FILE), { recursive: true });
  await fs.writeFile(EVENTS_FILE, `${JSON.stringify(events, null, 2)}\n`, "utf-8");
}

function byDate(a: CbacEvent, b: CbacEvent) {
  return `${a.date} ${a.heure ?? ""}`.localeCompare(`${b.date} ${b.heure ?? ""}`);
}

/** Tous les évènements, du plus proche au plus lointain (backoffice). */
export async function listEvents(): Promise<CbacEvent[]> {
  return (await readEvents()).sort(byDate);
}

export async function getEvent(id: string): Promise<CbacEvent | undefined> {
  return (await readEvents()).find((e) => e.id === id);
}

/** Évènements publiés à venir (aujourd'hui inclus) — pages publiques et flux iCal. */
export async function listPublishedUpcoming(): Promise<CbacEvent[]> {
  const today = new Date().toISOString().slice(0, 10);
  return (await readEvents()).filter((e) => e.published && e.date >= today).sort(byDate);
}

export async function createEvent(data: Omit<CbacEvent, "id">): Promise<CbacEvent> {
  const events = await readEvents();
  const event: CbacEvent = { id: randomUUID(), ...data };
  events.push(event);
  await writeEvents(events);
  return event;
}

export async function updateEvent(
  id: string,
  data: Omit<CbacEvent, "id">,
): Promise<CbacEvent | undefined> {
  const events = await readEvents();
  const index = events.findIndex((e) => e.id === id);
  if (index === -1) return undefined;
  events[index] = { id, ...data };
  await writeEvents(events);
  return events[index];
}

export async function deleteEvent(id: string): Promise<boolean> {
  const events = await readEvents();
  const rest = events.filter((e) => e.id !== id);
  if (rest.length === events.length) return false;
  await writeEvents(rest);
  return true;
}

/** « 18:00 » (input time) → « 18h00 » (affichage). */
export function formatHeure(heure: string) {
  return heure.replace(":", "h");
}

/** Date ISO → « sam. 14 juin » (+ « · 18h00 » si un horaire est fixé). */
export function formatEventDate(event: Pick<CbacEvent, "date" | "heure">) {
  const formatted = new Intl.DateTimeFormat("fr-FR", {
    weekday: "short",
    day: "numeric",
    month: "long",
  }).format(new Date(`${event.date}T12:00:00`));
  return event.heure ? `${formatted} · ${formatHeure(event.heure)}` : formatted;
}

/** Adapte un évènement du store au format d'affichage du calendrier public. */
export function toEventMois(event: CbacEvent): EventMois {
  return {
    date: formatEventDate(event),
    title: event.title,
    lieu: event.lieu,
    type: event.type,
  };
}
