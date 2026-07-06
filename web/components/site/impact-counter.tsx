"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

/**
 * Compteur d'impact façon scoreboard : le chiffre grimpe de 0 à sa valeur à
 * l'entrée dans le viewport (une seule fois). Affiche directement la valeur
 * finale en reduced motion.
 */
export function ImpactCounter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      // en reduced motion, on affiche directement la valeur finale (pas d'animation)
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, value]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-5xl leading-none tracking-tight text-or sm:text-6xl">
        {display.toLocaleString("fr-FR")}
        {suffix && <span className="text-or-soft">{suffix}</span>}
      </p>
      <p className="mt-2 font-condensed text-sm font-semibold uppercase tracking-brand text-craie-muted">
        {label}
      </p>
    </div>
  );
}
