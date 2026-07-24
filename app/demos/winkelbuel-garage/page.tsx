import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Car,
  Wrench,
  BatteryCharging,
  ClipboardCheck,
  Disc3,
  Snowflake,
  ShieldCheck,
  CreditCard,
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
  title: "Winkelbüel Garage AG — Occasionen & Werkstatt, Cham ZG | Entwurf von Hugweb",
  description:
    "Entwurf einer modernen Website für die Winkelbüel Garage AG in Cham: über 200 Occasionen, markenunabhängige Werkstatt, MFK, Service und E-Auto-Batterietests.",
};

const ACCENT = "#3b82f6";
const LOGO = "https://wb-garage.ch/storage/app/media/logo_1.png";
// Echte Bilder von wb-garage.ch (400x400 → nur in Kacheln, nicht als Hero)
const IMG_WB1 = "https://wb-garage.ch/storage/app/media/1.jpg";
const IMG_WB2 = "https://wb-garage.ch/storage/app/media/2.jpg";
const IMG_WB3 = "https://wb-garage.ch/storage/app/media/3.jpg";
// Platzhalter fürs Hero (Werkstatt) — im finalen Projekt durch eigenes Foto ersetzen
const IMG_HERO = "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=2000&q=80&auto=format&fit=crop";

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-[family-name:var(--font-display)] font-extrabold tracking-tight text-white ${className}`}>
      WINKELBÜEL <span style={{ color: ACCENT }}>GARAGE</span>
    </span>
  );
}

const leistungen = [
  { icon: Car, title: "Occasionen-Verkauf", desc: "Über 200 Fahrzeuge ab Lager." },
  { icon: Wrench, title: "Markenunabhängige Werkstatt", desc: "Service & Reparaturen aller Marken." },
  { icon: BatteryCharging, title: "AVILOO Batterie-Test", desc: "HV-Batterie-Check für E- & Hybrid-Autos." },
  { icon: ClipboardCheck, title: "MFK-Vorbereitung", desc: "Wir bringen Ihr Auto sicher durch." },
  { icon: Disc3, title: "Reifenservice", desc: "Wechsel, Einlagerung, Verkauf." },
  { icon: Snowflake, title: "Klimaservice", desc: "Prüfen, füllen, warten." },
  { icon: ShieldCheck, title: "Ankauf & Eintausch", desc: "Fairer Preis für Ihr aktuelles Auto." },
  { icon: CreditCard, title: "Leasing & Finanzierung", desc: "Passende Lösung zum Wunschauto." },
];

const galerie = [
  { img: IMG_WB1, label: "Occasionen", ort: "Über 200 Fahrzeuge ab Lager", span: "md:col-span-7", h: "h-[24rem]" },
  { img: IMG_WB2, label: "Werkstatt", ort: "Alle Marken, ein Ansprechpartner", span: "md:col-span-5", h: "h-[24rem]" },
  { img: IMG_WB3, label: "Service", ort: "MFK · Reifen · Klima", span: "md:col-span-5", h: "h-72" },
  { img: IMG_HERO, label: "E-Mobilität", ort: "AVILOO Batterie-Tests", span: "md:col-span-7", h: "h-72" },
];

const prozess = [
  { n: "01", t: "Anfrage", d: "Sie sagen uns, was ansteht — Kauf, Service oder MFK." },
  { n: "02", t: "Termin & Offerte", d: "Wir melden uns rasch mit Termin und transparentem Preis." },
  { n: "03", t: "Werkstatt", d: "Fachgerechte Arbeit vom eingespielten Team." },
  { n: "04", t: "Übergabe", d: "Sauberes Auto, alles erklärt — Sie fahren beruhigt weiter." },
];

const nav = [
  { label: "Occasionen", href: "#occasionen" },
  { label: "Werkstatt", href: "#leistungen" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function WinkelbuelGarageDemo() {
  return (
    <>
      <div className="bg-neutral-900 text-white text-xs py-2 text-center">
        Unverbindlicher Entwurf von <Link href="/" className="underline font-medium">Hugweb</Link>
        <Link href="/#demos" className="ml-4 inline-flex items-center gap-1 opacity-80 hover:opacity-100">
          <ArrowLeft className="h-3 w-3" /> Zurück
        </Link>
      </div>

      <div className={`${display.variable} ${body.variable} font-[family-name:var(--font-body)] bg-[#0a0c10] text-neutral-200`}>
        {/* Header — transparent über Hero */}
        <header className="absolute inset-x-0 top-8 z-40">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
            <img src={LOGO} alt="Winkelbüel Garage AG" className="h-9 w-auto brightness-0 invert" />
            <nav className="hidden lg:flex items-center gap-9 text-sm font-medium text-white/75">
              {nav.map((n) => (
                <a key={n.label} href={n.href} className="hover:text-white transition">{n.label}</a>
              ))}
            </nav>
            <a href="#kontakt" className="hidden sm:inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-black" style={{ borderColor: ACCENT }}>
              Termin anfragen <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </header>

        {/* Hero — Höhe = Fenster minus Entwurf-Balken, Stat-Leiste im Hero-Fuss */}
        <section className="relative isolate min-h-[calc(100svh-2rem)] overflow-hidden">
          <img src={IMG_HERO} alt="Werkstatt" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-black/60 to-black/45" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#0a0c10] via-[#0a0c10]/85 to-transparent" />
          <div className="pointer-events-none absolute -right-40 top-1/4 h-[36rem] w-[36rem] rounded-full opacity-30 blur-3xl animate-pulse [animation-duration:6s]" style={{ background: `radial-gradient(circle, ${ACCENT}, transparent 65%)` }} />

          <div className="relative mx-auto flex min-h-[calc(100svh-2rem)] w-full max-w-6xl flex-col px-6 pt-24 pb-6">
            <div className="flex flex-1 flex-col justify-center">
              <Reveal>
                <div className="text-xs font-semibold uppercase tracking-[0.35em]" style={{ color: ACCENT }}>
                  Cham ZG · markenunabhängig
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-5xl lg:text-6xl font-extrabold leading-[1.03] tracking-tight text-white">
                  Wir leben <span style={{ color: ACCENT }}>Autos.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-5 max-w-xl text-base lg:text-lg text-white/70 leading-relaxed">
                  Über 200 Occasionen ab Lager und eine Werkstatt, die alles rund ums Fahrzeug übernimmt — persönlich, ehrlich und für jede Marke.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-7 flex flex-col sm:flex-row gap-4">
                  <a href="#occasionen" className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-white transition hover:opacity-90" style={{ backgroundColor: ACCENT }}>
                    Occasionen ansehen <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
                  </a>
                  <a href="#leistungen" className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white hover:bg-white/10 transition">
                    Werkstatt & Service
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.4}>
              <div className="mt-10 rounded-2xl border border-white/10 bg-[#11151c]/90 backdrop-blur shadow-2xl">
                <div className="grid grid-cols-2 md:grid-cols-4 divide-y divide-white/10 md:divide-y-0 md:divide-x">
                  {[
                    { k: "200+", v: "Occasionen ab Lager" },
                    { k: "Alle", v: "Marken-Service" },
                    { k: "AGVS", v: "& AXA Partner" },
                    { k: "E-Auto", v: "Batterie-Tests" },
                  ].map((s) => (
                    <div key={s.v} className="px-5 py-4 md:py-5 text-center">
                      <div className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-extrabold" style={{ color: ACCENT }}>{s.k}</div>
                      <div className="mt-1 text-[11px] uppercase tracking-wider text-white/50">{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Occasionen */}
        <section id="occasionen" className="pt-20 md:pt-24 pb-24 md:pb-28">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-12 gap-10 items-end">
            <Reveal className="md:col-span-7">
              <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: ACCENT }}>Occasionen</div>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold leading-tight text-white">
                Über 200 geprüfte Fahrzeuge — für jedes Budget.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-5">
              <p className="text-lg text-white/60 leading-relaxed">
                Vom günstigen Alltagsauto bis zum Familienwagen: In unserem Lager finden Sie eine grosse Auswahl. Kommen Sie vorbei oder fragen Sie direkt nach Ihrem Wunschfahrzeug.
              </p>
              <a href="#kontakt" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition" style={{ color: ACCENT }}>
                Wunschauto anfragen <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </section>

        {/* Galerie */}
        <section id="galerie" className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: ACCENT }}>Einblick</div>
                  <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-white">Bei uns in Cham</h2>
                </div>
                <a href="#kontakt" className="text-sm font-semibold hover:opacity-80 transition" style={{ color: ACCENT }}>Termin vereinbaren →</a>
              </div>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-4">
              {galerie.map((r, i) => (
                <Reveal key={r.label} delay={(i % 2) * 0.08} className={r.span}>
                  <div className={`group relative ${r.h} overflow-hidden rounded-2xl border border-white/10`}>
                    <img src={r.img} alt={r.label} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <div className="font-[family-name:var(--font-display)] text-xl font-bold text-white">{r.label}</div>
                      <div className="text-sm text-white/60">{r.ort}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-4 text-xs text-white/35">Teils Beispielbilder — im finalen Projekt durch Ihre eigenen Fotos ersetzbar.</p>
          </div>
        </section>

        {/* Leistungen */}
        <section id="leistungen" className="relative py-24 md:py-32 border-y border-white/10 bg-[#070910] overflow-hidden">
          <div className="pointer-events-none absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full opacity-20 blur-3xl" style={{ background: `radial-gradient(circle, ${ACCENT}, transparent 65%)` }} />
          <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            <Reveal>
              <div className="md:sticky md:top-24">
                <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: ACCENT }}>Werkstatt & Service</div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-white">Alles rund ums Auto.</h2>
                <p className="mt-6 text-white/60 leading-relaxed">
                  Vom Ölwechsel bis zur MFK, vom Reifenwechsel bis zum Batterie-Check am E-Auto: Wir übernehmen den ganzen Unterhalt — unabhängig von der Marke.
                </p>
                <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
                  <img src={IMG_WB2} alt="Werkstatt" className="h-[42vh] min-h-72 lg:h-[48vh] w-full object-cover transition duration-700 hover:scale-[1.03]" />
                </div>
                <div className="mt-6 flex items-center gap-3 text-sm text-white/45">
                  <span className="h-px w-10" style={{ background: ACCENT }} />
                  Acht Leistungen — ein Ansprechpartner.
                </div>
              </div>
            </Reveal>
            <div className="divide-y divide-white/10">
              {leistungen.map((s, i) => (
                <Reveal key={s.title} delay={(i % 4) * 0.05}>
                  <div className="group flex items-start gap-5 py-5">
                    <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition group-hover:bg-white/[0.07]">
                      <s.icon className="h-5 w-5" strokeWidth={1.6} style={{ color: ACCENT }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <div className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">{s.title}</div>
                        <span className="text-xs tabular-nums text-white/30">0{i + 1}</span>
                      </div>
                      <p className="mt-1 text-sm text-white/55 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Ablauf */}
        <section id="ablauf" className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: ACCENT }}>Ablauf</div>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-white">So einfach geht&apos;s.</h2>
            </Reveal>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-8">
              {prozess.map((p, i) => (
                <Reveal key={p.n} delay={i * 0.06}>
                  <div className="font-[family-name:var(--font-display)] text-5xl font-extrabold" style={{ color: ACCENT }}>{p.n}</div>
                  <div className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold text-white">{p.t}</div>
                  <p className="mt-2 text-sm text-white/55 leading-relaxed">{p.d}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="py-24 md:py-32 border-t border-white/10 bg-[#070910]">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: ACCENT }}>Kontakt</div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-white">Fahren Sie bei uns vorbei.</h2>
                <p className="mt-6 text-white/60 leading-relaxed">Ob Kauf, Service oder MFK — schreiben Sie uns kurz, wir melden uns rasch zurück.</p>
                <div className="mt-10 space-y-5 text-white/80">
                  <div className="flex items-start gap-4"><MapPin className="mt-0.5 h-5 w-5" style={{ color: ACCENT }} /><span>Winkelbüel Garage AG<br />Sinserstrasse 400, 6330 Cham</span></div>
                  <div className="flex items-center gap-4"><Phone className="h-5 w-5" style={{ color: ACCENT }} /><span>+41 41 790 23 23</span></div>
                  <div className="flex items-center gap-4"><Mail className="h-5 w-5" style={{ color: ACCENT }} /><span>info@wb-garage.ch</span></div>
                  <div className="flex items-start gap-4"><Clock className="mt-0.5 h-5 w-5" style={{ color: ACCENT }} /><span>Verkauf: Mo–Fr 8–18:30 · Sa 9–15<br />Werkstatt: Mo–Fr 7:30–17:30</span></div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <form className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 space-y-4">
                <div><label className="mb-2 block text-sm text-white/50">Name</label><input className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white transition focus:border-[#3b82f6] focus:outline-none" /></div>
                <div><label className="mb-2 block text-sm text-white/50">E-Mail oder Telefon</label><input className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white transition focus:border-[#3b82f6] focus:outline-none" /></div>
                <div><label className="mb-2 block text-sm text-white/50">Ihr Anliegen</label><textarea rows={4} className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white transition focus:border-[#3b82f6] focus:outline-none" /></div>
                <button type="button" className="w-full rounded-full px-6 py-3 font-semibold text-white transition hover:opacity-90" style={{ backgroundColor: ACCENT }}>Anfrage senden</button>
              </form>
            </Reveal>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-[#0a0c10]">
          <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col sm:flex-row items-center justify-between gap-6">
            <Wordmark className="text-lg" />
            <span className="text-sm text-white/40">© {new Date().getFullYear()} Winkelbüel Garage AG · Cham</span>
            <span className="text-sm text-white/40">Entwurf von <Link href="/" className="underline hover:text-white">Hugweb</Link></span>
          </div>
        </footer>
      </div>
    </>
  );
}
