import { cn } from "@/lib/utils";

/** Paire de gants suspendus, aux couleurs du cœur CBAC (bleu / or). */
function GantsPicto({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 46" aria-hidden className={className}>
      {/* lacets de suspension */}
      <path
        d="M24 2c-4 3-6 5.2-7 9M24 2c4 3 6 5.2 7 9"
        fill="none"
        stroke="#8E939E"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* gant gauche — bleu */}
      <g transform="rotate(-10 15 26)">
        <rect x="10" y="10" width="10" height="8" rx="2.5" fill="#2159D8" opacity="0.85" />
        <path d="M8.5 25c-2.2 0-3.8 1.9-3.8 4.2s1.6 4.2 3.8 4.2" fill="#2159D8" />
        <ellipse cx="15" cy="28" rx="8.5" ry="11" fill="#2159D8" />
        <path d="M15 21v9" fill="none" stroke="#0B0E14" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      </g>
      {/* gant droit — or */}
      <g transform="rotate(10 33 26)">
        <rect x="28" y="10" width="10" height="8" rx="2.5" fill="#E4CE7E" opacity="0.85" />
        <path d="M39.5 25c2.2 0 3.8 1.9 3.8 4.2s-1.6 4.2-3.8 4.2" fill="#E4CE7E" />
        <ellipse cx="33" cy="28" rx="8.5" ry="11" fill="#E4CE7E" />
        <path d="M33 21v9" fill="none" stroke="#0B0E14" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      </g>
    </svg>
  );
}

/** Filet fin avec le picto gants de boxe en signature centrée. */
export function Divider({ className, picto = true }: { className?: string; picto?: boolean }) {
  return (
    <div className={cn("flex items-center gap-5", className)} aria-hidden>
      <span className="h-px flex-1 bg-noir-line" />
      {picto && <GantsPicto className="h-9 w-9 opacity-80" />}
      <span className="h-px flex-1 bg-noir-line" />
    </div>
  );
}
