import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

/**
 * Authentification du backoffice — un seul compte (l'association), mot de passe
 * défini via la variable d'environnement `ADMIN_PASSWORD` (voir `.env.local`).
 * La session est un cookie httpOnly signé en HMAC : `expiration.signature`.
 */

const SESSION_COOKIE = "cbac_admin_session";
const SESSION_DUREE_MS = 7 * 24 * 60 * 60 * 1000; // 7 jours

/** Mot de passe attendu — valeur de secours pour la maquette en local. */
export function adminPassword() {
  return process.env.ADMIN_PASSWORD ?? "cbac2026";
}

function sign(payload: string) {
  return createHmac("sha256", `cbac-session:${adminPassword()}`).update(payload).digest("hex");
}

export async function openAdminSession() {
  const expiresAt = Date.now() + SESSION_DUREE_MS;
  const token = `${expiresAt}.${sign(String(expiresAt))}`;
  (await cookies()).set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_DUREE_MS / 1000,
  });
}

export async function closeAdminSession() {
  (await cookies()).delete(SESSION_COOKIE);
}

export async function isAdmin(): Promise<boolean> {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!token) return false;
  const [expiresAt, signature] = token.split(".");
  if (!expiresAt || !signature || Number(expiresAt) < Date.now()) return false;
  const expected = Buffer.from(sign(expiresAt), "hex");
  const received = Buffer.from(signature, "hex");
  return expected.length === received.length && timingSafeEqual(expected, received);
}

/** À appeler en tête de chaque page et action protégées du backoffice. */
export async function requireAdmin() {
  if (!(await isAdmin())) redirect("/admin/connexion");
}
