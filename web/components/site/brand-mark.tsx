import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Marque CBAC : le cœur bleu/or du logo redessiné en SVG inline — deux arcs
 * qui se rejoignent pour former un cœur, moitié gauche bleu CBAC, moitié
 * droite or — accompagné du wordmark « CBAC » en typo display.
 */
export function BrandMark({
  className,
  imgClassName,
  label = true,
}: {
  className?: string;
  imgClassName?: string;
  label?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="CBAC, accueil"
      className={cn("inline-flex items-center gap-2.5", className)}
    >
      <svg
        viewBox="0 0 48 44"
        aria-hidden
        className={cn("h-9 w-auto shrink-0", imgClassName)}
      >
        {/* arc gauche — bleu */}
        <path
          d="M24 38.5C13.5 30.5 4.5 22.5 4.5 13.5 4.5 7.6 9 3.5 14.3 3.5c4.3 0 7.9 2.7 9.7 6.9"
          fill="none"
          stroke="#2159D8"
          strokeWidth="5"
          strokeLinecap="round"
        />
        {/* arc droit — or */}
        <path
          d="M24 38.5c10.5-8 19.5-16 19.5-25C43.5 7.6 39 3.5 33.7 3.5c-4.3 0-7.9 2.7-9.7 6.9"
          fill="none"
          stroke="#E4CE7E"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
      {label ? (
        <span className="font-display text-xl uppercase leading-none tracking-[0.08em] text-craie">
          CBAC
        </span>
      ) : (
        <span className="sr-only">CBAC</span>
      )}
    </Link>
  );
}
