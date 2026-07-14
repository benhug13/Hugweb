import Link from "next/link";
import { ArrowLeft, Sparkles, Clock, MapPin, Phone, Star, ShieldCheck, HeartPulse, Smile } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Klarweiss Zahnmedizin — Zahnarzt Demo | Hugweb",
  description: "Demo-Webseite für eine moderne Zahnarztpraxis.",
};

export default function ZahnarztDemo() {
  return (
    <>
      <div className="bg-black text-white text-xs py-2 text-center sticky top-0 z-50">
        Demo-Seite von <Link href="/" className="underline font-medium">Hugweb</Link>
        <Link href="/#demos" className="ml-4 inline-flex items-center gap-1 opacity-80 hover:opacity-100">
          <ArrowLeft className="h-3 w-3" /> Zurück
        </Link>
      </div>

      <div className="bg-white text-slate-900">
        {/* Hero */}
        <section className="relative overflow-hidden pt-20 pb-24">
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at 20% 10%, rgba(20,184,166,0.10), transparent 55%), radial-gradient(ellipse at 90% 70%, rgba(56,189,248,0.08), transparent 50%)",
            }}
          />
          <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 pt-8 lg:pt-0">
              <Reveal>
                <div className="flex items-center gap-2 text-teal-600">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-sm font-medium tracking-wider uppercase">Klarweiss Zahnmedizin · München</span>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95]">
                  Ein Lächeln,<br />
                  <span className="text-teal-600">das passt.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-8 max-w-xl text-lg text-slate-600 leading-relaxed">
                  Moderne Zahnmedizin in München-Schwabing. Sanfte Behandlung, ehrliche Beratung, transparente Preise. Auch Angstpatienten willkommen.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <a href="#termin" className="rounded-full bg-teal-600 text-white px-6 py-3 font-medium hover:bg-teal-700 transition">Termin vereinbaren</a>
                  <a href="#leistungen" className="rounded-full border border-slate-200 px-6 py-3 font-medium hover:bg-slate-50 transition">Behandlungen ansehen</a>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal delay={0.15}>
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-100 shadow-2xl shadow-teal-900/10">
                  <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80&auto=format&fit=crop" alt="Moderne Zahnarztpraxis" className="w-full h-full object-cover" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 backdrop-blur p-5 border border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-teal-50 grid place-items-center">
                        <Sparkles className="h-5 w-5 text-teal-600" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">Neue Patienten willkommen</div>
                        <div className="text-xs text-slate-500">Erstgespräch innerhalb von 7 Tagen</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Vertrauen */}
        <section className="py-20 border-t border-slate-100 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: ShieldCheck, title: "Schmerzarme Behandlung", text: "Sanfte Verfahren und moderne Anästhesie für ein entspanntes Gefühl." },
                { icon: HeartPulse, title: "Persönlich & ehrlich", text: "Wir behandeln, was nötig ist — nicht mehr, nicht weniger." },
                { icon: Smile, title: "Auch für Angstpatienten", text: "Geduldiges Aufklärungsgespräch und Behandlung in Ihrem Tempo." },
              ].map((f, i) => (
                <Reveal key={f.title} delay={i * 0.08}>
                  <div className="h-full rounded-2xl bg-white border border-slate-100 p-7">
                    <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-teal-50 text-teal-600">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <div className="mt-5 text-lg font-semibold">{f.title}</div>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Leistungen */}
        <section id="leistungen" className="py-24 border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="max-w-2xl">
                <div className="text-sm font-medium text-teal-600 uppercase tracking-wider">Behandlungen</div>
                <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">Alles aus einer Hand.</h2>
                <p className="mt-5 text-lg text-slate-600 leading-relaxed">
                  Vom regelmäßigen Check-up bis zur ästhetischen Zahnmedizin — wir kümmern uns um Ihre Zahngesundheit.
                </p>
              </div>
            </Reveal>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {[
                { name: "Vorsorge & Prophylaxe", desc: "Professionelle Zahnreinigung, Fluoridierung", price: "ab 89€" },
                { name: "Zahnerhaltung", desc: "Hochwertige Kunststofffüllungen, Inlays", price: "ab 120€" },
                { name: "Implantate", desc: "Festsitzender Zahnersatz, langlebig", price: "ab 1.890€" },
                { name: "Bleaching", desc: "Sichtbar hellere Zähne in einer Sitzung", price: "ab 290€" },
                { name: "Aligner / Schienen", desc: "Unsichtbare Zahnkorrektur", price: "ab 2.490€" },
                { name: "Kinderzahnheilkunde", desc: "Kindgerecht, geduldig, spielerisch", price: "ab 49€" },
              ].map((s, i) => (
                <Reveal key={s.name} delay={i * 0.05}>
                  <div className="flex items-baseline justify-between py-5 border-b border-slate-100">
                    <div>
                      <div className="text-lg font-medium">{s.name}</div>
                      <div className="text-sm text-slate-500 mt-1">{s.desc}</div>
                    </div>
                    <div className="text-lg font-semibold text-teal-600 whitespace-nowrap pl-4">{s.price}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Praxis-Galerie */}
        <section className="py-24 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <div className="max-w-2xl">
                <div className="text-sm font-medium text-teal-600 uppercase tracking-wider">Unsere Praxis</div>
                <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">Modern, hell, ruhig.</h2>
              </div>
            </Reveal>
            <div className="mt-14 grid grid-cols-12 gap-3 md:gap-4">
              <Reveal className="col-span-12 md:col-span-7">
                <div className="aspect-[16/10] overflow-hidden rounded-3xl">
                  <img src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=1400&q=80&auto=format&fit=crop" alt="Behandlungsraum" className="w-full h-full object-cover" />
                </div>
              </Reveal>
              <Reveal delay={0.08} className="col-span-12 md:col-span-5">
                <div className="aspect-[16/10] md:aspect-auto md:h-full overflow-hidden rounded-3xl">
                  <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=900&q=80&auto=format&fit=crop" alt="Detail" className="w-full h-full object-cover" />
                </div>
              </Reveal>
              <Reveal delay={0.16} className="col-span-6 md:col-span-5">
                <div className="aspect-square md:aspect-[16/10] overflow-hidden rounded-3xl">
                  <img src="https://images.unsplash.com/photo-1657470179447-0f5aa16daa91?w=1000&q=80&auto=format&fit=crop" alt="Praxis-Detail" className="w-full h-full object-cover" />
                </div>
              </Reveal>
              <Reveal delay={0.24} className="col-span-6 md:col-span-7">
                <div className="aspect-square md:aspect-[16/10] overflow-hidden rounded-3xl">
                  <img src="https://images.unsplash.com/photo-1643660526741-094639fbe53a?w=1400&q=80&auto=format&fit=crop" alt="Praxis" className="w-full h-full object-cover" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Bewertungen */}
        <section className="py-24 border-t border-slate-100 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (<Star key={i} className="h-5 w-5 fill-teal-600 text-teal-600" />))}
                <span className="text-slate-600 ml-2">4,9 · 412 Bewertungen auf Jameda &amp; Google</span>
              </div>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">Was unsere Patienten sagen.</h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { text: "Endlich eine Praxis, in die ich gerne gehe. Sehr einfühlsam und kompetent.", name: "Sabine M." },
                { text: "Mein erstes Implantat — alles ruhig erklärt, völlig schmerzfrei. Dankeschön.", name: "Florian K." },
                { text: "Tolles Team, moderne Ausstattung. Kinder werden hier richtig gut betreut.", name: "Anna R." },
              ].map((r, i) => (
                <Reveal key={r.name} delay={i * 0.1}>
                  <div className="rounded-2xl bg-white border border-slate-100 p-6">
                    <p className="text-slate-700 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                    <div className="mt-4 text-sm text-slate-500">— {r.name}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Termin */}
        <section id="termin" className="py-24 border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Termin vereinbaren.</h2>
              <p className="mt-6 text-slate-600 leading-relaxed">
                Rufen Sie uns an oder schicken Sie uns eine kurze Nachricht.
                Wir melden uns am selben Tag mit einem Terminvorschlag.
              </p>
              <div className="mt-10 space-y-5">
                <div className="flex items-center gap-4"><Phone className="h-5 w-5 text-teal-600" /><span>+49 89 123 456 78</span></div>
                <div className="flex items-center gap-4"><MapPin className="h-5 w-5 text-teal-600" /><span>Leopoldstraße 88, 80802 München</span></div>
                <div className="flex items-center gap-4"><Clock className="h-5 w-5 text-teal-600" /><span>Mo–Fr 8–19 Uhr · Sa nach Vereinbarung</span></div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <form className="rounded-3xl bg-slate-50 border border-slate-100 p-8 space-y-4">
                <div><label className="block text-sm text-slate-600 mb-2">Name</label><input className="w-full rounded-xl bg-white border border-slate-200 px-4 py-3 focus:outline-none focus:border-teal-600 transition" /></div>
                <div><label className="block text-sm text-slate-600 mb-2">Telefon oder E-Mail</label><input className="w-full rounded-xl bg-white border border-slate-200 px-4 py-3 focus:outline-none focus:border-teal-600 transition" /></div>
                <div><label className="block text-sm text-slate-600 mb-2">Anliegen</label><textarea rows={3} className="w-full rounded-xl bg-white border border-slate-200 px-4 py-3 focus:outline-none focus:border-teal-600 transition resize-none" /></div>
                <button type="button" className="w-full rounded-full bg-teal-600 text-white px-6 py-3 font-medium hover:bg-teal-700 transition">Anfrage senden</button>
              </form>
            </Reveal>
          </div>
        </section>

        <footer className="border-t border-slate-100 py-10 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Klarweiss Zahnmedizin München · Demo-Seite von{" "}
          <Link href="/" className="underline hover:text-slate-900">Hugweb</Link>
        </footer>
      </div>
    </>
  );
}
