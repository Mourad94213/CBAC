"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Play, Quote } from "lucide-react";
import { testimonials } from "@/lib/data/content";
import { cn } from "@/lib/utils";

/**
 * Témoignages en slider auto (pause en reduced motion) + vignette « témoignage
 * vidéo » : poster + bouton play décoratif (maquette — aucun média n'est chargé).
 */
export function TestimonialSlider() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6500);
    return () => clearInterval(t);
  }, [reduce]);

  const active = testimonials[i];

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
      {/* Slider de citations */}
      <div className="relative text-center lg:text-left">
        <Quote className="mx-auto h-9 w-9 text-or/50 lg:mx-0" strokeWidth={1.5} />
        <div className="relative mt-5 min-h-[10rem] sm:min-h-[8.5rem]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-xl font-medium leading-snug text-craie sm:text-2xl">
                «&nbsp;{active.quote}&nbsp;»
              </p>
              <footer className="mt-5 text-sm text-craie-soft">
                <span className="font-semibold text-craie">{active.author}</span> — {active.role}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex justify-center gap-2 lg:justify-start">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Témoignage ${idx + 1}`}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                idx === i ? "w-6 bg-rouge" : "w-2 bg-noir-line hover:bg-rouge/50",
              )}
            />
          ))}
        </div>
      </div>

      {/* Vignette témoignage vidéo (poster + play décoratif) */}
      <figure className="mx-auto w-full max-w-md lg:max-w-none">
        <div className="group relative aspect-video overflow-hidden rounded-4xl border border-noir-line bg-noir-card shadow-card">
          <Image
            src="/images/video-poster.svg"
            alt="Aperçu du témoignage vidéo de Sophie, directrice de centre social"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover transition-transform duration-500 ease-smooth group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir-deep/70 via-transparent to-transparent" aria-hidden />
          <span
            aria-hidden
            className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-rouge text-craie shadow-glow-rouge transition-transform duration-300 ease-smooth group-hover:scale-110"
          >
            <Play className="ml-0.5 h-6 w-6 fill-current" strokeWidth={1.5} />
          </span>
          <span className="absolute bottom-4 left-4 rounded-full bg-noir-deep/80 px-3 py-1 font-condensed text-xs font-semibold uppercase tracking-brand text-or">
            Témoignage vidéo · 1&nbsp;min&nbsp;42
          </span>
        </div>
        <figcaption className="mt-3 text-center text-sm text-craie-muted lg:text-left">
          «&nbsp;Pourquoi j'ai fait entrer la boxe dans mon centre social&nbsp;» — Sophie M., Nanterre
        </figcaption>
      </figure>
    </div>
  );
}
