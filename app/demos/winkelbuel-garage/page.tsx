import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
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

const LOGO = "https://wb-garage.ch/storage/app/media/logo_1.png";

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

const nav = [
  { label: "Occasionen", href: "#occasionen" },
  { label: "Werkstatt", href: "#leistungen" },
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

      <div className={`${display.variable} ${body.variable} font-[family-name:var(--font-body)] bg-white text-neutral-900`}>
        {/* Header */}
        <header className="sticky top-0 z-40 border-b border-black/10 bg-white/85 backdrop-blur">
          <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
            <img src={LOGO} alt="Winkelbüel Garage AG" className="h-10 w-auto" />
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-600">
              {nav.map((n) => (
                <a key={n.label} href={n.href} className="hover:text-neutral-900 transition">{n.label}</a>
              ))}
            </nav>
            <a href="#kontakt" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition">
              Termin anfragen
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-neutral-950">
          <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, rgba(37,99,235,0.55), transparent 55%)" }} />
          <div className="relative mx-auto flex min-h-[78vh] w-full max-w-6xl items-center px-6 py-24">
            <div className="max-w-2xl text-white">
              <Reveal>
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300/90">Winkelbüel Garage AG · Cham ZG</div>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.03]">
                  Wir leben <span className="text-blue-400">Autos.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-xl text-lg text-white/80 leading-relaxed">
                  Das passende Auto für jedermann — über 200 Occasionen ab Lager und eine markenunabhängige Werkstatt, die alles rund ums Fahrzeug übernimmt. Persönlich, ehrlich, seit Jahren in Cham.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-9 flex flex-col sm:flex-row gap-4">
                  <a href="#occasionen" className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500 transition">
                    Occasionen ansehen <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
                  </a>
                  <a href="#leistungen" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 font-semibold text-white hover:bg-white/10 transition">
                    Werkstatt & Service
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
              { k: "200+", v: "Occasionen ab Lager" },
              { k: "Alle", v: "Marken-Service" },
              { k: "AGVS", v: "& AXA Partner" },
              { k: "E-Auto", v: "Batterie-Tests" },
            ].map((s) => (
              <div key={s.v} className="px-6 py-8 text-center">
                <div className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-extrabold text-blue-700">{s.k}</div>
                <div className="mt-1 text-sm text-neutral-500">{s.v}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Occasionen Teaser */}
        <section id="occasionen" className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Reveal>
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">Occasionen</div>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Über 200 geprüfte Fahrzeuge — für jedes Budget.
              </h2>
              <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
                Vom günstigen Alltagsauto bis zum Familienwagen: In unserem Lager finden Sie eine grosse Auswahl an Occasionen. Kommen Sie vorbei oder fragen Sie uns direkt nach Ihrem Wunschfahrzeug.
              </p>
              <a href="#kontakt" className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition">
                Wunschauto anfragen <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </section>

        {/* Leistungen */}
        <section id="leistungen" className="py-24 md:py-32 border-t border-black/10 bg-neutral-50">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <h2 className="text-center font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold tracking-tight">Werkstatt & Service</h2>
            </Reveal>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {leistungen.map((s, i) => (
                <Reveal key={s.title} delay={(i % 4) * 0.05}>
                  <div className="group h-full rounded-3xl border border-black/10 bg-white p-7 transition hover:border-blue-300 hover:shadow-sm">
                    <s.icon className="h-9 w-9 text-blue-600" strokeWidth={1.5} />
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
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">Kontakt</div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight">Fahren Sie bei uns vorbei.</h2>
                <p className="mt-6 text-neutral-600 leading-relaxed">Ob Kauf, Service oder MFK — schreiben Sie uns kurz, wir melden uns rasch zurück.</p>
                <div className="mt-10 space-y-5 text-neutral-800">
                  <div className="flex items-start gap-4"><MapPin className="mt-0.5 h-5 w-5 text-blue-600" /><span>Winkelbüel Garage AG<br />Sinserstrasse 400, 6330 Cham</span></div>
                  <div className="flex items-center gap-4"><Phone className="h-5 w-5 text-blue-600" /><span>+41 41 790 23 23</span></div>
                  <div className="flex items-center gap-4"><Mail className="h-5 w-5 text-blue-600" /><span>info@wb-garage.ch</span></div>
                  <div className="flex items-start gap-4"><Clock className="mt-0.5 h-5 w-5 text-blue-600" /><span>Verkauf: Mo–Fr 8–18:30 · Sa 9–15<br />Werkstatt: Mo–Fr 7:30–17:30</span></div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <form className="rounded-3xl border border-black/10 bg-white p-8 space-y-4 shadow-sm">
                <div><label className="mb-2 block text-sm text-neutral-600">Name</label><input className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 transition focus:border-blue-500 focus:outline-none" /></div>
                <div><label className="mb-2 block text-sm text-neutral-600">E-Mail oder Telefon</label><input className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 transition focus:border-blue-500 focus:outline-none" /></div>
                <div><label className="mb-2 block text-sm text-neutral-600">Ihr Anliegen</label><textarea rows={4} className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 transition focus:border-blue-500 focus:outline-none" /></div>
                <button type="button" className="w-full rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">Anfrage senden</button>
              </form>
            </Reveal>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-black/10 bg-neutral-950 text-white">
          <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col sm:flex-row items-center justify-between gap-6">
            <img src={LOGO} alt="Winkelbüel Garage AG" className="h-11 w-auto brightness-0 invert" />
            <span className="text-sm text-white/60">© {new Date().getFullYear()} Winkelbüel Garage AG · Cham</span>
            <span className="text-sm text-white/60">Entwurf von <Link href="/" className="underline hover:text-white">Hugweb</Link></span>
          </div>
        </footer>
      </div>
    </>
  );
}
