import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Beef,
  Flame,
  UtensilsCrossed,
  Sparkles,
  Leaf,
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
  title: "Land-Metzgli — Metzgerei & Partyservice, Lostorf SO | Entwurf von Hugweb",
  description:
    "Entwurf einer modernen Website für das Land-Metzgli in Lostorf: Schweizer Metzgerei-Qualität vom Land, Grilladen, Hausmacher-Spezialitäten und Partyservice.",
};

const leistungen = [
  { icon: Beef, title: "Frischfleisch vom Land", desc: "Schweizer Qualität aus der Region." },
  { icon: Flame, title: "Grilladen", desc: "Spiesse, Würste & Marinaden für den Grill." },
  { icon: Sparkles, title: "Hausmacher-Spezialitäten", desc: "Nach eigenen Rezepten hergestellt." },
  { icon: UtensilsCrossed, title: "Partyservice & Catering", desc: "Vom Apéro bis zum Fest." },
];

const nav = [
  { label: "Metzgerei", href: "#firma" },
  { label: "Angebot", href: "#leistungen" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function LandmetzgliDemo() {
  return (
    <>
      <div className="bg-neutral-900 text-white text-xs py-2 text-center">
        Unverbindlicher Entwurf von <Link href="/" className="underline font-medium">Hugweb</Link>
        <Link href="/#demos" className="ml-4 inline-flex items-center gap-1 opacity-80 hover:opacity-100">
          <ArrowLeft className="h-3 w-3" /> Zurück
        </Link>
      </div>

      <div className={`${display.variable} ${body.variable} font-[family-name:var(--font-body)] bg-[#fdfaf7] text-neutral-900`}>
        {/* Header */}
        <header className="sticky top-0 z-40 border-b border-black/10 bg-[#fdfaf7]/85 backdrop-blur">
          <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
            <span className="font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-tight text-rose-900">Land<span className="text-rose-700">-Metzgli</span></span>
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-600">
              {nav.map((n) => (
                <a key={n.label} href={n.href} className="hover:text-neutral-900 transition">{n.label}</a>
              ))}
            </nav>
            <a href="#kontakt" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-rose-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-rose-900 transition">
              Bestellen
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-rose-950">
          <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 78% 25%, rgba(159,18,57,0.7), transparent 55%)" }} />
          <div className="relative mx-auto flex min-h-[74vh] w-full max-w-6xl items-center px-6 py-24">
            <div className="max-w-2xl text-white">
              <Reveal>
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-200/90">Land-Metzgli · Lostorf SO</div>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.03]">
                  Qualität <span className="text-rose-300">vom Land.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-xl text-lg text-white/80 leading-relaxed">
                  Frisches Fleisch, hausgemachte Spezialitäten und ein Partyservice, der jedes Fest rettet — alles aus einer kleinen Metzgerei mit viel Handarbeit und Herzblut.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-9 flex flex-col sm:flex-row gap-4">
                  <a href="#kontakt" className="group inline-flex items-center justify-center gap-2 rounded-full bg-rose-700 px-6 py-3 font-semibold text-white hover:bg-rose-600 transition">
                    Jetzt bestellen <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
                  </a>
                  <a href="#leistungen" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 font-semibold text-white hover:bg-white/10 transition">
                    Unser Angebot
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Firma */}
        <section id="firma" className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Reveal>
              <Leaf className="mx-auto h-9 w-9 text-rose-700" strokeWidth={1.5} />
              <h2 className="mt-5 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Eine Dorfmetzgerei, wie man sie kaum noch findet.
              </h2>
              <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
                Beim Land-Metzgli in Lostorf kommt Qualität vom Land direkt zu Ihnen — ehrlich, regional und ohne Schnickschnack. In der Hauptsaison frisch im Laden, das ganze Jahr über auf Bestellung.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Leistungen */}
        <section id="leistungen" className="py-24 md:py-32 border-t border-black/10 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <Reveal>
              <h2 className="text-center font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold tracking-tight">Unser Angebot</h2>
            </Reveal>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {leistungen.map((s, i) => (
                <Reveal key={s.title} delay={(i % 2) * 0.06}>
                  <div className="group h-full rounded-3xl border border-black/10 bg-[#fdfaf7] p-7 transition hover:border-rose-300 hover:shadow-sm">
                    <s.icon className="h-9 w-9 text-rose-700" strokeWidth={1.5} />
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
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-800">Kontakt</div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight">Bestellen & vorbeikommen.</h2>
                <p className="mt-6 text-neutral-600 leading-relaxed">Schreiben oder rufen Sie uns an — gerne nehmen wir Ihre Bestellung entgegen.</p>
                <div className="mt-10 space-y-5 text-neutral-800">
                  <div className="flex items-start gap-4"><MapPin className="mt-0.5 h-5 w-5 text-rose-700" /><span>Land-Metzgli<br />Neue Badstrasse 1, 4654 Lostorf</span></div>
                  <div className="flex items-center gap-4"><Phone className="h-5 w-5 text-rose-700" /><span>062 298 17 52</span></div>
                  <div className="flex items-center gap-4"><Mail className="h-5 w-5 text-rose-700" /><span>landmetzgli@gmail.com</span></div>
                  <div className="flex items-start gap-4"><Clock className="mt-0.5 h-5 w-5 text-rose-700" /><span>Di–So 10:00–19:00 (Hauptsaison)<br />übrige Monate auf telefonische Bestellung</span></div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <form className="rounded-3xl border border-black/10 bg-white p-8 space-y-4 shadow-sm">
                <div><label className="mb-2 block text-sm text-neutral-600">Name</label><input className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 transition focus:border-rose-500 focus:outline-none" /></div>
                <div><label className="mb-2 block text-sm text-neutral-600">E-Mail oder Telefon</label><input className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 transition focus:border-rose-500 focus:outline-none" /></div>
                <div><label className="mb-2 block text-sm text-neutral-600">Ihre Bestellung / Anfrage</label><textarea rows={4} className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 transition focus:border-rose-500 focus:outline-none" /></div>
                <button type="button" className="w-full rounded-full bg-rose-800 px-6 py-3 font-semibold text-white transition hover:bg-rose-900">Bestellung senden</button>
              </form>
            </Reveal>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-black/10 bg-rose-950 text-white">
          <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col sm:flex-row items-center justify-between gap-6">
            <span className="font-[family-name:var(--font-display)] text-xl font-extrabold">Land-Metzgli</span>
            <span className="text-sm text-white/60">© {new Date().getFullYear()} Land-Metzgli · Lostorf</span>
            <span className="text-sm text-white/60">Entwurf von <Link href="/" className="underline hover:text-white">Hugweb</Link></span>
          </div>
        </footer>
      </div>
    </>
  );
}
