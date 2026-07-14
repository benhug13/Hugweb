"use client";

import { motion, type Variants } from "framer-motion";

// Grosse Überschrift, deren Buchstaben einzeln hereinfliegen (Blur + Rotation +
// Stagger), sobald die Sektion ins Bild scrollt. Jeder Buchstabe bekommt eine
// von Blau nach Violett interpolierte Farbe -> durchgehender Verlauf-Look über
// das ganze Wort, aber jeder Buchstabe ist garantiert sichtbar (kein
// bg-clip-text auf inline-block-Kindern -> war vorher unsichtbar).
const LINES = ["Moderne Webseiten", "für Ihr Unternehmen"];

// Verlauf-Stops (wie zuvor): Blau -> Indigo -> Violett.
const STOPS = [
  [0x60, 0xa5, 0xfa],
  [0x81, 0x8c, 0xf8],
  [0xc0, 0x84, 0xfc],
];

function lerp(a: number, b: number, t: number) {
  return Math.round(a + (b - a) * t);
}

// t in 0..1 -> Farbe entlang der drei Stops.
function gradientColor(t: number) {
  const seg = t * (STOPS.length - 1);
  const i = Math.min(Math.floor(seg), STOPS.length - 2);
  const f = seg - i;
  const [r, g, b] = [0, 1, 2].map((k) => lerp(STOPS[i][k], STOPS[i + 1][k], f));
  return `rgb(${r}, ${g}, ${b})`;
}

// Deterministische "Zufalls"-Werte pro Buchstabe — vermeidet Hydration-
// Mismatch und sorgt trotzdem für ein gestreutes Hereinfliegen.
function scatter(seed: number) {
  const a = Math.sin(seed * 12.9898) * 43758.5453;
  const b = Math.sin(seed * 78.233) * 12543.123;
  const rx = a - Math.floor(a); // 0..1
  const ry = b - Math.floor(b); // 0..1
  return {
    x: (rx - 0.5) * 220, // -110..110 px seitlich
    y: 90 + ry * 80, // 90..170 px von unten
    rotate: (rx - 0.5) * 50, // -25..25 grad
  };
}

// Kleines "Hugweb" unter der Überschrift — faded sanft von unten ein
// (kommt durch staggerChildren nach den Buchstaben dran).
const tagVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "none",
    transition: { type: "spring", stiffness: 260, damping: 28 },
  },
};

const letterVariants: Variants = {
  hidden: (i: number) => {
    const s = scatter(i);
    return { opacity: 0, x: s.x, y: s.y, rotate: s.rotate, filter: "blur(12px)" };
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    // "none" statt "blur(0px)" -> kein zurückbleibender Filter-Layer, der
    // sonst feine Naht-Linien zwischen den Buchstaben erzeugt.
    filter: "none",
    transition: { type: "spring", stiffness: 320, damping: 26, mass: 0.9 },
  },
};

// Anzahl echter Buchstaben (ohne Leerzeichen) -> für die Farb-Interpolation.
const TOTAL_LETTERS = LINES.join("").replace(/ /g, "").length;

export default function HeroWordmark() {
  let index = 0; // Index über alle Buchstaben (für Stagger)
  let colorIndex = 0; // Index über echte Buchstaben (für Verlauf-Farbe)

  return (
    <motion.div
      aria-label={LINES.join(" ")}
      className="relative z-10 mx-auto w-full max-w-6xl px-6 text-center"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ staggerChildren: 0.04 }}
    >
      {LINES.map((line, li) => (
        <span key={li} className="block">
          <span className="inline-block font-extrabold leading-[1.05] tracking-tight text-[clamp(2.5rem,8vw,7rem)]">
            {Array.from(line).map((ch, ci) => {
              const i = index++;
              if (ch === " ") {
                return (
                  <span key={ci} className="inline-block w-[0.28em]" aria-hidden>
                    {" "}
                  </span>
                );
              }
              const t = TOTAL_LETTERS > 1 ? colorIndex / (TOTAL_LETTERS - 1) : 0;
              colorIndex++;
              return (
                <motion.span
                  key={ci}
                  aria-hidden
                  custom={i}
                  variants={letterVariants}
                  style={{ color: gradientColor(t) }}
                  className="inline-block"
                >
                  {ch}
                </motion.span>
              );
            })}
          </span>
        </span>
      ))}

      <motion.p
        variants={tagVariants}
        className="mt-6 text-sm font-semibold uppercase tracking-[0.35em] text-white/45 md:text-base"
      >
        Hugweb
      </motion.p>
    </motion.div>
  );
}
