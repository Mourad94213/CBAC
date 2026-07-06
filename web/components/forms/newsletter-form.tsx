"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/form";

/** Inscription « Les news du ring » — inline, utilisée dans le footer et sur /actualites. */
export function NewsletterForm({ className }: { className?: string }) {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");

  if (sent) {
    return (
      <p
        className={cn(
          "flex items-center gap-2 rounded-xl bg-or-tint px-4 py-3 text-sm font-medium text-craie",
          className,
        )}
      >
        <Check className="h-4 w-4 shrink-0 text-or" strokeWidth={2} />
        Bienvenue dans les news du ring ! Premier numéro très bientôt.
      </p>
    );
  }

  return (
    <form
      onClick={(e) => e.stopPropagation()}
      onSubmit={(e) => {
        e.preventDefault();
        if (email.trim()) setSent(true);
        // brancher l'inscription newsletter réelle ici
      }}
      className={cn("flex gap-2", className)}
    >
      <Input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Votre e-mail"
        aria-label="Votre adresse e-mail"
        className="flex-1"
      />
      <button
        type="submit"
        aria-label="S'inscrire aux news du ring"
        className="grid h-[50px] w-[50px] shrink-0 place-items-center rounded-xl bg-rouge text-craie transition-all hover:translate-x-0.5 hover:bg-rouge-dark"
      >
        <ArrowRight className="h-5 w-5" strokeWidth={2} />
      </button>
    </form>
  );
}
