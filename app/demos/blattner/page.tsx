import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Armchair,
  Hammer,
  Home,
  ChefHat,
  Bath,
  Layers,
  Ruler,
  Sparkles,
  Handshake,
  TreePine,
  Phone,
  Printer,
  MapPin,
  Mail,
} from "lucide-react";
import { Fraunces, Inter } from "next/font/google";
import Reveal from "@/components/Reveal";

const display = Fraunces({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });

export const metadata = {
  title: "Karl Blattner AG — Handwerkliche Möbel & Innenausbau, Hundwil AR | Entwurf von Hugweb",
  description:
    "Entwurf einer modernen Website für die Karl Blattner AG, Hundwil: Werkstätte für handwerkliche Möbel, Innenausbau und Bodenbeläge — Einbauküchen, Badezimmer, Parkettböden, Wohnungsumbauten.",
};

// Warmes Nussbaum/Kupfer statt des Föhn-Golds — bewusst ein anderer Charakter.
const KUPFER = "#c8874a";
const TINTE = "#12100d";

// Platzhalter-Bilder (Unsplash / StockSnap / rawpixel, frei nutzbar).
// Beim echten Auftrag durch eigene Fotos der Werkstatt und Objekte ersetzen.
const UN = (id: string, w = 1200) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;
const SS = (id: string) => `https://cdn.stocksnap.io/img-thumbs/960w/${id}.jpg`;

const IMG_HERO = UN("1618221195710-dd6b41faaea6", 2000);
const IMG_WOHNEN = UN("1600210492486-724fe5c67fb0");
const IMG_UMBAU = UN("1600566753086-00f18fb6b3ea");
const IMG_KUECHE = UN("1556909212-d5b604d0c90d");
const IMG_KUECHE2 = UN("1565538810643-b5bdb714032a");
const IMG_BAD = UN("1584622650111-993a426fbf0a");
const IMG_BAD2 = UN("1620626011761-996317b8d101");
const IMG_PARKETT = UN("1600607687939-ce8a6c25118c");
const IMG_BELAG = UN("1513694203232-719a280e022f");
const IMG_MOEBEL = UN("1594026112284-02bb6f3352fe");
const IMG_HOBEL = SS("ZMQNOXQMZO");
const IMG_BOHRER = SS("L8IBQZYEAL");
const IMG_SCHLEIF = SS("VLHYVV3XU5");

function Wordmark({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <span
      className={`font-[family-name:var(--font-display)] font-semibold tracking-tight ${
        light ? "text-[#12100d]" : "text-white"
      } ${className}`}
    >
      KARL BLATTNER <span style={{ color: KUPFER }}>AG</span>
    </span>
  );
}

// Die acht Dienstleistungen — exakt so, wie die Firma sie selbst aufzählt.
const leistungen = [
  {
    icon: Armchair,
    title: "Wohnungseinrichtung und Beratung",
    desc: "Wir schauen uns Ihre Räume an, hören zu — und planen die Einrichtung so, dass sie zu Ihnen passt.",
    img: IMG_WOHNEN,
    span: "md:col-span-7",
    h: "h-[23rem]",
  },
  {
    icon: Home,
    title: "Wohnungsumbauten",
    desc: "Vom einzelnen Zimmer bis zur ganzen Wohnung — sauber geplant und termingerecht ausgeführt.",
    img: IMG_UMBAU,
    span: "md:col-span-5",
    h: "h-[23rem]",
  },
  {
    icon: ChefHat,
    title: "Einbauküchen",
    desc: "Nach Mass für Ihren Grundriss — bis in die letzte Ecke genutzt, mit Geräten Ihrer Wahl.",
    img: IMG_KUECHE,
    span: "md:col-span-5",
    h: "h-80",
  },
  {
    icon: Bath,
    title: "Badezimmer",
    desc: "Möbel, Ablagen und Einbauten fürs Bad — feuchtraumtauglich und passgenau eingebaut.",
    img: IMG_BAD,
    span: "md:col-span-7",
    h: "h-80",
  },
  {
    icon: TreePine,
    title: "Parkettböden in verschiedenen Holzarten",
    desc: "Eiche, Esche, Nussbaum oder Ahorn — verlegt, geschliffen und geölt von unserem Team.",
    img: IMG_PARKETT,
    span: "md:col-span-7",
    h: "h-80",
  },
  {
    icon: Layers,
    title: "Teppich- und Hartbeläge",
    desc: "Wenn kein Holz gewünscht ist: Teppich, Linoleum oder Hartbelag — sauber verlegt.",
    img: IMG_BELAG,
    span: "md:col-span-5",
    h: "h-80",
  },
  {
    icon: Hammer,
    title: "Handwerkliche Möbel",
    desc: "Einzelstücke aus der eigenen Werkstatt: Tisch, Schrank, Sideboard — genau in Ihrem Mass.",
    img: IMG_MOEBEL,
    span: "md:col-span-6",
    h: "h-80",
  },
  {
    icon: Sparkles,
    title: "Möbel aufrüsten",
    desc: "Gute Möbel wirft man nicht weg. Wir richten her, ergänzen und passen an — statt zu ersetzen.",
    img: IMG_HOBEL,
    span: "md:col-span-6",
    h: "h-80",
  },
];

const werkstatt = [
  { img: IMG_HOBEL, label: "Von Hand gehobelt", span: "md:col-span-5", h: "h-72" },
  { img: IMG_BOHRER, label: "In der eigenen Werkstatt", span: "md:col-span-7", h: "h-72" },
  { img: IMG_SCHLEIF, label: "Geschliffen bis es stimmt", span: "md:col-span-7", h: "h-72" },
  { img: IMG_KUECHE2, label: "Eingebaut beim Kunden", span: "md:col-span-5", h: "h-72" },
];

const galerie = [
  { img: IMG_WOHNEN, label: "Wohnraum", ort: "Einrichtung & Parkett", span: "md:col-span-7", h: "h-80" },
  { img: IMG_BAD2, label: "Badezimmer", ort: "Einbauten nach Mass", span: "md:col-span-5", h: "h-80" },
  { img: IMG_KUECHE2, label: "Einbauküche", ort: "Nach Mass gefertigt", span: "md:col-span-5", h: "h-80" },
  { img: IMG_PARKETT, label: "Innenausbau", ort: "Wandverkleidung in Holz", span: "md:col-span-7", h: "h-80" },
];

const ablauf = [
  { n: "01", t: "Beratung bei Ihnen", d: "Wir kommen vorbei, schauen die Räume an und besprechen, was Sie sich vorstellen." },
  { n: "02", t: "Aufmass & Offerte", d: "Präzises Aufmass, klare Offerte — Sie wissen vorher, was es kostet." },
  { n: "03", t: "Fertigung in der Werkstatt", d: "Gefertigt wird bei uns in Hundwil, von Hand und mit den richtigen Maschinen." },
  { n: "04", t: "Montage & Übergabe", d: "Wir bauen ein, räumen auf und übergeben fertig — so, wie es abgemacht war." },
];

const nav = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Werkstatt", href: "#werkstatt" },
  { label: "Arbeiten", href: "#arbeiten" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function BlattnerDemo() {
  return (
    <>
      <div className="bg-neutral-900 text-white text-xs py-2 text-center">
        Unverbindlicher Entwurf von <Link href="/" className="underline font-medium">Hugweb</Link>
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
              href="#kontakt"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#12100d]"
              style={{ borderColor: KUPFER }}
            >
              Beratung <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="relative isolate min-h-[calc(100svh-2rem)] overflow-hidden">
          <img src={IMG_HERO} alt="Wohnraum mit Holzausbau" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12100d] via-black/55 to-black/45" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#12100d] via-[#12100d]/85 to-transparent" />
          <div
            className="pointer-events-none absolute -right-40 top-1/4 h-[34rem] w-[34rem] rounded-full opacity-25 blur-3xl"
            style={{ background: `radial-gradient(circle, ${KUPFER}, transparent 65%)` }}
          />

          <div className="relative mx-auto flex min-h-[calc(100svh-2rem)] w-full max-w-6xl flex-col px-6 pt-24 pb-6">
            <div className="flex flex-1 flex-col justify-center">
              <Reveal>
                <div className="text-xs font-semibold uppercase tracking-[0.35em]" style={{ color: KUPFER }}>
                  Hundwil AR · Appenzellerland
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-white">
                  Möbel, die
                  <br />
                  <span style={{ color: KUPFER }} className="italic">
                    bleiben.
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-5 max-w-xl text-base lg:text-lg text-white/70 leading-relaxed">
                  Werkstätte für handwerkliche Möbel, Innenausbau und Bodenbeläge. Von der Beratung über die Fertigung
                  bis zur Montage — alles aus einer Hand, aus unserer Werkstatt in Hundwil.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-7 flex flex-col sm:flex-row gap-4">
                  <a
                    href="#kontakt"
                    className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-[#12100d] transition hover:opacity-90"
                    style={{ backgroundColor: KUPFER }}
                  >
                    Beratung anfragen <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
                  </a>
                  <a
                    href="#arbeiten"
                    className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white hover:bg-white/10 transition"
                  >
                    Arbeiten ansehen
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.4}>
              <div className="mt-10 rounded-2xl border border-white/10 bg-[#1a1611]/90 backdrop-blur shadow-2xl">
                <div className="grid grid-cols-2 md:grid-cols-4 divide-y divide-white/10 md:divide-y-0 md:divide-x">
                  {[
                    { k: "8", v: "Leistungen aus einer Hand" },
                    { k: "Eigene", v: "Werkstatt in Hundwil" },
                    { k: "Möbelzentrum", v: "Partner des Handwerks" },
                    { k: "Vor Ort", v: "Beratung bei Ihnen zu Hause" },
                  ].map((s) => (
                    <div key={s.v} className="px-5 py-4 md:py-5 text-center">
                      <div
                        className="font-[family-name:var(--font-display)] text-lg md:text-2xl font-semibold"
                        style={{ color: KUPFER }}
                      >
                        {s.k}
                      </div>
                      <div className="mt-1 text-[11px] uppercase tracking-wider text-white/50">{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Leistungen — heller Block, damit die Räume wirken */}
        <section id="leistungen" className="bg-[#f6f2ec] py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-8 items-end">
              <Reveal className="md:col-span-7">
                <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: "#9a6533" }}>
                  Unsere Dienstleistungen
                </div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold text-[#12100d]">
                  Vom ersten Skizzenstrich bis zum letzten Bodenbrett.
                </h2>
              </Reveal>
              <Reveal delay={0.1} className="md:col-span-5">
                <p className="text-[#12100d]/60 leading-relaxed">
                  Einrichtung, Umbau, Küche, Bad, Boden und Möbel — Sie brauchen dafür nicht sechs Firmen. Bei uns kommt
                  alles aus derselben Werkstatt, von denselben Leuten.
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-4">
              {leistungen.map((l, i) => (
                <Reveal key={l.title} delay={(i % 2) * 0.08} className={l.span}>
                  <div className={`group relative ${l.h} overflow-hidden rounded-2xl`}>
                    <img
                      src={l.img}
                      alt={l.title}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <l.icon className="h-5 w-5" strokeWidth={1.6} style={{ color: KUPFER }} />
                      <div className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold text-white">
                        {l.title}
                      </div>
                      <p className="mt-1 max-w-md text-sm text-white/70 leading-relaxed">{l.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Partner-Hinweis */}
            <Reveal delay={0.1}>
              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5 rounded-2xl border border-[#12100d]/10 bg-white p-7">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "#f1e5d7" }}
                >
                  <Handshake className="h-6 w-6" strokeWidth={1.6} style={{ color: "#9a6533" }} />
                </div>
                <div>
                  <div className="font-[family-name:var(--font-display)] text-lg font-semibold text-[#12100d]">
                    Partner des Möbelzentrums des Handwerks
                  </div>
                  <p className="mt-1 text-sm text-[#12100d]/60 leading-relaxed">
                    Dadurch steht Ihnen bei uns das volle Sortiment und alle Dienstleistungen des Möbelzentrums offen —
                    mit der Beratung und dem Einbau von jemandem, der Sie kennt.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Werkstatt — dunkler Handwerks-Block */}
        <section id="werkstatt" className="relative py-20 md:py-28 overflow-hidden" style={{ backgroundColor: "#0c0a08" }}>
          <div
            className="pointer-events-none absolute -left-40 top-10 h-[30rem] w-[30rem] rounded-full opacity-20 blur-3xl"
            style={{ background: `radial-gradient(circle, ${KUPFER}, transparent 65%)` }}
          />
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-8 items-end">
              <Reveal className="md:col-span-7">
                <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: KUPFER }}>
                  Die Werkstatt
                </div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold text-white">
                  Hier entsteht, was später bei Ihnen steht.
                </h2>
              </Reveal>
              <Reveal delay={0.1} className="md:col-span-5">
                <p className="text-white/60 leading-relaxed">
                  Wir sind eine Werkstätte, kein Möbelhaus. Was Sie bei uns bestellen, wird in Hundwil gefertigt — und
                  wenn ein Mass nicht stimmt, ändern wir es, statt es zu bestellen.
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-4">
              {werkstatt.map((w, i) => (
                <Reveal key={w.label} delay={(i % 2) * 0.07} className={w.span}>
                  <div className={`group relative ${w.h} overflow-hidden rounded-2xl border border-white/10`}>
                    <img
                      src={w.img}
                      alt={w.label}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <div className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                        {w.label}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Arbeiten */}
        <section id="arbeiten" className="bg-[#f6f2ec] py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: "#9a6533" }}>
                    Arbeiten
                  </div>
                  <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold text-[#12100d]">
                    Ausgeführte Objekte
                  </h2>
                </div>
                <a href="#kontakt" className="text-sm font-semibold hover:opacity-70 transition" style={{ color: "#9a6533" }}>
                  Eigenes Projekt besprechen →
                </a>
              </div>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-4">
              {galerie.map((g, i) => (
                <Reveal key={g.label} delay={(i % 2) * 0.06} className={g.span}>
                  <div className={`group relative ${g.h} overflow-hidden rounded-2xl`}>
                    <img
                      src={g.img}
                      alt={g.label}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <div className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                        {g.label}
                      </div>
                      <div className="text-sm text-white/65">{g.ort}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.1}>
              <p className="mt-8 text-sm text-[#12100d]/45">
                Gerne zeigen wir Ihnen bei einem Besuch weitere ausgeführte Arbeiten aus der Region.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Ablauf */}
        <section id="ablauf" className="py-20 md:py-28 border-y border-white/10" style={{ backgroundColor: "#0c0a08" }}>
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: KUPFER }}>
                Ablauf
              </div>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold text-white">
                In vier Schritten zum fertigen Raum.
              </h2>
            </Reveal>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-8">
              {ablauf.map((p, i) => (
                <Reveal key={p.n} delay={i * 0.06}>
                  <div className="font-[family-name:var(--font-display)] text-5xl font-semibold" style={{ color: KUPFER }}>
                    {p.n}
                  </div>
                  <div className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold text-white">{p.t}</div>
                  <p className="mt-2 text-sm text-white/55 leading-relaxed">{p.d}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: KUPFER }}>
                  Kontakt
                </div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold text-white">
                  Sagen Sie uns, was Sie vorhaben.
                </h2>
                <p className="mt-6 text-white/60 leading-relaxed">
                  Ein Anruf genügt für einen unverbindlichen Termin — wir kommen vorbei, schauen es an und sagen Ihnen
                  ehrlich, was möglich ist.
                </p>
                <div className="mt-10 space-y-5 text-white/80">
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0" style={{ color: KUPFER }} />
                    <span>
                      Karl Blattner AG
                      <br />
                      Äckerli 48, 9064 Hundwil
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 shrink-0" style={{ color: KUPFER }} />
                    <a href="tel:+41713671218" className="hover:underline">
                      071 367 12 18
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Printer className="h-5 w-5 shrink-0" style={{ color: KUPFER }} />
                    <span>071 367 22 09 (Fax)</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 shrink-0" style={{ color: KUPFER }} />
                    <a href="mailto:hblattner@swissonline.ch" className="hover:underline">
                      hblattner@swissonline.ch
                    </a>
                  </div>
                  <div className="flex items-start gap-4">
                    <Ruler className="mt-0.5 h-5 w-5 shrink-0" style={{ color: KUPFER }} />
                    <span>
                      Aufmass und Beratung bei Ihnen vor Ort
                      <br />
                      <span className="text-sm text-white/45">im ganzen Appenzellerland und Umgebung</span>
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <form className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 space-y-4">
                <div>
                  <label className="mb-2 block text-sm text-white/50">Name</label>
                  <input className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white transition focus:border-[#c8874a] focus:outline-none" />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-white/50">E-Mail oder Telefon</label>
                  <input className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white transition focus:border-[#c8874a] focus:outline-none" />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-white/50">Worum geht es?</label>
                  <div className="flex flex-wrap gap-2">
                    {["Küche", "Bad", "Boden", "Möbel", "Umbau"].map((o) => (
                      <span key={o} className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/70">
                        {o}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm text-white/50">Ihre Nachricht</label>
                  <textarea
                    rows={4}
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white transition focus:border-[#c8874a] focus:outline-none"
                  />
                </div>
                <button
                  type="button"
                  className="w-full rounded-full px-6 py-3 font-semibold text-[#12100d] transition hover:opacity-90"
                  style={{ backgroundColor: KUPFER }}
                >
                  Anfrage senden
                </button>
              </form>
            </Reveal>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <Wordmark className="text-lg" />
            <span className="text-sm text-white/40">
              © {new Date().getFullYear()} Karl Blattner AG · Äckerli 48, 9064 Hundwil
            </span>
            <span className="text-sm text-white/40">
              Entwurf von{" "}
              <Link href="/" className="underline hover:text-white">
                Hugweb
              </Link>
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}
