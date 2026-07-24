import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Beef,
  Flame,
  UtensilsCrossed,
  Sparkles,
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
  title: "Land-Metzgli — Metzgerei & Partyservice, Lostorf SO | Entwurf von Hugweb",
  description:
    "Entwurf einer modernen Website für das Land-Metzgli in Lostorf: Schweizer Metzgerei-Qualität vom Land, Grilladen, Hausmacher-Spezialitäten und Partyservice.",
};

const ACCENT = "#c8503c";
// Echte Fotos von landmetzgli.ch
const CDN = "https://le-de.cdn-website.com/b692d32bd2004f67ab3c2b9bad4329c0/dms3rep/multi/opt";
const IMG_HERO = `${CDN}/IMG_6698-1920w.jpg`;
const IMG_1 = `${CDN}/20260619_094947-1920w.jpg`;
const IMG_2 = `${CDN}/20260619_095012-1920w.jpg`;
const IMG_3 = `${CDN}/20260619_095051-1920w.jpg`;
const IMG_4 = `${CDN}/20260619_095126-1920w.jpg`;
const IMG_5 = `${CDN}/20260619_095147-1920w.jpg`;

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-[family-name:var(--font-display)] font-semibold tracking-tight text-white ${className}`}>
      Land<span style={{ color: ACCENT }}>-Metzgli</span>
    </span>
  );
}

const leistungen = [
  { icon: Beef, title: "Frischfleisch vom Land", desc: "Schweizer Qualität aus der Region — kurze Wege, volle Frische." },
  { icon: Flame, title: "Grilladen", desc: "Spiesse, Würste und Marinaden, fixfertig für den Grill." },
  { icon: Sparkles, title: "Hausmacher-Spezialitäten", desc: "Nach eigenen Rezepten hergestellt, in echter Handarbeit." },
  { icon: UtensilsCrossed, title: "Partyservice & Catering", desc: "Vom Apéro bis zum Fest — wir richten es her." },
];

const galerie = [
  { img: IMG_1, label: "Frischfleisch", ort: "täglich frisch in der Theke", span: "md:col-span-5", h: "h-[26rem]" },
  { img: IMG_2, label: "Hausmacher", ort: "nach eigenen Rezepten", span: "md:col-span-7", h: "h-[26rem]" },
  { img: IMG_3, label: "Grilladen", ort: "Spiesse & Würste", span: "md:col-span-7", h: "h-80" },
  { img: IMG_5, label: "Im Laden", ort: "Lostorf SO", span: "md:col-span-5", h: "h-80" },
];

const prozess = [
  { n: "01", t: "Anrufen oder schreiben", d: "Sagen Sie uns, was Sie brauchen — und für wann." },
  { n: "02", t: "Wir richten her", d: "Frisch zugeschnitten, mariniert oder als fertige Platte." },
  { n: "03", t: "Abholen", d: "Zur vereinbarten Zeit bei uns in Lostorf bereit." },
  { n: "04", t: "Geniessen", d: "Ob Grillabend oder Fest — Sie müssen nur noch auftischen." },
];

const nav = [
  { label: "Metzgerei", href: "#firma" },
  { label: "Angebot", href: "#leistungen" },
  { label: "Bestellen", href: "#ablauf" },
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

      <div className={`${display.variable} ${body.variable} font-[family-name:var(--font-body)] bg-[#100c0b] text-neutral-200`}>
        {/* Header — transparent über Hero */}
        <header className="absolute inset-x-0 top-8 z-40">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
            <Wordmark className="text-xl" />
            <nav className="hidden lg:flex items-center gap-9 text-sm font-medium text-white/75">
              {nav.map((n) => (
                <a key={n.label} href={n.href} className="hover:text-white transition">{n.label}</a>
              ))}
            </nav>
            <a href="#kontakt" className="hidden sm:inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-black" style={{ borderColor: ACCENT }}>
              Bestellen <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="relative isolate min-h-[calc(100svh-2rem)] overflow-hidden">
          <img src={IMG_HERO} alt="Land-Metzgli" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#100c0b] via-black/60 to-black/45" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#100c0b] via-[#100c0b]/85 to-transparent" />
          <div className="pointer-events-none absolute -right-40 top-1/4 h-[36rem] w-[36rem] rounded-full opacity-30 blur-3xl animate-pulse [animation-duration:6s]" style={{ background: `radial-gradient(circle, ${ACCENT}, transparent 65%)` }} />

          <div className="relative mx-auto flex min-h-[calc(100svh-2rem)] w-full max-w-6xl flex-col px-6 pt-24 pb-6">
            <div className="flex flex-1 flex-col justify-center">
              <Reveal>
                <div className="text-xs font-semibold uppercase tracking-[0.35em]" style={{ color: ACCENT }}>
                  Lostorf SO · Dorfmetzgerei
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-white">
                  Qualität<br />vom <span style={{ color: ACCENT }} className="italic">Land.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-5 max-w-xl text-base lg:text-lg text-white/70 leading-relaxed">
                  Frisches Fleisch, hausgemachte Spezialitäten und ein Partyservice, der jedes Fest rettet — aus einer kleinen Metzgerei mit viel Handarbeit.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-7 flex flex-col sm:flex-row gap-4">
                  <a href="#kontakt" className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-white transition hover:opacity-90" style={{ backgroundColor: ACCENT }}>
                    Jetzt bestellen <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
                  </a>
                  <a href="#leistungen" className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white hover:bg-white/10 transition">
                    Unser Angebot
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.4}>
              <div className="mt-10 rounded-2xl border border-white/10 bg-[#1a1210]/90 backdrop-blur shadow-2xl">
                <div className="grid grid-cols-2 md:grid-cols-4 divide-y divide-white/10 md:divide-y-0 md:divide-x">
                  {[
                    { k: "Vom Land", v: "regionale Qualität" },
                    { k: "Hausmacher", v: "eigene Rezepte" },
                    { k: "Partyservice", v: "für jeden Anlass" },
                    { k: "Di–So", v: "10:00–19:00" },
                  ].map((s) => (
                    <div key={s.v} className="px-5 py-4 md:py-5 text-center">
                      <div className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-semibold" style={{ color: ACCENT }}>{s.k}</div>
                      <div className="mt-1 text-[11px] uppercase tracking-wider text-white/50">{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Firma */}
        <section id="firma" className="pt-20 md:pt-24 pb-24 md:pb-28">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-12 gap-10 items-end">
            <Reveal className="md:col-span-7">
              <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: ACCENT }}>Die Metzgerei</div>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold leading-tight text-white">
                Eine Dorfmetzgerei, wie man sie kaum noch findet.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-5">
              <p className="text-lg text-white/60 leading-relaxed">
                Beim Land-Metzgli in Lostorf kommt Qualität vom Land direkt zu Ihnen — ehrlich, regional und ohne Schnickschnack. In der Hauptsaison frisch im Laden, das ganze Jahr über auf Bestellung.
              </p>
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
                  <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold text-white">Aus unserer Metzgerei</h2>
                </div>
                <a href="#kontakt" className="text-sm font-semibold hover:opacity-80 transition" style={{ color: ACCENT }}>Bestellung aufgeben →</a>
              </div>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-4">
              {galerie.map((r, i) => (
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
            <p className="mt-4 text-xs text-white/35">Ihre eigenen Fotos — jederzeit austauschbar.</p>
          </div>
        </section>

        {/* Angebot — Liste links, grosses Bild rechts (sticky) */}
        <section id="leistungen" className="relative py-24 md:py-32 border-y border-white/10 bg-[#0a0706] overflow-hidden">
          <div className="pointer-events-none absolute -right-40 top-0 h-[30rem] w-[30rem] rounded-full opacity-20 blur-3xl" style={{ background: `radial-gradient(circle, ${ACCENT}, transparent 65%)` }} />
          <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <Reveal>
                <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: ACCENT }}>Angebot</div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold text-white">Alles aus einer Hand.</h2>
                <p className="mt-6 text-white/60 leading-relaxed">
                  Vom Sonntagsbraten bis zum Grillfest für dreissig Leute — sagen Sie uns, was Sie brauchen, und wir richten es her.
                </p>
              </Reveal>
              <div className="mt-8 divide-y divide-white/10">
                {leistungen.map((s, i) => (
                  <Reveal key={s.title} delay={i * 0.06}>
                    <div className="group flex items-start gap-5 py-6">
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
            <Reveal delay={0.1}>
              <div className="md:sticky md:top-24">
                <div className="overflow-hidden rounded-2xl border border-white/10">
                  <img src={IMG_4} alt="Aus der Metzgerei" className="h-[52vh] min-h-80 w-full object-cover transition duration-700 hover:scale-[1.03]" />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Ablauf */}
        <section id="ablauf" className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: ACCENT }}>Bestellen</div>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold text-white">In vier Schritten zum Fest.</h2>
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
        <section id="kontakt" className="py-24 md:py-32 border-t border-white/10 bg-[#0a0706]">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: ACCENT }}>Kontakt</div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold text-white">Bestellen & vorbeikommen.</h2>
                <p className="mt-6 text-white/60 leading-relaxed">Schreiben oder rufen Sie uns an — gerne nehmen wir Ihre Bestellung entgegen.</p>
                <div className="mt-10 space-y-5 text-white/80">
                  <div className="flex items-start gap-4"><MapPin className="mt-0.5 h-5 w-5" style={{ color: ACCENT }} /><span>Land-Metzgli<br />Neue Badstrasse 1, 4654 Lostorf</span></div>
                  <div className="flex items-center gap-4"><Phone className="h-5 w-5" style={{ color: ACCENT }} /><span>062 298 17 52</span></div>
                  <div className="flex items-center gap-4"><Mail className="h-5 w-5" style={{ color: ACCENT }} /><span>landmetzgli@gmail.com</span></div>
                  <div className="flex items-start gap-4"><Clock className="mt-0.5 h-5 w-5" style={{ color: ACCENT }} /><span>Di–So 10:00–19:00 (Hauptsaison)<br />übrige Monate auf telefonische Bestellung</span></div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <form className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 space-y-4">
                <div><label className="mb-2 block text-sm text-white/50">Name</label><input className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white transition focus:border-[#c8503c] focus:outline-none" /></div>
                <div><label className="mb-2 block text-sm text-white/50">E-Mail oder Telefon</label><input className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white transition focus:border-[#c8503c] focus:outline-none" /></div>
                <div><label className="mb-2 block text-sm text-white/50">Ihre Bestellung / Anfrage</label><textarea rows={4} className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white transition focus:border-[#c8503c] focus:outline-none" /></div>
                <button type="button" className="w-full rounded-full px-6 py-3 font-semibold text-white transition hover:opacity-90" style={{ backgroundColor: ACCENT }}>Bestellung senden</button>
              </form>
            </Reveal>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-[#100c0b]">
          <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col sm:flex-row items-center justify-between gap-6">
            <Wordmark className="text-lg" />
            <span className="text-sm text-white/40">© {new Date().getFullYear()} Land-Metzgli · Lostorf</span>
            <span className="text-sm text-white/40">Entwurf von <Link href="/" className="underline hover:text-white">Hugweb</Link></span>
          </div>
        </footer>
      </div>
    </>
  );
}
