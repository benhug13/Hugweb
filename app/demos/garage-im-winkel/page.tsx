import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Wrench,
  Settings,
  PackageSearch,
  Car,
  Award,
  Sparkles,
  HandCoins,
  Phone,
  MapPin,
  Mail,
  Quote,
} from "lucide-react";
import { Archivo, Inter } from "next/font/google";
import Reveal from "@/components/Reveal";

const display = Archivo({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });

export const metadata = {
  title: "Garage im Winkel AG — Oldtimer, Veteranen & Fahrzeugverkauf, Erlenbach ZH | Entwurf von Hugweb",
  description:
    "Entwurf einer modernen Website für die Garage im Winkel AG in Erlenbach: Reparaturen von Oldtimern und Veteranen, Ersatzteilbeschaffung, Fahrzeugverkauf und Beratung beim Oldtimer-Kauf.",
};

const ACCENT = "#d99a2b";
// Alle Bilder und Texte stammen von garageimwinkel.ch (Fotos: Jürg Pfenninger).
const U = "https://garageimwinkel.ch/wp-content/uploads/2022/02";
const IMG_HERO = `${U}/IMG_6065.png`;
const IMG_2 = `${U}/IMG_6067.png`;
const IMG_3 = `${U}/IMG_6069.png`;
// Bewusst OHNE erfundene Bildunterschriften: die Fotos stammen aus den
// Galerien der Kundenseite, was genau drauf ist, ist von hier nicht prüfbar.
const GAL = [`${U}/1.jpg`, `${U}/2.jpg`, `${U}/3.jpg`, `${U}/4.jpg`, `${U}/5.jpg`, `${U}/6.jpg`];

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-[family-name:var(--font-display)] font-extrabold uppercase tracking-tight text-white ${className}`}>
      Garage im <span style={{ color: ACCENT }}>Winkel</span>
    </span>
  );
}

// „Unsere Services" — 1:1 von garageimwinkel.ch
const services = [
  { icon: Wrench, title: "Reparaturen", desc: "Fachgerechte Instandsetzung — mit langjähriger Erfahrung." },
  { icon: Settings, title: "Wartungen", desc: "Damit Ihr Fahrzeug zuverlässig unterwegs bleibt." },
  { icon: PackageSearch, title: "Ersatzteilbeschaffung", desc: "Wir finden auch, was es nicht mehr an jeder Ecke gibt." },
  { icon: Award, title: "Oldtimer", desc: "Unsere Leidenschaft — Reparatur und Pflege klassischer Fahrzeuge." },
  { icon: Sparkles, title: "Veteranen", desc: "Erhalt und Betreuung von Veteranenfahrzeugen." },
  { icon: Car, title: "Spezielle Fahrzeuge", desc: "Auch für das Aussergewöhnliche sind wir die richtige Adresse." },
  { icon: HandCoins, title: "Beratung & Unterstützung", desc: "Beim Kauf oder Verkauf von Oldtimern stehen wir Ihnen zur Seite." },
  { icon: Car, title: "Fahrzeugverkauf", desc: "Neuwagen und Occasionsfahrzeuge — individuell beraten." },
];

const nav = [
  { label: "Garage", href: "#garage" },
  { label: "Services", href: "#services" },
  { label: "Fahrzeugverkauf", href: "#verkauf" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function GarageImWinkelDemo() {
  return (
    <>
      <div className="bg-neutral-900 text-white text-xs py-2 text-center">
        Unverbindlicher Entwurf von <Link href="/" className="underline font-medium">Hugweb</Link>
        <Link href="/#demos" className="ml-4 inline-flex items-center gap-1 opacity-80 hover:opacity-100">
          <ArrowLeft className="h-3 w-3" /> Zurück
        </Link>
      </div>

      <div className={`${display.variable} ${body.variable} font-[family-name:var(--font-body)] bg-[#0a0a0b] text-neutral-200`}>
        {/* Header — transparent über Hero */}
        <header className="absolute inset-x-0 top-8 z-40">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
            <Wordmark className="text-lg md:text-xl" />
            <nav className="hidden lg:flex items-center gap-9 text-sm font-medium text-white/75">
              {nav.map((n) => (
                <a key={n.label} href={n.href} className="hover:text-white transition">{n.label}</a>
              ))}
            </nav>
            <a href="tel:0794210930" className="hidden sm:inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-black" style={{ borderColor: ACCENT }}>
              079 421 09 30 <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="relative isolate min-h-[calc(100svh-2rem)] overflow-hidden">
          <img src={IMG_HERO} alt="Garage im Winkel AG" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-black/60 to-black/50" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/85 to-transparent" />
          <div className="pointer-events-none absolute -right-40 top-1/4 h-[36rem] w-[36rem] rounded-full opacity-25 blur-3xl animate-pulse [animation-duration:6s]" style={{ background: `radial-gradient(circle, ${ACCENT}, transparent 65%)` }} />

          <div className="relative mx-auto flex min-h-[calc(100svh-2rem)] w-full max-w-6xl flex-col px-6 pt-24 pb-6">
            <div className="flex flex-1 flex-col justify-center">
              <Reveal>
                <div className="text-xs font-semibold uppercase tracking-[0.35em]" style={{ color: ACCENT }}>
                  Erlenbach ZH · seit vielen Jahren
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-5xl lg:text-6xl font-extrabold leading-[1.03] tracking-tight text-white">
                  Oldtimer sind<br />unsere <span style={{ color: ACCENT }}>Leidenschaft.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-5 max-w-xl text-base lg:text-lg text-white/70 leading-relaxed">
                  Wir bieten mit langjähriger Erfahrung Reparaturen von Oldtimern, Verkauf von Neuwagen und Occasionsfahrzeugen sowie eine individuelle Kundenbetreuung.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-7 flex flex-col sm:flex-row gap-4">
                  <a href="tel:0794210930" className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-black transition hover:opacity-90" style={{ backgroundColor: ACCENT }}>
                    <Phone className="h-4 w-4" /> 079 421 09 30
                  </a>
                  <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white hover:bg-white/10 transition">
                    Unsere Services
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.4}>
              <div className="mt-10 rounded-2xl border border-white/10 bg-[#131211]/90 backdrop-blur shadow-2xl">
                <div className="grid grid-cols-2 md:grid-cols-4 divide-y divide-white/10 md:divide-y-0 md:divide-x">
                  {[
                    { k: "Oldtimer", v: "& Veteranen" },
                    { k: "Alle Marken", v: "Reparatur & Wartung" },
                    { k: "Ersatzteile", v: "wir beschaffen sie" },
                    { k: "Erlenbach ZH", v: "Seestrasse 137" },
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

        {/* Garage */}
        <section id="garage" className="pt-20 md:pt-24 pb-24 md:pb-28">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-12 gap-10 items-end">
            <Reveal className="md:col-span-7">
              <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: ACCENT }}>Die Garage</div>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold leading-tight text-white">
                Garage im Winkel AG
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-5">
              <p className="text-lg text-white/60 leading-relaxed">
                Reparaturen, Wartungen und Ersatzteilbeschaffung — für Oldtimer, Veteranen und spezielle Fahrzeuge. Dazu Beratung und Unterstützung beim Kauf oder Verkauf. Persönlich betreut, in Erlenbach am Zürichsee.
              </p>
            </Reveal>
          </div>

          {/* Zitat von der Kundenseite */}
          <div className="mt-16 max-w-4xl mx-auto px-6">
            <Reveal>
              <figure className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
                <Quote className="h-7 w-7" strokeWidth={1.5} style={{ color: ACCENT }} />
                <blockquote className="mt-5 font-[family-name:var(--font-display)] text-lg md:text-xl leading-relaxed text-white/85">
                  Am Anfang war das Benzin und der Vergaser. Dann schuf Gott den Motor und die Karosserie, die Hupe und das Verkehrslicht. Dann betrachtete er sein Werk und sah, dass es nicht genug war. Darum schuf er noch das Halteverbot und den Verkehrspolizisten, und als dies alles geschaffen war, stieg Satan aus der Hölle empor und schuf die Parkplätze.
                </blockquote>
                <figcaption className="mt-5 text-sm text-white/45">Ephraim Kishon (1924–2005), israelischer Schriftsteller und Satiriker</figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="relative py-24 md:py-32 border-y border-white/10 bg-[#070707] overflow-hidden">
          <div className="pointer-events-none absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full opacity-20 blur-3xl" style={{ background: `radial-gradient(circle, ${ACCENT}, transparent 65%)` }} />
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-8 items-end">
              <Reveal className="md:col-span-7">
                <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: ACCENT }}>Services</div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-white">Alles rund um Ihr Fahrzeug</h2>
              </Reveal>
              <Reveal delay={0.1} className="md:col-span-5">
                <p className="text-white/60 leading-relaxed">
                  Vom Service am Alltagsauto bis zur Restauration eines Klassikers — und wenn ein Teil nicht mehr lieferbar scheint, suchen wir es für Sie.
                </p>
              </Reveal>
            </div>
            {/* Bild + Liste exakt gleich hoch */}
            <div className="mt-14 grid md:grid-cols-2 gap-12 lg:gap-16 items-stretch">
              <Reveal className="h-full">
                <div className="h-full min-h-[22rem] overflow-hidden rounded-2xl border border-white/10">
                  <img src={IMG_2} alt="Aus der Werkstatt" className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]" />
                </div>
              </Reveal>
              <div className="divide-y divide-white/10">
                {services.map((s, i) => (
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
          </div>
        </section>

        {/* Galerie */}
        <section id="galerie" className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: ACCENT }}>Einblick</div>
                  <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-white">Aus unserer Garage</h2>
                </div>
                <a href="#kontakt" className="text-sm font-semibold hover:opacity-80 transition" style={{ color: ACCENT }}>Termin vereinbaren →</a>
              </div>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {GAL.map((img, i) => (
                <Reveal key={img} delay={(i % 3) * 0.07}>
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                    <img src={img} alt="Garage im Winkel AG" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent transition group-hover:from-black/10" />
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-4 text-xs text-white/35">Fotos: Jürg Pfenninger · Bilder von garageimwinkel.ch</p>
          </div>
        </section>

        {/* Fahrzeugverkauf */}
        <section id="verkauf" className="border-y border-white/10 bg-[#070707] py-24 md:py-28">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: ACCENT }}>Fahrzeugverkauf</div>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-white">Neuwagen, Occasionen — und Klassiker.</h2>
              <p className="mt-6 text-white/60 leading-relaxed">
                Wir verkaufen Neuwagen und Occasionsfahrzeuge und unterstützen Sie beim Kauf oder Verkauf von Oldtimern. Sagen Sie uns, was Sie suchen — wir beraten Sie persönlich.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="tel:0794210930" className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-black transition hover:opacity-90" style={{ backgroundColor: ACCENT }}>
                  <Phone className="h-4 w-4" /> Jetzt anrufen
                </a>
                <a href="#kontakt" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 font-semibold text-white hover:bg-white/10 transition">
                  Fahrzeug anfragen <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img src={IMG_3} alt="Fahrzeugverkauf" className="h-[24rem] w-full object-cover transition duration-700 hover:scale-[1.03]" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: ACCENT }}>Kontakt & Standort</div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-white">Am liebsten telefonisch.</h2>
                <p className="mt-6 text-white/60 leading-relaxed">
                  Unser E-Mail-Postfach wird nur gelegentlich geprüft — bitte kontaktieren Sie uns per Telefon.
                </p>
                <div className="mt-10 space-y-5 text-white/80">
                  <div className="flex items-center gap-4"><Phone className="h-5 w-5" style={{ color: ACCENT }} /><a href="tel:0794210930" className="hover:underline">079 421 09 30</a></div>
                  <div className="flex items-center gap-4"><Phone className="h-5 w-5" style={{ color: ACCENT }} /><a href="tel:0449234325" className="hover:underline">044 923 43 25</a></div>
                  <div className="flex items-center gap-4"><Mail className="h-5 w-5" style={{ color: ACCENT }} /><span>info@garageimwinkel.ch</span></div>
                  <div className="flex items-start gap-4"><MapPin className="mt-0.5 h-5 w-5" style={{ color: ACCENT }} /><span>Garage im Winkel AG<br />Seestrasse 137, 8703 Erlenbach</span></div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <form className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 space-y-4">
                <div><label className="mb-2 block text-sm text-white/50">Name</label><input className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white transition focus:border-[#d99a2b] focus:outline-none" /></div>
                <div><label className="mb-2 block text-sm text-white/50">Telefon</label><input className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white transition focus:border-[#d99a2b] focus:outline-none" /></div>
                <div><label className="mb-2 block text-sm text-white/50">Ihr Fahrzeug / Ihr Anliegen</label><textarea rows={4} className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white transition focus:border-[#d99a2b] focus:outline-none" /></div>
                <button type="button" className="w-full rounded-full px-6 py-3 font-semibold text-black transition hover:opacity-90" style={{ backgroundColor: ACCENT }}>Rückruf anfordern</button>
                <p className="text-xs text-white/35">Wir melden uns telefonisch bei Ihnen zurück.</p>
              </form>
            </Reveal>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-[#0a0a0b]">
          <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col sm:flex-row items-center justify-between gap-6">
            <Wordmark className="text-base md:text-lg" />
            <span className="text-sm text-white/40">© {new Date().getFullYear()} Garage im Winkel AG · Seestrasse 137, 8703 Erlenbach</span>
            <span className="text-sm text-white/40">Entwurf von <Link href="/" className="underline hover:text-white">Hugweb</Link></span>
          </div>
        </footer>
      </div>
    </>
  );
}
