import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { EventForm } from "@/components/admin/event-form";
import { requireAdmin } from "@/lib/admin/auth";
import { creerEvenementAction } from "@/app/admin/actions";

export default async function NouvelEvenementPage({
  searchParams,
}: {
  searchParams: Promise<{ erreur?: string }>;
}) {
  await requireAdmin();
  const { erreur } = await searchParams;

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6">
      <Link
        href="/admin"
        className="inline-flex items-center gap-1.5 font-condensed text-sm font-semibold uppercase tracking-wide text-craie-soft transition-colors hover:text-or"
      >
        <ArrowLeft className="h-4 w-4" strokeWidth={2} />
        Retour aux évènements
      </Link>
      <div className="flex flex-col gap-2">
        <span className="eyebrow">Backoffice CBAC</span>
        <h1 className="text-3xl">Nouvel évènement</h1>
      </div>
      <div className="rounded-4xl border border-noir-line bg-noir-surface p-7 shadow-soft sm:p-8">
        <EventForm
          action={creerEvenementAction}
          submitLabel="Créer l'évènement"
          erreur={erreur === "1"}
        />
      </div>
    </div>
  );
}
