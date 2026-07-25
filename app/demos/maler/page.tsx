import Link from "next/link";
import { ArrowLeft, ArrowRight, Brush, Home, Layers, Sparkles, Phone, MapPin, Clock, Mail, Star, ShieldCheck, Award } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Frischknecht Malerei — Maler Demo | Hugweb",
  description: "Demo-Webseite für einen modernen Maler­betrieb.",
};

export default function MalerDemo() {
  return (
    <>
      <div className="bg-black text-white text-xs py-2 text-center sticky top-0 z-50">
        Demo-Seite von <Link href="/" className="underline font-medium">Hugweb</Link>
        <Link href="/#demos" className="ml-4 inline-flex items-center gap-1 opacity-80 hover:opacity-100">
          <ArrowLeft className="h-3 w-3" /> Zurück
        </Link>
      </div>

      <div className="bg-white text-stone-900">
        <header className="border-b border-stone-100 bg-white/80 backdrop-blur sticky top-8 z-40">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-[#c44e2c] grid place-items-center"><Brush className="h-4 w-4 text-white" /></div>
              <span className="font-semibold tracking-tight text-lg">Frischknecht Malerei</span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm text-stone-600">
              <a href="#leistungen" className="hover:text-stone-900">Leistungen</a>
              <a href="#arbeiten" className="hover:text-stone-900">Arbeiten</a>
              <a href="#ablauf" className="hover:text-stone-900">Ablauf</a>
              <a href="#kontakt" className="hover:text-stone-900">Kontakt</a>
            </nav>
            <a href="#kontakt" className="hidden md:inline-flex items-center gap-2 text-sm rounded-full bg-[#c44e2c] text-white px-4 py-2 font-medium hover:bg-[#a33d20] transition">Offerte<ArrowRight className="h-3.5 w-3.5" /></a>
          </div>
        </header>

        <section className="relative overflow-hidden min-h-[90vh] flex items-center">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1717281234297-3def5ae3eee1?w=2000&q=80&auto=format&fit=crop')" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/30" />
          <div className="relative max-w-7xl mx-auto px-6 w-full py-24">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#c44e2c]/10 text-[#c44e2c] px-4 py-1.5 text-xs font-medium tracking-wider uppercase">
                <ShieldCheck className="h-3.5 w-3.5" />
                Familienbetrieb seit 1962
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.98] max-w-4xl">
                Sauber gemalt.<br />
                <span className="text-[#c44e2c]">Sauber gearbeitet.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-xl text-lg text-stone-700 leading-relaxed">Maler­arbeiten in St. Gallen und Umgebung — innen, aussen und alles dazwischen. Drei Generationen Handwerk, faire Preise, pünktliche Termine.</p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a href="#kontakt" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c44e2c] text-white px-7 py-3.5 font-semibold hover:bg-[#a33d20] transition">Kostenlose Offerte<ArrowRight className="h-4 w-4" /></a>
                <a href="#arbeiten" className="inline-flex items-center justify-center rounded-full border border-stone-300 px-7 py-3.5 font-medium hover:bg-stone-50 transition">Arbeiten ansehen</a>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-12 flex items-center gap-6 text-sm text-stone-600">
                <div className="flex items-center gap-1">{[...Array(5)].map((_, i) => (<Star key={i} className="h-4 w-4 fill-[#c44e2c] text-[#c44e2c]" />))}</div>
                <span>4,9 / 5 · 138 Bewertungen auf local.ch</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-y border-stone-100 bg-stone-50">
          <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "60+", label: "Jahre Erfahrung" },
              { num: "2.400", label: "abgeschlossene Aufträge" },
              { num: "12", label: "Mitarbeiter" },
              { num: "5 J.", label: "Garantie auf Arbeiten" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05}>
                <div>
                  <div className="text-4xl md:text-5xl font-bold tracking-tight text-[#c44e2c]">{s.num}</div>
                  <div className="mt-3 text-sm text-stone-600">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="leistungen" className="py-24 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <div className="max-w-2xl">
                <div className="text-sm font-medium text-[#c44e2c] uppercase tracking-wider">Leistungen</div>
                <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">Vom Anstrich bis zum Spezialauftrag.</h2>
                <p className="mt-5 text-lg text-stone-600 leading-relaxed">Wir machen alles, was mit Pinsel, Walze oder Spritzpistole zu tun hat — sauber, pünktlich, fair offeriert.</p>
              </div>
            </Reveal>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: Home, title: "Innenanstrich", desc: "Wohnräume, Küche, Bad, Treppenhaus. Sauber abgedeckt, schnell fertig." },
                { icon: Brush, title: "Fassade & Aussen", desc: "Witterungsbeständige Anstriche, Spritzbewurf, Sgraffito." },
                { icon: Layers, title: "Tapezieren", desc: "Klassische Tapeten, Vlies, Designer-Wandbeläge." },
                { icon: Sparkles, title: "Spezialtechniken", desc: "Kalkputz, Spachteloptik, Lasuren und Verzierungen." },
                { icon: ShieldCheck, title: "Renovation", desc: "Vollsanierung von Wohnungen — Decken, Wände, Böden, Türen." },
                { icon: Award, title: "Denkmalpflege", desc: "Restaurations­arbeiten an historischen Gebäuden, mit Bewilligungen." },
              ].map((s, i) => (
                <Reveal key={s.title} delay={i * 0.05}>
                  <div className="h-full rounded-2xl border border-stone-200 bg-white p-7 hover:border-[#c44e2c]/40 hover:shadow-lg hover:shadow-[#c44e2c]/5 transition">
                    <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-[#c44e2c]/10 text-[#c44e2c]"><s.icon className="h-5 w-5" /></div>
                    <h3 className="mt-6 text-xl font-semibold tracking-tight">{s.title}</h3>
                    <p className="mt-2 text-sm text-stone-600 leading-relaxed">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="arbeiten" className="py-24 md:py-28 border-t border-stone-100 bg-stone-50">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <div className="max-w-2xl">
                <div className="text-sm font-medium text-[#c44e2c] uppercase tracking-wider">Unsere Arbeiten</div>
                <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">Sauberes Resultat — von Anfang bis zum letzten Strich.</h2>
              </div>
            </Reveal>
            <div className="mt-14 grid grid-cols-12 gap-3 md:gap-4">
              <Reveal className="col-span-12 md:col-span-7"><div className="aspect-[16/10] overflow-hidden rounded-3xl bg-stone-200"><img src="https://images.unsplash.com/photo-1622250544703-997d69d856e3?w=1400&q=80&auto=format&fit=crop" alt="Maler bei der Arbeit" className="w-full h-full object-cover" /></div></Reveal>
              <Reveal delay={0.08} className="col-span-12 md:col-span-5"><div className="aspect-[16/10] md:aspect-auto md:h-full overflow-hidden rounded-3xl bg-stone-200"><img src="https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=900&q=80&auto=format&fit=crop" alt="Wand streichen" className="w-full h-full object-cover" /></div></Reveal>
              <Reveal delay={0.16} className="col-span-6 md:col-span-4"><div className="aspect-square overflow-hidden rounded-3xl bg-stone-200"><img src="https://images.unsplash.com/photo-1605201470550-f107ba6fdad3?w=800&q=80&auto=format&fit=crop" alt="Detailarbeit" className="w-full h-full object-cover" /></div></Reveal>
              <Reveal delay={0.24} className="col-span-6 md:col-span-4"><div className="aspect-square overflow-hidden rounded-3xl bg-stone-200"><img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&q=80&auto=format&fit=crop" alt="Maler-Werkzeug" className="w-full h-full object-cover" /></div></Reveal>
              <Reveal delay={0.32} className="col-span-12 md:col-span-4"><div className="aspect-square overflow-hidden rounded-3xl bg-stone-200"><img src="https://images.unsplash.com/photo-1616697412153-7ad8ac8aa5d9?w=800&q=80&auto=format&fit=crop" alt="Wandanstrich" className="w-full h-full object-cover" /></div></Reveal>
            </div>
          </div>
        </section>

        <section id="ablauf" className="py-24 md:py-28 border-t border-stone-100">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <div className="max-w-2xl">
                <div className="text-sm font-medium text-[#c44e2c] uppercase tracking-wider">So läuft&apos;s ab</div>
                <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">Vier Schritte. Keine Überraschungen.</h2>
              </div>
            </Reveal>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Anfrage", desc: "Sie schreiben uns kurz, worum es geht. Wir antworten am selben Tag." },
                { step: "02", title: "Besichtigung", desc: "Wir kommen vorbei, schauen uns alles an, geben Ihnen ehrliche Empfehlungen." },
                { step: "03", title: "Schriftliche Offerte", desc: "Sie erhalten innert 3 Tagen eine klare Festpreis-Offerte. Kein Versteckspiel." },
                { step: "04", title: "Saubere Ausführung", desc: "Wir arbeiten zur abgemachten Zeit, halten den Termin, hinterlassen alles sauber." },
              ].map((s, i) => (
                <Reveal key={s.step} delay={i * 0.08}>
                  <div className="relative">
                    <div className="text-7xl font-bold tracking-tight text-[#c44e2c]/15">{s.step}</div>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight">{s.title}</h3>
                    <p className="mt-3 text-sm text-stone-600 leading-relaxed">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-28 border-t border-stone-100 bg-stone-50">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <div className="flex items-center gap-2">{[...Array(5)].map((_, i) => (<Star key={i} className="h-5 w-5 fill-[#c44e2c] text-[#c44e2c]" />))}<span className="text-stone-700 ml-2 font-medium">4,9 von 5 · 138 Bewertungen</span></div>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">Was Kunden sagen.</h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { text: "Saubere Arbeit, freundliche Crew, alles im Zeitplan. Hat sogar drei kleine Stellen ohne Aufpreis nachgemacht.", name: "Familie Spörri", loc: "Eigentumswohnung, Wittenbach" },
                { text: "Fassade unseres Restaurants wurde komplett gemacht — das Resultat ist top, viele Komplimente von Gästen.", name: "M. Bühler", loc: "Restaurant, St. Gallen" },
                { text: "Hatten zuvor schlechte Erfahrungen. Hier alles korrekt — Offerte hielt auf den Franken, Crew super.", name: "Frau Hodel", loc: "Hausbesitzerin, Gossau" },
              ].map((r, i) => (
                <Reveal key={r.name} delay={i * 0.08}>
                  <div className="rounded-2xl bg-white border border-stone-200 p-7">
                    <p className="text-stone-800 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                    <div className="mt-5 pt-5 border-t border-stone-100">
                      <div className="text-sm font-semibold">{r.name}</div>
                      <div className="text-xs text-stone-500 mt-0.5">{r.loc}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="kontakt" className="py-24 md:py-28 border-t border-stone-100">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="text-sm font-medium text-[#c44e2c] uppercase tracking-wider">Offerte anfragen</div>
                <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">Lassen Sie uns kurz reden.</h2>
                <p className="mt-6 text-stone-600 leading-relaxed text-lg">Schreiben Sie uns kurz worum es geht — wir kommen unverbindlich vorbei, schauen uns alles an und geben Ihnen innert 3 Tagen eine schriftliche Festpreis-Offerte.</p>
                <div className="mt-10 space-y-5 text-stone-700">
                  <div className="flex items-center gap-4"><Phone className="h-5 w-5 text-[#c44e2c]" /><span>+41 71 222 33 44</span></div>
                  <div className="flex items-center gap-4"><Mail className="h-5 w-5 text-[#c44e2c]" /><span>info@frischknecht-malerei.ch</span></div>
                  <div className="flex items-center gap-4"><MapPin className="h-5 w-5 text-[#c44e2c]" /><span>Zürcherstrasse 88, 9000 St. Gallen</span></div>
                  <div className="flex items-center gap-4"><Clock className="h-5 w-5 text-[#c44e2c]" /><span>Mo–Fr 7–17 Uhr · Notfall 24/7</span></div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.15}>
                <form className="rounded-3xl bg-stone-50 border border-stone-200 p-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div><label className="block text-sm text-stone-700 mb-2 font-medium">Name</label><input className="w-full rounded-xl bg-white border border-stone-200 px-4 py-3 focus:outline-none focus:border-[#c44e2c] transition" /></div>
                  <div><label className="block text-sm text-stone-700 mb-2 font-medium">Telefon</label><input className="w-full rounded-xl bg-white border border-stone-200 px-4 py-3 focus:outline-none focus:border-[#c44e2c] transition" /></div>
                  <div className="md:col-span-2"><label className="block text-sm text-stone-700 mb-2 font-medium">E-Mail</label><input className="w-full rounded-xl bg-white border border-stone-200 px-4 py-3 focus:outline-none focus:border-[#c44e2c] transition" /></div>
                  <div className="md:col-span-2">
                    <label className="block text-sm text-stone-700 mb-2 font-medium">Was soll gemacht werden?</label>
                    <select className="w-full rounded-xl bg-white border border-stone-200 px-4 py-3 focus:outline-none focus:border-[#c44e2c] transition">
                      <option>Innenanstrich (Wohnung / Haus)</option>
                      <option>Fassade / Aussenanstrich</option>
                      <option>Tapezieren</option>
                      <option>Renovation komplett</option>
                      <option>Spezialtechniken / Lasuren</option>
                      <option>Sonstiges</option>
                    </select>
                  </div>
                  <div className="md:col-span-2"><label className="block text-sm text-stone-700 mb-2 font-medium">Beschreiben Sie kurz Ihr Vorhaben</label><textarea rows={4} className="w-full rounded-xl bg-white border border-stone-200 px-4 py-3 focus:outline-none focus:border-[#c44e2c] transition resize-none" placeholder="z.B. 3-Zimmer-Wohnung neu streichen, ca. 80m², bis Ende Mai..." /></div>
                  <button type="button" className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#c44e2c] text-white px-7 py-3.5 font-semibold hover:bg-[#a33d20] transition">Offerte anfragen<ArrowRight className="h-4 w-4" /></button>
                  <div className="md:col-span-2 text-xs text-stone-500 text-center">Wir antworten innert 24 Stunden · unverbindlich · kostenlos</div>
                </form>
              </Reveal>
            </div>
          </div>
        </section>

        <footer className="border-t border-stone-200 py-10 text-center text-sm text-stone-500">
          © {new Date().getFullYear()} Frischknecht Malerei St. Gallen · Demo-Seite von{" "}
          <Link href="/" className="underline hover:text-stone-900">Hugweb</Link>
        </footer>
      </div>
    </>
  );
}
