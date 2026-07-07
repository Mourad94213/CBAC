import { SITE_URL } from "@/lib/utils";
import { listPublishedUpcoming, type CbacEvent } from "@/lib/events/store";

/**
 * Flux iCal du calendrier — généré depuis les évènements publiés dans le
 * backoffice. Compatible Google Agenda, Apple Calendrier et Outlook.
 */
export const dynamic = "force-dynamic";

function icsEscape(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\r?\n/g, "\\n");
}

function icsDate(event: CbacEvent) {
  const day = event.date.replaceAll("-", "");
  if (!event.heure) return `DTSTART;VALUE=DATE:${day}`;
  const [h, m] = event.heure.split(":");
  return `DTSTART;TZID=Europe/Paris:${day}T${h}${m}00`;
}

export async function GET() {
  const events = await listPublishedUpcoming();
  const stamp = `${new Date().toISOString().replace(/[-:]/g, "").slice(0, 15)}Z`;

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//CBAC//Calendrier//FR",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:CBAC — Boxe anglaise & éducation populaire",
    "X-WR-TIMEZONE:Europe/Paris",
    ...events.flatMap((event) => [
      "BEGIN:VEVENT",
      `UID:${event.id}@cbac-boxe.fr`,
      `DTSTAMP:${stamp}`,
      icsDate(event),
      `SUMMARY:${icsEscape(event.title)}`,
      `LOCATION:${icsEscape(event.lieu)}`,
      ...(event.description ? [`DESCRIPTION:${icsEscape(event.description)}`] : []),
      `URL:${SITE_URL}/calendrier`,
      "END:VEVENT",
    ]),
    "END:VCALENDAR",
  ];

  return new Response(lines.join("\r\n"), {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'attachment; filename="cbac.ics"',
    },
  });
}
