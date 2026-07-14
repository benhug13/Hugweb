import Link from "next/link";
import { ArrowLeft, ArrowRight, Scale, Building2, Briefcase, Home, FileText, Users, Phone, Mail, MapPin, Globe } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Hofmann Rechtsanwälte — Anwalt Demo | Hugweb",
  description: "Demo-Webseite für eine moderne Anwaltskanzlei.",
};

export default function AnwaltDemo() {
  return (
    <>
      <div className="bg-black text-white text-xs py-2 text-center sticky top-0 z-50">
        Demo-Seite von <Link href="/" className="underline font-medium">Hugweb</Link>
        <Link href="/#demos" className="ml-4 inline-flex items-center gap-1 opacity-80 hover:opacity-100">
          <ArrowLeft className="h-3 w-3" /> Zurück
        </Link>
      </div>

      <div className="bg-[#0a1020] text-stone-100">
        <header className="border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-amber-200 text-[#0a1020] grid place-items-center font-serif text-sm">H</div>
              <span className="font-serif text-lg tracking-wide">Hofmann Rechtsanwälte</span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm text-stone-300">
              <a href="#kanzlei" className="hover:text-white">Kanzlei</a>
              <a href="#rechtsgebiete" className="hover:text-white">Rechtsgebiete</a>
              <a href="#team" className="hover:text-white">Team</a>
              <a href="#kontakt" className="hover:text-white">Kontakt</a>
            </nav>
            <a href="#kontakt" className="hidden md:inline-flex items-center gap-2 text-sm rounded-full border border-amber-200/40 text-amber-200 px-4 py-2 hover:bg-amber-200/10 transition">Termin <ArrowRight className="h-3.5 w-3.5" /></a>
          </div>
        </header>

        <section className="relative overflow-hidden">
          <div className="absolute inset-0 opacity-50" style={{ background: "radial-gradient(ellipse at 20% 30%, rgba(251,191,36,0.10), transparent 55%), radial-gradient(ellipse at 90% 80%, rgba(56,189,248,0.08), transparent 50%)" }} />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
          <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8">
                <Reveal><div className="text-amber-200/80 text-sm tracking-[0.2em] uppercase">Berlin · seit 1998</div></Reveal>
                <Reveal delay={0.1}>
                  <h1 className="mt-6 font-serif text-5xl md:text-7xl lg:text-[88px] leading-[1.02] tracking-tight">
                    Klarheit,<br />
                    wenn es <em className="text-amber-200 not-italic">darauf</em><br />
                    ankommt.
                  </h1>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="mt-10 max-w-xl text-lg text-stone-300 leading-relaxed">
                    Wir vertreten Privatpersonen und mittelständische Unternehmen in Wirtschafts-, Arbeits- und Immobilienrecht. Persönlich. Pragmatisch. Auf Augenhöhe.
                  </p>
                </Reveal>
                <Reveal delay={0.3}>
                  <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <a href="#kontakt" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-200 text-[#0a1020] px-7 py-3.5 font-medium hover:bg-amber-100 transition">Erstberatung anfragen<ArrowRight className="h-4 w-4" /></a>
                    <a href="#rechtsgebiete" className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 font-medium hover:bg-white/5 transition">Rechtsgebiete</a>
                  </div>
                </Reveal>
              </div>
              <div className="lg:col-span-4">
                <Reveal delay={0.4}>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur">
                    <div className="text-xs tracking-widest uppercase text-amber-200/70">Erste Einschätzung</div>
                    <p className="mt-3 text-stone-200 leading-relaxed">Schildern Sie uns kurz Ihren Fall — wir melden uns innerhalb eines Werktags mit einer ehrlichen Einschätzung und einem klaren Kostenrahmen.</p>
                    <div className="mt-5 text-sm text-stone-400">Vertraulich · DSGVO-konform · ohne Verpflichtung</div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section id="kanzlei" className="border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "27", unit: "Jahre", label: "Kanzlei in Berlin-Mitte" },
              { num: "1.400+", unit: "Mandate", label: "Jährlich vertreten" },
              { num: "4", unit: "Partner", label: "Spezialisierte Anwälte" },
              { num: "3", unit: "Sprachen", label: "DE · EN · FR" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05}>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-5xl md:text-6xl tracking-tight text-amber-200">{s.num}</span>
                    <span className="text-stone-400 text-sm">{s.unit}</span>
                  </div>
                  <div className="mt-3 text-sm text-stone-400">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="rechtsgebiete" className="py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-7">
                <Reveal>
                  <div className="text-amber-200/80 text-sm tracking-[0.2em] uppercase">Rechtsgebiete</div>
                  <h2 className="mt-4 font-serif text-4xl md:text-6xl tracking-tight">Wir kennen das Feld,<br />auf dem wir spielen.</h2>
                </Reveal>
              </div>
              <div className="lg:col-span-5">
                <Reveal delay={0.1}>
                  <p className="text-stone-300 leading-relaxed">Spezialisierung statt Generalistentum. Jeder unserer Partner konzentriert sich auf zwei bis drei Rechtsgebiete — damit Sie echte Tiefe bekommen, kein Halbwissen.</p>
                </Reveal>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden">
              {[
                { icon: Briefcase, title: "Wirtschaftsrecht", desc: "Verträge, M&A, Gesellschaftsrecht und Compliance für mittelständische Unternehmen." },
                { icon: Users, title: "Arbeitsrecht", desc: "Kündigungen, Aufhebungsverträge, Verhandlungen — auf Arbeitgeber- und Arbeitnehmerseite." },
                { icon: Home, title: "Immobilienrecht", desc: "Kaufverträge, WEG-Recht, Mietstreitigkeiten und Bauträgerthemen." },
                { icon: Building2, title: "Erbrecht", desc: "Testamente, Pflichtteil, Erbauseinandersetzung — diskret und vorausschauend." },
                { icon: FileText, title: "Vertragsrecht", desc: "Vertragsgestaltung und -prüfung für Unternehmen und private Mandate." },
                { icon: Scale, title: "Prozessführung", desc: "Vertretung vor allen deutschen Zivilgerichten bis zum BGH." },
              ].map((r, i) => (
                <Reveal key={r.title} delay={i * 0.05}>
                  <div className="h-full bg-[#0a1020] p-8 hover:bg-white/[0.03] transition">
                    <div className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-amber-200/10 text-amber-200 border border-amber-200/20"><r.icon className="h-5 w-5" /></div>
                    <h3 className="mt-6 font-serif text-2xl tracking-tight">{r.title}</h3>
                    <p className="mt-3 text-sm text-stone-400 leading-relaxed">{r.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-28 border-t border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <div className="text-amber-200/80 text-sm tracking-[0.2em] uppercase">Arbeitsweise</div>
              <h2 className="mt-4 font-serif text-4xl md:text-6xl tracking-tight max-w-3xl">Drei Schritte,<br />keine Überraschungen.</h2>
            </Reveal>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden">
              {[
                { step: "01", title: "Erstgespräch", desc: "Wir hören zu, prüfen die Aktenlage und sagen Ihnen ehrlich, ob wir helfen können — und was es kostet." },
                { step: "02", title: "Strategie", desc: "Sie erhalten einen schriftlichen Plan: Ziel, Vorgehen, Zeitrahmen, Honorar. Schwarz auf weiß." },
                { step: "03", title: "Umsetzung", desc: "Wir handeln, verhandeln, prozessieren. Sie sind in jeder Phase informiert — ohne Anwaltsdeutsch." },
              ].map((s, i) => (
                <Reveal key={s.step} delay={i * 0.08}>
                  <div className="h-full bg-[#0a1020] p-10">
                    <div className="font-serif text-amber-200/80 text-sm">{s.step}</div>
                    <h3 className="mt-6 font-serif text-2xl md:text-3xl tracking-tight">{s.title}</h3>
                    <p className="mt-4 text-stone-400 leading-relaxed">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32">
          <div className="max-w-5xl mx-auto px-6">
            <Reveal>
              <div className="font-serif text-3xl md:text-5xl leading-[1.2] tracking-tight">
                <span className="text-amber-200">&ldquo;</span>Hofmann hat unseren Gesellschaftsstreit in vier Monaten gelöst — sauber, schnell, ohne den Geschäftsbetrieb zu belasten. Was uns überzeugt hat: Sie haben jeden Schritt erklärt, bevor sie ihn gegangen sind.<span className="text-amber-200">&rdquo;</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-10 text-stone-400 text-sm">— Geschäftsführerin · Mittelständischer Maschinenbauer, Brandenburg</div>
            </Reveal>
          </div>
        </section>

        <section id="team" className="py-28 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <div className="text-amber-200/80 text-sm tracking-[0.2em] uppercase">Partner</div>
              <h2 className="mt-4 font-serif text-4xl md:text-6xl tracking-tight">Wer Sie vertritt.</h2>
            </Reveal>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { initials: "TH", name: "Dr. Thomas Hofmann", role: "Gründer · Wirtschaftsrecht", edu: "Promotion Humboldt-Universität" },
                { initials: "AS", name: "Anna Schreiber", role: "Partnerin · Arbeitsrecht", edu: "Fachanwältin für Arbeitsrecht" },
                { initials: "MK", name: "Markus Köhler", role: "Partner · Immobilienrecht", edu: "LL.M. King's College London" },
                { initials: "LV", name: "Léa Voigt", role: "Partnerin · Erbrecht", edu: "Notarausbildung Kammergericht" },
              ].map((p, i) => (
                <Reveal key={p.name} delay={i * 0.06}>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
                    <div className="aspect-[4/5] grid place-items-center bg-gradient-to-br from-[#1a2238] to-[#0a1020] border-b border-white/5">
                      <span className="font-serif text-6xl text-amber-200/70">{p.initials}</span>
                    </div>
                    <div className="p-5">
                      <div className="font-serif text-lg tracking-tight">{p.name}</div>
                      <div className="mt-1 text-xs text-amber-200/80 tracking-wider uppercase">{p.role}</div>
                      <div className="mt-3 text-xs text-stone-400">{p.edu}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="kontakt" className="py-28 border-t border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="text-amber-200/80 text-sm tracking-[0.2em] uppercase">Kontakt</div>
                <h2 className="mt-4 font-serif text-4xl md:text-6xl tracking-tight">Sprechen wir.</h2>
                <p className="mt-6 text-stone-300 leading-relaxed">Erstes Gespräch unverbindlich, persönlich oder per Videocall. Wir antworten innerhalb eines Werktags.</p>
                <div className="mt-10 space-y-5 text-stone-300">
                  <div className="flex items-center gap-4"><Phone className="h-5 w-5 text-amber-200" /><span>+49 30 880 110 12</span></div>
                  <div className="flex items-center gap-4"><Mail className="h-5 w-5 text-amber-200" /><span>kanzlei@hofmann-recht.de</span></div>
                  <div className="flex items-center gap-4"><MapPin className="h-5 w-5 text-amber-200" /><span>Friedrichstraße 122, 10117 Berlin</span></div>
                  <div className="flex items-center gap-4"><Globe className="h-5 w-5 text-amber-200" /><span>Deutsch · English · Français</span></div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.15}>
                <form className="rounded-3xl bg-[#0a1020] border border-white/10 p-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div><label className="block text-xs text-stone-400 mb-2 tracking-wider uppercase">Name</label><input className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 focus:outline-none focus:border-amber-200/60 transition" /></div>
                  <div><label className="block text-xs text-stone-400 mb-2 tracking-wider uppercase">Telefon</label><input className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 focus:outline-none focus:border-amber-200/60 transition" /></div>
                  <div className="md:col-span-2"><label className="block text-xs text-stone-400 mb-2 tracking-wider uppercase">E-Mail</label><input className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 focus:outline-none focus:border-amber-200/60 transition" /></div>
                  <div className="md:col-span-2">
                    <label className="block text-xs text-stone-400 mb-2 tracking-wider uppercase">Rechtsgebiet</label>
                    <select className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 focus:outline-none focus:border-amber-200/60 transition">
                      <option className="bg-[#0a1020]">Wirtschaftsrecht</option>
                      <option className="bg-[#0a1020]">Arbeitsrecht</option>
                      <option className="bg-[#0a1020]">Immobilienrecht</option>
                      <option className="bg-[#0a1020]">Erbrecht</option>
                      <option className="bg-[#0a1020]">Sonstiges</option>
                    </select>
                  </div>
                  <div className="md:col-span-2"><label className="block text-xs text-stone-400 mb-2 tracking-wider uppercase">Worum geht es?</label><textarea rows={4} className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 focus:outline-none focus:border-amber-200/60 transition resize-none" /></div>
                  <button type="button" className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-amber-200 text-[#0a1020] px-7 py-3.5 font-medium hover:bg-amber-100 transition">Anfrage senden<ArrowRight className="h-4 w-4" /></button>
                  <div className="md:col-span-2 text-xs text-stone-500 text-center">Vertraulich behandelt · Antwort innerhalb eines Werktags</div>
                </form>
              </Reveal>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/5 py-10 text-center text-sm text-stone-500">
          © {new Date().getFullYear()} Hofmann Rechtsanwälte Berlin · Demo-Seite von{" "}
          <Link href="/" className="underline hover:text-stone-200">Hugweb</Link>
        </footer>
      </div>
    </>
  );
}
