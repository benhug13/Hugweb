import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Tractor,
  Siren,
  ClipboardList,
  Package,
  Phone,
  MapPin,
  Mail,
  Navigation,
} from "lucide-react";
import { Fraunces, Inter } from "next/font/google";
import Reveal from "@/components/Reveal";

const display = Fraunces({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });

export const metadata = {
  title: "Landmetzgerei Wattenwil — Lohn- & Notschlachtung | Entwurf von Hugweb",
  description:
    "Entwurf einer modernen Website für die Landmetzgerei Wattenwil: Metzgerhandwerk aus Wattenwil, Lohnschlachtung und Notschlachtung durch drei qualifizierte Metzger.",
};

const ACCENT = "#c8a45c";

// Alle Texte stammen 1:1 von landmetzgerei.ch.
// Auf landmetzgerei.ch gibt es ausser dem Logo KEINE Fotos.
// → Das Logo unten ist echt (von ihrer eigenen Seite).
// → Alle übrigen Bilder sind PLATZHALTER aus Wikimedia Commons, bewusst aus
//   belegten Kategorien geholt und einzeln angeschaut (nicht blind übernommen).
//   In der Fusszeile sind sie als Beispielbilder deklariert.
const LOGO = "https://www.landmetzgerei.ch/wp-content/uploads/2023/11/Logo-Landmetzgerei-quadrat-980x980.png";
const WM = "https://upload.wikimedia.org/wikipedia/commons";
// „Cows in the fog" (CC BY-SA 2.0) — dunkel genug, dass die Headline lesbar bleibt
const IMG_HERO = `${WM}/thumb/6/6b/Cows_in_the_fog_%2820324173371%29.jpg/1920px-Cows_in_the_fog_%2820324173371%29.jpg`;
// Echtes Bauernhaus in Wattenwil (CC BY-SA 4.0) — ihr Dorf, aber nicht ihr Betrieb
const IMG_WATTENWIL = `${WM}/thumb/6/61/2020-Wattenwil-Bauernhaus.jpg/1280px-2020-Wattenwil-Bauernhaus.jpg`;
const IMG_HOF = `${WM}/thumb/7/71/Heuballen_Sonnhalde_Wynigen.jpg/1920px-Heuballen_Sonnhalde_Wynigen.jpg`;
const IMG_KUH = `${WM}/thumb/8/8c/Cow_%28Fleckvieh_breed%29_Oeschinensee_Slaunger_2009-07-07.jpg/1920px-Cow_%28Fleckvieh_breed%29_Oeschinensee_Slaunger_2009-07-07.jpg`;
const IMG_REGION = [
  { src: `${WM}/thumb/5/50/Naturpark_Gantrisch_01.JPG/1920px-Naturpark_Gantrisch_01.JPG`, alt: "Voralpen-Landschaft" },
  { src: `${WM}/thumb/6/64/Alpabzug_%28Almabtrieb%29_in_Wassen%2C_Switzerland.jpg/1920px-Alpabzug_%28Almabtrieb%29_in_Wassen%2C_Switzerland.jpg`, alt: "Vieh im Dorf" },
  { src: `${WM}/thumb/a/a8/Cow_in_the_Swiss_alps_%2842487491210%29.jpg/1920px-Cow_in_the_Swiss_alps_%2842487491210%29.jpg`, alt: "Kuh auf der Weide" },
];

// Karte: Blumensteinstrasse 35b, 3665 Wattenwil (Koordinaten via OpenStreetMap Nominatim).
// Bewusst als statisches Kachel-Mosaik statt als OSM-/Google-iframe: das neue OSM-Embed
// braucht WebGL und bleibt auf älteren Geräten leer. Kacheln sind reine Bilder —
// kein JavaScript, kein WebGL, kein Tracking.
// Die acht Kacheln liegen unter /public/landmetzgerei/map/ — direkt von tile.openstreetmap.org
// geladen werden sie im Browser blockiert. Attribution steht auf der Karte (ODbL).
const MAP_TILES = [
  [34133, 23113], [34134, 23113], [34135, 23113], [34136, 23113],
  [34133, 23114], [34134, 23114], [34135, 23114], [34136, 23114],
];
const MAP_MARKER = { left: "48.5%", top: "39.4%" }; // exakte Lage des Hauses im Kachelraster
const MAP_LINK = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("Blumensteinstrasse 35b, 3665 Wattenwil")}`;

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {/* Echtes Logo von landmetzgerei.ch — schwarze Silhouette auf weissem Grund.
          Invertieren scheitert am schwarzen Kasten (mix-blend greift im Header-Stapelkontext
          nicht), darum bewusst auf einem hellen Kreis — so bleibt das Logo wie es ist. */}
      <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#f4f1ea]">
        <img src={LOGO} alt="" aria-hidden className="h-9 w-9" />
      </span>
      <span className="font-[family-name:var(--font-display)] font-semibold tracking-tight text-white">
        Landmetzgerei <span style={{ color: ACCENT }}>Wattenwil</span>
      </span>
    </span>
  );
}

const tiere = ["Kalb", "Kaninchen", "Kuh", "Lamm", "Rind", "Schaf", "Schwein"];

const prozess = [
  { n: "01", t: "Verarbeitungsliste ausfüllen", d: "Sie sagen uns, wie das Tier zerlegt und verpackt werden soll." },
  { n: "02", t: "Termin abmachen", d: "Wir stimmen den Schlachttermin persönlich mit Ihnen ab." },
  { n: "03", t: "Schlachtung", d: "Fachgerecht durchgeführt — von drei qualifizierten Metzgern." },
  { n: "04", t: "Zerlegen & Verpacken", d: "Nach Ihren Wünschen zerlegt, verpackt und bereitgestellt." },
];

const nav = [
  { label: "Über uns", href: "#firma" },
  { label: "Angebot", href: "#leistungen" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function LandmetzgereiWattenwilDemo() {
  return (
    <>
      <div className="bg-neutral-900 text-white text-xs py-2 text-center">
        Unverbindlicher Entwurf von <Link href="/" className="underline font-medium">Hugweb</Link>
        <Link href="/#demos" className="ml-4 inline-flex items-center gap-1 opacity-80 hover:opacity-100">
          <ArrowLeft className="h-3 w-3" /> Zurück
        </Link>
      </div>

      <div className={`${display.variable} ${body.variable} font-[family-name:var(--font-body)] bg-[#0b0f0c] text-neutral-200`}>
        {/* Header — transparent über Hero */}
        <header className="absolute inset-x-0 top-8 z-40">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
            <Wordmark className="text-lg md:text-xl" />
            <nav className="hidden lg:flex items-center gap-9 text-sm font-medium text-white/75">
              {nav.map((n) => (
                <a key={n.label} href={n.href} className="hover:text-white transition">{n.label}</a>
              ))}
            </nav>
            <a href="#kontakt" className="hidden sm:inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-black" style={{ borderColor: ACCENT }}>
              Kontakt <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </header>

        {/* Hero — Foto im Hintergrund, darüber dunkler Verlauf, damit der Text lesbar bleibt */}
        <section className="relative isolate min-h-[calc(100svh-2rem)] overflow-hidden">
          <img src={IMG_HERO} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(7,10,8,0.95) 0%, rgba(7,10,8,0.82) 45%, rgba(7,10,8,0.55) 100%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0b0f0c 4%, transparent 45%)" }} />
          <div className="pointer-events-none absolute -right-40 top-1/4 h-[38rem] w-[38rem] rounded-full opacity-20 blur-3xl" style={{ background: `radial-gradient(circle, ${ACCENT}, transparent 65%)` }} />

          <div className="relative mx-auto flex min-h-[calc(100svh-2rem)] w-full max-w-6xl flex-col px-6 pt-24 pb-6">
            <div className="flex flex-1 flex-col justify-center">
              <Reveal>
                <div className="text-xs font-semibold uppercase tracking-[0.35em]" style={{ color: ACCENT }}>
                  Wattenwil BE · Metzgerhandwerk
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-white">
                  Fleischgenuss<br />ohne <span style={{ color: ACCENT }} className="italic">Kompromisse.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-5 max-w-xl text-base lg:text-lg text-white/75 leading-relaxed">
                  Lohn- und Notschlachtung aus einer Hand — durchgeführt von drei jungen, hoch qualifizierten Metzgern, mit grosser Sorgfalt und Fachkenntnis.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-7 flex flex-col sm:flex-row gap-4">
                  <a href="#kontakt" className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-black transition hover:opacity-90" style={{ backgroundColor: ACCENT }}>
                    Kontakt aufnehmen <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
                  </a>
                  <a href="tel:0783109076" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-black/30 px-7 py-3.5 font-semibold text-white backdrop-blur hover:bg-white/10 transition">
                    <Siren className="h-4 w-4" /> Notfall: 078 310 90 76
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.4}>
              <div className="mt-10 rounded-2xl border border-white/10 bg-[#121712]/90 backdrop-blur shadow-2xl">
                <div className="grid grid-cols-2 md:grid-cols-4 divide-y divide-white/10 md:divide-y-0 md:divide-x">
                  {[
                    { k: "3", v: "qualifizierte Metzger" },
                    { k: "Lohnschlachtung", v: "eigene Haltung & Jagd" },
                    { k: "24 h", v: "erreichbar im Notfall" },
                    { k: "Tradition", v: "Handwerk aus Wattenwil" },
                  ].map((s) => (
                    <div key={s.v} className="px-5 py-4 md:py-5 text-center">
                      <div className="font-[family-name:var(--font-display)] text-lg md:text-xl font-semibold" style={{ color: ACCENT }}>{s.k}</div>
                      <div className="mt-1 text-[11px] uppercase tracking-wider text-white/50">{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Über uns — mit Bild aus Wattenwil */}
        <section id="firma" className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
            <Reveal className="md:col-span-6">
              <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: ACCENT }}>Über uns</div>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold leading-tight text-white">
                Metzgerhandwerk aus Wattenwil.
              </h2>
              <p className="mt-6 text-lg text-white/60 leading-relaxed">
                Wir setzen eine lange Tradition des Fleischerhandwerks in Wattenwil fort und bieten unseren Kunden erstklassige Produkte und Dienstleistungen. Besonders auszeichnen uns die Lohn- und Notschlachtungen — durchgeführt von drei jungen, hoch qualifizierten Metzgern.
              </p>
              <p className="mt-6 text-white/45 leading-relaxed">
                Unser Handwerk erlangt immer mehr Seltenheitswert. Für uns steht zu jeder Zeit das Wohlergehen der Tiere an oberster Stelle.
              </p>
            </Reveal>
            <Reveal delay={0.15} className="md:col-span-6">
              <div className="relative overflow-hidden rounded-2xl border border-white/10">
                <img src={IMG_WATTENWIL} alt="Bauernhaus in Wattenwil" className="h-[26rem] w-full object-cover transition duration-700 hover:scale-[1.03]" />
                <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,10,8,0.7) 0%, transparent 45%)" }} />
                <div className="absolute bottom-5 left-6 text-sm text-white/80">Wattenwil, Berner Oberland</div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Angebot — die zwei echten Leistungen, je mit Bildkopf */}
        <section id="leistungen" className="relative py-24 md:py-32 border-y border-white/10 bg-[#070a08] overflow-hidden">
          <div className="pointer-events-none absolute -right-40 top-0 h-[30rem] w-[30rem] rounded-full opacity-20 blur-3xl" style={{ background: `radial-gradient(circle, ${ACCENT}, transparent 65%)` }} />
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-8 items-end">
              <Reveal className="md:col-span-7">
                <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: ACCENT }}>Das Beste für Sie</div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold text-white">Unser Angebot</h2>
              </Reveal>
              <Reveal delay={0.1} className="md:col-span-5">
                <p className="text-white/60 leading-relaxed">
                  Unser Handwerk erlangt immer mehr Seltenheitswert. Für uns steht zu jeder Zeit das Wohlergehen der Tiere an oberster Stelle.
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid md:grid-cols-2 gap-6 items-stretch">
              <Reveal className="h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-white/20">
                  <div className="relative h-52 overflow-hidden">
                    <img src={IMG_HOF} alt="Bauernhof" className="h-full w-full object-cover" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,10,8,0.95) 6%, rgba(7,10,8,0.15) 70%)" }} />
                    <div className="absolute bottom-4 left-8 flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-black/50 backdrop-blur">
                      <Tractor className="h-6 w-6" strokeWidth={1.6} style={{ color: ACCENT }} />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-8 pt-6">
                    <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white">Lohnschlachtung</h3>
                    <p className="mt-4 text-white/60 leading-relaxed">
                      Wir schlachten in Ihrem Auftrag Tiere aus eigener Haltung oder Jagd. Die Tiere werden anschliessend nach Ihren Wünschen zerlegt und verpackt.
                    </p>
                    <div className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Verarbeitungsliste für</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {tiere.map((t) => (
                        <span key={t} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-white/70">{t}</span>
                      ))}
                    </div>
                    <div className="mt-auto pt-8">
                      <a href="#kontakt" className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition" style={{ color: ACCENT }}>
                        Verarbeitungsliste anfordern <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1} className="h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-white/20">
                  <div className="relative h-52 overflow-hidden">
                    <img src={IMG_KUH} alt="Kuh auf der Weide" className="h-full w-full object-cover" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,10,8,0.95) 6%, rgba(7,10,8,0.15) 70%)" }} />
                    <div className="absolute bottom-4 left-8 flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-black/50 backdrop-blur">
                      <Siren className="h-6 w-6" strokeWidth={1.6} style={{ color: ACCENT }} />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-8 pt-6">
                    <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white">Notschlachtung</h3>
                    <p className="mt-4 text-white/60 leading-relaxed">
                      In dringenden Fällen unterstützen wir Sie gerne am Hof. Für uns steht zu jeder Zeit das Wohlergehen der Tiere an oberster Stelle.
                    </p>
                    <div className="mt-8 rounded-xl border border-white/10 bg-black/30 p-5">
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Rund um die Uhr erreichbar</div>
                      <a href="tel:0783109076" className="mt-2 block font-[family-name:var(--font-display)] text-2xl font-semibold text-white transition hover:opacity-80">
                        078 310 90 76
                      </a>
                    </div>
                    <div className="mt-auto pt-8 text-sm text-white/45">
                      Unser Handwerk erlangt immer mehr Seltenheitswert — wir sind da, wenn es zählt.
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Ablauf */}
        <section id="ablauf" className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: ACCENT }}>Ablauf</div>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold text-white">So läuft eine Lohnschlachtung.</h2>
            </Reveal>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-8">
              {prozess.map((p, i) => (
                <Reveal key={p.n} delay={i * 0.06}>
                  <div className="font-[family-name:var(--font-display)] text-5xl font-semibold" style={{ color: ACCENT }}>{p.n}</div>
                  <div className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold text-white">{p.t}</div>
                  <p className="mt-2 text-sm text-white/55 leading-relaxed">{p.d}</p>
                </Reveal>
              ))}
            </div>

            {/* Bildband — bricht die Textwüste auf */}
            <Reveal delay={0.2}>
              <div className="mt-16 grid grid-cols-3 gap-3 md:gap-4">
                {IMG_REGION.map((img) => (
                  <div key={img.src} className="relative overflow-hidden rounded-xl border border-white/10">
                    <img src={img.src} alt={img.alt} className="h-40 w-full object-cover transition duration-700 hover:scale-105 md:h-56" />
                    <div className="pointer-events-none absolute inset-0 bg-black/25" />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="py-24 md:py-32 border-t border-white/10 bg-[#070a08]">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: ACCENT }}>Haben Sie Fragen?</div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold text-white">Kontakt</h2>
                <p className="mt-6 text-white/60 leading-relaxed">
                  Fragen zu Lohn- und Notschlachtungen beantworten wir Ihnen am liebsten telefonisch, aber auch per E-Mail oder Kontaktformular.
                </p>
                <div className="mt-10 space-y-5 text-white/80">
                  <div className="flex items-center gap-4"><Phone className="h-5 w-5" style={{ color: ACCENT }} /><span>Metzgerei: <a href="tel:0783118065" className="hover:underline">078 311 80 65</a></span></div>
                  <div className="flex items-center gap-4"><Siren className="h-5 w-5" style={{ color: ACCENT }} /><span>Notfall (24 h): <a href="tel:0783109076" className="hover:underline">078 310 90 76</a></span></div>
                  <div className="flex items-center gap-4"><Mail className="h-5 w-5" style={{ color: ACCENT }} /><span>info@landmetzgerei.ch</span></div>
                  <div className="flex items-start gap-4"><MapPin className="mt-0.5 h-5 w-5" style={{ color: ACCENT }} /><span>Landmetzgerei Wattenwil<br />Blumensteinstrasse 35b, 3665 Wattenwil</span></div>
                  <div className="flex items-start gap-4"><ClipboardList className="mt-0.5 h-5 w-5" style={{ color: ACCENT }} /><span>Verarbeitungsliste für Kalb, Kaninchen, Kuh, Lamm, Rind, Schaf und Schwein</span></div>
                  <div className="flex items-start gap-4"><Package className="mt-0.5 h-5 w-5" style={{ color: ACCENT }} /><span>Zerlegt und verpackt nach Ihren Wünschen</span></div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <form className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div><label className="mb-2 block text-sm text-white/50">Vorname</label><input className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white transition focus:border-[#c8a45c] focus:outline-none" /></div>
                  <div><label className="mb-2 block text-sm text-white/50">Nachname</label><input className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white transition focus:border-[#c8a45c] focus:outline-none" /></div>
                </div>
                <div><label className="mb-2 block text-sm text-white/50">E-Mailadresse</label><input className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white transition focus:border-[#c8a45c] focus:outline-none" /></div>
                <div><label className="mb-2 block text-sm text-white/50">Telefonnummer</label><input className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white transition focus:border-[#c8a45c] focus:outline-none" /></div>
                <div><label className="mb-2 block text-sm text-white/50">Nachricht</label><textarea rows={4} className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white transition focus:border-[#c8a45c] focus:outline-none" /></div>
                <button type="button" className="w-full rounded-full px-6 py-3 font-semibold text-black transition hover:opacity-90" style={{ backgroundColor: ACCENT }}>Senden</button>
              </form>
            </Reveal>
          </div>

          {/* Karte & Anfahrt */}
          <div className="max-w-6xl mx-auto px-6 mt-16">
            <Reveal>
              <div className="grid gap-6 md:grid-cols-12">
                <div className="relative md:col-span-8 overflow-hidden rounded-2xl border border-white/10">
                  {/* gedämpft, damit die helle Karte nicht aus dem dunklen Design springt */}
                  <div className="grid grid-cols-4 grid-rows-2 saturate-[0.6] brightness-[0.72] contrast-[1.08]">
                    {MAP_TILES.map(([x, y]) => (
                      <img
                        key={`${x}-${y}`}
                        src={`/landmetzgerei/map/16-${x}-${y}.png`}
                        alt=""
                        aria-hidden
                        width={256}
                        height={256}
                        // ohne width/height wäre die Kachel vor dem Laden 0 hoch — dann kommt
                        // sie nie in den Viewport und lazy-loading feuert nie
                        className="block aspect-square w-full"
                      />
                    ))}
                  </div>
                  {/* Marker auf dem Haus */}
                  <div className="pointer-events-none absolute -translate-x-1/2 -translate-y-full" style={MAP_MARKER}>
                    <MapPin className="h-9 w-9 drop-shadow-lg" strokeWidth={2.2} style={{ color: ACCENT, fill: "#0b0f0c" }} />
                  </div>
                  <div className="absolute bottom-0 right-0 bg-black/55 px-2 py-1 text-[10px] text-white/70">
                    © OpenStreetMap-Mitwirkende
                  </div>
                </div>
                <div className="md:col-span-4 flex flex-col justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                  <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: ACCENT }}>So finden Sie uns</div>
                  <div className="mt-4 font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
                    Blumensteinstrasse 35b
                  </div>
                  <div className="mt-1 text-white/60">3665 Wattenwil BE</div>
                  <p className="mt-5 text-sm text-white/50 leading-relaxed">
                    Für Notschlachtungen kommen wir zu Ihnen auf den Hof — rufen Sie einfach an.
                  </p>
                  <a
                    href={MAP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-black transition hover:opacity-90"
                    style={{ backgroundColor: ACCENT }}
                  >
                    <Navigation className="h-4 w-4" /> Route öffnen
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Footer — pb-24 auf Mobile, damit die Notfall-Leiste nichts verdeckt */}
        <footer className="border-t border-white/10 bg-[#0b0f0c] pb-24 lg:pb-0">
          <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col sm:flex-row items-center justify-between gap-6">
            <Wordmark className="text-base md:text-lg" />
            <span className="text-sm text-white/40">© {new Date().getFullYear()} Landmetzgerei Wattenwil</span>
            <span className="text-sm text-white/40">Entwurf von <Link href="/" className="underline hover:text-white">Hugweb</Link></span>
          </div>
          <div className="max-w-6xl mx-auto px-6 pb-10 text-center text-xs text-white/30">
            Das Logo stammt von landmetzgerei.ch. Alle Fotos sind Platzhalter (Wikimedia Commons) — im fertigen Projekt kommen Ihre eigenen Bilder rein.
          </div>
        </footer>

        {/* Notfall-Leiste — auf dem Handy immer sichtbar, denn im Notfall ruft man vom Stall aus an */}
        <a
          href="tel:0783109076"
          className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-3 border-t border-black/20 px-6 py-4 font-semibold text-black shadow-2xl lg:hidden"
          style={{ backgroundColor: ACCENT }}
        >
          <Siren className="h-5 w-5" />
          <span>Notschlachtung — 24 h anrufen</span>
        </a>
      </div>
    </>
  );
}
