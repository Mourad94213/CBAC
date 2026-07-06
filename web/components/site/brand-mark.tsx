import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Marque CBAC : le logo officiel de l'association (cœur bleu/or et boxeur
 * sur fond noir — fourni par l'association), accompagné du wordmark « CBAC »
 * en typo display.
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
      <Image
        src="/images/logo-cbac.jpg"
        alt=""
        width={80}
        height={80}
        className={cn("h-10 w-10 shrink-0 rounded-full object-cover", imgClassName)}
      />
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
