import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  ClipboardList,
  Hammer,
  Handshake,
  Layers,
  Mail,
  MapPin,
  Phone,
  Ruler,
  Trees,
  Wrench,
} from "lucide-react";
import { Archivo, Inter } from "next/font/google";
import Reveal from "@/components/Reveal";

const display = Archivo({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });

export const metadata = {
  title: "Dober Bau GmbH — Bauplanung und Bauarbeiten in Küssnacht am Rigi | Entwurf von Hugweb",
  description:
    "Entwurf einer Website für die Dober Bau GmbH, Chliarniweg 4, 6403 Küssnacht am Rigi SZ: Bauplanung sowie Ausführung von Bauarbeiten aller Art — Neubau, Umbau, Renovation, Maurer- und Betonarbeiten.",
};

// Signalgelb auf kaltem Anthrazit — bewusst ANDERS als die Holzbau-Vorlage
// (warmes Lärchen-Orange auf Braunschwarz). Beton statt Holz, kalt statt warm,
// damit die beiden Entwürfe nicht wie dieselbe Seite mit anderem Namen wirken.
const BAU = "#f5b301";
const TINTE = "#0e1013";
const BETON = "#edeae5";
const BAU_DUNKEL = "#8a6200";

// Aus dem öffentlichen Telefonbuch-Eintrag (tel.search.ch, vCard vom 17.09.) —
// nicht erfunden und nicht geraten. Leer lassen blendet die Zeile aus.
const EMAIL = "heinz.dober@bluewin.ch";

const TEL_ANZEIGE = "079 773 22 16";
const TEL_LINK = "tel:0797732216";

// ALLE Bilder sind PLATZHALTER (Pexels, freie kommerzielle Nutzung) und im
// Entwurf sichtbar als solche gekennzeichnet. Beim echten Auftrag werden sie
// durch eigene Fotos ausgeführter Objekte ersetzt.
const PX = (u: string, w = 1400) => `${u}?auto=compress&cs=tinysrgb&w=${w}`;

const IMG_HERO = PX("https://images.pexels.com/photos/35886613/pexels-photo-35886613.jpeg", 2000);
const IMG_PLANUNG = PX("https://images.pexels.com/photos/4134179/pexels-photo-4134179.jpeg");
// Diese drei waren zuerst mediterran/südländisch (Flachdächer, bunte Fassaden,
// US-Vorstadt). Für einen Betrieb in Küssnacht am Rigi erkennt der Kunde da
// seine Region nicht wieder — am 16.09. gegen mitteleuropäische Motive getauscht.
const IMG_NEUBAU = PX("https://images.pexels.com/photos/34360408/pexels-photo-34360408.jpeg");
const IMG_UMBAU = PX("https://images.pexels.com/photos/8851849/pexels-photo-8851849.jpeg");
const IMG_UNTERHALT = PX("https://images.pexels.com/photos/27134625/pexels-photo-27134625.jpeg");
const IMG_MAUER = PX("https://images.pexels.com/photos/19688828/pexels-photo-19688828.jpeg");
const IMG_AUSSEN = PX("https://images.pexels.com/photos/38220910/pexels-photo-38220910.jpeg");
const IMG_G_AUSHUB = PX("https://images.pexels.com/photos/37393680/pexels-photo-37393680.jpeg");
const IMG_G_ARMIERUNG = PX("https://images.pexels.com/photos/37475275/pexels-photo-37475275.jpeg");
const IMG_G_KRAN = PX("https://images.pexels.com/photos/5511065/pexels-photo-5511065.jpeg");
const IMG_G_BETON = PX("https://images.pexels.com/photos/3964666/pexels-photo-3964666.jpeg");
// Echte Schweizer Optik: Wohnüberbauung in Binningen BL, Baukräne, Jura-Hügel
// im Hintergrund. Das grösste Bild der Galerie soll aussehen wie hier.
const IMG_REF_HAUS = PX("https://images.pexels.com/photos/17881545/pexels-photo-17881545.jpeg");
// Bewusst dasselbe Motiv wie der Hero: 12 geprüfte Bilder auf 13 Plätze. Hero
// ganz oben, Ablauf weit unten und in anderem Zuschnitt — fällt nicht auf.
const IMG_BAUSTELLE = PX("https://images.pexels.com/photos/35886613/pexels-photo-35886613.jpeg");

/** Kleiner Hinweis, der auf JEDEM Bild sitzt — Bens Vorgabe vom 02.09. */
function Platzhalter({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={`pointer-events-none absolute right-3 top-3 z-10 rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-wide backdrop-blur ${
        dark ? "bg-black/55 text-white/85" : "bg-black/50 text-white/85"
      }`}
    >
      (Platzhalter)
    </span>
  );
}

// Im Handelsregister steht nur: "Bauplanung sowie Ausführung von Bauarbeiten
// aller Art". Das ist für eine Startseite zu unbestimmt, also sind die sechs
// Bereiche unten ein VORSCHLAG — auf der Seite ist das sichtbar so gesagt
// (Kasten "Stimmt diese Aufteilung?"), damit hier nichts behauptet wird, was
// die Firma vielleicht gar nicht anbietet.
const leistungen = [
  {
    icon: ClipboardList,
    title: "Bauplanung",
    desc: "Von der ersten Idee zum bewilligungsfähigen Plan — inklusive der Frage, was auf Ihrer Parzelle überhaupt geht.",
    img: IMG_PLANUNG,
    span: "md:col-span-7",
    h: "h-[23rem]",
  },
  {
    icon: Building2,
    title: "Neubau",
    desc: "Einfamilienhaus, Anbau oder Gewerbebau — vom Aushub bis zum bezugsbereiten Rohbau.",
    img: IMG_NEUBAU,
    span: "md:col-span-5",
    h: "h-[23rem]",
  },
  {
    icon: Wrench,
    title: "Umbau & Renovation",
    desc: "Bestehendes umbauen, erweitern und instand stellen — auch dann, wenn zuerst niemand weiss, was hinter der Wand steckt.",
    img: IMG_UMBAU,
    span: "md:col-span-5",
    h: "h-[21rem]",
  },
  {
    icon: Layers,
    title: "Maurer- & Betonarbeiten",
    desc: "Mauerwerk, Beton, Durchbrüche und Fundamente — sauber ausgeführt und sauber verlassen.",
    img: IMG_MAUER,
    span: "md:col-span-7",
    h: "h-[21rem]",
  },
  {
    icon: Trees,
    title: "Aussenanlagen",
    desc: "Sitzplätze, Mauern, Treppen und Zufahrten — damit das Haus auch draussen fertig aussieht.",
    img: IMG_AUSSEN,
    span: "md:col-span-7",
    h: "h-[21rem]",
  },
  {
    icon: Hammer,
    title: "Reparaturen & Unterhalt",
    desc: "Auch kleine Arbeiten. Wer ein Haus hat, braucht selten einen Grossauftrag, aber oft jemanden, der kommt.",
    img: IMG_UNTERHALT,
    span: "md:col-span-5",
    h: "h-[21rem]",
  },
];

const galerie = [
  { img: IMG_G_AUSHUB, t: "Aushub und Baugrube" },
  { img: IMG_G_ARMIERUNG, t: "Armierung vor dem Betonieren" },
  { img: IMG_G_KRAN, t: "Baustelle in Betrieb" },
  { img: IMG_G_BETON, t: "Sichtbeton" },
];

const ablauf = [
  {
    n: "01",
    t: "Anruf und Besichtigung",
    d: "Sie rufen an, wir schauen es gemeinsam an — vor Ort, unverbindlich und ohne Kosten.",
  },
  {
    n: "02",
    t: "Planung und Offerte",
    d: "Sie bekommen schriftlich, was gemacht wird und was es kostet. Keine Positionen, die später auftauchen.",
  },
  {
    n: "03",
    t: "Ausführung",
    d: "Wir bauen und koordinieren die Handwerker — mit einer Ansprechperson, die auch auf der Baustelle ist.",
  },
  {
    n: "04",
    t: "Übergabe",
    d: "Sauber aufgeräumt übergeben. Und erreichbar bleiben, auch wenn ein halbes Jahr später etwas ist.",
  },
];

const nav = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Arbeiten", href: "#arbeiten" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Kontakt", href: "#kontakt" },
];

function Wordmark({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <span
      className={`font-[family-name:var(--font-display)] font-bold tracking-tight ${
        light ? "text-[#0e1013]" : "text-white"
      } ${className}`}
    >
      DOBER <span style={{ color: BAU }}>BAU</span>
    </span>
  );
}

export default function DoberBauDemo() {
  return (
    <>
      <div className="bg-neutral-900 text-white text-xs py-2 text-center">
        Unverbindlicher Entwurf von{" "}
        <Link href="/" className="underline font-medium">
          Hugweb
        </Link>
        <Link href="/#demos" className="ml-4 inline-flex items-center gap-1 opacity-80 hover:opacity-100">
          <ArrowLeft className="h-3 w-3" /> Zurück
        </Link>
      </div>

      <div
        className={`${display.variable} ${body.variable} font-[family-name:var(--font-body)]`}
        style={{ backgroundColor: TINTE }}
      >
        {/* Header — transparent über dem Hero */}
        <header className="absolute inset-x-0 top-8 z-40">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
            <Wordmark className="text-lg sm:text-xl" />
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/75">
              {nav.map((n) => (
                <a key={n.label} href={n.href} className="hover:text-white transition">
                  {n.label}
                </a>
              ))}
            </nav>
            <a
              href={TEL_LINK}
              className="hidden sm:inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#0e1013]"
              style={{ borderColor: BAU }}
            >
              {TEL_ANZEIGE} <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="relative isolate min-h-[calc(100svh-2rem)] overflow-hidden">
          <img
            src={IMG_HERO}
            alt="Rohbau eines Hauses — Platzhalterbild"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1013] via-black/60 to-black/55" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#0e1013] via-[#0e1013]/85 to-transparent" />
          <div
            className="pointer-events-none absolute -right-40 top-1/4 h-[34rem] w-[34rem] rounded-full opacity-20 blur-3xl"
            style={{ background: `radial-gradient(circle, ${BAU}, transparent 65%)` }}
          />
          <Platzhalter />

          <div className="relative mx-auto flex min-h-[calc(100svh-2rem)] w-full max-w-6xl flex-col px-6 pt-20 pb-5">
            <div className="flex flex-1 flex-col justify-center">
              <Reveal>
                <div className="text-xs font-semibold uppercase tracking-[0.35em]" style={{ color: BAU }}>
                  Bauplanung · Neubau · Umbau · Küssnacht am Rigi
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-5xl lg:text-6xl font-bold leading-[1.04] tracking-tight text-white">
                  Vom Plan
                  <br />
                  <span style={{ color: BAU }}>zum Bau.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-4 max-w-xl text-base lg:text-lg text-white/70 leading-relaxed">
                  Bauplanung und Ausführung von Bauarbeiten aller Art — beides von denselben Leuten. Aus Küssnacht am
                  Rigi, für die Region.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <a
                    href="#kontakt"
                    className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-[#0e1013] transition hover:opacity-90"
                    style={{ backgroundColor: BAU }}
                  >
                    Projekt besprechen <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
                  </a>
                  <a
                    href="#leistungen"
                    className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white hover:bg-white/10 transition"
                  >
                    Leistungen ansehen
                  </a>
                </div>
              </Reveal>
            </div>

            {/* BEWUSST ohne <Reveal>: Die Leiste sitzt an der Unterkante des Heros.
                Reveal blendet erst ein, wenn das Element 80px im Sichtfeld liegt
                (viewport margin -80px) — auf Bens 625px hohem Fenster wurde sie
                dadurch NIE sichtbar. Am 02.09. im Screenshot nachgewiesen. */}
            <div>
              <div className="mt-8 rounded-2xl border border-white/10 bg-[#14171a]/90 backdrop-blur shadow-2xl">
                <div className="grid grid-cols-2 md:grid-cols-4 divide-y divide-white/10 md:divide-y-0 md:divide-x">
                  {[
                    { k: "Küssnacht", v: "am Rigi · Kanton Schwyz" },
                    { k: "Planung + Bau", v: "beides aus einer Hand" },
                    { k: "Aller Art", v: "Neubau · Umbau · Renovation" },
                    { k: "Direkt", v: "eine Ansprechperson" },
                  ].map((s) => (
                    <div key={s.v} className="px-5 py-3.5 md:py-4 text-center">
                      <div
                        className="font-[family-name:var(--font-display)] text-lg md:text-2xl font-bold"
                        style={{ color: BAU }}
                      >
                        {s.k}
                      </div>
                      <div className="mt-1 text-[11px] uppercase tracking-wider text-white/50">{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leistungen */}
        <section id="leistungen" className="py-20 md:py-28" style={{ backgroundColor: BETON }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-8 items-end">
              <Reveal className="md:col-span-7">
                <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: BAU_DUNKEL }}>
                  Was wir machen
                </div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight text-[#0e1013]">
                  Geplant und gebaut — nicht nur das eine.
                </h2>
              </Reveal>
              <Reveal delay={0.1} className="md:col-span-5">
                <p className="text-[#0e1013]/60 leading-relaxed">
                  Die meisten Bauherren haben zwei Nummern: eine fürs Planen und eine fürs Bauen. Und dazwischen
                  vermitteln sie selber. Bei uns ist das dieselbe.
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-4">
              {leistungen.map((l, i) => (
                <Reveal key={l.title} delay={(i % 2) * 0.08} className={l.span}>
                  <div className={`group relative ${l.h} overflow-hidden rounded-2xl`}>
                    <img
                      src={l.img}
                      alt={`${l.title} — Platzhalterbild`}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <Platzhalter />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <l.icon className="h-5 w-5" strokeWidth={1.6} style={{ color: BAU }} />
                      <div className="mt-3 font-[family-name:var(--font-display)] text-xl font-bold text-white">
                        {l.title}
                      </div>
                      <p className="mt-1 max-w-md text-sm text-white/70 leading-relaxed">{l.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Ehrlichkeits-Kasten: Im Handelsregister steht nur "Bauarbeiten
                aller Art". Statt etwas zu behaupten, fragen wir ihn. Das ist
                gleichzeitig der Anlass für den zweiten Anruf. */}
            <Reveal delay={0.1}>
              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5 rounded-2xl border-2 border-dashed border-[#0e1013]/20 bg-white p-7">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "#fdf0cf" }}
                >
                  <Handshake className="h-6 w-6" strokeWidth={1.6} style={{ color: BAU_DUNKEL }} />
                </div>
                <div>
                  <div className="font-[family-name:var(--font-display)] text-lg font-bold text-[#0e1013]">
                    Stimmt diese Aufteilung?
                  </div>
                  <p className="mt-1 text-sm text-[#0e1013]/60 leading-relaxed">
                    Diese sechs Bereiche sind mein Vorschlag — im Handelsregister steht nur „Bauplanung sowie
                    Ausführung von Bauarbeiten aller Art". Sagen Sie mir, was Sie wirklich machen und was weg kann,
                    dann passe ich es an. Das ist im Preis inbegriffen.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Arbeiten / Galerie */}
        <section id="arbeiten" className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-10 items-start">
              <Reveal className="md:col-span-5 md:sticky md:top-24">
                <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: BAU }}>
                  Arbeiten
                </div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight text-white">
                  Ein Bau zeigt, wer ihn gemacht hat.
                </h2>
                <p className="mt-5 text-white/60 leading-relaxed">
                  Die meisten Leute vergeben einen Bauauftrag ein- oder zweimal im Leben. Sie suchen deshalb kein
                  Angebot, sondern jemanden, dem sie es zutrauen.
                </p>
                <div className="mt-8 rounded-2xl border border-dashed border-white/20 bg-white/[0.03] p-5">
                  <div className="text-sm font-semibold text-white">Hier kommen Ihre eigenen Objekte hin</div>
                  <p className="mt-1.5 text-sm text-white/55 leading-relaxed">
                    Alle Bilder auf dieser Seite sind Platzhalter. Schicken Sie mir Handyfotos von ausgeführten
                    Arbeiten — auch unbearbeitete reichen —, dann ersetze ich sie. Dann zeigt die Seite Ihre Baustellen
                    statt fremder.
                  </p>
                </div>
                <div className="mt-8 hidden md:block">
                  <span className="mb-3 block h-px w-10" style={{ backgroundColor: BAU }} />
                  <span className="text-sm text-white/40">Beispielhafte Motive — noch keine Objekte der Firma.</span>
                </div>
              </Reveal>

              <div className="md:col-span-7 grid grid-cols-2 gap-4">
                {galerie.map((g, i) => (
                  <Reveal key={g.t} delay={(i % 2) * 0.08}>
                    <div className="group relative h-56 overflow-hidden rounded-2xl sm:h-64">
                      <img
                        src={g.img}
                        alt={`${g.t} — Platzhalterbild`}
                        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <Platzhalter />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-4 text-sm font-semibold text-white">{g.t}</div>
                    </div>
                  </Reveal>
                ))}
                <Reveal className="col-span-2">
                  <div className="group relative h-56 overflow-hidden rounded-2xl sm:h-64">
                    <img
                      src={IMG_REF_HAUS}
                      alt="Wohnüberbauung im Bau — Platzhalterbild"
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <Platzhalter />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4 text-sm font-semibold text-white">
                      Wohnüberbauung im Bau
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Ablauf */}
        <section id="ablauf" className="py-20 md:py-28" style={{ backgroundColor: "#121519" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-10 items-start">
              <Reveal className="md:col-span-4">
                <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: BAU }}>
                  Ablauf
                </div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-white">
                  In vier Schritten zum fertigen Bau.
                </h2>
                <div className="relative mt-8 h-56 overflow-hidden rounded-2xl">
                  <img
                    src={IMG_BAUSTELLE}
                    alt="Baustelle — Platzhalterbild"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <Platzhalter />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
              </Reveal>
              <div className="md:col-span-8 grid sm:grid-cols-2 gap-4">
                {ablauf.map((a, i) => (
                  <Reveal key={a.n} delay={(i % 2) * 0.08}>
                    <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                      <div
                        className="font-[family-name:var(--font-display)] text-2xl font-bold"
                        style={{ color: BAU }}
                      >
                        {a.n}
                      </div>
                      <div className="mt-3 font-[family-name:var(--font-display)] text-lg font-bold text-white">
                        {a.t}
                      </div>
                      <p className="mt-2 text-sm text-white/60 leading-relaxed">{a.d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
            <Reveal>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: BAU }}>
                  Kontakt
                </div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight text-white">
                  Reden wir über Ihr Projekt.
                </h2>
                <p className="mt-6 text-white/60 leading-relaxed">
                  Ein Anruf genügt für einen unverbindlichen Termin — wir kommen vorbei, schauen es an und sagen Ihnen
                  ehrlich, was möglich ist und was nicht.
                </p>
                <div className="mt-10 space-y-5 text-white/80">
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0" style={{ color: BAU }} />
                    <span>
                      Dober Bau GmbH
                      <br />
                      Chliarniweg 4, 6403 Küssnacht am Rigi
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 shrink-0" style={{ color: BAU }} />
                    <a href={TEL_LINK} className="hover:text-white transition">
                      {TEL_ANZEIGE}
                    </a>
                  </div>
                  {EMAIL ? (
                    <div className="flex items-center gap-4">
                      <Mail className="h-5 w-5 shrink-0" style={{ color: BAU }} />
                      <a href={`mailto:${EMAIL}`} className="hover:text-white transition">
                        {EMAIL}
                      </a>
                    </div>
                  ) : null}
                  <div className="flex items-start gap-4">
                    <Ruler className="mt-0.5 h-5 w-5 shrink-0" style={{ color: BAU }} />
                    <span>
                      Besichtigung und Beratung bei Ihnen vor Ort
                      <br />
                      <span className="text-sm text-white/45">Küssnacht am Rigi und Umgebung</span>
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <form className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 space-y-4">
                <div>
                  <label className="mb-2 block text-sm text-white/50">Name</label>
                  <input className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white transition focus:border-[#f5b301] focus:outline-none" />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-white/50">E-Mail oder Telefon</label>
                  <input className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white transition focus:border-[#f5b301] focus:outline-none" />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-white/50">Worum geht es?</label>
                  <div className="flex flex-wrap gap-2">
                    {["Neubau", "Umbau", "Renovation", "Maurerarbeiten", "Aussenanlagen"].map((o) => (
                      <span
                        key={o}
                        className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/70"
                      >
                        {o}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm text-white/50">Ihre Nachricht</label>
                  <textarea
                    rows={4}
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white transition focus:border-[#f5b301] focus:outline-none"
                  />
                </div>
                <button
                  type="button"
                  className="w-full rounded-full px-6 py-3 font-semibold text-[#0e1013] transition hover:opacity-90"
                  style={{ backgroundColor: BAU }}
                >
                  Anfrage senden
                </button>
                <p className="text-center text-xs text-white/35">Entwurf — das Formular verschickt noch nichts.</p>
              </form>
            </Reveal>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <Wordmark className="text-lg" />
            <span className="text-sm text-white/40">
              © {new Date().getFullYear()} Dober Bau GmbH · Chliarniweg 4, 6403 Küssnacht am Rigi
            </span>
            <span className="text-sm text-white/40">
              Entwurf von{" "}
              <Link href="/" className="underline hover:text-white">
                Hugweb
              </Link>
            </span>
          </div>
          <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-white/30">
            Alle Bilder sind Platzhalter aus freien Bildquellen und zeigen nicht Objekte der Dober Bau GmbH.
          </div>
        </footer>
      </div>
    </>
  );
}
