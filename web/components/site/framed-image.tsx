import Image from "next/image";
import { cn } from "@/lib/utils";

type FramedImageProps = {
  src: string | null;
  alt: string;
  /** libellé affiché sur la tuile de remplacement lorsque src est null (visuel à fournir) */
  fallbackLabel?: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  ratio?: string; // classe aspect Tailwind, ex. "aspect-[4/5]"
};

/**
 * Visuel de l'association dans un cadre sombre bordé. Lorsque src est null (pas encore
 * de vraie image), affiche une tuile dégradée aux couleurs de l'association, libellée
 * avec le sujet attendu — remplacer l'asset réel plus tard reste trivial.
 */
export function FramedImage({
  src,
  alt,
  fallbackLabel,
  className,
  imgClassName,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority,
  ratio = "aspect-[4/3]",
}: FramedImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-4xl border border-noir-line bg-noir-card",
        ratio,
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn("object-cover", imgClassName)}
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-noir-card via-bleu-tint to-noir-deep p-6 text-center">
          <div>
            <p className="font-display text-3xl uppercase text-or/80">CBAC</p>
            <p className="mt-1 font-condensed text-xs font-semibold uppercase tracking-brand text-craie-muted">
              {fallbackLabel ?? alt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
