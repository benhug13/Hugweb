import Link from "next/link";
import { ArrowLeft, Scissors, Clock, MapPin, Phone, Star } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Nordcuts — Barbershop Demo | Hugweb",
  description: "Demo-Webseite für einen modernen Barbershop.",
};

export default function BarberDemo() {
  return (
    <>
      <div className="bg-black text-white text-xs py-2 text-center sticky top-0 z-50">
        Demo-Seite von{" "}
        <Link href="/" className="underline font-medium">
          Hugweb
        </Link>
        <Link href="/#demos" className="ml-4 inline-flex items-center gap-1 opacity-80 hover:opacity-100">
          <ArrowLeft className="h-3 w-3" /> Zurück
        </Link>
      </div>

      <div className="bg-[#0f0c0a] text-white">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-32 min-h-[88vh] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=2000&q=80&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse at 30% 20%, rgba(217,119,6,0.40), transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(120,53,15,0.3), transparent 50%)",
            }}
          />
          <div className="relative max-w-6xl mx-auto px-6 w-full">
            <Reveal>
              <div className="flex items-center gap-2 text-amber-500">
                <Scissors className="h-5 w-5" />
                <span className="text-sm font-medium tracking-wider uppercase">
                  Nordcuts · Hamburg
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 text-6xl md:text-8xl font-semibold tracking-tight leading-[0.95]">
                Hand&shy;werk.
                <br />
                <span className="text-amber-500">Stil.</span> Präzision.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-xl text-lg text-white/60 leading-relaxed">
                Klassischer Haarschnitt und Bartpflege in Hamburg-Altona.
                Seit 2015. Nur nach Terminvereinbarung.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="#termin"
                  className="rounded-full bg-amber-500 text-black px-6 py-3 font-medium hover:bg-amber-400 transition"
                >
                  Termin buchen
                </a>
                <a
                  href="#leistungen"
                  className="rounded-full border border-white/20 px-6 py-3 font-medium hover:bg-white/5 transition"
                >
                  Leistungen & Preise
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Leistungen */}
        <section id="leistungen" className="py-24 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                Leistungen
              </h2>
            </Reveal>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {[
                { name: "Herrenhaarschnitt", price: "35€", time: "45 Min" },
                { name: "Bartpflege klassisch", price: "25€", time: "30 Min" },
                { name: "Haarschnitt + Bart", price: "55€", time: "60 Min" },
                { name: "Heißhandtuch-Rasur", price: "45€", time: "45 Min" },
                { name: "Kinderhaarschnitt", price: "20€", time: "30 Min" },
                { name: "Waschen & Styling", price: "15€", time: "20 Min" },
              ].map((s, i) => (
                <Reveal key={s.name} delay={i * 0.05}>
                  <div className="flex items-baseline justify-between py-5 border-b border-white/10">
                    <div>
                      <div className="text-lg font-medium">{s.name}</div>
                      <div className="text-sm text-white/40 mt-1">{s.time}</div>
                    </div>
                    <div className="text-lg font-semibold text-amber-500">
                      {s.price}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Atelier-Galerie */}
        <section className="py-24 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <div className="max-w-2xl">
                <div className="text-sm tracking-[0.25em] uppercase text-amber-500">
                  Im Atelier
                </div>
                <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
                  Handwerk in ruhiger Atmosphäre.
                </h2>
                <p className="mt-5 text-white/60 leading-relaxed">
                  Kein Massenbetrieb. Ein Stuhl, ein Kunde, volle
                  Aufmerksamkeit — wie Barbieren früher gemeint war.
                </p>
              </div>
            </Reveal>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                "1585747860715-2ba37e788b70",
                "1605497788044-5a32c7078486",
                "1599351431202-1e0f0137899a",
                "1596728325488-58c87691e9af",
              ].map((id, i) => (
                <Reveal key={id} delay={i * 0.06}>
                  <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-white/5 group">
                    <img
                      src={`https://images.unsplash.com/photo-${id}?w=600&q=80&auto=format&fit=crop`}
                      alt="Barbershop Atmosphäre"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Bewertungen */}
        <section className="py-24 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                ))}
                <span className="text-white/60 ml-2">4,9 · 287 Bewertungen auf Google</span>
              </div>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
                Was unsere Kunden sagen.
              </h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { text: "Bester Barbershop in Hamburg. Präzise Arbeit, entspannte Atmosphäre.", name: "Markus T." },
                { text: "Seit zwei Jahren Stammkunde. Jeder Schnitt sitzt perfekt.", name: "Daniel W." },
                { text: "Die Heißhandtuch-Rasur ist ein Erlebnis. Klare Empfehlung.", name: "Philipp R." },
              ].map((r, i) => (
                <Reveal key={r.name} delay={i * 0.1}>
                  <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                    <p className="text-white/80 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                    <div className="mt-4 text-sm text-white/50">— {r.name}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Termin */}
        <section id="termin" className="py-24 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Termin buchen.</h2>
              <p className="mt-6 text-white/60 leading-relaxed">
                Rufen Sie uns an oder nutzen Sie unser Online-Buchungssystem. Wir freuen uns auf Sie.
              </p>
              <div className="mt-10 space-y-5">
                <div className="flex items-center gap-4"><Phone className="h-5 w-5 text-amber-500" /><span>+49 40 123 456 78</span></div>
                <div className="flex items-center gap-4"><MapPin className="h-5 w-5 text-amber-500" /><span>Große Bergstraße 42, 22767 Hamburg</span></div>
                <div className="flex items-center gap-4"><Clock className="h-5 w-5 text-amber-500" /><span>Di–Fr 10–19 Uhr · Sa 9–16 Uhr</span></div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <form className="rounded-3xl bg-white/5 border border-white/10 p-8 space-y-4">
                <div><label className="block text-sm text-white/60 mb-2">Name</label><input className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 focus:outline-none focus:border-amber-500 transition" /></div>
                <div><label className="block text-sm text-white/60 mb-2">Telefon</label><input className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 focus:outline-none focus:border-amber-500 transition" /></div>
                <div><label className="block text-sm text-white/60 mb-2">Wunschtermin</label><input className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 focus:outline-none focus:border-amber-500 transition" /></div>
                <button type="button" className="w-full rounded-full bg-amber-500 text-black px-6 py-3 font-medium hover:bg-amber-400 transition">Anfrage senden</button>
              </form>
            </Reveal>
          </div>
        </section>

        <footer className="border-t border-white/10 py-10 text-center text-sm text-white/40">
          © {new Date().getFullYear()} Nordcuts Hamburg · Demo-Seite von{" "}
          <Link href="/" className="underline hover:text-white">Hugweb</Link>
        </footer>
      </div>
    </>
  );
}
