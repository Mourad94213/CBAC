"use server";

import { timingSafeEqual } from "node:crypto";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  adminPassword,
  closeAdminSession,
  openAdminSession,
  requireAdmin,
} from "@/lib/admin/auth";
import {
  createEvent,
  deleteEvent,
  EVENT_TYPES,
  getEvent,
  updateEvent,
  type CbacEvent,
  type EventType,
} from "@/lib/events/store";

/* ── Session ───────────────────────────────────────────────── */

export async function connexionAction(formData: FormData) {
  const saisie = Buffer.from(String(formData.get("password") ?? ""));
  const attendu = Buffer.from(adminPassword());
  const ok = saisie.length === attendu.length && timingSafeEqual(saisie, attendu);
  if (!ok) redirect("/admin/connexion?erreur=1");
  await openAdminSession();
  redirect("/admin");
}

export async function deconnexionAction() {
  await closeAdminSession();
  redirect("/admin/connexion");
}

/* ── CRUD évènements ───────────────────────────────────────── */

/** Les pages publiques qui affichent le calendrier, à rafraîchir après mutation. */
function revalidateCalendriers() {
  revalidatePath("/");
  revalidatePath("/calendrier");
  revalidatePath("/admin");
}

function parseEventForm(formData: FormData): Omit<CbacEvent, "id"> | null {
  const title = String(formData.get("title") ?? "").trim();
  const date = String(formData.get("date") ?? "").trim();
  const heure = String(formData.get("heure") ?? "").trim();
  const lieu = String(formData.get("lieu") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const type = String(formData.get("type") ?? "") as EventType;

  if (!title || !lieu || !EVENT_TYPES.includes(type)) return null;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return null;
  if (heure && !/^\d{2}:\d{2}$/.test(heure)) return null;

  return {
    title,
    date,
    heure: heure || undefined,
    lieu,
    description: description || undefined,
    type,
    published: formData.get("published") === "on",
  };
}

export async function creerEvenementAction(formData: FormData) {
  await requireAdmin();
  const data = parseEventForm(formData);
  if (!data) redirect("/admin/evenements/nouveau?erreur=1");
  await createEvent(data);
  revalidateCalendriers();
  redirect("/admin");
}

export async function modifierEvenementAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") ?? "");
  if (!(await getEvent(id))) redirect("/admin");
  const data = parseEventForm(formData);
  if (!data) redirect(`/admin/evenements/${id}?erreur=1`);
  await updateEvent(id, data);
  revalidateCalendriers();
  redirect("/admin");
}

export async function supprimerEvenementAction(formData: FormData) {
  await requireAdmin();
  await deleteEvent(String(formData.get("id") ?? ""));
  revalidateCalendriers();
}

export async function basculerPublicationAction(formData: FormData) {
  await requireAdmin();
  const event = await getEvent(String(formData.get("id") ?? ""));
  if (!event) return;
  const { id, ...data } = event;
  await updateEvent(id, { ...data, published: !event.published });
  revalidateCalendriers();
}
