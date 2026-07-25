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
  Sparkles,
  Gauge,
  Truck,
  Phone,
  MapPin,
  Clock,
  Mail,
  MessageCircle,
} from "lucide-react";
import { Archivo, Inter } from "next/font/google";
import Reveal from "@/components/Reveal";

const display = Archivo({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });

export const metadata = {
  title: "Winkelbüel Garage AG — Wir leben Autos. Occasionen & Werkstatt, Cham ZG | Entwurf von Hugweb",
  description:
    "Entwurf einer modernen Website für die Winkelbüel Garage AG in Cham: über 200 Occasionen ab Lager, markenunabhängige Werkstatt, MFK, AVILOO Batterie-Test und Eintausch.",
};

const ACCENT = "#3b82f6";
// Alle Bilder & Texte stammen von wb-garage.ch. Die Seite hat ausser dem Logo
// nur drei Fotos — das sind die Team-Porträts, darum werden sie auch als Team gezeigt.
const LOGO = "https://wb-garage.ch/storage/app/media/logo_1.png";
const TEAM = [
  { img: "https://wb-garage.ch/storage/app/media/1.jpg", name: "Marco Stöckli", rolle: "Inhaber" },
  { img: "https://wb-garage.ch/storage/app/media/2.jpg", name: "Bettina Eberhardt", rolle: "Verkauf" },
  { img: "https://wb-garage.ch/storage/app/media/3.jpg", name: "Kelvin Krummenacher", rolle: "Verkauf" },
];

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-[family-name:var(--font-display)] font-extrabold tracking-tight text-white ${className}`}>
      WINKELBÜEL <span style={{ color: ACCENT }}>GARAGE</span>
    </span>
  );
}

// „Unsere Serviceleistungen im Überblick" — Inhalte von wb-garage.ch
const angebot = [
  { icon: Car, title: "Grosse Auswahl an Occasionen", desc: "Zu fairen Preisen — vom Kleinwagen bis zum Lieferwagen." },
  { icon: ClipboardCheck, title: "Frisch ab MFK und Service", desc: "Jedes Fahrzeug wird geprüft bereitgestellt." },
  { icon: Wrench, title: "Markenunabhängige Werkstatt", desc: "Service und Reparaturen für jede Marke." },
  { icon: BatteryCharging, title: "AVILOO Batterie-Test", desc: "SOH-Test Ihrer HV-Batterie inkl. Zertifikat — CHF 79.–" },
  { icon: ShieldCheck, title: "Eintausch & Fahrzeugankauf", desc: "Faire Angebote — auch aus der Ferne." },
  { icon: ShieldCheck, title: "Garantie auf Wunsch", desc: "Über Quality1 oder NSA." },
  { icon: Truck, title: "Schweizweite Lieferung", desc: "Zu Top-Konditionen bis vor Ihre Tür." },
  { icon: CreditCard, title: "Leasing & Finanzierung", desc: "Über die Cembra Money Bank." },
];

// „Ihr Fahrzeug" — Werkstattleistungen von wb-garage.ch
const werkstatt = [
  { icon: Wrench, t: "Servicearbeiten, Reparaturen, Garantieanfragen" },
  { icon: Gauge, t: "Fahrzeugdiagnose" },
  { icon: ClipboardCheck, t: "Bereitstellung / Durchführung der MFK" },
  { icon: Disc3, t: "Lenkgeometrie" },
  { icon: Snowflake, t: "Klimaservice" },
  { icon: ShieldCheck, t: "Abwicklung Schadenfall" },
  { icon: Sparkles, t: "Fahrzeugaufbereitung (Polieren, Lackpflege, Reinigung)" },
  { icon: Car, t: "Tuning / Anbauteile (z. B. Anhängerkupplung)" },
  { icon: Disc3, t: "Reifenservice / Reifenlager / Felgen" },
  { icon: ShieldCheck, t: "Steinschlagreparatur und Scheibentausch" },
  { icon: Gauge, t: "Überprüfung Diesel-Partikelfilter (Messung vor Ort)" },
  { icon: BatteryCharging, t: "SOH-Test inkl. Zertifikat Ihrer HV-Batterie" },
];

const partner = ["AGVS Partner", "AXA Partner", "Quality1", "NSA", "Cembra Money Bank", "AVILOO"];

const nav = [
  { label: "Fahrzeuge", href: "#fahrzeuge" },
  { label: "Angebot", href: "#angebot" },
  { label: "Werkstatt", href: "#werkstatt" },
  { label: "Team", href: "#team" },
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
          <div className="w-full max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
            <img src={LOGO} alt="Winkelbüel Garage AG" className="h-9 w-auto brightness-0 invert" />
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/75">
              {nav.map((n) => (
                <a key={n.label} href={n.href} className="hover:text-white transition">{n.label}</a>
              ))}
            </nav>
            <a href="#kontakt" className="hidden sm:inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-black" style={{ borderColor: ACCENT }}>
              Termin anfragen <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </header>

        {/* Hero — ohne Foto: wb-garage.ch hat ausser den Team-Porträts keine Bilder.
            Darum grafisch (Verlauf, Raster, Glow) statt mit unpassendem Stock-Bild. */}
        <section className="relative isolate min-h-[calc(100svh-2rem)] overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(120% 85% at 78% 10%, #16233c 0%, #0a0c10 55%, #070910 100%)" }} />
          <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
          <div className="pointer-events-none absolute -right-40 top-1/4 h-[38rem] w-[38rem] rounded-full opacity-30 blur-3xl animate-pulse [animation-duration:6s]" style={{ background: `radial-gradient(circle, ${ACCENT}, transparent 65%)` }} />
          <div className="pointer-events-none absolute -left-52 bottom-0 h-[30rem] w-[30rem] rounded-full opacity-15 blur-3xl animate-pulse [animation-duration:9s]" style={{ background: `radial-gradient(circle, ${ACCENT}, transparent 70%)` }} />

          <div className="relative mx-auto flex min-h-[calc(100svh-2rem)] w-full max-w-6xl flex-col px-6 pt-24 pb-6">
            <div className="flex flex-1 flex-col justify-center">
              <Reveal>
                <div className="text-xs font-semibold uppercase tracking-[0.35em]" style={{ color: ACCENT }}>
                  Cham ZG · einer der grössten Occasion-Händler der Schweiz
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-5xl lg:text-6xl font-extrabold leading-[1.03] tracking-tight text-white">
                  Wir leben <span style={{ color: ACCENT }}>Autos.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-5 max-w-xl text-base lg:text-lg text-white/70 leading-relaxed">
                  Autos sind nicht nur ein Mittel zum Zweck, Autos sind Emotionen. Dafür stehen wir — und legen alles daran, Sie zufrieden mobil zu halten.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-7 flex flex-col sm:flex-row gap-4">
                  <a href="#fahrzeuge" className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-white transition hover:opacity-90" style={{ backgroundColor: ACCENT }}>
                    Das passende Auto finden <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
                  </a>
                  <a href="#werkstatt" className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white hover:bg-white/10 transition">
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
                    { k: "6", v: "Arbeitsplätze" },
                    { k: "AGVS", v: "& AXA Partner" },
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

        {/* Fahrzeuge */}
        <section id="fahrzeuge" className="py-16 md:py-20 md: md:">
          <div className="w-full max-w-5xl mx-auto px-6 grid md:grid-cols-12 gap-10 items-end">
            <Reveal className="md:col-span-7">
              <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: ACCENT }}>Fahrzeuge</div>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold leading-tight text-white">
                Das passende Auto für jedermann.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-5">
              <p className="text-lg text-white/60 leading-relaxed">
                Dank einem ständigen Lagerbestand von über 200 Occasionen bieten wir für jeden Anspruch und jedes Budget das passende Fahrzeug. Nichts gefunden? Unsere Vorlaufliste und unser länderübergreifendes Netzwerk lassen Ihnen bestimmt ein Angebot zukommen.
              </p>
              <a href="#kontakt" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition" style={{ color: ACCENT }}>
                Wunschauto anfragen <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
          <div className="mt-10 max-w-5xl mx-auto px-6">
            <Reveal>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm text-white/60">
                <span className="font-semibold text-white">Wichtig:</span> Bitte vereinbaren Sie zwingend einen Termin — nicht alle Fahrzeuge sind vor Ort gelagert.
                Terminvereinbarung unter <a href="tel:+41417902323" className="underline hover:text-white">041 790 23 23</a> oder <span className="text-white">verkauf@wb-garage.ch</span>.
              </div>
            </Reveal>
          </div>
        </section>

        {/* Angebot */}
        <section id="angebot" className="py-16 md:py-20 relative border-y border-white/10 bg-[#070910] overflow-hidden">
          <div className="pointer-events-none absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full opacity-20 blur-3xl" style={{ background: `radial-gradient(circle, ${ACCENT}, transparent 65%)` }} />
          <div className="relative w-full max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-8 items-end">
              <Reveal className="md:col-span-7">
                <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: ACCENT }}>Service</div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white">Unsere Leistungen im Überblick</h2>
              </Reveal>
              <Reveal delay={0.1} className="md:col-span-5">
                <p className="text-white/60 leading-relaxed">
                  Vom Occasionskauf über die Finanzierung bis zum Service: Bei uns bekommen Sie alles aus einer Hand — persönlich und markenunabhängig.
                </p>
              </Reveal>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16">
              {angebot.map((s, i) => (
                <Reveal key={s.title} delay={(i % 4) * 0.05}>
                  <div className="group flex items-start gap-5 border-t border-white/10 py-6">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition group-hover:bg-white/[0.07]">
                      <s.icon className="h-4.5 w-4.5" strokeWidth={1.6} style={{ color: ACCENT }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3">
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

        {/* Werkstatt */}
        <section id="werkstatt" className="py-16 md:py-20">
          <div className="w-full max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-8 items-end">
              <Reveal className="md:col-span-7">
                <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: ACCENT }}>Ihr Fahrzeug</div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white">Rundum-Service zu fairen Ansätzen.</h2>
              </Reveal>
              <Reveal delay={0.1} className="md:col-span-5">
                <p className="text-white/60 leading-relaxed">
                  Dank moderner Einrichtung und geschultem Fachpersonal bieten wir Service zu fairen Stundenansätzen. Unsere Mitarbeiter arbeiten mit neuester Diagnose-Ausrüstung und wickeln dank sechs Arbeitsplätzen Ihre Aufträge effizient ab. Zudem profitieren Sie von Vorteilspreisen dank freiem Ersatzteileinkauf.
                </p>
              </Reveal>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {werkstatt.map((w, i) => (
                <Reveal key={w.t} delay={(i % 3) * 0.05}>
                  <div className="group flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-white/20 hover:bg-white/[0.04]">
                    <w.icon className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={1.6} style={{ color: ACCENT }} />
                    <span className="text-sm text-white/75 leading-relaxed">{w.t}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.1}>
              <div className="mt-12 flex flex-wrap items-center gap-3">
                {partner.map((p) => (
                  <span key={p} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs uppercase tracking-wider text-white/50">{p}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* E-Mobilität — AVILOO */}
        <section className="py-16 md:py-20 border-y border-white/10 bg-[#070910]">
          <div className="w-full max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-10 items-center">
            <Reveal className="md:col-span-7">
              <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: ACCENT }}>E-Mobilität</div>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white">Voll geladen. Volle Reichweite?</h2>
              <p className="mt-5 text-white/60 leading-relaxed">
                Wie fit ist die HV-Batterie von Ihrem E-Auto oder Plug-in-Hybrid? Jetzt testen und absichern — inklusive Zertifikat.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center">
                <BatteryCharging className="mx-auto h-8 w-8" strokeWidth={1.5} style={{ color: ACCENT }} />
                <div className="mt-4 font-[family-name:var(--font-display)] text-4xl font-extrabold text-white">CHF 79.–</div>
                <div className="mt-1 text-sm text-white/50">AVILOO Batterie-Test inkl. Zertifikat</div>
                <a href="#kontakt" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90" style={{ backgroundColor: ACCENT }}>
                  Test buchen <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Team — die einzigen echten Fotos der Kundenseite */}
        <section id="team" className="py-16 md:py-20">
          <div className="w-full max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: ACCENT }}>Team</div>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white">Ihre Ansprechpersonen</h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {TEAM.map((t, i) => (
                <Reveal key={t.name} delay={i * 0.08}>
                  <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                    <div className="aspect-square overflow-hidden">
                      <img src={t.img} alt={t.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    </div>
                    <div className="p-6">
                      <div className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">{t.name}</div>
                      <div className="mt-1 text-sm" style={{ color: ACCENT }}>{t.rolle}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="py-16 md:py-20 border-t border-white/10 bg-[#070910]">
          <div className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: ACCENT }}>Kontakt</div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white">Besuchen Sie uns.</h2>
                <p className="mt-6 text-white/60 leading-relaxed">Ob Kauf, Service oder MFK — schreiben Sie uns kurz, wir melden uns rasch zurück.</p>
                <div className="mt-10 space-y-5 text-white/80">
                  <div className="flex items-start gap-4"><MapPin className="mt-0.5 h-5 w-5" style={{ color: ACCENT }} /><span>Winkelbüel Garage AG<br />Sinserstrasse 400, 6330 Cham<br /><span className="text-sm text-white/45">Für die Navigation: Sinserstrasse 400, 6332 Hagendorn</span></span></div>
                  <div className="flex items-center gap-4"><Phone className="h-5 w-5" style={{ color: ACCENT }} /><a href="tel:+41417902323" className="hover:underline">+41 41 790 23 23</a></div>
                  <div className="flex items-center gap-4"><MessageCircle className="h-5 w-5" style={{ color: ACCENT }} /><span>WhatsApp 076 745 09 89</span></div>
                  <div className="flex items-center gap-4"><Mail className="h-5 w-5" style={{ color: ACCENT }} /><span>info@wb-garage.ch · verkauf@wb-garage.ch</span></div>
                  <div className="flex items-start gap-4"><Clock className="mt-0.5 h-5 w-5" style={{ color: ACCENT }} /><span>
                    <span className="font-semibold text-white">Verkauf:</span> Mo–Fr 08.00–12.00 / 13.30–18.30 · Sa 09.00–15.00<br />
                    <span className="font-semibold text-white">Werkstatt:</span> Mo–Fr 07.30–12.00 / 13.30–17.30 · Sa/So geschlossen
                  </span></div>
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
          <div className="w-full max-w-6xl mx-auto px-6 py-14 flex flex-col sm:flex-row items-center justify-between gap-6">
            <Wordmark className="text-lg" />
            <span className="text-sm text-white/40">© {new Date().getFullYear()} Winkelbüel Garage AG · Sinserstrasse 400, 6330 Cham</span>
            <span className="text-sm text-white/40">Entwurf von <Link href="/" className="underline hover:text-white">Hugweb</Link></span>
          </div>
        </footer>
      </div>
    </>
  );
}
