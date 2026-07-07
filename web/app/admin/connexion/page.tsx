import { redirect } from "next/navigation";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, Input } from "@/components/ui/form";
import { isAdmin } from "@/lib/admin/auth";
import { connexionAction } from "@/app/admin/actions";

/** Connexion au backoffice — un seul compte, celui de l'association. */
export default async function ConnexionPage({
  searchParams,
}: {
  searchParams: Promise<{ erreur?: string }>;
}) {
  if (await isAdmin()) redirect("/admin");
  const { erreur } = await searchParams;

  return (
    <div className="mx-auto flex max-w-md flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="eyebrow flex items-center gap-2">
          <Lock className="h-4 w-4" strokeWidth={1.75} />
          Backoffice CBAC
        </span>
        <h1 className="text-3xl">Espace de gestion</h1>
        <p className="text-sm leading-relaxed text-craie-soft">
          Réservé à l&apos;équipe de l&apos;association, pour annoncer les évènements du calendrier
          — initiations, stages, sorties, galas, réunions.
        </p>
      </div>

      <form
        action={connexionAction}
        className="flex flex-col gap-5 rounded-4xl border border-noir-line bg-noir-surface p-7 shadow-soft"
      >
        {erreur && (
          <p
            role="alert"
            className="rounded-2xl border border-rouge/40 bg-rouge-tint px-4 py-3 text-sm text-rouge-light"
          >
            Mot de passe incorrect.
          </p>
        )}
        <Field label="Mot de passe" htmlFor="password">
          <Input
            id="password"
            name="password"
            type="password"
            required
            autoFocus
            autoComplete="current-password"
          />
        </Field>
        <Button type="submit" size="md">
          Se connecter
        </Button>
      </form>
    </div>
  );
}
