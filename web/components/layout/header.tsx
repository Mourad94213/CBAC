"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X, CalendarDays } from "lucide-react";
import { navigation } from "@/lib/data/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BrandMark } from "@/components/site/brand-mark";
import { DevisButton } from "@/components/devis/devis-button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 12));

  // close the mobile menu on navigation (syncing UI to the route change)
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-colors duration-300",
        scrolled
          ? "border-b border-noir-line bg-noir/85 backdrop-blur-md"
          : "border-b border-transparent bg-noir/0",
      )}
      style={{ height: "var(--header-h)" }}
    >
      <div className="container-wide flex h-full items-center justify-between gap-4">
        <BrandMark />

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Navigation principale">
          {navigation.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "link-underline text-sm font-medium text-craie-soft transition-colors hover:text-or",
                  active && "text-or",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/adhesion"
            className="link-underline hidden text-sm font-semibold text-craie transition-colors hover:text-or md:inline-flex"
          >
            Adhésion
          </Link>
          <DevisButton size="sm" className="hidden sm:inline-flex">
            Demander un devis
          </DevisButton>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            className="grid h-11 w-11 place-items-center rounded-full text-craie transition-colors hover:bg-craie/10 xl:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[var(--header-h)] z-40 h-[calc(100dvh-var(--header-h))] overflow-y-auto border-t border-noir-line bg-noir-deep xl:hidden"
          >
            <nav className="container-wide flex flex-col py-4" aria-label="Navigation mobile">
              {navigation.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between border-b border-noir-line py-4 font-display text-xl text-craie"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/galerie"
                className="flex items-center justify-between border-b border-noir-line py-4 font-display text-xl text-craie"
              >
                Galerie
              </Link>
              <Link
                href="/adhesion"
                className="flex items-center justify-between border-b border-noir-line py-4 font-display text-xl text-or"
              >
                Adhésion
              </Link>
              <div className="mt-6 flex flex-col gap-3">
                <span className="contents" onClickCapture={() => setMenuOpen(false)}>
                  <DevisButton size="lg">Demander un devis</DevisButton>
                </span>
                <Button asChild variant="outline" size="lg">
                  <Link href="/calendrier">
                    <CalendarDays className="h-4 w-4" strokeWidth={1.75} />
                    Voir le calendrier
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
