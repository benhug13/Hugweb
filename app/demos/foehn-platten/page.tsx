import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Layers,
  Gem,
  Mountain,
  Grid3x3,
  Sun,
  Maximize,
  Sparkles,
  Store,
  Phone,
  MapPin,
  Clock,
  Mail,
} from "lucide-react";
import { Archivo, Inter } from "next/font/google";
import Reveal from "@/components/Reveal";

const display = Archivo({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });

export const metadata = {
  title: "FÖHN PLATTEN AG — Plattenarbeiten mit Qualität, Brunnen SZ | Entwurf von Hugweb",
  description:
    "Entwurf einer modernen Website für die FÖHN PLATTEN AG in Brunnen: Plattenbeläge, Naturstein, Feinsteinzeug, Grossformat und Plattenhandel — seit über 50 Jahren.",
};

const LOGO = "https://www.foehnplatten.ch/wp/wp-content/uploads/2020/07/01-Logo_Foehn_trsp354.png";

const leistungen = [
  { icon: Layers, title: "Plattenbeläge", desc: "Boden & Wand, sauber verlegt." },
  { icon: Grid3x3, title: "Keramik & Feinsteinzeug", desc: "Robust, pflegeleicht, langlebig." },
  { icon: Mountain, title: "Naturstein", desc: "Marmor, Granit, Quarzit." },
  { icon: Gem, title: "Kunststein & Mosaik", desc: "Präzise Detailarbeit." },
  { icon: Sun, title: "Balkon & Terrasse", desc: "Wetterfeste Aussenbeläge." },
  { icon: Maximize, title: "Grossformat & XXL", desc: "Grossflächen fugenarm." },
  { icon: Sparkles, title: "Reinigung & Pflege", desc: "Fachgerechte Pflegetechnik." },
  { icon: Store, title: "Plattenhandel & Ausstellung", desc: "Beratung im Showroom." },
];

const nav = [
  { label: "Firma", href: "#firma" },
  { label: "Leistungen", href: "#leistungen" },
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

      <div className={`${display.variable} ${body.variable} font-[family-name:var(--font-body)] bg-white text-neutral-900`}>
        {/* Header */}
        <header className="sticky top-0 z-40 border-b border-black/10 bg-white/85 backdrop-blur">
          <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
            <img src={LOGO} alt="FÖHN PLATTEN AG" className="h-10 w-auto" />
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-600">
              {nav.map((n) => (
                <a key={n.label} href={n.href} className="hover:text-neutral-900 transition">{n.label}</a>
              ))}
            </nav>
            <a href="#kontakt" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-700 transition">
              Beratung anfragen
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-neutral-950">
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 78% 22%, rgba(217,119,6,0.5), transparent 55%)" }} />
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
          <div className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-24">
            <div className="max-w-2xl text-white">
              <Reveal>
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400/90">FÖHN PLATTEN AG · Brunnen SZ · seit über 50 Jahren</div>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.03]">
                  Plattenarbeiten mit <span className="text-amber-400">Qualität.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-xl text-lg text-white/80 leading-relaxed">
                  Ihr kompetenter und zuverlässiger Partner für Plattenarbeiten — von der ersten Beratung bis zum letzten Fugenschnitt. Boden, Wand, Naturstein und Grossformat, in der gesamten Schweiz.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-9 flex flex-col sm:flex-row gap-4">
                  <a href="#kontakt" className="group inline-flex items-center justify-center gap-2 rounded-full bg-amber-600 px-6 py-3 font-semibold text-white hover:bg-amber-500 transition">
                    Beratung anfragen <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
                  </a>
                  <a href="#leistungen" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 font-semibold text-white hover:bg-white/10 transition">
                    Leistungen ansehen
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="border-b border-black/10 bg-neutral-50">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-black/10">
            {[
              { k: "50+", v: "Jahre Erfahrung" },
              { k: "~65", v: "Mitarbeitende" },
              { k: "CH-weit", v: "im Einsatz" },
              { k: "Lehr-", v: "betrieb" },
            ].map((s) => (
              <div key={s.v} className="px-6 py-8 text-center">
                <div className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-extrabold text-amber-700">{s.k}</div>
                <div className="mt-1 text-sm text-neutral-500">{s.v}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Firma */}
        <section id="firma" className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Reveal>
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">Die Firma</div>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Handwerk, das seit über einem halben Jahrhundert Bestand hat.
              </h2>
              <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
                Die FÖHN PLATTEN AG mit Sitz in Brunnen führt Plattenarbeiten in der gesamten Schweiz aus. Ein eingespieltes Team mit langjähriger Betriebstreue steht für Qualität, Sauberkeit und Termintreue — vom privaten Bad bis zur Grossbaustelle.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Leistungen */}
        <section id="leistungen" className="py-24 md:py-32 border-t border-black/10 bg-neutral-50">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <h2 className="text-center font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold tracking-tight">Unsere Leistungen</h2>
            </Reveal>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {leistungen.map((s, i) => (
                <Reveal key={s.title} delay={(i % 4) * 0.05}>
                  <div className="group h-full rounded-3xl border border-black/10 bg-white p-7 transition hover:border-amber-300 hover:shadow-sm">
                    <s.icon className="h-9 w-9 text-amber-600" strokeWidth={1.5} />
                    <div className="mt-5 font-[family-name:var(--font-display)] text-lg font-semibold">{s.title}</div>
                    <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{s.desc}</p>
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
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">Kontakt</div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight">Wir beraten Sie gerne.</h2>
                <p className="mt-6 text-neutral-600 leading-relaxed">Schreiben Sie uns kurz Ihr Projekt — Sie erhalten eine unverbindliche Offerte.</p>
                <div className="mt-10 space-y-5 text-neutral-800">
                  <div className="flex items-start gap-4"><MapPin className="mt-0.5 h-5 w-5 text-amber-600" /><span>FÖHN PLATTEN AG<br />Gätzlistrasse 2, 6440 Brunnen</span></div>
                  <div className="flex items-center gap-4"><Phone className="h-5 w-5 text-amber-600" /><span>+41 41 825 61 61</span></div>
                  <div className="flex items-center gap-4"><Mail className="h-5 w-5 text-amber-600" /><span>info@foehnplatten.ch</span></div>
                  <div className="flex items-start gap-4"><Clock className="mt-0.5 h-5 w-5 text-amber-600" /><span>Mo–Fr 8:00–11:30 · 13:30–17:00</span></div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <form className="rounded-3xl border border-black/10 bg-white p-8 space-y-4 shadow-sm">
                <div><label className="mb-2 block text-sm text-neutral-600">Name</label><input className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 transition focus:border-amber-500 focus:outline-none" /></div>
                <div><label className="mb-2 block text-sm text-neutral-600">E-Mail oder Telefon</label><input className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 transition focus:border-amber-500 focus:outline-none" /></div>
                <div><label className="mb-2 block text-sm text-neutral-600">Ihr Projekt</label><textarea rows={4} className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 transition focus:border-amber-500 focus:outline-none" /></div>
                <button type="button" className="w-full rounded-full bg-amber-600 px-6 py-3 font-semibold text-white transition hover:bg-amber-700">Offerte anfragen</button>
              </form>
            </Reveal>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-black/10 bg-neutral-950 text-white">
          <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col sm:flex-row items-center justify-between gap-6">
            <img src={LOGO} alt="FÖHN PLATTEN AG" className="h-11 w-auto brightness-0 invert" />
            <span className="text-sm text-white/60">© {new Date().getFullYear()} FÖHN PLATTEN AG · Brunnen</span>
            <span className="text-sm text-white/60">Entwurf von <Link href="/" className="underline hover:text-white">Hugweb</Link></span>
          </div>
        </footer>
      </div>
    </>
  );
}
