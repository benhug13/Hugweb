import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Film,
  Speaker,
  Tv,
  Home,
  Server,
  Wrench,
  Disc,
  Waves,
  SlidersHorizontal,
  Phone,
  Mail,
  MapPin,
  Clock,
  Check,
  Star,
  Search,
  ShoppingCart,
  User,
  Globe,
  Tag,
  FileText,
  Shield,
  Truck,
  CreditCard,
  Landmark,
} from "lucide-react";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import Reveal from "@/components/Reveal";
import ShopDemo from "@/components/ShopDemo";

// Schrift-Persoenlichkeit: wide Grotesk fuer Headlines, Mono fuer technische
// Daten/Labels — signalisiert "kalibriertes AV-Fachgeschaeft" statt Standard-Sans.
const display = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata = {
  title: "highdefinition — Heimkino, HiFi, TV & Smart Home in Uster | Entwurf von Hugweb",
  description:
    "Entwurf einer modernen Website für highdefinition in Uster — Fernseher, Heimkino, HiFi, Projektion, Lautsprecher, Dienstleistungen und Online-Shop.",
};

// Echte Bilder direkt vom Bild-Scaler von highdefinition.ch — so erkennt der
// Kunde im Entwurf sofort seine eigenen Produkte und Raeume wieder.
const hd = (name: string, w: number, h: number) =>
  `https://www.highdefinition.ch/imagescaler/content/${name}_w${w}fg_h${h}fg.jpeg`;

const kategorien = [
  {
    title: "Fernseher",
    text: "OLED, QLED & Mini-LED von LG, Sony, Samsung, Panasonic.",
    img: hd("OLED55G5", 1200, 900),
    span: "md:col-span-8",
  },
  {
    title: "Heimkino",
    text: "Komplette Kinoräume — Bild, Ton und Akustik aus einer Hand.",
    img: hd("Beamerraum3", 800, 900),
    span: "md:col-span-4",
  },
  {
    title: "HiFi",
    text: "High-End-Audio, Streaming und Plattenspieler.",
    img: hd("audioraumneu4", 800, 900),
    span: "md:col-span-4",
  },
  {
    title: "Projektion",
    text: "Beamer von Sony, JVC, Optoma & Barco — bis 8000 Lumen.",
    img: hd("leinwand23", 800, 900),
    span: "md:col-span-4",
  },
  {
    title: "Lautsprecher",
    text: "B&W, KEF, Canton, Elac, Sonos — für jeden Raum.",
    img: hd("bw702s3", 800, 900),
    span: "md:col-span-4",
  },
];

const neuheiten = [
  { marke: "LG", title: "OLED G5 & C5", text: "Die neue Generation OLED — heller, kontraststärker.", img: hd("lgoledc4", 700, 500) },
  { marke: "Sony", title: "Projektor XW8100", text: "4K-Laser-Heimkino der Spitzenklasse.", img: hd("XW7000", 700, 500) },
  { marke: "Bowers & Wilkins", title: "700 S3 Serie", text: "Audiophile Standlautsprecher, neu bei uns.", img: hd("bw702s3", 700, 500) },
  { marke: "Marantz", title: "Cinema 30", text: "Premium AV-Verstärker für echtes Kino zuhause.", img: hd("cinema301", 700, 500) },
  { marke: "KEF", title: "R Meta Serie", text: "Neue Referenzklasse für kristallklaren Klang.", img: hd("KEFrSeries", 700, 500) },
  { marke: "Barco", title: "4K8 Projektor", text: "8000 Lumen für grosse Räume und Events.", img: hd("barco4k8", 700, 500) },
];

const dienstleistungen = [
  { icon: Wrench, title: "Vor-Ort-Hilfe", text: "Wir kommen zu Ihnen nach Hause oder ins Geschäft." },
  { icon: Tv, title: "TV-Installation", text: "Fachgerechte Montage und Einrichtung Ihres Fernsehers." },
  { icon: Film, title: "Heimkino-Planung", text: "Von der Planung bis zur schlüsselfertigen Installation." },
  { icon: Speaker, title: "HiFi-Installation", text: "Fachgerechte Installation für beste Musikqualität." },
  { icon: Disc, title: "Codefree BluRay", text: "Ländercodefreie Modifikation für DVD- & Blu-ray-Player." },
  { icon: Home, title: "Smart-Home", text: "Ihr Zuhause intelligent vernetzt — Licht, Ton, Sicherheit." },
  { icon: Server, title: "IT & Telematik", text: "IT-Lösungen für Unternehmen und Privathaushalte." },
  { icon: Waves, title: "Raumakustik", text: "Akustikanalyse und Schalldämmung für perfekten Klang." },
  { icon: SlidersHorizontal, title: "Bildkalibrierung", text: "Professionelle Kalibrierung für originalgetreue Farben." },
];

const marken = [
  "Apple", "Bowers & Wilkins", "KEF", "Sonos", "Sony", "LG", "Samsung",
  "Panasonic", "Marantz", "Yamaha", "JBL", "Loewe", "Sennheiser", "Pioneer",
  "Cambridge Audio", "Canton", "Elac", "Optoma", "JVC", "Thorens",
];

const team = [
  { name: "Frédéric Steinfels", role: "Geschäftsführer & Inhaber", email: "fst@highdefinition.ch" },
  { name: "Kilian Niebling", role: "Detailhandelsfachmann", email: "kn@highdefinition.ch" },
  { name: "Utku Aslanli", role: "Informatiker", email: "ua@highdefinition.ch" },
];

const nav = [
  { label: "Fernseher", href: "#sortiment" },
  { label: "Heimkino", href: "#sortiment" },
  { label: "HiFi", href: "#sortiment" },
  { label: "Projektion", href: "#sortiment" },
  { label: "Lautsprecher", href: "#sortiment" },
  { label: "Dienstleistungen", href: "#dienstleistungen" },
  { label: "Shop", href: "#shop" },
  { label: "Abverkauf", href: "#abverkauf" },
];

const infoLinks = [
  { icon: FileText, label: "Impressum" },
  { icon: Shield, label: "Datenschutz" },
  { icon: FileText, label: "AGB" },
  { icon: Truck, label: "Versandarten" },
  { icon: CreditCard, label: "Zahlungsmittel" },
  { icon: Landmark, label: "Bankverbindung" },
  { icon: Wrench, label: "Reparaturen & Garantie" },
];

// Moderner Wordmark im echten Markenfarbschema (Rot) — knuepft ans Original
// (rotes "HIGH" + Chrom) an, aber sauber und flach statt 3D-Verlauf.
// "invert" = helle Variante fuer dunkle Flaechen (Hero/Footer).
function Logo({
  className = "",
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-red-600 font-[family-name:var(--font-mono)] text-[13px] font-semibold leading-none text-white">
        HD
      </span>
      <span
        className={`font-[family-name:var(--font-display)] text-lg font-extrabold tracking-tight leading-none ${
          invert ? "text-white" : "text-neutral-900"
        }`}
      >
        high<span className="text-red-600">definition</span>
      </span>
    </span>
  );
}

export default function HighDefinitionDemo() {
  return (
    <>
      {/* Entwurf-Banner */}
      <div className="bg-neutral-900 text-white text-xs py-2 text-center">
        Unverbindlicher Entwurf von{" "}
        <Link href="/" className="underline font-medium">Hugweb</Link>
        <Link href="/#demos" className="ml-4 inline-flex items-center gap-1 opacity-80 hover:opacity-100">
          <ArrowLeft className="h-3 w-3" /> Zurück
        </Link>
      </div>

      <div className={`${display.variable} ${mono.variable} bg-white text-neutral-900`}>
        {/* Navigation */}
        <header className="sticky top-0 z-40 border-b border-black/10 bg-white/85 backdrop-blur">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
            <Logo />
            <nav className="hidden lg:flex items-center gap-6 text-sm text-neutral-600">
              {nav.map((n) => (
                <a key={n.label} href={n.href} className="hover:text-neutral-900 transition">
                  {n.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-4 text-neutral-600">
              <span className="hidden sm:inline-flex items-center gap-1 text-xs">
                <Globe className="h-4 w-4" /> CHF · DE
              </span>
              <Search className="h-5 w-5" />
              <a href="#konto" className="hover:text-neutral-900 transition" aria-label="Konto">
                <User className="h-5 w-5" />
              </a>
              <a href="#shop" className="hover:text-neutral-900 transition" aria-label="Warenkorb">
                <ShoppingCart className="h-5 w-5" />
              </a>
            </div>
          </div>
        </header>

        {/* Umzugs-Hinweis */}
        <div className="border-b border-black/10 bg-neutral-100 py-2 text-center text-sm text-neutral-600">
          <span className="mr-2 inline-block h-1.5 w-1.5 translate-y-[-1px] rounded-full bg-red-600 align-middle" />
          Wir sind umgezogen und richten uns ein — der Webshop läuft normal weiter.
        </div>

        {/* Hero — dunkler Kinosaal, ruhig, ein roter Akzent */}
        <section className="relative isolate overflow-hidden bg-neutral-950 text-white">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://www.highdefinition.ch/imagescaler/content/demo241_w2000fg_h1200fg.jpeg')",
            }}
          />
          <div className="absolute inset-0 bg-neutral-950/78" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/85 to-neutral-950/45" />
          {/* dezenter roter Lichtschein, unten links — wie eine Sitzreihen-Notleuchte */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 45% at 8% 100%, rgba(220,38,38,0.28), transparent 60%)",
            }}
          />

          <div className="relative mx-auto flex min-h-[86vh] w-full max-w-6xl items-center px-6 py-24">
            <div className="max-w-2xl">
              <Reveal>
                <div className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-xs tracking-[0.35em] uppercase text-white/60">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                  AV-Fachgeschäft · Uster · seit 25 Jahren
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-6 font-[family-name:var(--font-display)] text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95]">
                  Grosses Kino.
                  <br />
                  <span className="text-red-500">Bei Ihnen zuhause.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-8 max-w-xl text-lg text-white/70 leading-relaxed">
                  Produkte, Dienstleistungen und Gesamtlösungen rund um Bild, Ton
                  und Informationstechnologie — beraten, installiert und
                  kalibriert von echten Fachleuten in Uster.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-[family-name:var(--font-mono)] text-xs text-white/55">
                  {["4K · HDR", "Dolby Atmos", "THX-kalibriert", "8000 ANSI Lumen", "> 200 Marken"].map(
                    (s) => (
                      <span key={s} className="inline-flex items-center gap-2">
                        <span className="h-1 w-1 bg-red-500" />
                        {s}
                      </span>
                    ),
                  )}
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <a href="#sortiment" className="group inline-flex items-center justify-center gap-2 rounded-full bg-red-600 text-white px-6 py-3 font-medium hover:bg-red-500 transition">
                    Sortiment entdecken
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
                  </a>
                  <a href="#kontakt" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 font-medium text-white hover:bg-white/10 transition">
                    Beratung anfragen
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Marken */}
        <section className="border-b border-black/10 bg-white py-8">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-neutral-400">
              {marken.slice(0, 12).map((m) => (
                <span key={m} className="text-base font-semibold tracking-wide">{m}</span>
              ))}
              <span className="text-base font-medium text-red-600/80">+ über 200 Marken</span>
            </div>
          </div>
        </section>

        {/* Sortiment */}
        <section id="sortiment" className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="max-w-2xl">
                <div className="font-[family-name:var(--font-mono)] text-xs tracking-[0.35em] uppercase text-red-600">Sortiment</div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight">
                  Alles rund um Bild und Ton.
                </h2>
                <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
                  Von Fernsehern über Heimkino bis HiFi — persönlich beraten und
                  fachgerecht installiert.
                </p>
              </div>
            </Reveal>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-4">
              {kategorien.map((k, i) => (
                <Reveal key={k.title} delay={(i % 3) * 0.06} className={k.span}>
                  <a href="#kontakt" className="group relative block h-64 md:h-72 overflow-hidden rounded-3xl border border-black/10">
                    <img src={k.img} alt={k.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-7">
                      <h3 className="text-2xl font-semibold text-white">{k.title}</h3>
                      <p className="mt-2 max-w-xs text-sm text-white/80">{k.text}</p>
                      <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-white transition group-hover:text-red-400">
                        Ansehen <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Neuheiten */}
        <section id="neuheiten" className="py-24 md:py-32 border-t border-black/10 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div className="max-w-2xl">
                  <div className="font-[family-name:var(--font-mono)] text-xs tracking-[0.35em] uppercase text-red-600">Neuheiten</div>
                  <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight">
                    Frisch eingetroffen.
                  </h2>
                </div>
                <a href="#kontakt" className="text-sm font-medium text-red-600 hover:text-red-700 transition">
                  Alle Neuheiten →
                </a>
              </div>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {neuheiten.map((n, i) => (
                <Reveal key={n.title} delay={(i % 3) * 0.05}>
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition hover:border-red-300 hover:shadow-md">
                    <div className="aspect-[7/5] overflow-hidden bg-neutral-100">
                      <img src={n.img} alt={`${n.marke} ${n.title}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-7">
                      <div className="text-xs font-semibold uppercase tracking-wider text-red-600">{n.marke}</div>
                      <h3 className="mt-2 text-xl font-semibold">{n.title}</h3>
                      <p className="mt-2 text-neutral-600 leading-relaxed">{n.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Dienstleistungen */}
        <section id="dienstleistungen" className="py-24 md:py-32 border-t border-black/10">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="max-w-2xl">
                <div className="font-[family-name:var(--font-mono)] text-xs tracking-[0.35em] uppercase text-red-600">Dienstleistungen</div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight">
                  Wir kümmern uns um alles.
                </h2>
                <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
                  Beratung, Installation, Service — bei Ihnen zu Hause oder im
                  Geschäft.
                </p>
              </div>
            </Reveal>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dienstleistungen.map((l, i) => (
                <Reveal key={l.title} delay={(i % 3) * 0.05}>
                  <div className="group h-full rounded-3xl border border-black/10 bg-white p-8 shadow-sm transition hover:border-red-300 hover:shadow-md">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                      <l.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold">{l.title}</h3>
                    <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{l.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Codefree */}
        <section id="codefree" className="py-24 md:py-32 border-t border-black/10 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="rounded-3xl border border-red-300/60 bg-gradient-to-br from-red-50 to-transparent p-10 md:p-14">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <Reveal>
                  <div>
                    <div className="inline-flex items-center gap-2 text-red-600">
                      <Disc className="h-5 w-5" />
                      <span className="font-[family-name:var(--font-mono)] text-xs font-medium tracking-[0.35em] uppercase">Codefree</span>
                    </div>
                    <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold tracking-tight">
                      Filme aus aller Welt abspielen.
                    </h2>
                    <p className="mt-5 text-neutral-600 leading-relaxed">
                      Wir modifizieren DVD- und Blu-ray-Player ländercodefrei —
                      damit Sie Filme aus jeder Region der Welt geniessen können.
                      Eine unserer Spezialitäten seit vielen Jahren.
                    </p>
                    <a href="#kontakt" className="mt-8 inline-flex items-center gap-2 rounded-full bg-red-500 px-6 py-3 font-medium text-white hover:bg-red-600 transition">
                      Mehr erfahren <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </Reveal>
                <Reveal delay={0.15}>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Disc, label: "Region-frei" },
                      { icon: Film, label: "Blu-ray & DVD" },
                      { icon: Check, label: "Fachgerecht" },
                      { icon: Star, label: "Langjährig bewährt" },
                    ].map((c) => (
                      <div key={c.label} className="rounded-2xl border border-black/10 bg-white p-6 text-center shadow-sm">
                        <c.icon className="mx-auto h-7 w-7 text-red-600" />
                        <div className="mt-3 text-sm text-neutral-600">{c.label}</div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Online-Shop (Beispiel) */}
        <ShopDemo />

        {/* Abverkauf & Demo-Ware */}
        <section id="abverkauf" className="py-16 border-t border-black/10 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl border border-emerald-300/60 bg-gradient-to-r from-emerald-50 to-transparent p-8 md:p-10">
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <Tag className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">Demo- & Abverkaufsware</h3>
                    <p className="mt-1 text-neutral-600">
                      Ausstellungsstücke und Vorführgeräte zu reduzierten Preisen
                      — solange Vorrat.
                    </p>
                  </div>
                </div>
                <a href="#kontakt" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 font-medium text-white hover:bg-emerald-500 transition">
                  Angebote ansehen <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Über uns + Team */}
        <section id="ueber-uns" className="py-24 md:py-32 border-t border-black/10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <Reveal>
                <div>
                  <div className="font-[family-name:var(--font-mono)] text-xs tracking-[0.35em] uppercase text-red-600">Über uns</div>
                  <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight">
                    Fachwissen, dem Sie vertrauen können.
                  </h2>
                  <p className="mt-6 text-neutral-600 leading-relaxed">
                    Seit über 25 Jahren stehen wir in Uster für Bild, Ton und
                    Informationstechnologie. 2017 haben wir das traditionsreiche
                    Telehaus übernommen und führen dessen Handschlagqualität
                    weiter — mit persönlicher Beratung statt anonymem Onlinehandel.
                  </p>
                  <ul className="mt-8 space-y-3">
                    {[
                      "Persönliche Beratung durch Fachleute",
                      "Installation und Einrichtung vor Ort",
                      "Service und Reparatur auch nach dem Kauf",
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                        <span className="text-neutral-800">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="space-y-4">
                  <div className="font-[family-name:var(--font-mono)] text-xs tracking-[0.35em] uppercase text-neutral-400">Ihr Team</div>
                  {team.map((t) => (
                    <div key={t.email} className="flex items-center justify-between gap-4 rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                      <div>
                        <div className="font-semibold">{t.name}</div>
                        <div className="text-sm text-neutral-500">{t.role}</div>
                      </div>
                      <a href={`mailto:${t.email}`} className="inline-flex items-center gap-2 text-sm text-red-600 hover:text-red-700 transition">
                        <Mail className="h-4 w-4" /> E-Mail
                      </a>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="py-24 md:py-32 border-t border-black/10 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal>
              <div>
                <div className="font-[family-name:var(--font-mono)] text-xs tracking-[0.35em] uppercase text-red-600">Kontakt</div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight">
                  Besuchen Sie uns in Uster.
                </h2>
                <p className="mt-6 text-neutral-600 leading-relaxed">
                  Kommen Sie vorbei oder schreiben Sie uns — wir beraten Sie
                  gerne unverbindlich.
                </p>
                <div className="mt-10 space-y-5">
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-0.5 h-5 w-5 text-red-600" />
                    <span className="text-neutral-800">
                      Zürichstrasse 21 / Gschwaderstrasse 84<br />8610 Uster
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-red-600" />
                    <span className="text-neutral-800">+41 43 544 08 08</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="mt-0.5 h-5 w-5 text-red-600" />
                    <span className="text-neutral-800">
                      Mo–Fr 10–12 & 14–18.30 Uhr<br />Sa 12–16 Uhr
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <form className="rounded-3xl border border-black/10 bg-neutral-50 p-8 space-y-4 shadow-sm">
                <div>
                  <label className="mb-2 block text-sm text-neutral-600">Name</label>
                  <input className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-neutral-900 placeholder-neutral-400 transition focus:border-red-500 focus:outline-none" />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-neutral-600">E-Mail</label>
                  <input className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-neutral-900 placeholder-neutral-400 transition focus:border-red-500 focus:outline-none" />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-neutral-600">Ihr Anliegen</label>
                  <textarea rows={4} className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-neutral-900 placeholder-neutral-400 transition focus:border-red-500 focus:outline-none" />
                </div>
                <button type="button" className="w-full rounded-full bg-red-500 px-6 py-3 font-medium text-white transition hover:bg-red-600">
                  Anfrage senden
                </button>
              </form>
            </Reveal>
          </div>
        </section>

        <footer id="konto" className="border-t border-black/10 bg-neutral-100">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              {/* Marke + Kontakt */}
              <div className="col-span-2 md:col-span-1">
                <Logo />
                <p className="mt-4 text-sm text-neutral-500 leading-relaxed">
                  Bild, Ton & Informationstechnologie seit 25 Jahren in Uster.
                </p>
                <div className="mt-5 space-y-2 text-sm text-neutral-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 text-red-600" /> Zürichstrasse 21, 8610 Uster
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-red-600" /> +41 43 544 08 08
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="mt-0.5 h-4 w-4 text-red-600" /> Mo–Fr 10–12 & 14–18.30, Sa 12–16
                  </div>
                </div>
              </div>

              {/* Sortiment */}
              <div>
                <div className="text-sm font-semibold">Sortiment</div>
                <ul className="mt-4 space-y-2 text-sm text-neutral-500">
                  {kategorien.map((k) => (
                    <li key={k.title}>
                      <a href="#sortiment" className="hover:text-neutral-900 transition">{k.title}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service */}
              <div>
                <div className="text-sm font-semibold">Service</div>
                <ul className="mt-4 space-y-2 text-sm text-neutral-500">
                  <li><a href="#dienstleistungen" className="hover:text-neutral-900 transition">Dienstleistungen</a></li>
                  <li><a href="#codefree" className="hover:text-neutral-900 transition">Codefree</a></li>
                  <li><a href="#abverkauf" className="hover:text-neutral-900 transition">Abverkauf & Demo-Ware</a></li>
                  <li><a href="#konto" className="hover:text-neutral-900 transition">Login / Registrieren</a></li>
                  <li><a href="#kontakt" className="hover:text-neutral-900 transition">Kontakt</a></li>
                </ul>
              </div>

              {/* Informationen / Rechtliches */}
              <div>
                <div className="text-sm font-semibold">Informationen</div>
                <ul className="mt-4 space-y-2 text-sm text-neutral-500">
                  {infoLinks.map((l) => (
                    <li key={l.label}>
                      <a href="#" className="inline-flex items-center gap-2 hover:text-neutral-900 transition">
                        <l.icon className="h-3.5 w-3.5 text-neutral-400" /> {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-black/10 pt-8 text-sm text-neutral-500">
              <span>
                © {new Date().getFullYear()} highdefinition · F. Steinfels Hard- & Software · Uster
              </span>
              <span>
                Entwurf von{" "}
                <Link href="/" className="underline hover:text-neutral-900">Hugweb</Link>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
