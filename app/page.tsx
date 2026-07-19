import Link from "next/link";
import {
  ArrowRight,
  Check,
  Zap,
  Smartphone,
  Search,
  Shield,
  Plus,
  Minus,
  Mail,
  Phone,
  MessageCircle,
  Sparkles,
  Pencil,
  Rocket,
  X as XIcon,
} from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Tilt from "@/components/Tilt";
import Starfield from "@/components/Starfield";
import HeroWordmark from "@/components/HeroWordmark";

export default function Home() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden text-white pt-32 pb-32 md:pt-48 md:pb-48">
        <Starfield />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Verfügbar für neue Projekte
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05]">
              Webseiten, die
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                  verkaufen.
                </span>
                <svg
                  className="absolute -bottom-2 md:-bottom-3 left-0 w-full"
                  height="14"
                  viewBox="0 0 300 14"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    className="underline-draw"
                    d="M3 9 C 70 3, 150 3, 297 7"
                    stroke="#818cf8"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-white/70 leading-relaxed">
              Wir bauen Webseiten, die Kunden gewinnen — nicht nur gut aussehen.
              Festpreis ab 99 CHF. Online in 14 Tagen. Kein Baukasten, kein
              Abo-Zwang.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#kontakt"
                className="group inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 font-medium hover:bg-white/90 transition"
              >
                Kostenlose Beratung
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
              </a>
              <a
                href="#demos"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-medium text-white hover:bg-white/5 transition"
              >
                Demos ansehen
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Überschrift — Buchstaben fliegen beim Scrollen herein */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#1a1840_0%,#13112b_45%,#0a0a0a_100%)] pt-12 pb-28 md:pt-16 md:pb-44">
        <Starfield />
        <HeroWordmark />
      </section>

      {/* Leistungen */}
      <section id="leistungen" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="max-w-2xl">
              <div className="text-[11px] font-mono text-indigo-600 uppercase tracking-[0.25em]">
                Was wir machen
              </div>
              <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
                Alles drin. Nichts versteckt.
              </h2>
              <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
                Sie bekommen eine komplette Webseite, die schnell lädt, auf
                jedem Gerät gut aussieht und bei Google gefunden wird.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Zap,
                title: "Rasend schnell",
                text: "Unter einer Sekunde Ladezeit — Google liebt das, Ihre Kunden auch.",
              },
              {
                icon: Smartphone,
                title: "Mobil zuerst",
                text: "Über 70% Ihrer Besucher kommen vom Handy. Wir designen dafür.",
              },
              {
                icon: Search,
                title: "SEO optimiert",
                text: "Sauberer Code, strukturierte Daten, schnelle Ladezeiten.",
              },
              {
                icon: Shield,
                title: "DSGVO konform",
                text: "Impressum, Datenschutz, Cookie-Banner — alles dabei.",
              },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-black/5 bg-[#f0ede4] p-7 hover:bg-neutral-100 transition">
                  <f.icon className="h-6 w-6" />
                  <div className="mt-6 text-lg font-semibold">{f.title}</div>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                    {f.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Demos */}
      <section id="demos" className="py-24 md:py-32 bg-[#f0ede4]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="max-w-2xl">
              <div className="text-[11px] font-mono text-indigo-600 uppercase tracking-[0.25em]">
                Live-Demos
              </div>
              <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
                So könnte Ihre Seite aussehen.
              </h2>
              <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
                Sechs Beispiele aus verschiedenen Branchen — voll
                funktions&shy;fähig, klickbar, in unter 2 Sekunden geladen.
                Klicken Sie rein.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                href: "/demos/barber",
                label: "Barbershop",
                title: "Nordcuts",
                desc: "Moderner Barbershop mit Online-Terminbuchung.",
                gradient: "from-amber-900 via-neutral-900 to-black",
              },
              {
                href: "/demos/restaurant",
                label: "Restaurant",
                title: "Ostsee Stube",
                desc: "Restaurant-Seite mit Menü und Reservierung.",
                gradient: "from-rose-900 via-neutral-900 to-black",
              },
              {
                href: "/demos/zahnarzt",
                label: "Zahnarzt",
                title: "Klarweiss",
                desc: "Zahnarztpraxis mit Behandlungen und Online-Termin.",
                gradient: "from-teal-700 via-slate-800 to-slate-950",
              },
              {
                href: "/demos/anwalt",
                label: "Anwaltskanzlei",
                title: "Hofmann",
                desc: "Premium-Kanzlei mit Rechtsgebieten und Team.",
                gradient: "from-[#1a2238] via-[#0a1020] to-black",
              },
              {
                href: "/demos/fitness",
                label: "Fitness-Studio",
                title: "Pulse",
                desc: "Boutique-Strength-Studio mit Probetraining.",
                gradient: "from-[#ff5a3d] via-[#7a1f10] to-black",
              },
              {
                href: "/demos/maler",
                label: "Maler­betrieb",
                title: "Frischknecht",
                desc: "Familienbetrieb mit Offerte-Formular & Galerie.",
                gradient: "from-[#c44e2c] via-stone-700 to-stone-900",
              },
            ].map((d, i) => (
              <Reveal key={d.href} delay={i * 0.1}>
                <Tilt>
                <Link
                  href={d.href}
                  className="group block overflow-hidden rounded-3xl bg-black"
                >
                  <div
                    className={`aspect-[4/3] bg-gradient-to-br ${d.gradient} p-8 flex flex-col justify-between transition-transform duration-700 group-hover:scale-105`}
                  >
                    <div className="text-xs font-medium text-white/60 uppercase tracking-wider">
                      {d.label}
                    </div>
                    <div>
                      <div className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                        {d.title}
                      </div>
                      <p className="mt-2 text-white/70">{d.desc}</p>
                      <div className="mt-6 inline-flex items-center gap-2 text-white text-sm font-medium">
                        Demo ansehen
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                      </div>
                    </div>
                  </div>
                </Link>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vorher / Nachher */}
      <section id="vorher-nachher" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="max-w-2xl">
              <div className="text-[11px] font-mono text-indigo-600 uppercase tracking-[0.25em]">
                Vorher · Nachher
              </div>
              <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
                Der Unterschied, den Ihre Kunden sehen.
              </h2>
              <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
                Das ist eine typische SMB-Webseite von 2010 — und das was
                Hugweb daraus macht. Was würden Sie eher anrufen?
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
            <Reveal>
              <div className="relative">
                <div className="absolute -top-3 left-5 z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 text-red-700 text-xs font-medium px-3 py-1">
                    <XIcon className="h-3.5 w-3.5" />
                    Vorher
                  </span>
                </div>
                <div
                  className="rounded-2xl border border-stone-200 overflow-hidden bg-white aspect-[4/3] flex flex-col shadow-inner"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  <div className="flex items-center justify-between px-4 py-2 border-b border-stone-200 bg-stone-50 text-[9px] text-stone-500">
                    <span>Tel. 041 740 12 34 · info@maler-mueller.ch</span>
                    <span className="text-blue-600 underline cursor-pointer">
                      Kontaktformular
                    </span>
                  </div>
                  <div className="flex items-center justify-between px-4 py-2.5 border-b border-stone-300">
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-full bg-blue-700 grid place-items-center text-white font-bold text-[10px]">
                        M
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-stone-900 leading-tight">
                          Maler Müller AG
                        </div>
                        <div className="text-[7px] text-stone-500 italic">
                          Ihr Partner für Anstrich seit 1987
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2.5 text-[8px] text-stone-700">
                      <span>HOME</span>
                      <span>UNS</span>
                      <span>LEISTUNGEN</span>
                      <span>REFERENZEN</span>
                      <span>KONTAKT</span>
                    </div>
                  </div>
                  <div className="flex-1 grid grid-cols-5 gap-2 p-3">
                    <div
                      className="col-span-3 rounded-sm bg-cover bg-center grayscale-[20%] saturate-50"
                      style={{
                        backgroundImage:
                          "url('https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&q=70&auto=format&fit=crop')",
                      }}
                    />
                    <div className="col-span-2 flex flex-col">
                      <div className="text-[11px] font-bold text-stone-800 leading-tight mb-1">
                        Willkommen auf unserer Webseite
                      </div>
                      <div className="text-[8px] text-stone-600 leading-snug">
                        Wir sind Ihr zuverlässiger Maler­betrieb in der Region.
                        Seit 1987 bieten wir professionelle Maler­arbeiten zu
                        fairen Preisen. Kontaktieren Sie uns für eine
                        unverbindliche Offerte.
                      </div>
                      <div className="mt-2 text-[8px] text-blue-600 underline">
                        » mehr erfahren
                      </div>
                    </div>
                  </div>
                  <div className="bg-stone-100 border-t border-stone-200 px-4 py-2 text-[8px] text-stone-500 flex justify-between">
                    <span>© 2017 Maler Müller AG</span>
                    <span className="text-stone-400">
                      Webdesign · LocalWebStudio
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative">
                <div className="absolute -top-3 left-5 z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium px-3 py-1">
                    <Check className="h-3.5 w-3.5" />
                    Nachher · Hugweb
                  </span>
                </div>
                <Link
                  href="/demos/maler"
                  className="block rounded-2xl border-2 border-emerald-200 overflow-hidden bg-white aspect-[4/3] hover:shadow-2xl hover:shadow-emerald-100 transition group"
                >
                  <div className="h-full flex flex-col">
                    <div
                      className="flex-1 bg-cover bg-center relative"
                      style={{
                        backgroundImage:
                          "url('https://images.unsplash.com/photo-1717281234297-3def5ae3eee1?w=1200&q=80&auto=format&fit=crop')",
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
                      <div className="relative p-6 h-full flex flex-col justify-end">
                        <div className="text-xs font-medium text-[#c44e2c] uppercase tracking-wider">
                          Familienbetrieb seit 1962
                        </div>
                        <div className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-stone-900 leading-tight">
                          Sauber gemalt.
                          <br />
                          <span className="text-[#c44e2c]">
                            Sauber gearbeitet.
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white px-6 py-4 flex items-center justify-between border-t border-stone-100">
                      <div>
                        <div className="text-xs text-stone-500 uppercase tracking-wider">
                          Live-Demo
                        </div>
                        <div className="text-sm font-medium">
                          Frischknecht Malerei
                        </div>
                      </div>
                      <div className="text-sm text-emerald-700 font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Demo öffnen <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-12 text-center text-sm text-neutral-500">
              80 % der Schweizer KMUs haben Webseiten näher an „Vorher" als
              an „Nachher". Sie auch?
            </div>
          </Reveal>
        </div>
      </section>

      {/* Über mich */}
      <section id="ueber-mich" className="py-24 md:py-32 bg-[#f0ede4]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 shadow-2xl">
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="text-[10rem] font-light text-white/90 leading-none">
                      B
                    </span>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-black/60 backdrop-blur p-5 border border-white/10">
                    <div className="text-xs text-white/60 tracking-widest uppercase">
                      Gründer
                    </div>
                    <div className="mt-1 text-white font-semibold">Ben Hug</div>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <div className="text-[11px] font-mono text-indigo-600 uppercase tracking-[0.25em]">
                  Wer steckt dahinter
                </div>
                <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
                  Sie sprechen direkt mit dem Macher.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-8 space-y-5 text-lg text-neutral-700 leading-relaxed">
                  <p>
                    Hi, ich bin <strong>Ben Hug</strong> — Gründer von Hugweb.
                    Im Gegensatz zu großen Agenturen sprechen Sie bei mir nicht
                    mit drei Account-Managern, sondern direkt mit der Person,
                    die Ihre Webseite baut.
                  </p>
                  <p>
                    Webseiten und Apps sind meine Leidenschaft seit Jahren —
                    bisher habe ich mehrere eigene Projekte umgesetzt: eine
                    Lern-App für Schüler, einen Schulplaner und eine iOS-App.
                    Mit Hugweb baue ich jetzt das, was ich am besten kann, für
                    andere.
                  </p>
                  <p>
                    Transparent: Ich bin 15 und gehe neben Hugweb noch zur
                    Schule. Genau deshalb bekommen Sie volle Hingabe, ehrliche
                    Preise und schnelle Antworten — ohne Agentur-Aufschlag.
                    Mein Anspruch: Apple-Qualität, ohne Apple-Preise.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
                  <div>
                    <div className="text-3xl font-semibold tracking-tight">
                      48h
                    </div>
                    <div className="mt-1 text-sm text-neutral-500">
                      Antwortzeit
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-semibold tracking-tight">
                      14T
                    </div>
                    <div className="mt-1 text-sm text-neutral-500">bis live</div>
                  </div>
                  <div>
                    <div className="text-3xl font-semibold tracking-tight">
                      1:1
                    </div>
                    <div className="mt-1 text-sm text-neutral-500">
                      Betreuung
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Eigene Projekte */}
      <section id="projekte" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="max-w-2xl">
              <div className="text-[11px] font-mono text-indigo-600 uppercase tracking-[0.25em]">
                Eigene Projekte
              </div>
              <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
                Was ich schon gebaut habe.
              </h2>
              <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
                Bevor ich Webseiten für andere baue, habe ich meine eigenen
                Projekte umgesetzt — aus Leidenschaft, in den Pausen und
                Ferien. Drei davon laufen aktuell.
              </p>
            </div>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                name: "EwigesWissen",
                type: "iOS Lern-App",
                desc: "Lernkarten für Schweizer Oberstufenschüler — Hauptstädte und europäische Geografie. Mit MapKit und SwiftData.",
                tech: "SwiftUI · SwiftData · MapKit",
                gradient: "from-sky-600 via-blue-700 to-indigo-900",
                logo: "/projects/ewigeswissen.png",
                link: "https://ewigeswissen.vercel.app",
              },
              {
                name: "Bokking",
                type: "Web-App · Schulplaner",
                desc: "Schulplaner für Stundenplan, Prüfungen, Hausaufgaben und Noten — mit Sammelnoten und konfigurierbaren Schulzeiten.",
                tech: "Next.js · Tailwind · Vercel",
                gradient: "from-indigo-500 via-violet-600 to-fuchsia-700",
                mono: "B",
                monoGradient: "linear-gradient(135deg, #818cf8 0%, #e879f9 100%)",
                link: "https://bokking-school.vercel.app",
              },
              {
                name: "InstaLock",
                type: "iOS-App",
                desc: "Instagram ohne Reels — eine App für alle, die Insta nutzen wollen, ohne im Endlos-Scroll zu landen.",
                tech: "SwiftUI · WebKit",
                gradient: "from-violet-600 via-purple-700 to-indigo-900",
                logo: "/projects/instalock.png",
              },
            ].map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <Tilt className="h-full">
                <div className="group h-full overflow-hidden rounded-3xl border border-black/5 bg-white hover:shadow-2xl hover:shadow-black/5 transition-all flex flex-col">
                  <div
                    className={`aspect-[4/3] bg-gradient-to-br ${p.gradient} relative overflow-hidden`}
                  >
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 50%)",
                      }}
                    />
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="h-24 w-24 rounded-[22px] overflow-hidden shadow-2xl shadow-black/30 ring-1 ring-white/25 group-hover:scale-105 transition-transform duration-500">
                        {p.logo ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={p.logo}
                            alt={`${p.name} Logo`}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div
                            className="h-full w-full grid place-items-center text-white text-5xl font-bold"
                            style={{ background: p.monoGradient }}
                          >
                            {p.mono}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/20 backdrop-blur text-white text-[10px] font-medium px-2.5 py-1 uppercase tracking-wider">
                        Live
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      {p.type}
                    </div>
                    <div className="mt-1.5 text-xl font-semibold tracking-tight">
                      {p.name}
                    </div>
                    <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                      {p.desc}
                    </p>
                    <div className="mt-4 pt-4 border-t border-black/5 text-xs text-neutral-400 font-mono">
                      {p.tech}
                    </div>
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:gap-2 hover:text-blue-700 transition-all self-start"
                      >
                        Webseite ansehen
                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Prozess-Timeline */}
      <section
        id="prozess"
        className="py-24 md:py-32 bg-[#0a0a0a] text-white relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(99,102,241,0.25), transparent 50%), radial-gradient(circle at 80% 70%, rgba(168,85,247,0.20), transparent 50%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="max-w-2xl">
              <div className="text-[11px] font-mono text-indigo-300 uppercase tracking-[0.25em]">
                Ablauf
              </div>
              <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
                Von der ersten E-Mail bis live —
                <br />
                in{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  14 Tagen
                </span>
                .
              </h2>
              <p className="mt-5 text-lg text-white/60 leading-relaxed">
                Klarer Ablauf, fixe Termine, keine Endlos-Schlaufen. So
                läuft das, wenn Sie bei mir bestellen.
              </p>
            </div>
          </Reveal>

          <div className="mt-20 relative">
            <div
              className="hidden md:block absolute top-7 left-[12%] right-[12%] h-px"
              style={{
                background:
                  "linear-gradient(to right, rgba(96,165,250,0.5), rgba(168,85,247,0.5))",
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4 relative">
              {[
                {
                  day: "Tag 1",
                  title: "Briefing",
                  desc: "Kurze E-Mail oder Videocall. Sie erzählen mir, was Sie wollen — ich frage nach was nicht klar ist.",
                  icon: MessageCircle,
                  color: "from-sky-400 to-blue-500",
                },
                {
                  day: "Tag 5",
                  title: "Entwurf",
                  desc: "Sie bekommen einen Live-Entwurf zum Anklicken. Sie können ihn auf jedem Gerät testen.",
                  icon: Sparkles,
                  color: "from-blue-400 to-indigo-500",
                },
                {
                  day: "Tag 10",
                  title: "Anpassung",
                  desc: "Sie sagen mir konkret was anders soll. Eine Runde Feinschliff inklusive — nicht zwölf.",
                  icon: Pencil,
                  color: "from-indigo-400 to-purple-500",
                },
                {
                  day: "Tag 14",
                  title: "Live",
                  desc: "Webseite ist online. Auf Ihrer Domain. Sie bekommen alle Zugangsdaten — sie gehört Ihnen.",
                  icon: Rocket,
                  color: "from-purple-400 to-fuchsia-500",
                },
              ].map((s, i) => (
                <Reveal key={s.day} delay={i * 0.1}>
                  <div className="text-center md:text-left">
                    <div className="relative mx-auto md:mx-0 inline-flex">
                      <div
                        className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${s.color} grid place-items-center shadow-xl`}
                      >
                        <s.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="mt-5 text-xs font-medium text-white/50 uppercase tracking-widest">
                      {s.day}
                    </div>
                    <div className="mt-2 text-2xl font-semibold tracking-tight">
                      {s.title}
                    </div>
                    <p className="mt-3 text-sm text-white/60 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-white text-black px-7 py-3.5 font-medium hover:bg-white/90 transition"
              >
                Bereit für Tag 1?
                <ArrowRight className="h-4 w-4" />
              </a>
              <span className="text-sm text-white/40">
                Erstgespräch unverbindlich · kostenlos
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Preise */}
      <section id="preise" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="max-w-2xl">
              <div className="text-[11px] font-mono text-indigo-600 uppercase tracking-[0.25em]">
                Preise
              </div>
              <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
                Klare Preise. Keine Überraschungen.
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Starter",
                price: "198",
                oldPrice: "396",
                desc: "Einseitige Visitenkarten-Webseite",
                features: [
                  "Bis zu 5 Sektionen",
                  "Kontaktformular",
                  "Mobil optimiert",
                  "SEO-Grundlagen",
                  "DSGVO konform",
                ],
              },
              {
                name: "Business",
                price: "298",
                oldPrice: "596",
                desc: "Die beliebteste Option",
                highlight: true,
                features: [
                  "Bis zu 5 Unterseiten",
                  "Blog-Funktion",
                  "Erweiterte SEO",
                  "Google Analytics",
                ],
              },
              {
                name: "Premium",
                price: "398",
                oldPrice: "796",
                desc: "Individuelle Sonderlösung",
                features: [
                  "Unbegrenzte Unterseiten",
                  "Online-Buchung / Shop",
                  "CMS für Eigenpflege",
                  "Premium-Animationen",
                ],
              },
            ].map((p) => (
              <Reveal key={p.name}>
                <div
                  className={`h-full rounded-3xl p-8 border ${
                    p.highlight
                      ? "bg-black text-white border-black"
                      : "bg-white border-black/10"
                  }`}
                >
                  <div className="text-sm font-medium opacity-60">{p.name}</div>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-sm line-through opacity-40">
                      {p.oldPrice} CHF
                    </span>
                    <span className="rounded-full bg-emerald-500 text-white text-xs font-semibold px-2 py-0.5">
                      −50%
                    </span>
                  </div>
                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="text-5xl font-semibold tracking-tight">
                      {p.price}
                    </span>
                    <span className="text-xl font-medium opacity-70">CHF</span>
                  </div>
                  <p className="mt-2 text-sm opacity-70">{p.desc}</p>
                  <ul className="mt-8 space-y-3">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-sm"
                      >
                        <Check className="h-4 w-4 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#kontakt"
                    className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition ${
                      p.highlight
                        ? "bg-white text-black hover:bg-white/90"
                        : "bg-black text-white hover:bg-neutral-800"
                    }`}
                  >
                    Anfragen
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Optionale laufende Kosten — Wartung & Hosting */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Reveal>
              <div className="h-full rounded-3xl border border-black/10 bg-white p-8">
                <div className="text-sm font-medium opacity-60">
                  Wartung & Support
                </div>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold tracking-tight">39</span>
                  <span className="text-lg font-medium opacity-70">CHF/Monat</span>
                </div>
                <p className="mt-3 text-sm opacity-70">
                  Optional. Sicherheits-Updates, laufende Text- & Bildänderungen,
                  technische Betreuung und Antwort innert 48h. Jederzeit auf
                  Monatsende kündbar.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="h-full rounded-3xl border border-black/10 bg-white p-8">
                <div className="text-sm font-medium opacity-60">Hosting</div>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-medium">
                      deplo.io{" "}
                      <span className="font-normal opacity-60">(Schweiz)</span>
                    </span>
                    <span className="opacity-70">ab 9 CHF/Monat</span>
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-medium">
                      Vercel{" "}
                      <span className="font-normal opacity-60">(Alternative)</span>
                    </span>
                    <span className="opacity-70">ab 18 CHF/Monat</span>
                  </div>
                </div>
                <p className="mt-4 text-sm opacity-70">
                  Läuft auf Ihr eigenes Konto — volle Kontrolle, keine
                  Abhängigkeit. Empfehlung deplo.io: Ihre Daten bleiben 100 % in
                  der Schweiz.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-10 text-center text-sm text-neutral-500">
              Wartung, Support und Hosting sind optional und nicht im Festpreis
              enthalten. Alle Preise zzgl. MwSt.
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 md:py-32 bg-[#f0ede4]">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <div className="text-[11px] font-mono text-indigo-600 uppercase tracking-[0.25em]">
              Häufige Fragen
            </div>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
              Was Kunden uns oft fragen.
            </h2>
          </Reveal>
          <div className="mt-14 divide-y divide-black/10 border-y border-black/10">
            {[
              {
                q: "Wem gehört die Webseite am Ende?",
                a: "Ihnen. Vollständig. Sie bekommen alle Dateien, alle Zugänge, alle Inhalte. Keine Geiselnahme wie bei manchen Baukasten-Anbietern.",
              },
              {
                q: "Was beinhaltet die Wartung & Support für 39 CHF/Monat?",
                a: "Support ist nicht im Festpreis enthalten, sondern optional als Zusatz zubuchbar. Enthalten: laufende Text- und Preisänderungen, Bildwechsel, Sicherheits-Updates, technische Betreuung und Antwort innert 48h. Die Webseite gehört trotzdem Ihnen — Sie können das Abo jederzeit auf Monatsende kündigen.",
              },
              {
                q: "Was, wenn ich später Texte oder Bilder ändern will?",
                a: "Im Premium-Paket ist ein einfaches CMS dabei, mit dem Sie Texte selbst ändern können. Andernfalls übernehmen wir Änderungen über das optionale Wartungs-Paket (39 CHF/Monat) oder einzeln gegen Aufwand.",
              },
              {
                q: "Wie läuft das ab — wie lange dauert es?",
                a: "1) 30-Min-Briefing (kostenlos), 2) Entwurf in 3–5 Tagen, 3) eine Anpassungsrunde mit Ihnen, 4) Live-Schaltung. Insgesamt ca. 14 Tage von Auftrag bis Online.",
              },
              {
                q: "Was ist im Festpreis NICHT enthalten?",
                a: "Domain (~15 CHF/Jahr) und Texte/Fotos, falls Sie keine haben. Bei Bedarf vermitteln wir günstige Texter und Fotografen — oder ich schreibe die Texte für 250 CHF Aufpreis selbst.",
              },
              {
                q: "Bekomme ich eine Rechnung mit MwSt.?",
                a: "Ja. Sie bekommen eine ordentliche Rechnung — als Geschäftsausgabe steuerlich absetzbar.",
              },
              {
                q: "Wann muss ich zahlen — und was, wenn ich nicht zufrieden bin?",
                a: "Kein Risiko: Sie zahlen erst, wenn Ihre Webseite fertig ist und Ihnen gefällt — keine Anzahlung im Voraus. Passt der Entwurf nicht, arbeiten wir nach, bis er sitzt. Erst wenn Sie zufrieden sind, kommt die Rechnung.",
              },
            ].map((item, i) => (
              <Reveal key={item.q} delay={i * 0.04}>
                <details className="group py-6">
                  <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                    <span className="text-lg md:text-xl font-medium tracking-tight">
                      {item.q}
                    </span>
                    <span className="shrink-0 mt-1 h-7 w-7 rounded-full border border-black/15 grid place-items-center text-neutral-700 group-open:bg-black group-open:text-white group-open:border-black transition">
                      <Plus className="h-4 w-4 group-open:hidden" />
                      <Minus className="h-4 w-4 hidden group-open:block" />
                    </span>
                  </summary>
                  <p className="mt-4 text-neutral-600 leading-relaxed pr-12">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-24 md:py-32 bg-[#f0ede4]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <div className="text-[11px] font-mono text-indigo-600 uppercase tracking-[0.25em]">
              Kontakt
            </div>
            <h2 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight">
              Reden wir über Ihr Projekt.
            </h2>
            <p className="mt-6 text-lg text-neutral-600 max-w-2xl mx-auto">
              Schreiben Sie mir kurz, worum es geht — ich antworte innerhalb
              von 48 Stunden mit ein paar Rückfragen oder einem ersten
              Vorschlag. Unverbindlich, kostenlos, persönlich.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-12 flex flex-col items-center justify-center gap-4">
              <a
                href="mailto:benhug123@icloud.com?subject=Anfrage%20Hugweb"
                className="group inline-flex items-center gap-3 rounded-full bg-black text-white px-8 py-4 text-lg font-medium hover:bg-neutral-800 transition"
              >
                <Mail className="h-5 w-5" />
                benhug123@icloud.com
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
              </a>
              <div className="text-sm text-neutral-500">
                Klicken Sie auf die Adresse — Ihr E-Mail-Programm öffnet sich
                automatisch.
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto pt-12 border-t border-black/10">
              <div className="flex flex-col items-center gap-2">
                <Mail className="h-5 w-5 text-neutral-500" />
                <div className="text-sm font-medium">Antwort in 48h</div>
                <div className="text-xs text-neutral-500">
                  meistens schneller
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Phone className="h-5 w-5 text-neutral-500" />
                <div className="text-sm font-medium">Kein Telefondruck</div>
                <div className="text-xs text-neutral-500">
                  Telefonat erst auf Wunsch
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Check className="h-5 w-5 text-neutral-500" />
                <div className="text-sm font-medium">0 CHF Beratung</div>
                <div className="text-xs text-neutral-500">
                  ohne Verpflichtung
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
