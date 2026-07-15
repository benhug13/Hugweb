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
  MapPin,
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

// Echte Bilder von der Pfundstein-Website (lokal gespiegelt) — Texte und Bilder
// 1:1 wie im Original.
const pf = (name: string) => `/pfundstein/${name}`;

// Spezialgebiete — exakt die 10 Begriffe von ihrer Seite, schlichte Icon-Reihe.
const spezialgebiete = [
  { icon: Home, title: "Fassadenrenovation" },
  { icon: TreePine, title: "Naturholzrenovation" },
  { icon: Landmark, title: "Restauration" },
  { icon: Building2, title: "Neubauten" },
  { icon: Sparkles, title: "Dekorative Arbeiten" },
  { icon: PaintRoller, title: "Innenrenovationen" },
  { icon: SprayCan, title: "Spritzarbeiten" },
  { icon: Droplets, title: "Wasserhochdruck-Reinigungsarbeiten" },
  { icon: Layers, title: "Tapezieren" },
  { icon: Ruler, title: "Profilierungen" },
];

const referenzen = [
  { img: pf("DSC_0233.jpg"), span: "md:col-span-7" },
  { img: pf("IMG_7523.jpg"), span: "md:col-span-5" },
  { img: pf("IMG_7557.jpg"), span: "md:col-span-5" },
  { img: pf("DSC_0221.jpg"), span: "md:col-span-7" },
  { img: pf("IMG_7528.jpg"), span: "md:col-span-6" },
  { img: pf("IMG_7562.jpg"), span: "md:col-span-6" },
];

const nav = [
  { label: "Firma", href: "#firma" },
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

        {/* Hero — echtes Referenzbild (Riegelhaus im Gerüst), Text 1:1 */}
        <section className="relative isolate overflow-hidden">
          <img src={pf("P13-07-09_15.45.jpg")} alt="Fassadenrenovation an einem Riegelhaus — Malergeschäft Pfundstein" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/88 via-neutral-950/60 to-neutral-950/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 to-transparent" />

          <div className="relative mx-auto flex min-h-[80vh] w-full max-w-6xl items-center px-6 py-24">
            <div className="max-w-2xl text-white">
              <Reveal>
                <BrushStrokes className="h-11 w-auto" />
              </Reveal>
              <Reveal delay={0.05}>
                <div className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                  Malergeschäft Pfundstein · Steinhausen · seit 1968
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.02]">
                  Malerarbeiten in der{" "}
                  <span className="text-cyan-400">Region Kanton Zug.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-xl text-lg text-white/80 leading-relaxed">
                  Die Firma Pfundstein führt Malerarbeiten in der Region Kanton
                  Zug aus. Das Geschäft hat seinen Sitz in Steinhausen — ein
                  Familienunternehmen seit 1968, in zweiter Generation.
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

        {/* Trust-Streifen — reine Fakten aus ihrem Text */}
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

        {/* Firma — Text 1:1 */}
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
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                  Malerarbeiten in der Region Kanton Zug.
                </h2>
                <p className="mt-6 text-lg text-neutral-800 leading-relaxed">
                  Die Firma Pfundstein führt Malerarbeiten in der Region Kanton
                  Zug aus. Das Geschäft hat seinen Sitz in Steinhausen.
                </p>
                <p className="mt-4 text-neutral-600 leading-relaxed">
                  Unser Familienunternehmen wurde 1968 gegründet. Seit über 50
                  Jahren führt die Firma Pfundstein Malerarbeiten in und
                  ausserhalb Steinhausens aus. Seit 2003 leitet Rainer
                  Pfundstein, eidg. dipl. Malermeister, die Einzelunternehmung in
                  zweiter Generation. Stetige Veränderungen in der Wirtschaft und
                  der Gesellschaft, sowie der technologische Fortschritt prägen
                  unser Geschäftsleben. Sie zwingen uns fortlaufend entsprechende
                  Anpassungen vorzunehmen und durch innovative Ideen einen Schritt
                  vorauszugehen. Während dieser Zeit konnten wir trotz der Hochs
                  und Tiefs unseren Erfolgskurs stets beibehalten. Sie, geschätzte
                  Kundschaft, haben mit Ihrer Treue massgeblich zu unserem Erfolg
                  beigetragen. Das gibt uns Ansporn, die nächsten Jahre mit
                  demselben Elan in Angriff zu nehmen.
                </p>
                <p className="mt-6 font-[family-name:var(--font-display)] text-lg font-semibold">
                  Ihr Rainer Pfundstein
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Spezialgebiete — schlichte Icon-Reihe wie im Original */}
        <section id="leistungen" className="py-24 md:py-32 border-t border-black/10 bg-neutral-50">
          <div className="max-w-5xl mx-auto px-6">
            <Reveal>
              <h2 className="text-center font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold tracking-tight">
                Unsere Spezialgebiete sind:
              </h2>
            </Reveal>
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-14">
              {spezialgebiete.map((s, i) => (
                <Reveal key={s.title} delay={(i % 5) * 0.04}>
                  <div className="group flex flex-col items-center text-center">
                    <s.icon className="h-10 w-10 text-neutral-600 transition group-hover:text-cyan-600" strokeWidth={1.5} />
                    <div className="mt-4 text-sm font-medium text-neutral-700">{s.title}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Referenzen — ihre echten Fotos */}
        <section id="referenzen" className="py-24 md:py-32 border-t border-black/10">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div className="max-w-2xl">
                  <div className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">Referenzen</div>
                  <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight">
                    Ausgeführte Arbeiten.
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

        {/* Kontakt — Angaben 1:1 */}
        <section id="kontakt" className="py-24 md:py-32 border-t border-black/10 bg-neutral-50">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">Kontakt</div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight">
                  Kontaktieren Sie uns.
                </h2>
                <p className="mt-6 text-neutral-600 leading-relaxed">
                  Schreiben Sie uns kurz, was ansteht — Sie erhalten eine
                  unverbindliche Offerte.
                </p>
                <div className="mt-10 space-y-5">
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-0.5 h-5 w-5 text-cyan-600" />
                    <span className="text-neutral-800">Malergeschäft Pfundstein<br />Bannstrasse 40a, CH-6312 Steinhausen</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-cyan-600" />
                    <span className="text-neutral-800">Telefon 041 741 32 21, Mobile 079 633 25 76</span>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <form className="rounded-3xl border border-black/10 bg-white p-8 space-y-4 shadow-sm">
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
        <footer className="border-t border-black/10 bg-white">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              <div className="col-span-2 md:col-span-1">
                <img src={pf("logo.png")} alt="Malergeschäft Pfundstein" className="h-12 w-auto" />
                <p className="mt-4 text-sm text-neutral-500 leading-relaxed">
                  Malerarbeiten in der Region Kanton Zug — seit 1968.
                </p>
              </div>
              <div>
                <div className="text-sm font-semibold">Spezialgebiete</div>
                <ul className="mt-4 space-y-2 text-sm text-neutral-500">
                  {spezialgebiete.slice(0, 5).map((s) => (
                    <li key={s.title}><a href="#leistungen" className="hover:text-neutral-900 transition">{s.title}</a></li>
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
                  <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-cyan-600" /> Bannstrasse 40a, CH-6312 Steinhausen</li>
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
