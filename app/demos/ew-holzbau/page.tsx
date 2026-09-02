import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Hammer,
  House,
  Layers,
  Mail,
  MapPin,
  Mountain,
  Phone,
  Ruler,
  Clock,
  Handshake,
  TreePine,
  Wrench,
} from "lucide-react";
import { Archivo, Inter } from "next/font/google";
import Reveal from "@/components/Reveal";

const display = Archivo({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });

export const metadata = {
  title: "EW Holzbau GmbH — Zimmerei, Bedachungen und Gebäudehülle in Ruswil | Entwurf von Hugweb",
  description:
    "Entwurf einer Website für die EW Holzbau GmbH, Schlosshalde 6, 6017 Ruswil LU: Zimmerei, Bedachungen, Fassaden, Gebäudehülle, Innenausbau sowie Umbauten und Renovationen.",
};

// Warmes Lärchen-Orange auf fast schwarzem Grund — bewusst kräftiger als das
// Kupfer der Schreinerei-Vorlage, damit die beiden Entwürfe nicht gleich wirken.
const HOLZ = "#d98a2b";
const TINTE = "#100e0b";
const SAND = "#f5f1ea";

// ALLE Bilder sind PLATZHALTER (Pexels, freie kommerzielle Nutzung) und im
// Entwurf sichtbar als solche gekennzeichnet. Beim echten Auftrag werden sie
// durch eigene Fotos der ausgeführten Objekte ersetzt.
const PX = (u: string, w = 1400) => `${u}?auto=compress&cs=tinysrgb&w=${w}`;

const IMG_HERO = PX("https://images.pexels.com/photos/37551632/pexels-photo-37551632/free-photo-of-wooden-house-at-sunrise-with-parked-cars.jpeg", 2000);
const IMG_ZIMMEREI = PX("https://images.pexels.com/photos/15456627/pexels-photo-15456627/free-photo-of-wooden-skeletal-structure-of-roof-under-blue-sky.jpeg");
const IMG_BEDACHUNG = PX("https://images.pexels.com/photos/38749917/pexels-photo-38749917/free-photo-of-roof-construction-worker-in-action-against-clear-sky.jpeg");
const IMG_FASSADE = PX("https://images.pexels.com/photos/37977983/pexels-photo-37977983/free-photo-of-modern-wooden-exterior-architectural-design.jpeg");
const IMG_GEBHUELLE = PX("https://images.pexels.com/photos/38524253/pexels-photo-38524253/free-photo-of-roofer-working-on-house-roof-against-clear-sky.jpeg");
const IMG_INNEN = PX("https://images.pexels.com/photos/31848124/pexels-photo-31848124/free-photo-of-rustic-wooden-ceiling-with-exposed-beams.jpeg");
const IMG_UMBAU = PX("https://images.pexels.com/photos/33404353/pexels-photo-33404353/free-photo-of-wooden-house-framing-under-construction-in-texas.jpeg");
const IMG_REF_HAUS = PX("https://images.pexels.com/photos/18385953/pexels-photo-18385953/free-photo-of-a-driveway-and-a-modern-house.jpeg");
const IMG_REF_MODERN = PX("https://images.pexels.com/photos/32934164/pexels-photo-32934164/free-photo-of-wooden-house-with-contemporary-design-and-blue-window.jpeg");
const IMG_REF_DUNKEL = PX("https://images.pexels.com/photos/34889930/pexels-photo-34889930/free-photo-of-rustic-wooden-house-facade-with-windows.jpeg");
const IMG_REF_CHALET = PX("https://images.pexels.com/photos/37426166/pexels-photo-37426166/free-photo-of-charming-european-chalet-with-wooden-details.jpeg");
const IMG_BINDER = PX("https://images.pexels.com/photos/37703280/pexels-photo-37703280/free-photo-of-rustic-wooden-roof-architecture-design.jpeg");
const IMG_WERKSTATT = PX("https://images.pexels.com/photos/20723244/pexels-photo-20723244/free-photo-of-carpenter-cutting-wood-with-saw.jpeg");

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

// Genau die sechs Bereiche aus dem Handelsregister-Zweck — nichts dazuerfunden.
const leistungen = [
  {
    icon: TreePine,
    title: "Zimmerei",
    desc: "Dachstühle, Tragwerke und Konstruktionen in Holz — geplant, abgebunden und aufgerichtet.",
    img: IMG_ZIMMEREI,
    span: "md:col-span-7",
    h: "h-[23rem]",
  },
  {
    icon: House,
    title: "Bedachungen",
    desc: "Vom Ziegeldach bis zum Flachdach: neu eingedeckt, ergänzt oder repariert.",
    img: IMG_BEDACHUNG,
    span: "md:col-span-5",
    h: "h-[23rem]",
  },
  {
    icon: Layers,
    title: "Fassaden",
    desc: "Holzschalungen und Verkleidungen, die zum Haus passen und Jahrzehnte halten.",
    img: IMG_REF_MODERN,
    span: "md:col-span-5",
    h: "h-[21rem]",
  },
  {
    icon: Mountain,
    title: "Gebäudehülle",
    desc: "Dach, Fassade und Dämmung als ein Ganzes gedacht — dicht, gedämmt, sauber angeschlossen.",
    img: IMG_REF_HAUS,
    span: "md:col-span-7",
    h: "h-[21rem]",
  },
  {
    icon: Hammer,
    title: "Innenausbau",
    desc: "Böden, Decken, Wände und Einbauten — der Ausbau, der aus dem Rohbau ein Zuhause macht.",
    img: IMG_INNEN,
    span: "md:col-span-7",
    h: "h-[21rem]",
  },
  {
    icon: Wrench,
    title: "Umbauten & Renovationen",
    desc: "Bestehende Bauwerke aller Art umbauen, erweitern und instand stellen.",
    img: IMG_UMBAU,
    span: "md:col-span-5",
    h: "h-[21rem]",
  },
];

const galerie = [
  { img: IMG_FASSADE, t: "Holzschalung, sägeroh" },
  { img: IMG_REF_DUNKEL, t: "Holzfassade, bewittert" },
  { img: IMG_REF_CHALET, t: "Balkon und Dachdetail" },
  { img: IMG_GEBHUELLE, t: "Anschluss am First" },
];

const ablauf = [
  {
    n: "01",
    t: "Anruf und Termin",
    d: "Sie rufen an oder schreiben. Wir schauen uns an, worum es geht — vor Ort, bei Ihnen.",
  },
  {
    n: "02",
    t: "Planung",
    d: "Wir planen die Konstruktion, klären die Details und sagen Ihnen, was möglich ist und was es kostet.",
  },
  {
    n: "03",
    t: "Ausführung",
    d: "Abbund, Aufrichte und Ausführung — mit einer Ansprechperson, die die Baustelle auch leitet.",
  },
  {
    n: "04",
    t: "Übergabe",
    d: "Wir übergeben sauber und aufgeräumt — und sind auch danach erreichbar.",
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
        light ? "text-[#100e0b]" : "text-white"
      } ${className}`}
    >
      EW <span style={{ color: HOLZ }}>HOLZBAU</span>
    </span>
  );
}

export default function EwHolzbauDemo() {
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
              href="tel:0775097349"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#100e0b]"
              style={{ borderColor: HOLZ }}
            >
              077 509 73 49 <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="relative isolate min-h-[calc(100svh-2rem)] overflow-hidden">
          <img
            src={IMG_HERO}
            alt="Holzhaus im Morgenlicht — Platzhalterbild"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#100e0b] via-black/60 to-black/55" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#100e0b] via-[#100e0b]/85 to-transparent" />
          <div
            className="pointer-events-none absolute -right-40 top-1/4 h-[34rem] w-[34rem] rounded-full opacity-25 blur-3xl"
            style={{ background: `radial-gradient(circle, ${HOLZ}, transparent 65%)` }}
          />
          <Platzhalter />

          <div className="relative mx-auto flex min-h-[calc(100svh-2rem)] w-full max-w-6xl flex-col px-6 pt-20 pb-5">
            <div className="flex flex-1 flex-col justify-center">
              <Reveal>
                <div className="text-xs font-semibold uppercase tracking-[0.35em]" style={{ color: HOLZ }}>
                  Zimmerei · Bedachungen · Gebäudehülle · Ruswil LU
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-5xl lg:text-6xl font-bold leading-[1.04] tracking-tight text-white">
                  Holzbau, der
                  <br />
                  <span style={{ color: HOLZ }}>hält.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-4 max-w-xl text-base lg:text-lg text-white/70 leading-relaxed">
                  Zimmerei, Bedachungen, Fassaden, Gebäudehülle und Innenausbau — geplant, ausgeführt und geleitet.
                  Aus Ruswil, für die Region.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <a
                    href="#kontakt"
                    className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-[#100e0b] transition hover:opacity-90"
                    style={{ backgroundColor: HOLZ }}
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
              <div className="mt-8 rounded-2xl border border-white/10 bg-[#16130f]/90 backdrop-blur shadow-2xl">
                <div className="grid grid-cols-2 md:grid-cols-4 divide-y divide-white/10 md:divide-y-0 md:divide-x">
                  {[
                    { k: "6", v: "Bereiche aus einer Hand" },
                    { k: "Ruswil", v: "Schlosshalde 6, 6017" },
                    { k: "Mo–Do 17.15", v: "Fr bis 17.00 erreichbar" },
                    { k: "Planung + Bau", v: "inklusive Bauleitung" },
                  ].map((s) => (
                    <div key={s.v} className="px-5 py-3.5 md:py-4 text-center">
                      <div
                        className="font-[family-name:var(--font-display)] text-lg md:text-2xl font-bold"
                        style={{ color: HOLZ }}
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
        <section id="leistungen" className="py-20 md:py-28" style={{ backgroundColor: SAND }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-8 items-end">
              <Reveal className="md:col-span-7">
                <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: "#9a5f18" }}>
                  Was wir machen
                </div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight text-[#100e0b]">
                  Vom Dachstuhl bis zum letzten Brett.
                </h2>
              </Reveal>
              <Reveal delay={0.1} className="md:col-span-5">
                <p className="text-[#100e0b]/60 leading-relaxed">
                  Zimmerei, Dach, Fassade, Gebäudehülle, Innenausbau und Umbauten — Sie brauchen dafür nicht sechs
                  Firmen und sechs Termine. Bei uns kommt alles von denselben Leuten.
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
                      <l.icon className="h-5 w-5" strokeWidth={1.6} style={{ color: HOLZ }} />
                      <div className="mt-3 font-[family-name:var(--font-display)] text-xl font-bold text-white">
                        {l.title}
                      </div>
                      <p className="mt-1 max-w-md text-sm text-white/70 leading-relaxed">{l.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5 rounded-2xl border border-[#100e0b]/10 bg-white p-7">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "#f6e6d2" }}
                >
                  <Handshake className="h-6 w-6" strokeWidth={1.6} style={{ color: "#9a5f18" }} />
                </div>
                <div>
                  <div className="font-[family-name:var(--font-display)] text-lg font-bold text-[#100e0b]">
                    Planung, Ausführung und Bauleitung — von einer Ansprechperson
                  </div>
                  <p className="mt-1 text-sm text-[#100e0b]/60 leading-relaxed">
                    Sie müssen nicht zwischen Planer, Zimmerei und Dachdecker vermitteln. Wir planen es, wir bauen es,
                    und wir leiten die Arbeiten auch.
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
                <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: HOLZ }}>
                  Arbeiten
                </div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight text-white">
                  Holz sieht man an, wer es gebaut hat.
                </h2>
                <p className="mt-5 text-white/60 leading-relaxed">
                  Eine Konstruktion ist dann gut, wenn sie in zwanzig Jahren noch gerade steht — und wenn man sie
                  trotzdem gerne anschaut.
                </p>
                <div className="mt-8 rounded-2xl border border-dashed border-white/20 bg-white/[0.03] p-5">
                  <div className="text-sm font-semibold text-white">Hier kommen Ihre eigenen Arbeiten hin</div>
                  <p className="mt-1.5 text-sm text-white/55 leading-relaxed">
                    Alle Bilder auf dieser Seite sind Platzhalter. Schicken Sie mir Fotos von ausgeführten Objekten,
                    dann ersetze ich sie — dann zeigt die Seite Ihre Arbeit statt fremder.
                  </p>
                </div>
                <div className="mt-8 hidden md:block">
                  <span className="mb-3 block h-px w-10" style={{ backgroundColor: HOLZ }} />
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
                      src={IMG_BINDER}
                      alt="Dachkonstruktion aus Holz — Platzhalterbild"
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <Platzhalter />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4 text-sm font-semibold text-white">
                      Dachkonstruktion
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Ablauf */}
        <section id="ablauf" className="py-20 md:py-28" style={{ backgroundColor: "#15120e" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-10 items-start">
              <Reveal className="md:col-span-4">
                <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: HOLZ }}>
                  Ablauf
                </div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-white">
                  In vier Schritten zum fertigen Bau.
                </h2>
                <div className="relative mt-8 h-56 overflow-hidden rounded-2xl">
                  <img
                    src={IMG_WERKSTATT}
                    alt="Zuschnitt in der Werkstatt — Platzhalterbild"
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
                        style={{ color: HOLZ }}
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
                <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: HOLZ }}>
                  Kontakt
                </div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight text-white">
                  Reden wir über Ihr Projekt.
                </h2>
                <p className="mt-6 text-white/60 leading-relaxed">
                  Ein Anruf genügt für einen unverbindlichen Termin — wir kommen vorbei, schauen es an und sagen Ihnen
                  ehrlich, was möglich ist.
                </p>
                <div className="mt-10 space-y-5 text-white/80">
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0" style={{ color: HOLZ }} />
                    <span>
                      EW Holzbau GmbH
                      <br />
                      Schlosshalde 6, 6017 Ruswil LU
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 shrink-0" style={{ color: HOLZ }} />
                    <a href="tel:0775097349" className="hover:text-white transition">
                      077 509 73 49
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 shrink-0" style={{ color: HOLZ }} />
                    <a href="mailto:info@ew-holzbau.ch" className="hover:text-white transition">
                      info@ew-holzbau.ch
                    </a>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0" style={{ color: HOLZ }} />
                    <span>
                      Mo–Do 07.00–17.15
                      <br />
                      Fr 07.00–17.00
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <Ruler className="mt-0.5 h-5 w-5 shrink-0" style={{ color: HOLZ }} />
                    <span>
                      Beratung und Aufmass bei Ihnen vor Ort
                      <br />
                      <span className="text-sm text-white/45">in Ruswil und Umgebung</span>
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <form className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 space-y-4">
                <div>
                  <label className="mb-2 block text-sm text-white/50">Name</label>
                  <input className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white transition focus:border-[#d98a2b] focus:outline-none" />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-white/50">E-Mail oder Telefon</label>
                  <input className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white transition focus:border-[#d98a2b] focus:outline-none" />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-white/50">Worum geht es?</label>
                  <div className="flex flex-wrap gap-2">
                    {["Dachstuhl", "Dach", "Fassade", "Innenausbau", "Umbau"].map((o) => (
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
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white transition focus:border-[#d98a2b] focus:outline-none"
                  />
                </div>
                <button
                  type="button"
                  className="w-full rounded-full px-6 py-3 font-semibold text-[#100e0b] transition hover:opacity-90"
                  style={{ backgroundColor: HOLZ }}
                >
                  Anfrage senden
                </button>
                <p className="text-center text-xs text-white/35">
                  Entwurf — das Formular verschickt noch nichts.
                </p>
              </form>
            </Reveal>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <Wordmark className="text-lg" />
            <span className="text-sm text-white/40">
              © {new Date().getFullYear()} EW Holzbau GmbH · Schlosshalde 6, 6017 Ruswil LU
            </span>
            <span className="text-sm text-white/40">
              Entwurf von{" "}
              <Link href="/" className="underline hover:text-white">
                Hugweb
              </Link>
            </span>
          </div>
          <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-white/30">
            Alle Bilder sind Platzhalter aus freien Bildquellen und zeigen nicht Objekte der EW Holzbau GmbH.
          </div>
        </footer>
      </div>
    </>
  );
}
