import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Layers,
  Gem,
  Mountain,
  Grid3x3,
  Sun,
  Maximize,
  Sparkles,
  Store,
  Wrench,
  Building2,
  GraduationCap,
  BadgeCheck,
  Phone,
  MapPin,
  Clock,
  Mail,
} from "lucide-react";
import { Fraunces, Inter } from "next/font/google";
import Reveal from "@/components/Reveal";

const display = Fraunces({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });

export const metadata = {
  title: "FÖHN PLATTEN AG — Plattenarbeiten mit Qualität, Brunnen SZ | Entwurf von Hugweb",
  description:
    "Entwurf einer modernen Website für die FÖHN PLATTEN AG: Keramik, Naturstein, Grossformat & XXL, Balkon- und Terrassenplatten, Kunststein, Mosaik, Reinigungstechnik, Plattenhandel und Ausstellung.",
};

const GOLD = "#c9a76b";
// Alle Bilder & Inhalte stammen von foehnplatten.ch.
const U = "https://foehnplatten.ch/wp/wp-content/uploads";
const IMG_HERO = `${U}/2021/11/Adliswil_Grossformat_Bad-1536x1152.jpg`;
const IMG_BALKON = `${U}/2018/12/Balkon_Holzoptik_s.jpg`;
const IMG_BALKON2 = `${U}/2018/12/Balkon_Holzoptik2_s.jpg`;
const IMG_KERAMIK = `${U}/2015/10/Dusche_Keramik_s.png`;
const IMG_GARDEROBE = `${U}/2015/10/Garderobe_Keramik_s.png`;
const IMG_NATURSTEIN = `${U}/2015/10/Ausst_Natursteine_s.png`;
const IMG_XXL = `${U}/2015/10/Wolfram_kitchen_dining_Crazy-China-e1444810933730.jpg`;
const IMG_XXL2 = `${U}/2015/10/Wolfram_dining_living_Crazy-China-e1444810970451.jpg`;
const IMG_KUNSTSTEIN = `${U}/2018/04/Treppenhaus-Kunststein-Foto-Nr.-2-e1524572852317.jpg`;
const IMG_MOSAIK = `${U}/2015/10/FstZ-Betonoptik-mit-Mosaik.jpg`;
const IMG_GREPPEN = `${U}/2015/10/Greppen-Fstz-Platten_5.png`;
const IMG_URI = `${U}/2015/10/Mittelschule_Uri_Pausenraum.png`;
const IMG_METRO = `${U}/2016/02/2015_metropolitans_balkone.png`;
const IMG_BILD7 = `${U}/2015/10/Bild7.jpg`;

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-[family-name:var(--font-display)] font-semibold tracking-tight text-white ${className}`}>
      FÖHN <span style={{ color: GOLD }}>PLATTEN</span>
    </span>
  );
}

// „Angebot" — die sechs Bereiche der Kundenseite, mit deren eigenen Texten
const angebot = [
  {
    icon: Grid3x3,
    title: "Keramische Platten",
    desc: "Keramische Platten haben nebst Stil und Charakter auch wesentliche Vorteile für den Objektwert.",
    img: IMG_KERAMIK,
    span: "md:col-span-7",
    h: "h-[24rem]",
  },
  {
    icon: Mountain,
    title: "Naturstein",
    desc: "Naturstein verleiht Räumen eine natürliche Schönheit sowie Anmut und einmaligen Charakter.",
    img: IMG_NATURSTEIN,
    span: "md:col-span-5",
    h: "h-[24rem]",
  },
  {
    icon: Maximize,
    title: "Grossformat & XXL",
    desc: "Grossflächen bis 150 × 300 cm bei nur 6 mm Stärke — fugenarm und ruhig im Raumbild.",
    img: IMG_XXL,
    span: "md:col-span-5",
    h: "h-80",
  },
  {
    icon: Sun,
    title: "Balkon- & Terrassen-Platten",
    desc: "Sehen schön aus, sind pflegeleicht, beständig — und bieten wesentliche Vorteile für den Objektwert.",
    img: IMG_BALKON,
    span: "md:col-span-7",
    h: "h-80",
  },
  {
    icon: Layers,
    title: "Kunststein",
    desc: "Für Treppen, Böden und Sanierungen — inklusive fachgerechter Reparatur bestehender Beläge.",
    img: IMG_KUNSTSTEIN,
    span: "md:col-span-6",
    h: "h-80",
  },
  {
    icon: Gem,
    title: "Mosaik",
    desc: "Mosaik in vielfältigen Formen, Grössen und Oberflächen — bis hin zu 3D-Design-Elementen.",
    img: IMG_MOSAIK,
    span: "md:col-span-6",
    h: "h-80",
  },
];

// „Service" — die weiteren Bereiche der Kundenseite
const service = [
  {
    icon: Wrench,
    title: "Plattendoc — Reparatur ohne Plattenaustausch",
    desc: "Kratzer und Schlagschäden werden abgemischt, in Schichten aufgetragen, ausgehärtet — und verschwinden. Ohne die Platte zu ersetzen.",
  },
  {
    icon: Sparkles,
    title: "Reinigungs- und Pflegetechnik",
    desc: "Grundreinigung, Spezialreinigung (Kalk, Algen, Farben, Fett, Graffiti) und Absäuern — ausgeführt von spezialisierten Fachleuten.",
  },
  {
    icon: Store,
    title: "Baumaterial & Plattenhandel",
    desc: "Eine Grosszahl an Baumaterial ab Lager zu Vorzugskonditionen. Dank Direkt-Kontakten zu Herstellern organisieren wir auch Nicht-Lager-Material.",
  },
  {
    icon: Building2,
    title: "Ausstellung",
    desc: "Besichtigen Sie Wand- und Bodenplatten aus allen Materialien. Ob Privatperson, Architekt oder Bauherr — bei uns nehmen Ihre Ideen Form an.",
  },
];

// Referenzprojekte — echte Objekte von der Kundenseite
const referenzen = [
  { img: IMG_URI, label: "Mittelschule Uri", ort: "Pausenraum", span: "md:col-span-4", h: "h-72" },
  { img: IMG_METRO, label: "the metropolitans", ort: "Balkone & Loggien", span: "md:col-span-4", h: "h-72" },
  { img: IMG_XXL2, label: "Grossformat XXL", ort: "Wohn- und Essbereich", span: "md:col-span-4", h: "h-72" },
  { img: IMG_GREPPEN, label: "Greppen", ort: "Feinsteinzeug & Mosaik", span: "md:col-span-5", h: "h-80" },
  { img: IMG_BILD7, label: "Bad in Feinsteinzeug", ort: "Privathaus", span: "md:col-span-7", h: "h-80" },
  { img: IMG_GARDEROBE, label: "Garderobe", ort: "Keramik", span: "md:col-span-7", h: "h-80" },
  { img: IMG_BALKON2, label: "Balkon in Holzoptik", ort: "Aussenbereich", span: "md:col-span-5", h: "h-80" },
];

const objekte = [
  "Rigi Kulm — Windrose aus China-Emei-Stein",
  "Bürgenstock Resort — Mosaik",
  "Alterszentrum Rubiswil, Ibach SZ — Kunststein",
  "Andermatt Senioren- und Gesundheitszentrum — Pflegebad",
  "Boardinghouse Zürich — Naturstein",
  "Valser Quarzit, Ennetbürgen",
  "Design Atelier G1, Sattel — Badumbau",
  "Kilchberg — Grossformat XXL 150 × 300 cm",
];

const prozess = [
  { n: "01", t: "Beratung", d: "In unserer Ausstellung sehen und erfühlen Sie die Materialien." },
  { n: "02", t: "Aufmass & Offerte", d: "Präzises Aufmass, transparente Offerte ohne Überraschungen." },
  { n: "03", t: "Verlegung", d: "Sauberes Handwerk vom eingespielten Team, termingerecht." },
  { n: "04", t: "Übergabe & Pflege", d: "Endreinigung, Übergabe — und auf Wunsch die passende Pflegetechnik." },
];

const nav = [
  { label: "Angebot", href: "#angebot" },
  { label: "Service", href: "#service" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "Firma", href: "#firma" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function FoehnPlattenDemo() {
  return (
    <>
      <div className="bg-neutral-900 text-white text-xs py-2 text-center">
        Unverbindlicher Entwurf von <Link href="/" className="underline font-medium">Hugweb</Link>
        <Link href="/#demos" className="ml-4 inline-flex items-center gap-1 opacity-80 hover:opacity-100">
          <ArrowLeft className="h-3 w-3" /> Zurück
        </Link>
      </div>

      <div className={`${display.variable} ${body.variable} font-[family-name:var(--font-body)] bg-[#0e0d0b] text-neutral-200`}>
        {/* Header — transparent über Hero */}
        <header className="absolute inset-x-0 top-8 z-40">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
            <Wordmark className="text-xl" />
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/75">
              {nav.map((n) => (
                <a key={n.label} href={n.href} className="hover:text-white transition">{n.label}</a>
              ))}
            </nav>
            <a href="#kontakt" className="hidden sm:inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-black" style={{ borderColor: GOLD }}>
              Beratung <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </header>

        {/* Hero — Höhe = Fenster minus Entwurf-Balken, Stat-Leiste im Hero-Fuss */}
        <section className="relative isolate min-h-[calc(100svh-2rem)] overflow-hidden">
          <img src={IMG_HERO} alt="Grossformat-Bad" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0b] via-black/60 to-black/45" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#0e0d0b] via-[#0e0d0b]/85 to-transparent" />
          <div className="pointer-events-none absolute -right-40 top-1/4 h-[36rem] w-[36rem] rounded-full opacity-30 blur-3xl animate-pulse [animation-duration:6s]" style={{ background: `radial-gradient(circle, ${GOLD}, transparent 65%)` }} />

          <div className="relative mx-auto flex min-h-[calc(100svh-2rem)] w-full max-w-6xl flex-col px-6 pt-24 pb-6">
            <div className="flex flex-1 flex-col justify-center">
              <Reveal>
                <div className="text-xs font-semibold uppercase tracking-[0.35em]" style={{ color: GOLD }}>
                  Brunnen SZ · seit über 50 Jahren
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-white">
                  Plattenarbeiten<br />mit <span style={{ color: GOLD }} className="italic">Qualität.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-5 max-w-xl text-base lg:text-lg text-white/70 leading-relaxed">
                  Ihr kompetenter und zuverlässiger Partner für Plattenarbeiten aus Brunnen, Schwyz — der Ihre Projekte in der gesamten Schweiz umsetzt.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-7 flex flex-col sm:flex-row gap-4">
                  <a href="#kontakt" className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-black transition hover:opacity-90" style={{ backgroundColor: GOLD }}>
                    Projekt anfragen <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
                  </a>
                  <a href="#referenzen" className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white hover:bg-white/10 transition">
                    Arbeiten ansehen
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.4}>
              <div className="mt-10 rounded-2xl border border-white/10 bg-[#16130f]/90 backdrop-blur shadow-2xl">
                <div className="grid grid-cols-2 md:grid-cols-4 divide-y divide-white/10 md:divide-y-0 md:divide-x">
                  {[
                    { k: "52 Jahre", v: "Firmengeschichte" },
                    { k: "~65", v: "Mitarbeitende" },
                    { k: "Ø 13.4", v: "Dienstjahre im Team" },
                    { k: "Platinum", v: "Kompetenzlabel Keramik" },
                  ].map((s) => (
                    <div key={s.v} className="px-5 py-4 md:py-5 text-center">
                      <div className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-semibold" style={{ color: GOLD }}>{s.k}</div>
                      <div className="mt-1 text-[11px] uppercase tracking-wider text-white/50">{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Intro */}
        <section className="pt-20 md:pt-24 pb-20 md:pb-24">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-12 gap-10 items-end">
            <Reveal className="md:col-span-7">
              <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: GOLD }}>Welche Plattenbeläge wünschen Sie?</div>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold leading-tight text-white">
                Zeitlose Eleganz oder einzigartiges Design.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-5">
              <p className="text-lg text-white/60 leading-relaxed">
                Ob Wohnprojekt in Schwyz, Geschäftsgebäude in Zürich, Hotel in Luzern oder Wohnhaus in Zug — wir gestalten Ihre Räume mit stilvollen Plattenbelägen. Unser Einsatzgebiet reicht über Schwyz, Brunnen, Luzern, Zürich, Zug, Uri, Aargau und darüber hinaus.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Angebot — alle sechs Bereiche der Kundenseite */}
        <section id="angebot" className="relative py-20 md:py-28 border-y border-white/10 bg-[#080706] overflow-hidden">
          <div className="pointer-events-none absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full opacity-20 blur-3xl" style={{ background: `radial-gradient(circle, ${GOLD}, transparent 65%)` }} />
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-8 items-end">
              <Reveal className="md:col-span-7">
                <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: GOLD }}>Angebot</div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold text-white">Alles rund um die Platte.</h2>
              </Reveal>
              <Reveal delay={0.1} className="md:col-span-5">
                <p className="text-white/60 leading-relaxed">
                  Keramik, Feinsteinzeug, edler Naturstein wie Marmor, Granit oder Quarzit, charmantes Mosaik oder hochwertiger Kunststein — wir beraten Sie und finden gemeinsam die optimale Lösung.
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-4">
              {angebot.map((a, i) => (
                <Reveal key={a.title} delay={(i % 2) * 0.08} className={a.span}>
                  <div className={`group relative ${a.h} overflow-hidden rounded-2xl border border-white/10`}>
                    <img src={a.img} alt={a.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <a.icon className="h-5 w-5" strokeWidth={1.6} style={{ color: GOLD }} />
                      <div className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold text-white">{a.title}</div>
                      <p className="mt-1 max-w-md text-sm text-white/65 leading-relaxed">{a.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Service */}
        <section id="service" className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-8 items-end">
              <Reveal className="md:col-span-7">
                <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: GOLD }}>Service</div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold text-white">Mehr als nur verlegen.</h2>
              </Reveal>
              <Reveal delay={0.1} className="md:col-span-5">
                <p className="text-white/60 leading-relaxed">
                  Reparatur statt Ersatz, fachgerechte Reinigung, Material ab Lager und eine Ausstellung zum Anfassen — alles aus einer Hand.
                </p>
              </Reveal>
            </div>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.map((s, i) => (
                <Reveal key={s.title} delay={(i % 2) * 0.07}>
                  <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-white/20 hover:bg-white/[0.04]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                      <s.icon className="h-5 w-5" strokeWidth={1.6} style={{ color: GOLD }} />
                    </div>
                    <div className="mt-5 font-[family-name:var(--font-display)] text-xl font-semibold text-white">{s.title}</div>
                    <p className="mt-3 text-sm text-white/60 leading-relaxed">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Referenzen */}
        <section id="referenzen" className="py-20 md:py-28 border-y border-white/10 bg-[#080706]">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: GOLD }}>Referenzen</div>
                  <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold text-white">Ausgewählte Arbeiten</h2>
                </div>
                <a href="#kontakt" className="text-sm font-semibold hover:opacity-80 transition" style={{ color: GOLD }}>Eigenes Projekt besprechen →</a>
              </div>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-4">
              {referenzen.map((r, i) => (
                <Reveal key={r.label} delay={(i % 3) * 0.06} className={r.span}>
                  <div className={`group relative ${r.h} overflow-hidden rounded-2xl border border-white/10`}>
                    <img src={r.img} alt={r.label} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <div className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">{r.label}</div>
                      <div className="text-sm text-white/60">{r.ort}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Objektliste */}
            <Reveal delay={0.1}>
              <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-8">
                <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: GOLD }}>Realisierte Objekte (Auswahl)</div>
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
                  {objekte.map((o) => (
                    <li key={o} className="flex items-start gap-3 text-sm text-white/70">
                      <span className="mt-2 h-px w-4 shrink-0" style={{ background: GOLD }} />
                      {o}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs text-white/35">In 52 Jahren Firmengeschichte haben wir unzählige Objekte realisiert — die vollständige Referenzliste erhalten Sie auf Anfrage.</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Firma / Team / Lehrbetrieb */}
        <section id="firma" className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-8 items-end">
              <Reveal className="md:col-span-7">
                <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: GOLD }}>Unsere Firma = Ihr Nutzen</div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold text-white">
                  Seit über 50 Jahren erfolgreich am Markt.
                </h2>
              </Reveal>
              <Reveal delay={0.1} className="md:col-span-5">
                <p className="text-white/60 leading-relaxed">
                  Wir ruhen uns nicht auf unseren Lorbeeren aus: Wir bilden uns weiter, bilden Lernende aus und wenden aktuelle Rechts- und SIA-Normen an.
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: Building2, t: "Rund 65 Mitarbeitende", d: "Ein kompetentes Team, seit vielen Jahren motiviert engagiert. Durchschnittsalter 40 Jahre, Ø 13.4 Dienstjahre." },
                { icon: GraduationCap, t: "Wir machen Profis", d: "Als Lehrbetrieb bilden wir Plattenleger/innen aus — jedes Jahr starten neue Lernende bei uns." },
                { icon: BadgeCheck, t: "Platinum zertifiziert", d: "Das Kompetenzlabel der Keramikbranche. Mitglied im Schweizerischen Plattenverband SPV." },
              ].map((c, i) => (
                <Reveal key={c.t} delay={i * 0.06}>
                  <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-7">
                    <c.icon className="h-6 w-6" strokeWidth={1.5} style={{ color: GOLD }} />
                    <div className="mt-5 font-[family-name:var(--font-display)] text-xl font-semibold text-white">{c.t}</div>
                    <p className="mt-3 text-sm text-white/60 leading-relaxed">{c.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Ablauf */}
        <section id="ablauf" className="py-20 md:py-28 border-y border-white/10 bg-[#080706]">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: GOLD }}>Ablauf</div>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold text-white">Von der Idee zur fertigen Fläche.</h2>
            </Reveal>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-8">
              {prozess.map((p, i) => (
                <Reveal key={p.n} delay={i * 0.06}>
                  <div className="font-[family-name:var(--font-display)] text-5xl font-semibold" style={{ color: GOLD }}>{p.n}</div>
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
                <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: GOLD }}>Kontakt</div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold text-white">Wir beraten Sie gerne.</h2>
                <p className="mt-6 text-white/60 leading-relaxed">Teilen Sie uns Ihre Plattenwünsche mit — Sie erhalten eine unverbindliche Offerte.</p>
                <div className="mt-10 space-y-5 text-white/80">
                  <div className="flex items-start gap-4"><MapPin className="mt-0.5 h-5 w-5" style={{ color: GOLD }} /><span>FÖHN PLATTEN AG<br />Gätzlistrasse 2, 6440 Brunnen</span></div>
                  <div className="flex items-center gap-4"><Phone className="h-5 w-5" style={{ color: GOLD }} /><a href="tel:+41418256161" className="hover:underline">+41 41 825 61 61</a></div>
                  <div className="flex items-center gap-4"><Mail className="h-5 w-5" style={{ color: GOLD }} /><span>info@foehnplatten.ch</span></div>
                  <div className="flex items-start gap-4"><Clock className="mt-0.5 h-5 w-5" style={{ color: GOLD }} /><span>Mo–Fr 8.00–11.30 / 13.30–17.00<br /><span className="text-sm text-white/45">ausser Feiertage</span></span></div>
                  <div className="flex items-start gap-4"><Store className="mt-0.5 h-5 w-5" style={{ color: GOLD }} /><span>Ausstellung & Plattenhandel — Besuch jederzeit unverbindlich möglich</span></div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <form className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 space-y-4">
                <div><label className="mb-2 block text-sm text-white/50">Name</label><input className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white transition focus:border-[#c9a76b] focus:outline-none" /></div>
                <div><label className="mb-2 block text-sm text-white/50">E-Mail oder Telefon</label><input className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white transition focus:border-[#c9a76b] focus:outline-none" /></div>
                <div>
                  <label className="mb-2 block text-sm text-white/50">Mein Anliegen</label>
                  <div className="flex flex-wrap gap-2">
                    {["Anfrage", "Bestellung", "Rückmeldung"].map((o) => (
                      <span key={o} className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/70">{o}</span>
                    ))}
                  </div>
                </div>
                <div><label className="mb-2 block text-sm text-white/50">Meine Nachricht</label><textarea rows={4} className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white transition focus:border-[#c9a76b] focus:outline-none" /></div>
                <button type="button" className="w-full rounded-full px-6 py-3 font-semibold text-black transition hover:opacity-90" style={{ backgroundColor: GOLD }}>Offerte anfragen</button>
              </form>
            </Reveal>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-[#0e0d0b]">
          <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col sm:flex-row items-center justify-between gap-6">
            <Wordmark className="text-lg" />
            <span className="text-sm text-white/40">© {new Date().getFullYear()} FÖHN PLATTEN AG · Gätzlistrasse 2, 6440 Brunnen</span>
            <span className="text-sm text-white/40">Entwurf von <Link href="/" className="underline hover:text-white">Hugweb</Link></span>
          </div>
        </footer>
      </div>
    </>
  );
}
