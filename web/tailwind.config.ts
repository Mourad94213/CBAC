import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

/**
 * Design tokens CBAC — boxe anglaise & éducation populaire.
 * Univers "ring de nuit" : fond noir profond, bleu CBAC (logo), or (logo),
 * rouge ring réservé aux CTA d'impact. Typographie poster (Anton) +
 * Barlow / Barlow Condensed pour les eyebrows "ROUND 01".
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", md: "2rem", lg: "2.5rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        noir: {
          DEFAULT: "#0B0E14",
          deep: "#06080C",
          surface: "#10141C",
          card: "#151A24",
          line: "#242B3A",
        },
        craie: {
          DEFAULT: "#F2EFE6",
          soft: "#C7CAD1",
          muted: "#8E939E",
        },
        bleu: {
          DEFAULT: "#2159D8",
          light: "#4E7FEA",
          deep: "#163A8C",
          tint: "#101B33",
        },
        or: {
          DEFAULT: "#E4CE7E",
          soft: "#EFE3AC",
          deep: "#C6A94F",
          tint: "#262010",
        },
        rouge: {
          DEFAULT: "#D7263D",
          dark: "#A81C2E",
          light: "#E85A6B",
          tint: "#2A1014",
        },
      },
      fontFamily: {
        display: ["var(--font-anton)", "system-ui", "sans-serif"],
        sans: ["var(--font-barlow)", "system-ui", "sans-serif"],
        condensed: ["var(--font-barlow-condensed)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        brand: "0.22em",
        wide2: "0.3em",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 18px 44px -28px rgba(0,0,0,0.65)",
        card: "0 26px 64px -34px rgba(0,0,0,0.72)",
        lift: "0 34px 80px -34px rgba(0,0,0,0.8)",
        ring: "0 0 0 1px rgba(36,43,58,0.9)",
        "glow-bleu": "0 0 44px -12px rgba(33,89,216,0.5)",
        "glow-or": "0 0 44px -14px rgba(228,206,126,0.35)",
        "glow-rouge": "0 0 44px -12px rgba(215,38,61,0.45)",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgba(215,38,61,0.45)" },
          "70%": { boxShadow: "0 0 0 14px rgba(215,38,61,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(215,38,61,0)" },
        },
        jab: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(4px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.3s cubic-bezier(0.16,1,0.3,1)",
        "accordion-up": "accordion-up 0.25s cubic-bezier(0.16,1,0.3,1)",
        "fade-up": "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both",
        marquee: "marquee 38s linear infinite",
        float: "float 7s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.16,1,0.3,1) infinite",
        jab: "jab 0.35s cubic-bezier(0.16,1,0.3,1)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
