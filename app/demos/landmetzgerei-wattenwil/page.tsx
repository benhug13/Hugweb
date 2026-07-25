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
// Auf landmetzgerei.ch gibt es KEINE Fotos (nur das Logo) → bewusst ohne Bilder gebaut,
// rein grafisch/typografisch statt mit unpassenden Stock-Bildern.
// Alle Texte stammen 1:1 von landmetzgerei.ch.

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-[family-name:var(--font-display)] font-semibold tracking-tight text-white ${className}`}>
      Landmetzgerei <span style={{ color: ACCENT }}>Wattenwil</span>
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

        {/* Hero — ohne Foto (Kundenseite hat keine): Farbverlauf, Textur, Glow, grosse Type */}
        <section className="relative isolate min-h-[calc(100svh-2rem)] overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(120% 80% at 20% 0%, #15201a 0%, #0b0f0c 55%, #070a08 100%)" }} />
          <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "repeating-linear-gradient(115deg, #fff 0 1px, transparent 1px 22px)" }} />
          <div className="pointer-events-none absolute -right-40 top-1/4 h-[38rem] w-[38rem] rounded-full opacity-25 blur-3xl animate-pulse [animation-duration:6s]" style={{ background: `radial-gradient(circle, ${ACCENT}, transparent 65%)` }} />
          <div className="pointer-events-none absolute -left-52 bottom-0 h-[30rem] w-[30rem] rounded-full opacity-15 blur-3xl animate-pulse [animation-duration:9s]" style={{ background: `radial-gradient(circle, ${ACCENT}, transparent 70%)` }} />

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
                <p className="mt-5 max-w-xl text-base lg:text-lg text-white/70 leading-relaxed">
                  Lohn- und Notschlachtung aus einer Hand — durchgeführt von drei jungen, hoch qualifizierten Metzgern, mit grosser Sorgfalt und Fachkenntnis.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-7 flex flex-col sm:flex-row gap-4">
                  <a href="#kontakt" className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-black transition hover:opacity-90" style={{ backgroundColor: ACCENT }}>
                    Kontakt aufnehmen <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
                  </a>
                  <a href="tel:0783109076" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white hover:bg-white/10 transition">
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

        {/* Über uns */}
        <section id="firma" className="pt-20 md:pt-24 pb-24 md:pb-28">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-12 gap-10 items-end">
            <Reveal className="md:col-span-7">
              <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: ACCENT }}>Über uns</div>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold leading-tight text-white">
                Metzgerhandwerk aus Wattenwil.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-5">
              <p className="text-lg text-white/60 leading-relaxed">
                Wir setzen eine lange Tradition des Fleischerhandwerks in Wattenwil fort und bieten unseren Kunden erstklassige Produkte und Dienstleistungen. Besonders auszeichnen uns die Lohn- und Notschlachtungen — durchgeführt von drei jungen, hoch qualifizierten Metzgern.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Angebot — die zwei echten Leistungen, gross ausgespielt */}
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
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                    <Tractor className="h-6 w-6" strokeWidth={1.6} style={{ color: ACCENT }} />
                  </div>
                  <h3 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-semibold text-white">Lohnschlachtung</h3>
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
              </Reveal>

              <Reveal delay={0.1} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                    <Siren className="h-6 w-6" strokeWidth={1.6} style={{ color: ACCENT }} />
                  </div>
                  <h3 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-semibold text-white">Notschlachtung</h3>
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
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-[#0b0f0c]">
          <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col sm:flex-row items-center justify-between gap-6">
            <Wordmark className="text-base md:text-lg" />
            <span className="text-sm text-white/40">© {new Date().getFullYear()} Landmetzgerei Wattenwil</span>
            <span className="text-sm text-white/40">Entwurf von <Link href="/" className="underline hover:text-white">Hugweb</Link></span>
          </div>
        </footer>
      </div>
    </>
  );
}
