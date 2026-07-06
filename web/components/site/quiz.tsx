"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { quiz, quizProfiles } from "@/lib/data/content";
import { Button } from "@/components/ui/button";

/** Profil gagnant : cumul des scores de chaque réponse, égalité tranchée
 *  dans l'ordre de déclaration des profils. */
function computeProfile(answers: number[]): string {
  const totals: Record<string, number> = {};
  answers.forEach((optionIdx, questionIdx) => {
    const scores = quiz[questionIdx].options[optionIdx].scores;
    for (const [key, pts] of Object.entries(scores)) {
      totals[key] = (totals[key] ?? 0) + pts;
    }
  });
  let best = Object.keys(quizProfiles)[0];
  let bestScore = -1;
  for (const key of Object.keys(quizProfiles)) {
    const score = totals[key] ?? 0;
    if (score > bestScore) {
      best = key;
      bestScore = score;
    }
  }
  return best;
}

/**
 * Quiz « Quel programme pour vous ? » — 4 questions, barre de progression,
 * résultat = profil recommandé + CTA vers l'activité (ou les interventions).
 */
export function Quiz() {
  const [answers, setAnswers] = useState<number[]>([]);
  const reduce = useReducedMotion();

  const step = answers.length;
  const done = step === quiz.length;
  const progress = (step / quiz.length) * 100;
  const profile = done ? quizProfiles[computeProfile(answers)] : null;

  return (
    <div className="mx-auto w-full max-w-2xl rounded-4xl border border-noir-line bg-noir-card p-6 shadow-card sm:p-9">
      {/* Progression */}
      <div className="flex items-center justify-between gap-4">
        <span className="font-condensed text-sm font-semibold uppercase tracking-brand text-or">
          {done ? "Votre programme" : `Question ${step + 1} / ${quiz.length}`}
        </span>
        {step > 0 && !done && (
          <button
            onClick={() => setAnswers((a) => a.slice(0, -1))}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-craie-muted transition-colors hover:text-craie"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} />
            Question précédente
          </button>
        )}
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-noir-line" role="presentation">
        <div
          className="h-full rounded-full bg-gradient-to-r from-bleu to-or transition-all duration-500 ease-smooth"
          style={{ width: `${done ? 100 : progress}%` }}
        />
      </div>

      <div className="relative mt-7 min-h-[18rem]">
        <AnimatePresence mode="wait">
          {!done ? (
            <motion.div
              key={step}
              initial={reduce ? false : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, x: -24 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-display text-xl uppercase leading-tight text-craie sm:text-2xl">
                {quiz[step].question}
              </p>
              <div className="mt-5 grid gap-3">
                {quiz[step].options.map((option, idx) => (
                  <button
                    key={option.label}
                    onClick={() => setAnswers((a) => [...a, idx])}
                    className="group flex items-center gap-4 rounded-2xl border border-noir-line bg-noir-surface px-5 py-4 text-left text-[15px] font-medium text-craie-soft transition-all duration-300 ease-smooth hover:translate-x-1 hover:border-or/60 hover:text-craie"
                  >
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-noir-line font-condensed text-xs font-bold text-craie-muted transition-colors group-hover:border-or group-hover:text-or">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    {option.label}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex min-h-[18rem] flex-col items-center justify-center text-center"
            >
              <span className="eyebrow">Verdict du coach</span>
              <p className="mt-3 font-display text-2xl uppercase leading-tight text-craie sm:text-3xl">
                {profile!.title}
              </p>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-craie-soft">
                {profile!.text}
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <Button asChild>
                  <Link href={profile!.href}>{profile!.cta}</Link>
                </Button>
                <Button variant="ghost" size="sm" onClick={() => setAnswers([])}>
                  <RotateCcw className="h-4 w-4" strokeWidth={2} />
                  Recommencer
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
