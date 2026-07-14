import Link from "next/link";
import { ArrowLeft, ArrowRight, Flame, Dumbbell, Zap, Heart, Clock, MapPin, Phone, Star } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Pulse Studio — Fitness Demo | Hugweb",
  description: "Demo-Webseite für ein Premium-Fitnessstudio.",
};

export default function FitnessDemo() {
  return (
    <>
      <div className="bg-black text-white text-xs py-2 text-center sticky top-0 z-50">
        Demo-Seite von <Link href="/" className="underline font-medium">Hugweb</Link>
        <Link href="/#demos" className="ml-4 inline-flex items-center gap-1 opacity-80 hover:opacity-100">
          <ArrowLeft className="h-3 w-3" /> Zurück
        </Link>
      </div>

      <div className="bg-[#0b0d10] text-white">
        <header className="border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-[#ff5a3d] grid place-items-center"><Flame className="h-4 w-4 text-black" /></div>
              <span className="font-semibold tracking-tight text-lg">Pulse Studio</span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
              <a href="#programme" className="hover:text-white">Programme</a>
              <a href="#plan" className="hover:text-white">Studio</a>
              <a href="#preise" className="hover:text-white">Mitgliedschaft</a>
              <a href="#kontakt" className="hover:text-white">Probetraining</a>
            </nav>
            <a href="#kontakt" className="hidden md:inline-flex items-center gap-2 text-sm rounded-full bg-[#ff5a3d] text-black px-4 py-2 font-medium hover:bg-[#ff7a5d] transition">Probetraining<ArrowRight className="h-3.5 w-3.5" /></a>
          </div>
        </header>

        <section className="relative overflow-hidden min-h-[92vh] flex items-center">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=2000&q=80&auto=format&fit=crop')" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/30" />
          <div className="absolute inset-0 opacity-50" style={{ background: "radial-gradient(ellipse at 20% 60%, rgba(255,90,61,0.30), transparent 55%)" }} />
          <div className="relative max-w-7xl mx-auto px-6 w-full py-24">
            <Reveal><div className="text-[#ff5a3d] text-sm tracking-[0.25em] uppercase">Berlin · Mitte</div></Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 text-6xl md:text-8xl lg:text-[112px] font-bold tracking-tight leading-[0.92]">Stärker als<br /><span className="text-[#ff5a3d]">gestern.</span></h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-xl text-lg text-white/70 leading-relaxed">Boutique-Strength-Studio für Erwachsene, die ernsthaft trainieren wollen — ohne Massenabfertigung. Kleingruppen, Top-Coaches, klare Programmierung.</p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a href="#kontakt" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff5a3d] text-black px-7 py-3.5 font-semibold hover:bg-[#ff7a5d] transition">Kostenloses Probetraining<ArrowRight className="h-4 w-4" /></a>
                <a href="#programme" className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 font-medium hover:bg-white/5 transition">Programme ansehen</a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "8", label: "Coaches mit Wettkampfhintergrund" },
              { num: "6×", label: "Wöchentliche Programmierung" },
              { num: "12", label: "Max. Teilnehmer pro Kurs" },
              { num: "650+", label: "Aktive Mitglieder" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05}>
                <div>
                  <div className="text-5xl md:text-6xl font-bold tracking-tight text-[#ff5a3d]">{s.num}</div>
                  <div className="mt-3 text-sm text-white/60">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="programme" className="py-28">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <div className="text-[#ff5a3d] text-sm tracking-[0.25em] uppercase">Programme</div>
              <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">Vier Wege, stärker zu werden.</h2>
            </Reveal>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Dumbbell, title: "Strength", text: "Klassisches Krafttraining mit Langhantel — Squat, Bench, Deadlift. 60 Min, max. 8 Personen." },
                { icon: Flame, title: "HIIT Lab", text: "Hochintensive Intervalle. Brutale 45 Minuten, danach fühlst du dich lebendig wie selten." },
                { icon: Heart, title: "Mobility & Recovery", text: "Gegenpol zum harten Training. Mobilisation, Atemarbeit, ruhige Kräftigung." },
                { icon: Zap, title: "Personal Training", text: "1-zu-1-Coaching nach Anamnese. Für Wiedereinsteiger, Wettkampfsportler oder einfach für dich." },
              ].map((p, i) => (
                <Reveal key={p.title} delay={i * 0.06}>
                  <div className="h-full rounded-3xl bg-white/[0.03] border border-white/10 p-8 hover:bg-white/[0.05] transition">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#ff5a3d]/15 text-[#ff5a3d] border border-[#ff5a3d]/30"><p.icon className="h-6 w-6" /></div>
                    <h3 className="mt-6 text-2xl font-bold tracking-tight">{p.title}</h3>
                    <p className="mt-3 text-white/60 leading-relaxed">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="plan" className="py-28 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <div className="text-[#ff5a3d] text-sm tracking-[0.25em] uppercase">Im Studio</div>
              <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">Konzentrierte Arbeit.</h2>
            </Reveal>
            <div className="mt-14 grid grid-cols-12 gap-3 md:gap-4">
              <Reveal className="col-span-12 md:col-span-7"><div className="aspect-[16/10] overflow-hidden rounded-3xl"><img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1400&q=80&auto=format&fit=crop" alt="Studio" className="w-full h-full object-cover" /></div></Reveal>
              <Reveal delay={0.08} className="col-span-12 md:col-span-5"><div className="aspect-[16/10] md:aspect-auto md:h-full overflow-hidden rounded-3xl"><img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&q=80&auto=format&fit=crop" alt="Training" className="w-full h-full object-cover" /></div></Reveal>
              <Reveal delay={0.16} className="col-span-6 md:col-span-4"><div className="aspect-square overflow-hidden rounded-3xl"><img src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&q=80&auto=format&fit=crop" alt="Detail" className="w-full h-full object-cover" /></div></Reveal>
              <Reveal delay={0.24} className="col-span-6 md:col-span-4"><div className="aspect-square overflow-hidden rounded-3xl"><img src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800&q=80&auto=format&fit=crop" alt="Coach" className="w-full h-full object-cover" /></div></Reveal>
              <Reveal delay={0.32} className="col-span-12 md:col-span-4"><div className="aspect-square overflow-hidden rounded-3xl"><img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80&auto=format&fit=crop" alt="Athletin" className="w-full h-full object-cover" /></div></Reveal>
            </div>
          </div>
        </section>

        <section id="preise" className="py-28 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <div className="text-[#ff5a3d] text-sm tracking-[0.25em] uppercase">Mitgliedschaft</div>
              <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight">Kein Jahresvertrag.</h2>
              <p className="mt-5 text-white/60 max-w-xl text-lg leading-relaxed">Monatlich kündbar. Probier&apos;s eine Woche kostenlos — bezahlst nur, wenn&apos;s passt.</p>
            </Reveal>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Drop-In", price: "29", unit: "€ / Einheit", desc: "Einzelnes Training, ohne Bindung", features: ["1 Kurs nach Wahl", "Erstes Training kostenlos", "Keine Anmeldegebühr"] },
                { name: "Standard", price: "129", unit: "€ / Monat", desc: "Unbegrenzt trainieren", highlight: true, features: ["Alle Kurse, alle Zeiten", "Quartalsweise Mobility-Check", "Monatlich kündbar", "App-Zugang inklusive"] },
                { name: "Performance", price: "249", unit: "€ / Monat", desc: "Mit Personal Coaching", features: ["Alles aus Standard", "2× Personal Training / Monat", "Individueller Trainingsplan", "Ernährungsberatung"] },
              ].map((p) => (
                <Reveal key={p.name}>
                  <div className={`h-full rounded-3xl p-8 border ${p.highlight ? "bg-[#ff5a3d] text-black border-[#ff5a3d]" : "bg-white/[0.03] text-white border-white/10"}`}>
                    <div className="text-xs tracking-widest uppercase opacity-70">{p.name}</div>
                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="text-5xl font-bold tracking-tight">{p.price}</span>
                      <span className="text-sm opacity-70">{p.unit}</span>
                    </div>
                    <p className="mt-2 text-sm opacity-80">{p.desc}</p>
                    <ul className="mt-8 space-y-3">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-current shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a href="#kontakt" className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${p.highlight ? "bg-black text-white hover:bg-black/80" : "bg-white text-black hover:bg-white/90"}`}>Jetzt starten</a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-28 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <Reveal>
              <div className="flex items-center gap-1 mb-8">{[...Array(5)].map((_, i) => (<Star key={i} className="h-5 w-5 fill-[#ff5a3d] text-[#ff5a3d]" />))}</div>
              <div className="text-3xl md:text-5xl font-semibold leading-[1.2] tracking-tight">
                <span className="text-[#ff5a3d]">&ldquo;</span>Ich bin in 8 Monaten 22 kg in Squat hochgegangen — und das mit Vollzeitjob und zwei Kindern. Die Coaches hier wissen, was sie tun, und niemand schwätzt dich voll.<span className="text-[#ff5a3d]">&rdquo;</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}><div className="mt-10 text-white/50 text-sm">— Marco, 39 · Mitglied seit Januar</div></Reveal>
          </div>
        </section>

        <section id="kontakt" className="py-28 border-t border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="text-[#ff5a3d] text-sm tracking-[0.25em] uppercase">Probetraining</div>
                <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight">Erste Woche gratis.</h2>
                <p className="mt-6 text-white/60 leading-relaxed text-lg">Keine Verpflichtung, keine versteckten Klauseln. Komm vorbei, schau dir alles an, trainier eine Woche mit — danach entscheidest du.</p>
                <div className="mt-10 space-y-5 text-white/80">
                  <div className="flex items-center gap-4"><Phone className="h-5 w-5 text-[#ff5a3d]" /><span>+49 30 555 010 88</span></div>
                  <div className="flex items-center gap-4"><MapPin className="h-5 w-5 text-[#ff5a3d]" /><span>Torstraße 12, 10119 Berlin</span></div>
                  <div className="flex items-center gap-4"><Clock className="h-5 w-5 text-[#ff5a3d]" /><span>Mo–Fr 6–22 Uhr · Sa/So 8–18 Uhr</span></div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.15}>
                <form className="rounded-3xl bg-[#0b0d10] border border-white/10 p-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div><label className="block text-xs text-white/50 mb-2 tracking-wider uppercase">Vorname</label><input className="w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 focus:outline-none focus:border-[#ff5a3d] transition" /></div>
                  <div><label className="block text-xs text-white/50 mb-2 tracking-wider uppercase">Telefon</label><input className="w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 focus:outline-none focus:border-[#ff5a3d] transition" /></div>
                  <div className="md:col-span-2"><label className="block text-xs text-white/50 mb-2 tracking-wider uppercase">E-Mail</label><input className="w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 focus:outline-none focus:border-[#ff5a3d] transition" /></div>
                  <div className="md:col-span-2">
                    <label className="block text-xs text-white/50 mb-2 tracking-wider uppercase">Was reizt dich am meisten?</label>
                    <select className="w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 focus:outline-none focus:border-[#ff5a3d] transition">
                      <option className="bg-[#0b0d10]">Strength</option>
                      <option className="bg-[#0b0d10]">HIIT Lab</option>
                      <option className="bg-[#0b0d10]">Mobility</option>
                      <option className="bg-[#0b0d10]">Personal Training</option>
                      <option className="bg-[#0b0d10]">Weiß noch nicht</option>
                    </select>
                  </div>
                  <button type="button" className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#ff5a3d] text-black px-7 py-3.5 font-semibold hover:bg-[#ff7a5d] transition">Probewoche starten<ArrowRight className="h-4 w-4" /></button>
                  <div className="md:col-span-2 text-xs text-white/40 text-center">Wir melden uns innerhalb eines Werktags mit Termin&shy;vorschlägen</div>
                </form>
              </Reveal>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/5 py-10 text-center text-sm text-white/40">
          © {new Date().getFullYear()} Pulse Studio Berlin · Demo-Seite von{" "}
          <Link href="/" className="underline hover:text-white">Hugweb</Link>
        </footer>
      </div>
    </>
  );
}
