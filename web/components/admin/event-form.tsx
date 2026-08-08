import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/form";
import { EVENT_TYPE_LABELS, EVENT_TYPES, type CbacEvent } from "@/lib/events/store";

/**
 * Formulaire de création / édition d'un évènement du backoffice.
 * Formulaire serveur classique (progressive enhancement) : l'action reçoit le
 * FormData, valide, puis redirige — les erreurs reviennent via `?erreur=1`.
 */
export function EventForm({
  action,
  event,
  submitLabel,
  erreur,
}: {
  action: (formData: FormData) => Promise<void>;
  event?: CbacEvent;
  submitLabel: string;
  erreur?: boolean;
}) {
  return (
    <form action={action} className="flex flex-col gap-5">
      {event && <input type="hidden" name="id" value={event.id} />}

      {erreur && (
        <p
          role="alert"
          className="rounded-2xl border border-rouge/40 bg-rouge-tint px-4 py-3 text-sm text-rouge-light"
        >
          Le formulaire est incomplet : titre, date, lieu et type sont obligatoires.
        </p>
      )}

      <Field label="Titre" htmlFor="title" hint="Ex. : Initiation boxe au foyer — ouvert à tous">
        <Input
          id="title"
          name="title"
          required
          maxLength={120}
          defaultValue={event?.title}
          placeholder="Titre de l'évènement"
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-3">
        <Field label="Date" htmlFor="date">
          <Input id="date" name="date" type="date" required defaultValue={event?.date} />
        </Field>
        <Field label="Heure" htmlFor="heure" hint="Laisser vide si l'horaire n'est pas fixé">
          <Input id="heure" name="heure" type="time" defaultValue={event?.heure} />
        </Field>
        <Field label="Type" htmlFor="type">
          <Select id="type" name="type" required defaultValue={event?.type ?? "initiation"}>
            {EVENT_TYPES.map((type) => (
              <option key={type} value={type}>
                {EVENT_TYPE_LABELS[type]}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field label="Lieu" htmlFor="lieu" hint="La structure partenaire qui accueille l'évènement, ville comprise">
        <Input
          id="lieu"
          name="lieu"
          required
          maxLength={160}
          defaultValue={event?.lieu}
          placeholder="Nom de la structure, ville"
        />
      </Field>

      <Field label="Description" htmlFor="description" hint="Optionnelle — usage interne et flux iCal">
        <Textarea
          id="description"
          name="description"
          maxLength={600}
          defaultValue={event?.description}
          placeholder="Précisions : public visé, matériel, contact sur place…"
        />
      </Field>

      <label className="flex items-center gap-3 text-sm text-craie">
        <input
          type="checkbox"
          name="published"
          defaultChecked={event?.published ?? false}
          className="h-4 w-4 accent-or"
        />
        <span>
          Publier sur le site
          <span className="block text-xs text-craie-muted">
            Visible sur l&apos;accueil, le calendrier et le flux iCal. Décoché = brouillon.
          </span>
        </span>
      </label>

      <div className="mt-2 flex flex-wrap gap-3">
        <Button type="submit" size="md">
          {submitLabel}
        </Button>
        <Button asChild variant="ghost" size="md">
          <a href="/admin">Annuler</a>
        </Button>
      </div>
    </form>
  );
}
