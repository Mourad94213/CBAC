"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Parallaxe discrète sur une image de scène (motivée : profondeur subtile qui
 * évoque le mouvement du boxeur). Pilotée par useScroll/useTransform de Motion —
 * jamais de scroll listeners. Devient une image statique en reduced motion.
 */
export function ParallaxImage({
  src,
  alt,
  className,
  imgClassName,
  sizes = "100vw",
  priority,
  amount = 60,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-amount, amount]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div style={reduce ? undefined : { y }} className="absolute inset-0 scale-110">
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={cn("object-cover", imgClassName)} />
      </motion.div>
    </div>
  );
}
