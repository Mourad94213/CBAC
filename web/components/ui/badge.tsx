import * as React from "react";
import { cn } from "@/lib/utils";

const tones = {
  or: "bg-or-tint text-or",
  bleu: "bg-bleu-tint text-bleu-light",
  rouge: "bg-rouge-tint text-rouge-light",
  craie: "bg-craie/10 text-craie",
  noir: "bg-noir-card text-craie-soft",
  outline: "border border-noir-line text-craie-soft",
} as const;

export function Badge({
  tone = "or",
  className,
  children,
}: {
  tone?: keyof typeof tones;
  className?: string;
  children: React.ReactNode;
}) {
  return <span className={cn("pill", tones[tone], className)}>{children}</span>;
}
