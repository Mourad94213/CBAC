import Link from "next/link";
import { CalendarPlus, Eye, EyeOff, LogOut, MapPin, Pencil, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ConfirmSubmit } from "@/components/admin/confirm-submit";
import { requireAdmin } from "@/lib/admin/auth";
import { EVENT_TYPE_LABELS, formatEventDate, listEvents } from "@/lib/events/store";
import type { EventType } from "@/lib/events/store";
import {
  basculerPublicationAction,
  deconnexionAction,
  supprimerEvenementAction,
} from "@/app/admin/actions";

const typeTone: Record<EventType, "or" | "bleu" | "rouge" | "craie" | "outline"> = {
  gala: "rouge",
  stage: "or",
  sortie: "bleu",
  initiation: "craie",
  reunion: "outline",
};

/** Tableau de bord du backoffice : la liste complète des évènements, brouillons compris. */
export default async function AdminPage() {
  await requireAdmin();
  const events = await listEvents();
  const aujourdHui = new Date().toISOString().slice(0, 10);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <span className="eyebrow">Backoffice CBAC</span>
          <h1 className="text-3xl">Évènements du calendrier</h1>
          <p className="max-w-xl text-sm leading-relaxed text-craie-soft">
            Les évènements publiés apparaissent sur l&apos;accueil, la page calendrier et le flux
            iCal. Les brouillons restent visibles ici uniquement.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="md">
            <Link href="/admin/evenements/nouveau">
              <CalendarPlus className="h-4 w-4" strokeWidth={1.75} />
              Nouvel évènement
            </Link>
          </Button>
          <form action={deconnexionAction}>
            <Button type="submit" variant="ghost" size="md">
              <LogOut className="h-4 w-4" strokeWidth={1.75} />
              Se déconnecter
            </Button>
          </form>
        </div>
      </div>

      {events.length === 0 ? (
        <div className="flex flex-col items-start gap-3 rounded-4xl border border-noir-line bg-noir-surface p-8 shadow-soft">
          <h2 className="font-display text-lg text-craie">Aucun évènement pour l&apos;instant</h2>
          <p className="max-w-lg text-sm leading-relaxed text-craie-soft">
            Ajoutez le premier rendez-vous de l&apos;association : il apparaîtra sur le site dès
            que vous le publierez.
          </p>
          <Button asChild size="sm" className="mt-1">
            <Link href="/admin/evenements/nouveau">Ajouter un évènement</Link>
          </Button>
        </div>
      ) : (
        <ol className="divide-y divide-noir-line overflow-hidden rounded-4xl border border-noir-line bg-noir-surface shadow-soft">
          {events.map((event) => (
            <li
              key={event.id}
              className="flex flex-col gap-4 p-5 transition-colors hover:bg-noir-card sm:flex-row sm:items-center sm:gap-6 sm:p-6"
            >
              <p className="w-full shrink-0 font-condensed text-lg font-semibold uppercase leading-none tracking-wide text-or sm:w-44">
                {formatEventDate(event)}
              </p>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone={typeTone[event.type]}>{EVENT_TYPE_LABELS[event.type]}</Badge>
                  <Badge tone={event.published ? "or" : "outline"}>
                    {event.published ? "Publié" : "Brouillon"}
                  </Badge>
                  {event.date < aujourdHui && <Badge tone="noir">Passé</Badge>}
                </div>
                <h2 className="mt-1.5 font-display text-base leading-snug text-craie">
                  {event.title}
                </h2>
                <p className="mt-1.5 flex items-center gap-1.5 text-sm text-craie-muted">
                  <MapPin className="h-4 w-4 shrink-0 text-bleu-light" strokeWidth={1.75} />
                  {event.lieu}
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap items-center gap-2">
                <form action={basculerPublicationAction}>
                  <input type="hidden" name="id" value={event.id} />
                  <Button type="submit" variant="outline" size="sm">
                    {event.published ? (
                      <>
                        <EyeOff className="h-4 w-4" strokeWidth={1.75} />
                        Dépublier
                      </>
                    ) : (
                      <>
                        <Eye className="h-4 w-4" strokeWidth={1.75} />
                        Publier
                      </>
                    )}
                  </Button>
                </form>
                <Button asChild variant="ghost" size="sm">
                  <Link href={`/admin/evenements/${event.id}`}>
                    <Pencil className="h-4 w-4" strokeWidth={1.75} />
                    Modifier
                  </Link>
                </Button>
                <form action={supprimerEvenementAction}>
                  <input type="hidden" name="id" value={event.id} />
                  <Button asChild variant="ghost" size="sm" className="text-rouge-light hover:bg-rouge-tint">
                    <ConfirmSubmit message={`Supprimer « ${event.title} » ? Cette action est définitive.`}>
                      <Trash2 className="h-4 w-4" strokeWidth={1.75} />
                      Supprimer
                    </ConfirmSubmit>
                  </Button>
                </form>
              </div>
            </li>
          ))}
        </ol>
      )}

      <p className="text-xs text-craie-muted">
        Astuce : la page publique{" "}
        <Link href="/calendrier" className="link-underline text-craie">
          /calendrier
        </Link>{" "}
        n&apos;affiche que les évènements publiés et à venir.
      </p>
    </div>
  );
}
