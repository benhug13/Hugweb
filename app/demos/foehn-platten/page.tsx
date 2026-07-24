import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
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
import { Fraunces, Inter } from "next/font/google";
import Reveal from "@/components/Reveal";

const display = Fraunces({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });

export const metadata = {
  title: "FÖHN PLATTEN AG — Plattenarbeiten mit Qualität, Brunnen SZ | Entwurf von Hugweb",
  description:
    "Entwurf einer modernen Website für die FÖHN PLATTEN AG: Plattenbeläge, Naturstein, Feinsteinzeug, Grossformat und Plattenhandel — seit über 50 Jahren.",
};

const GOLD = "#c9a76b";
// Echte Fotos von foehnplatten.ch + Platzhalter (Stock) — im finalen Projekt
// durch eigene Referenzfotos ersetzbar.
const IMG_NATURSTEIN = "https://www.foehnplatten.ch/wp/wp-content/uploads/2020/07/Beitrag_Naturstein.png";
const IMG_KERAMIK = "https://www.foehnplatten.ch/wp/wp-content/uploads/2020/07/Beitrag_FStZ.png";
const IMG_STOCK1 = "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1400&q=80&auto=format&fit=crop";
const IMG_STOCK2 = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80&auto=format&fit=crop";

// Wortmarke statt invertiertem Logo-PNG (das wurde auf dunkel unscharf/undeutlich).
function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-[family-name:var(--font-display)] font-semibold tracking-tight text-white ${className}`}>
      FÖHN <span style={{ color: GOLD }}>PLATTEN</span>
    </span>
  );
}

const leistungen = [
  { icon: Layers, title: "Plattenbeläge", desc: "Boden & Wand, sauber verlegt." },
  { icon: Grid3x3, title: "Keramik & Feinsteinzeug", desc: "Robust, pflegeleicht, langlebig." },
  { icon: Mountain, title: "Naturstein", desc: "Marmor, Granit, Quarzit." },
  { icon: Gem, title: "Kunststein & Mosaik", desc: "Präzise Detailarbeit." },
  { icon: Sun, title: "Balkon & Terrasse", desc: "Wetterfeste Aussenbeläge." },
  { icon: Maximize, title: "Grossformat & XXL", desc: "Grossflächen, fugenarm." },
  { icon: Sparkles, title: "Reinigung & Pflege", desc: "Fachgerechte Pflegetechnik." },
  { icon: Store, title: "Plattenhandel & Ausstellung", desc: "Beratung im Showroom." },
];

const referenzen = [
  { img: IMG_NATURSTEIN, label: "Naturstein", ort: "Marmor · Granit · Quarzit", span: "md:col-span-7", h: "h-[26rem]" },
  { img: IMG_KERAMIK, label: "Feinsteinzeug", ort: "Boden & Wand", span: "md:col-span-5", h: "h-[26rem]" },
  { img: IMG_STOCK2, label: "Badezimmer", ort: "Grossformat", span: "md:col-span-5", h: "h-80" },
  { img: IMG_STOCK1, label: "Terrasse", ort: "Aussenbereich", span: "md:col-span-7", h: "h-80" },
];

const prozess = [
  { n: "01", t: "Beratung", d: "Wir schauen uns Ihr Projekt an und beraten Sie im Showroom." },
  { n: "02", t: "Aufmass & Offerte", d: "Präzises Aufmass, transparente Offerte ohne Überraschungen." },
  { n: "03", t: "Verlegung", d: "Sauberes Handwerk vom eingespielten Team, termingerecht." },
  { n: "04", t: "Übergabe", d: "Endreinigung und Übergabe — bereit zum Geniessen." },
];

const nav = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "Ablauf", href: "#ablauf" },
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

      <div className={`${display.variable} ${body.variable} font-[family-name:var(--font-body)] bg-[#0e0d0b] text-neutral-200`}>
        {/* Header — transparent über Hero */}
        <header className="absolute inset-x-0 top-8 z-40">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
            <Wordmark className="text-xl" />
            <nav className="hidden lg:flex items-center gap-9 text-sm font-medium text-white/75">
              {nav.map((n) => (
                <a key={n.label} href={n.href} className="hover:text-white transition">{n.label}</a>
              ))}
            </nav>
            <a href="#kontakt" className="hidden sm:inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-black" style={{ borderColor: GOLD }}>
              Beratung <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </header>

        {/* Hero — cinematic, Inhalt im unteren Drittel (kein Abschneiden) */}
        <section className="relative isolate min-h-screen overflow-hidden">
          <img src={IMG_NATURSTEIN} alt="Naturstein-Plattenarbeit" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0b] via-black/55 to-black/40" />
          {/* animierter Gold-Glow */}
          <div className="pointer-events-none absolute -right-40 top-1/4 h-[36rem] w-[36rem] rounded-full opacity-30 blur-3xl animate-pulse [animation-duration:6s]" style={{ background: `radial-gradient(circle, ${GOLD}, transparent 65%)` }} />

          <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 pt-28 pb-28">
            <Reveal>
              <div className="text-xs font-semibold uppercase tracking-[0.35em]" style={{ color: GOLD }}>
                Brunnen SZ · seit über 50 Jahren
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-5 max-w-3xl font-[family-name:var(--font-display)] text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight text-white">
                Plattenarbeiten,<br />die <span style={{ color: GOLD }} className="italic">bleiben.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-7 max-w-xl text-lg text-white/70 leading-relaxed">
                Ihr kompetenter Partner für Plattenarbeiten — von der ersten Beratung bis zum letzten Fugenschnitt. Boden, Wand, Naturstein und Grossformat, in der gesamten Schweiz.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <a href="#kontakt" className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-black transition hover:opacity-90" style={{ backgroundColor: GOLD }}>
                  Projekt anfragen <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
                </a>
                <a href="#referenzen" className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white hover:bg-white/10 transition">
                  Arbeiten ansehen
                </a>
              </div>
            </Reveal>
          </div>

        </section>

        {/* Stat-Leiste — über den Hero-Rand gezogen */}
        <div className="relative z-10 -mt-14 md:-mt-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-2xl border border-white/10 bg-[#16130f]/95 backdrop-blur shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-y divide-white/10 md:divide-y-0 md:divide-x">
                {[
                  { k: "50+", v: "Jahre Erfahrung" },
                  { k: "~65", v: "Mitarbeitende" },
                  { k: "CH-weit", v: "im Einsatz" },
                  { k: "Lehrbetrieb", v: "mit Nachwuchs" },
                ].map((s) => (
                  <div key={s.v} className="px-6 py-6 text-center">
                    <div className="font-[family-name:var(--font-display)] text-3xl font-semibold" style={{ color: GOLD }}>{s.k}</div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-white/50">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Intro */}
        <section className="py-24 md:py-28">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-12 gap-10 items-end">
            <Reveal className="md:col-span-7">
              <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: GOLD }}>Die Firma</div>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold leading-tight text-white">
                Handwerk, das seit einem halben Jahrhundert Bestand hat.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-5">
              <p className="text-lg text-white/60 leading-relaxed">
                Die FÖHN PLATTEN AG führt Plattenarbeiten in der gesamten Schweiz aus. Ein eingespieltes Team mit langjähriger Betriebstreue — für Qualität, Sauberkeit und Termintreue, vom privaten Bad bis zur Grossbaustelle.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Referenzen — Bildgalerie */}
        <section id="referenzen" className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: GOLD }}>Referenzen</div>
                  <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold text-white">Ausgewählte Arbeiten</h2>
                </div>
                <a href="#kontakt" className="text-sm font-semibold hover:opacity-80 transition" style={{ color: GOLD }}>Eigenes Projekt besprechen →</a>
              </div>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-4">
              {referenzen.map((r, i) => (
                <Reveal key={r.label} delay={(i % 2) * 0.08} className={r.span}>
                  <div className={`group relative ${r.h} overflow-hidden rounded-2xl border border-white/10`}>
                    <img src={r.img} alt={r.label} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <div className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">{r.label}</div>
                      <div className="text-sm text-white/60">{r.ort}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-4 text-xs text-white/35">Beispielbilder — im finalen Projekt durch Ihre eigenen Referenzfotos ersetzbar.</p>
          </div>
        </section>

        {/* Leistungen — 2-Spalten (Bild + dichte Liste), nicht leer */}
        <section id="leistungen" className="relative py-24 md:py-32 border-y border-white/10 bg-[#080706] overflow-hidden">
          <div className="pointer-events-none absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full opacity-20 blur-3xl" style={{ background: `radial-gradient(circle, ${GOLD}, transparent 65%)` }} />
          <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            <Reveal>
              <div className="md:sticky md:top-10">
                <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: GOLD }}>Leistungen</div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold text-white">Alles rund um die Platte.</h2>
                <p className="mt-6 text-white/60 leading-relaxed">
                  Von der einzelnen Fliese bis zur XXL-Grossfläche: Wir übernehmen jedes Plattenprojekt — drinnen wie draussen, in Keramik, Naturstein oder Mosaik.
                </p>
                <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
                  <img src={IMG_KERAMIK} alt="Feinsteinzeug-Arbeit" className="h-64 w-full object-cover" />
                </div>
              </div>
            </Reveal>
            <div className="divide-y divide-white/10">
              {leistungen.map((s, i) => (
                <Reveal key={s.title} delay={(i % 4) * 0.05}>
                  <div className="group flex items-start gap-5 py-5">
                    <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition group-hover:bg-white/[0.07]">
                      <s.icon className="h-5 w-5" strokeWidth={1.6} style={{ color: GOLD }} />
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
              <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: GOLD }}>Ablauf</div>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold text-white">Von der Idee zur fertigen Fläche.</h2>
            </Reveal>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-8">
              {prozess.map((p, i) => (
                <Reveal key={p.n} delay={i * 0.06}>
                  <div className="font-[family-name:var(--font-display)] text-5xl font-semibold" style={{ color: GOLD }}>{p.n}</div>
                  <div className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold text-white">{p.t}</div>
                  <p className="mt-2 text-sm text-white/55 leading-relaxed">{p.d}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="py-24 md:py-32 border-t border-white/10 bg-[#080706]">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: GOLD }}>Kontakt</div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold text-white">Wir beraten Sie gerne.</h2>
                <p className="mt-6 text-white/60 leading-relaxed">Schreiben Sie uns kurz Ihr Projekt — Sie erhalten eine unverbindliche Offerte.</p>
                <div className="mt-10 space-y-5 text-white/80">
                  <div className="flex items-start gap-4"><MapPin className="mt-0.5 h-5 w-5" style={{ color: GOLD }} /><span>FÖHN PLATTEN AG<br />Gätzlistrasse 2, 6440 Brunnen</span></div>
                  <div className="flex items-center gap-4"><Phone className="h-5 w-5" style={{ color: GOLD }} /><span>+41 41 825 61 61</span></div>
                  <div className="flex items-center gap-4"><Mail className="h-5 w-5" style={{ color: GOLD }} /><span>info@foehnplatten.ch</span></div>
                  <div className="flex items-start gap-4"><Clock className="mt-0.5 h-5 w-5" style={{ color: GOLD }} /><span>Mo–Fr 8:00–11:30 · 13:30–17:00</span></div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <form className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 space-y-4">
                <div><label className="mb-2 block text-sm text-white/50">Name</label><input className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white transition focus:border-[#c9a76b] focus:outline-none" /></div>
                <div><label className="mb-2 block text-sm text-white/50">E-Mail oder Telefon</label><input className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white transition focus:border-[#c9a76b] focus:outline-none" /></div>
                <div><label className="mb-2 block text-sm text-white/50">Ihr Projekt</label><textarea rows={4} className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white transition focus:border-[#c9a76b] focus:outline-none" /></div>
                <button type="button" className="w-full rounded-full px-6 py-3 font-semibold text-black transition hover:opacity-90" style={{ backgroundColor: GOLD }}>Offerte anfragen</button>
              </form>
            </Reveal>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-[#0e0d0b]">
          <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col sm:flex-row items-center justify-between gap-6">
            <Wordmark className="text-lg" />
            <span className="text-sm text-white/40">© {new Date().getFullYear()} FÖHN PLATTEN AG · Brunnen</span>
            <span className="text-sm text-white/40">Entwurf von <Link href="/" className="underline hover:text-white">Hugweb</Link></span>
          </div>
        </footer>
      </div>
    </>
  );
}
