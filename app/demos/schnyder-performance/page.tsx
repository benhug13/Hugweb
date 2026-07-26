import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Wrench,
  Bike,
  Car,
  KeyRound,
  ShoppingBag,
  Gauge,
  Phone,
  MapPin,
  Mail,
} from "lucide-react";
import { Archivo, Inter } from "next/font/google";
import Reveal from "@/components/Reveal";

const display = Archivo({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });

export const metadata = {
  title: "Schnyder performance GmbH — Auto- & Motorradwerkstatt, Neuenkirch LU | Entwurf von Hugweb",
  description:
    "Entwurf einer Website für die Schnyder performance GmbH in Neuenkirch: Auto- und Motorradwerkstatt, Fahrzeugreparaturen, Handel und Vermietung von Fahrzeugen und Zubehör.",
};

const ACCENT = "#ff5c1a";
// Diese Firma hat KEINE Website und keine öffentlichen Fotos.
// Darum bewusst rein grafisch gebaut — kein Stock, keine erfundenen Bilder.
// Alle Angaben stammen aus dem Handelsregister (CHE-362.866.607), der
// Gemeinde Neuenkirch und dem search.ch-Eintrag.

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-[family-name:var(--font-display)] font-extrabold tracking-tight text-white ${className}`}>
      SCHNYDER <span style={{ color: ACCENT }}>performance</span>
    </span>
  );
}

// Leistungen — abgeleitet aus dem eingetragenen Gesellschaftszweck
const leistungen = [
  { icon: Wrench, title: "Autowerkstatt", desc: "Service, Unterhalt und Reparaturen an Ihrem Fahrzeug." },
  { icon: Bike, title: "Motorradwerkstatt", desc: "Auch für Zweiräder — Service und Instandsetzung." },
  { icon: Gauge, title: "Fahrzeugreparaturen", desc: "Von der Diagnose bis zur fertigen Reparatur." },
  { icon: Car, title: "Fahrzeughandel", desc: "An- und Verkauf von Fahrzeugen." },
  { icon: KeyRound, title: "Fahrzeugvermietung", desc: "Fahrzeuge mieten, wenn Sie eins brauchen." },
  { icon: ShoppingBag, title: "Fahrzeugzubehör", desc: "Handel mit Zubehör rund ums Fahrzeug." },
];

const prozess = [
  { n: "01", t: "Anrufen", d: "Kurz sagen, was ansteht — Auto oder Motorrad." },
  { n: "02", t: "Termin abmachen", d: "Wir finden einen Termin, der Ihnen passt." },
  { n: "03", t: "Werkstatt", d: "Wir schauen es an und melden uns mit dem Befund." },
  { n: "04", t: "Übergabe", d: "Fahrzeug bereit — Sie wissen, was gemacht wurde." },
];

const nav = [
  { label: "Werkstatt", href: "#werkstatt" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function SchnyderPerformanceDemo() {
  return (
    <>
      <div className="bg-neutral-900 text-white text-xs py-2 text-center">
        Unverbindlicher Entwurf von <Link href="/" className="underline font-medium">Hugweb</Link>
        <Link href="/#demos" className="ml-4 inline-flex items-center gap-1 opacity-80 hover:opacity-100">
          <ArrowLeft className="h-3 w-3" /> Zurück
        </Link>
      </div>

      <div className={`${display.variable} ${body.variable} font-[family-name:var(--font-body)] bg-[#0b0b0c] text-neutral-200`}>
        {/* Header — transparent über Hero */}
        <header className="absolute inset-x-0 top-8 z-40">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
            <Wordmark className="text-base md:text-lg" />
            <nav className="hidden lg:flex items-center gap-9 text-sm font-medium text-white/75">
              {nav.map((n) => (
                <a key={n.label} href={n.href} className="hover:text-white transition">{n.label}</a>
              ))}
            </nav>
            <a href="tel:0792650845" className="hidden sm:inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-black" style={{ borderColor: ACCENT }}>
              079 265 08 45 <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </header>

        {/* Hero — ohne Foto (Firma hat keine Website und keine öffentlichen Bilder) */}
        <section className="relative isolate min-h-[calc(100svh-2rem)] overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(115% 85% at 75% 5%, #221410 0%, #0b0b0c 55%, #070708 100%)" }} />
          <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
          <div className="pointer-events-none absolute -right-40 top-1/4 h-[38rem] w-[38rem] rounded-full opacity-25 blur-3xl animate-pulse [animation-duration:6s]" style={{ background: `radial-gradient(circle, ${ACCENT}, transparent 65%)` }} />
          <div className="pointer-events-none absolute -left-52 bottom-0 h-[30rem] w-[30rem] rounded-full opacity-15 blur-3xl animate-pulse [animation-duration:9s]" style={{ background: `radial-gradient(circle, ${ACCENT}, transparent 70%)` }} />

          <div className="relative mx-auto flex min-h-[calc(100svh-2rem)] w-full max-w-6xl flex-col px-6 pt-24 pb-6">
            <div className="flex flex-1 flex-col justify-center">
              <Reveal>
                <div className="text-xs font-semibold uppercase tracking-[0.35em]" style={{ color: ACCENT }}>
                  Neuenkirch LU · Auto & Motorrad
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-5xl lg:text-6xl font-extrabold leading-[1.03] tracking-tight text-white">
                  Ihre Werkstatt<br />in <span style={{ color: ACCENT }}>Neuenkirch.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-5 max-w-xl text-base lg:text-lg text-white/70 leading-relaxed">
                  Auto und Motorrad, Service und Reparatur — dazu Handel, Vermietung und Zubehör. Persönlich, direkt, ohne Umweg über eine Hotline.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-7 flex flex-col sm:flex-row gap-4">
                  <a href="tel:0792650845" className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-black transition hover:opacity-90" style={{ backgroundColor: ACCENT }}>
                    <Phone className="h-4 w-4" /> 079 265 08 45
                  </a>
                  <a href="#leistungen" className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white hover:bg-white/10 transition">
                    Unsere Leistungen
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.4}>
              <div className="mt-10 rounded-2xl border border-white/10 bg-[#141212]/90 backdrop-blur shadow-2xl">
                <div className="grid grid-cols-2 md:grid-cols-4 divide-y divide-white/10 md:divide-y-0 md:divide-x">
                  {[
                    { k: "Auto", v: "Service & Reparatur" },
                    { k: "Motorrad", v: "Werkstatt für Zweiräder" },
                    { k: "Handel", v: "Kauf, Verkauf, Miete" },
                    { k: "Neuenkirch", v: "Luzernstrasse 19" },
                  ].map((s) => (
                    <div key={s.v} className="px-5 py-4 md:py-5 text-center">
                      <div className="font-[family-name:var(--font-display)] text-lg md:text-xl font-extrabold" style={{ color: ACCENT }}>{s.k}</div>
                      <div className="mt-1 text-[11px] uppercase tracking-wider text-white/50">{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Werkstatt / Über */}
        <section id="werkstatt" className="py-14 md:py-16">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-10 items-center">
            <Reveal className="md:col-span-7">
              <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: ACCENT }}>Die Werkstatt</div>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold leading-tight text-white">
                Eine Werkstatt für beides — vier Räder und zwei.
              </h2>
              <p className="mt-4 text-white/60 leading-relaxed">
                Schnyder performance ist eine Auto- und Motorradwerkstatt an der Luzernstrasse 19 in Neuenkirch. Neben Service und Reparaturen handeln und vermieten wir Fahrzeuge und Fahrzeugzubehör.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Direkt erreichbar</div>
                <a href="tel:0792650845" className="mt-3 block font-[family-name:var(--font-display)] text-3xl font-extrabold text-white transition hover:opacity-80">
                  079 265 08 45
                </a>
                <p className="mt-3 text-sm text-white/55 leading-relaxed">
                  Rufen Sie an — Sie sprechen direkt mit der Werkstatt, nicht mit einem Callcenter.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Leistungen */}
        <section id="leistungen" className="relative py-14 md:py-16 border-y border-white/10 bg-[#08080a] overflow-hidden">
          <div className="pointer-events-none absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full opacity-15 blur-3xl" style={{ background: `radial-gradient(circle, ${ACCENT}, transparent 65%)` }} />
          <div className="relative max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-3">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: ACCENT }}>Leistungen</div>
                  <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white">Alles rund ums Fahrzeug.</h2>
                </div>
                <p className="max-w-md text-white/60 leading-relaxed">
                  Vom Service über die Reparatur bis zum Fahrzeugkauf — bei uns bekommen Sie alles aus einer Hand.
                </p>
              </div>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10">
              {leistungen.map((s, i) => (
                <Reveal key={s.title} delay={(i % 3) * 0.05}>
                  <div className="group flex items-start gap-4 border-t border-white/10 py-4">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition group-hover:bg-white/[0.07]">
                      <s.icon className="h-5 w-5" strokeWidth={1.6} style={{ color: ACCENT }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between gap-3">
                        <div className="font-[family-name:var(--font-display)] text-[15px] font-semibold leading-tight text-white">{s.title}</div>
                        <span className="text-[11px] tabular-nums text-white/30">0{i + 1}</span>
                      </div>
                      <p className="mt-0.5 text-[13px] text-white/55 leading-snug">{s.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Ablauf */}
        <section id="ablauf" className="py-14 md:py-16">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: ACCENT }}>Ablauf</div>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white">So einfach geht&apos;s.</h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
              {prozess.map((p, i) => (
                <Reveal key={p.n} delay={i * 0.06}>
                  <div className="font-[family-name:var(--font-display)] text-4xl font-extrabold" style={{ color: ACCENT }}>{p.n}</div>
                  <div className="mt-3 font-[family-name:var(--font-display)] text-lg font-semibold text-white">{p.t}</div>
                  <p className="mt-1.5 text-[13px] text-white/55 leading-snug">{p.d}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="py-14 md:py-16 border-t border-white/10 bg-[#08080a]">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: ACCENT }}>Kontakt</div>
                <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white">Kommen Sie vorbei.</h2>
                <p className="mt-4 text-white/60 leading-relaxed">Schreiben Sie kurz, was ansteht — oder rufen Sie einfach an.</p>
                <div className="mt-8 space-y-4 text-white/80">
                  <div className="flex items-start gap-4"><MapPin className="mt-0.5 h-5 w-5" style={{ color: ACCENT }} /><span>Schnyder performance GmbH<br />Luzernstrasse 19, 6206 Neuenkirch</span></div>
                  <div className="flex items-center gap-4"><Phone className="h-5 w-5" style={{ color: ACCENT }} /><a href="tel:0792650845" className="hover:underline">079 265 08 45</a></div>
                  <div className="flex items-center gap-4"><Mail className="h-5 w-5" style={{ color: ACCENT }} /><span>schnyder.performance@gmail.com</span></div>
                </div>
                <p className="mt-6 text-xs text-white/35">Öffnungszeiten hier ergänzen — aktuell sind online keine hinterlegt.</p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <form className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 space-y-4">
                <div><label className="mb-2 block text-sm text-white/50">Name</label><input className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white transition focus:border-[#ff5c1a] focus:outline-none" /></div>
                <div><label className="mb-2 block text-sm text-white/50">Telefon</label><input className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white transition focus:border-[#ff5c1a] focus:outline-none" /></div>
                <div><label className="mb-2 block text-sm text-white/50">Fahrzeug & Anliegen</label><textarea rows={4} className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white transition focus:border-[#ff5c1a] focus:outline-none" /></div>
                <button type="button" className="w-full rounded-full px-6 py-3 font-semibold text-black transition hover:opacity-90" style={{ backgroundColor: ACCENT }}>Anfrage senden</button>
              </form>
            </Reveal>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-[#0b0b0c]">
          <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Wordmark className="text-sm md:text-base" />
            <span className="text-sm text-white/40">© {new Date().getFullYear()} Schnyder performance GmbH · Luzernstrasse 19, 6206 Neuenkirch</span>
            <span className="text-sm text-white/40">Entwurf von <Link href="/" className="underline hover:text-white">Hugweb</Link></span>
          </div>
          <div className="max-w-6xl mx-auto px-6 pb-8">
            <p className="text-xs text-white/30">
              Texte und Gestaltung sind Vorschläge. Im fertigen Projekt kommen Ihre eigenen Texte, Fotos und Öffnungszeiten rein.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
