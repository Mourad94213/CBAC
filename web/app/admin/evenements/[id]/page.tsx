import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { EventForm } from "@/components/admin/event-form";
import { requireAdmin } from "@/lib/admin/auth";
import { getEvent } from "@/lib/events/store";
import { modifierEvenementAction } from "@/app/admin/actions";

export default async function ModifierEvenementPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ erreur?: string }>;
}) {
  await requireAdmin();
  const [{ id }, { erreur }] = await Promise.all([params, searchParams]);
  const event = await getEvent(id);
  if (!event) notFound();

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
        <h1 className="text-3xl">Modifier l&apos;évènement</h1>
      </div>
      <div className="rounded-4xl border border-noir-line bg-noir-surface p-7 shadow-soft sm:p-8">
        <EventForm
          action={modifierEvenementAction}
          event={event}
          submitLabel="Enregistrer les modifications"
          erreur={erreur === "1"}
        />
      </div>
    </div>
  );
}
