import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Home,
  TreePine,
  Landmark,
  Building2,
  Sparkles,
  PaintRoller,
  SprayCan,
  Droplets,
  Layers,
  Ruler,
  Phone,
  Mail,
  MapPin,
  Check,
} from "lucide-react";
import { Archivo, Inter } from "next/font/google";
import Reveal from "@/components/Reveal";

// Schrift: kraeftige Grotesk fuer Headlines (nickt der Versal-Wortmarke im
// Pfundstein-Logo zu), humanistische Body-Schrift fuer Vertrauen/Lesbarkeit.
const display = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});
const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata = {
  title:
    "Malergeschäft Pfundstein — Maler in Steinhausen, Region Zug | Entwurf von Hugweb",
  description:
    "Entwurf einer modernen Website für das Malergeschäft Pfundstein in Steinhausen: Fassaden, Innenrenovationen, Naturholz, Restauration und mehr — seit 1968.",
};

// Echte Bilder von der Pfundstein-Website (lokal gespiegelt) — der Kunde
// erkennt seine eigenen Arbeiten sofort wieder.
const pf = (name: string) => `/pfundstein/${name}`;

const leistungen = [
  { icon: Home, title: "Fassadenrenovation", text: "Wetterfester Schutz und ein frischer Auftritt für Ihr Haus." },
  { icon: TreePine, title: "Naturholzrenovation", text: "Fenster, Läden und Holzfassaden fachgerecht aufgefrischt." },
  { icon: Landmark, title: "Restauration", text: "Altbau und Denkmal sorgfältig in Stand gesetzt." },
  { icon: Building2, title: "Neubauten", text: "Sauberer Innen- und Aussenanstrich für den Erstbezug." },
  { icon: Sparkles, title: "Dekorative Arbeiten", text: "Lasuren, Spachteltechniken und individuelle Effekte." },
  { icon: PaintRoller, title: "Innenrenovationen", text: "Wände und Decken, so übergeben, wie man sie gern bezieht." },
  { icon: SprayCan, title: "Spritzarbeiten", text: "Grosse Flächen gleichmässig und effizient beschichtet." },
  { icon: Droplets, title: "Wasserhochdruck-Reinigung", text: "Fassaden und Beläge gründlich von Schmutz und Moos befreit." },
  { icon: Layers, title: "Tapezieren", text: "Vom Vlies bis zur Designtapete — faltenfrei angebracht." },
  { icon: Ruler, title: "Profilierungen", text: "Stuck und Profile ergänzt, ausgebessert und betont." },
];

const referenzen = [
  { img: pf("IMG_7557.jpg"), span: "md:col-span-7" },
  { img: pf("DSC_0221.jpg"), span: "md:col-span-5" },
  { img: pf("IMG_7528.jpg"), span: "md:col-span-5" },
  { img: pf("IMG_7562.jpg"), span: "md:col-span-7" },
  { img: pf("PB083732.jpg"), span: "md:col-span-12" },
];

const werte = [
  { title: "Handwerk seit 1968", text: "Über 50 Jahre Erfahrung, heute in zweiter Generation geführt von einem eidg. dipl. Malermeister." },
  { title: "Saubere Ausführung", text: "Wir arbeiten strukturiert und hinterlassen Räume so, wie man sie gern übernimmt — pünktlich und ohne böse Überraschungen." },
  { title: "Persönliche Beratung", text: "Vom Farbton bis zur Fläche besprechen Sie alles direkt mit dem Meister. Kurze Wege, klare Auskunft." },
];

const nav = [
  { label: "Firma", href: "#firma" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "Kontakt", href: "#kontakt" },
];

// Signatur: die drei Pinselstriche aus dem Pfundstein-Logo (Türkis / Magenta /
// Gelb) — der eine Ort, an dem die volle Markenfarbigkeit bewusst auftritt.
function BrushStrokes({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 90" className={className} fill="none" aria-hidden>
      <path d="M8 74 C 60 40, 96 26, 150 8" stroke="#17b3cf" strokeWidth="11" strokeLinecap="round" />
      <path d="M40 80 C 92 46, 128 32, 182 14" stroke="#d81b74" strokeWidth="11" strokeLinecap="round" />
      <path d="M72 86 C 124 52, 160 38, 214 20" stroke="#f5c518" strokeWidth="11" strokeLinecap="round" />
    </svg>
  );
}

export default function PfundsteinDemo() {
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

      <div className={`${display.variable} ${body.variable} font-[family-name:var(--font-body)] bg-white text-neutral-900`}>
        {/* Header */}
        <header className="sticky top-0 z-40 border-b border-black/10 bg-white/85 backdrop-blur">
          <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
            <img src={pf("logo.png")} alt="Malergeschäft Pfundstein" className="h-11 w-auto" />
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-600">
              {nav.map((n) => (
                <a key={n.label} href={n.href} className="hover:text-neutral-900 transition">
                  {n.label}
                </a>
              ))}
            </nav>
            <a href="#kontakt" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-cyan-700 transition">
              Offerte anfragen
            </a>
          </div>
        </header>

        {/* Hero — echtes Foto, heller Handwerks-Look */}
        <section className="relative isolate overflow-hidden">
          <img src={pf("DSC_0233.jpg")} alt="Referenzobjekt Malergeschäft Pfundstein" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/85 via-neutral-950/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 to-transparent" />

          <div className="relative mx-auto flex min-h-[82vh] w-full max-w-6xl items-center px-6 py-24">
            <div className="max-w-xl text-white">
              <Reveal>
                <BrushStrokes className="h-12 w-auto" />
              </Reveal>
              <Reveal delay={0.05}>
                <div className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                  Malergeschäft · Steinhausen · seit 1968
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-4 font-[family-name:var(--font-display)] text-6xl md:text-7xl font-extrabold tracking-tight leading-[0.95]">
                  Farbe, die <span className="text-cyan-400">bleibt.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-md text-lg text-white/80 leading-relaxed">
                  Seit über 50 Jahren renovieren, streichen und gestalten wir in
                  und um Steinhausen — sauber, termingerecht und mit dem Auge
                  fürs Detail einer zweiten Generation.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-9 flex flex-col sm:flex-row gap-4">
                  <a href="#kontakt" className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-600 px-6 py-3 font-semibold text-white hover:bg-cyan-500 transition">
                    Offerte anfragen
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
                  </a>
                  <a href="#referenzen" className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10 transition">
                    Referenzen ansehen
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Trust-Streifen */}
        <section className="border-b border-black/10 bg-neutral-50">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-black/10">
            {[
              { k: "1968", v: "Gegründet" },
              { k: "2.", v: "Generation" },
              { k: "eidg. dipl.", v: "Malermeister" },
              { k: "Zug", v: "Region & Umgebung" },
            ].map((s) => (
              <div key={s.v} className="px-6 py-8 text-center">
                <div className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-extrabold text-cyan-700">{s.k}</div>
                <div className="mt-1 text-sm text-neutral-500">{s.v}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Firma */}
        <section id="firma" className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-black/10">
                <img src={pf("IMG_7523.jpg")} alt="Arbeit von Malergeschäft Pfundstein" className="h-full w-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">Die Firma</div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight">
                  Ein Familienbetrieb mit Handschrift.
                </h2>
                <p className="mt-6 text-neutral-600 leading-relaxed">
                  Unser Familienunternehmen wurde 1968 gegründet und führt seither
                  Malerarbeiten in und ausserhalb von Steinhausen aus. Seit 2003
                  leitet Rainer Pfundstein, eidg. dipl. Malermeister, den Betrieb
                  in zweiter Generation.
                </p>
                <p className="mt-4 text-neutral-600 leading-relaxed">
                  Über all die Jahre haben wir unseren Erfolgskurs gehalten — dank
                  Kundschaft, die uns die Treue hält. Diesen Ansporn nehmen wir mit
                  in die nächsten Projekte.
                </p>
                <ul className="mt-8 space-y-3">
                  {[
                    "Persönlich geführt vom Meister",
                    "Region Kanton Zug",
                    "Über 50 Jahre Erfahrung",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
                      <span className="text-neutral-800">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Leistungen */}
        <section id="leistungen" className="py-24 md:py-32 border-t border-black/10 bg-neutral-50">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="max-w-2xl">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">Leistungen</div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight">
                  Unsere Spezialgebiete.
                </h2>
                <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
                  Von der Fassade bis zur feinen Dekorarbeit — alles aus einer Hand.
                </p>
              </div>
            </Reveal>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {leistungen.map((l, i) => (
                <Reveal key={l.title} delay={(i % 3) * 0.05}>
                  <div className="group h-full rounded-2xl border border-black/10 bg-white p-7 shadow-sm transition hover:border-cyan-300 hover:shadow-md">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 transition group-hover:bg-cyan-600 group-hover:text-white">
                      <l.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold">{l.title}</h3>
                    <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{l.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Referenzen */}
        <section id="referenzen" className="py-24 md:py-32 border-t border-black/10">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div className="max-w-2xl">
                  <div className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">Referenzen</div>
                  <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight">
                    Ausgewählte Arbeiten.
                  </h2>
                </div>
                <a href="#kontakt" className="text-sm font-semibold text-cyan-700 hover:text-cyan-800 transition">
                  Eigenes Projekt besprechen →
                </a>
              </div>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-4">
              {referenzen.map((r, i) => (
                <Reveal key={r.img} delay={(i % 2) * 0.06} className={r.span}>
                  <div className="group relative h-72 md:h-80 overflow-hidden rounded-3xl border border-black/10">
                    <img src={r.img} alt="Referenz Malergeschäft Pfundstein" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Werte */}
        <section className="py-24 md:py-32 border-t border-black/10 bg-neutral-900 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="flex items-center gap-4">
                <BrushStrokes className="h-9 w-auto" />
                <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight">
                  Sauber. Termintreu. Ehrlich.
                </h2>
              </div>
            </Reveal>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
              {werte.map((w, i) => (
                <Reveal key={w.title} delay={i * 0.06}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-8">
                    <h3 className="text-lg font-semibold text-cyan-300">{w.title}</h3>
                    <p className="mt-3 text-white/70 leading-relaxed">{w.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="py-24 md:py-32 border-t border-black/10">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">Kontakt</div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight">
                  Reden wir über Ihr Projekt.
                </h2>
                <p className="mt-6 text-neutral-600 leading-relaxed">
                  Ob Fassade, Wohnung oder ein einzelner Raum — schreiben Sie uns
                  kurz, was ansteht. Sie erhalten eine unverbindliche Offerte.
                </p>
                <div className="mt-10 space-y-5">
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-0.5 h-5 w-5 text-cyan-600" />
                    <span className="text-neutral-800">Bannstrasse 40a<br />6312 Steinhausen</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-cyan-600" />
                    <span className="text-neutral-800">041 741 32 21 · 079 633 25 76</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-cyan-600" />
                    <span className="text-neutral-800">info@pfundstein.ch</span>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <form className="rounded-3xl border border-black/10 bg-neutral-50 p-8 space-y-4 shadow-sm">
                <div>
                  <label className="mb-2 block text-sm text-neutral-600">Name</label>
                  <input className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-neutral-900 placeholder-neutral-400 transition focus:border-cyan-500 focus:outline-none" />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-neutral-600">E-Mail oder Telefon</label>
                  <input className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-neutral-900 placeholder-neutral-400 transition focus:border-cyan-500 focus:outline-none" />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-neutral-600">Was steht an?</label>
                  <textarea rows={4} className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-neutral-900 placeholder-neutral-400 transition focus:border-cyan-500 focus:outline-none" />
                </div>
                <button type="button" className="w-full rounded-full bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:bg-cyan-700">
                  Offerte anfragen
                </button>
              </form>
            </Reveal>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-black/10 bg-neutral-50">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              <div className="col-span-2 md:col-span-1">
                <img src={pf("logo.png")} alt="Malergeschäft Pfundstein" className="h-12 w-auto" />
                <p className="mt-4 text-sm text-neutral-500 leading-relaxed">
                  Malerarbeiten in der Region Kanton Zug — seit 1968.
                </p>
              </div>
              <div>
                <div className="text-sm font-semibold">Leistungen</div>
                <ul className="mt-4 space-y-2 text-sm text-neutral-500">
                  {leistungen.slice(0, 5).map((l) => (
                    <li key={l.title}><a href="#leistungen" className="hover:text-neutral-900 transition">{l.title}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-sm font-semibold">Firma</div>
                <ul className="mt-4 space-y-2 text-sm text-neutral-500">
                  <li><a href="#firma" className="hover:text-neutral-900 transition">Über uns</a></li>
                  <li><a href="#referenzen" className="hover:text-neutral-900 transition">Referenzen</a></li>
                  <li><a href="#kontakt" className="hover:text-neutral-900 transition">Kontakt</a></li>
                </ul>
              </div>
              <div>
                <div className="text-sm font-semibold">Kontakt</div>
                <ul className="mt-4 space-y-2 text-sm text-neutral-500">
                  <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-cyan-600" /> Bannstrasse 40a, 6312 Steinhausen</li>
                  <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-cyan-600" /> 041 741 32 21</li>
                </ul>
              </div>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-black/10 pt-8 text-sm text-neutral-500">
              <span>© {new Date().getFullYear()} Malergeschäft Pfundstein · Steinhausen</span>
              <span>Entwurf von <Link href="/" className="underline hover:text-neutral-900">Hugweb</Link></span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
