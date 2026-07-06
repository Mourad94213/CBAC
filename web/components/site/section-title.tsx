import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

/** Préfixe « Round 0X · » (ou « Round final · ») détecté dans l'eyebrow. */
const ROUND_PREFIX = /^Round\s*(\d+|final)\s*·\s*/i;

/**
 * Titre de section avec eyebrow « Round 01 · … » (navigation narrative en
 * rounds), titre display et intro optionnelle. Quand l'eyebrow commence par
 * « Round 0X · », le préfixe est rendu en petit chip façon panneau de round.
 */
export function SectionTitle({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  const round = eyebrow?.match(ROUND_PREFIX);
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow &&
        (round ? (
          <span className="flex items-center gap-2.5">
            <span className="rounded border border-or/40 px-2 py-1 font-condensed text-[11px] font-bold uppercase leading-none tracking-brand text-or">
              Round {round[1]}
            </span>
            <span className="eyebrow">{eyebrow.slice(round[0].length)}</span>
          </span>
        ) : (
          <span className="eyebrow">{eyebrow}</span>
        ))}
      <Tag className="max-w-3xl text-3xl leading-[1.08] sm:text-4xl lg:text-[2.9rem]">
        {title}
      </Tag>
      {intro && (
        <p
          className={cn(
            "max-w-2xl text-[15px] leading-relaxed text-craie-soft sm:text-base",
            align === "center" && "mx-auto",
          )}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
