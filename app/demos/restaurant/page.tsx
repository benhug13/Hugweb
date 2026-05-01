import Link from "next/link";
import { ArrowLeft, Clock, MapPin, Phone, Utensils } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Ostsee Stube — Restaurant Demo | Nordweb",
  description: "Demo-Webseite für ein modernes Restaurant.",
};

export default function RestaurantDemo() {
  return (
    <>
      <div className="bg-black text-white text-xs py-2 text-center sticky top-0 z-50">
        Demo-Seite von{" "}
        <Link href="/" className="underline font-medium">Nordweb</Link>
        <Link href="/#demos" className="ml-4 inline-flex items-center gap-1 opacity-80 hover:opacity-100">
          <ArrowLeft className="h-3 w-3" /> Zurück
        </Link>
      </div>

      <div className="bg-[#faf7f2] text-stone-900">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-32 min-h-[88vh] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=2000&q=80&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#faf7f2]/95 via-[#faf7f2]/85 to-[#faf7f2]/70" />
          <div
            className="absolute inset-0 opacity-50"
            style={{
              background:
                "radial-gradient(ellipse at 20% 20%, rgba(190,30,45,0.15), transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(120,53,15,0.12), transparent 50%)",
            }}
          />
          <div className="relative max-w-6xl mx-auto px-6 text-center w-full">
            <Reveal>
              <div className="inline-flex items-center gap-2 text-rose-800">
                <Utensils className="h-4 w-4" />
                <span className="text-sm font-medium tracking-[0.25em] uppercase">
                  Ostsee Stube · seit 1978
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 text-6xl md:text-8xl font-serif tracking-tight leading-[0.95] italic">
                Frisch vom Meer.
                <br />
                <span className="not-italic font-light">Direkt auf den Tisch.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-xl mx-auto text-lg text-stone-600 leading-relaxed">
                Familiengeführtes Restaurant an der Ostseeküste. Regionale
                Küche mit mediterranem Einschlag — ehrlich, saisonal, ohne
                Schnickschnack.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
                <a href="#reservieren" className="rounded-full bg-rose-900 text-white px-6 py-3 font-medium hover:bg-rose-800 transition">Tisch reservieren</a>
                <a href="#menu" className="rounded-full border border-stone-900/20 px-6 py-3 font-medium hover:bg-stone-900/5 transition">Speisekarte</a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Menu */}
        <section id="menu" className="py-24 border-t border-stone-900/10">
          <div className="max-w-4xl mx-auto px-6">
            <Reveal>
              <div className="text-center">
                <div className="text-sm tracking-[0.25em] uppercase text-rose-800">Unsere Karte</div>
                <h2 className="mt-3 text-4xl md:text-5xl font-serif italic">Aktuelle Empfehlungen</h2>
                <p className="mt-4 text-stone-600">Wechselnde Saisonkarte. Stand: diese Woche.</p>
              </div>
            </Reveal>

            <div className="mt-16 space-y-12">
              {[
                {
                  category: "Vorspeisen",
                  items: [
                    { name: "Matjes Hausfrauenart", desc: "Apfel, Zwiebeln, Gurke, Bratkartoffeln", price: "14,50" },
                    { name: "Krabbensuppe", desc: "Nordseekrabben, Dill, Sahne", price: "11,00" },
                    { name: "Carpaccio vom Rind", desc: "Parmesan, Rucola, Trüffelöl", price: "15,80" },
                  ],
                },
                {
                  category: "Hauptgerichte",
                  items: [
                    { name: "Gebratene Dorade", desc: "Rosmarinkartoffeln, Mediterranes Gemüse", price: "28,90" },
                    { name: "Nordsee-Scholle", desc: "In Butter gebraten, Petersilienkartoffeln", price: "26,50" },
                    { name: "Rinderfilet", desc: "Pfeffersauce, Bohnen, Kartoffelgratin", price: "34,00" },
                    { name: "Pasta al Limone", desc: "Zitrone, Parmesan, Pinienkerne", price: "18,50" },
                  ],
                },
                {
                  category: "Desserts",
                  items: [
                    { name: "Rote Grütze", desc: "Hausgemacht, mit Vanillesauce", price: "8,50" },
                    { name: "Tiramisu", desc: "Nach Familienrezept", price: "9,00" },
                  ],
                },
              ].map((section, i) => (
                <Reveal key={section.category} delay={i * 0.1}>
                  <div>
                    <h3 className="text-2xl font-serif italic text-rose-800 mb-6">{section.category}</h3>
                    <div className="space-y-5">
                      {section.items.map((item) => (
                        <div key={item.name} className="flex items-baseline gap-4">
                          <div className="flex-1">
                            <div className="flex items-baseline gap-3">
                              <span className="font-medium">{item.name}</span>
                              <span className="flex-1 border-b border-dotted border-stone-900/20" />
                              <span className="font-medium">{item.price} €</span>
                            </div>
                            <p className="text-sm text-stone-500 mt-1">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Galerie */}
        <section className="py-24 border-t border-stone-900/10">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <div className="text-sm tracking-[0.25em] uppercase text-rose-800">Eindrücke</div>
                <h2 className="mt-3 text-4xl md:text-5xl font-serif italic">Atmosphäre &amp; Küche.</h2>
                <p className="mt-4 text-stone-600 leading-relaxed">
                  Holz, Leinen, Kerzenlicht — und Gerichte, die seit
                  vier Jahrzehnten überzeugen.
                </p>
              </div>
            </Reveal>
            <div className="mt-14 grid grid-cols-12 gap-3 md:gap-4">
              <Reveal className="col-span-12 md:col-span-8">
                <div className="aspect-[16/10] overflow-hidden rounded-3xl">
                  <img src="https://images.unsplash.com/photo-1538333581680-29dd4752ddf2?w=1400&q=80&auto=format&fit=crop" alt="Restaurant-Atmosphäre" className="w-full h-full object-cover" />
                </div>
              </Reveal>
              <Reveal delay={0.08} className="col-span-12 md:col-span-4">
                <div className="aspect-[16/10] md:aspect-auto md:h-full overflow-hidden rounded-3xl">
                  <img src="https://images.unsplash.com/photo-1583354608715-177553a4035e?w=900&q=80&auto=format&fit=crop" alt="Gericht" className="w-full h-full object-cover" />
                </div>
              </Reveal>
              <Reveal delay={0.16} className="col-span-6 md:col-span-4">
                <div className="aspect-square overflow-hidden rounded-3xl">
                  <img src="https://images.unsplash.com/photo-1560130934-590b85fc08e7?w=800&q=80&auto=format&fit=crop" alt="Tischdetail" className="w-full h-full object-cover" />
                </div>
              </Reveal>
              <Reveal delay={0.24} className="col-span-6 md:col-span-8">
                <div className="aspect-square md:aspect-[16/9] overflow-hidden rounded-3xl">
                  <img src="https://images.unsplash.com/photo-1613274554329-70f997f5789f?w=1400&q=80&auto=format&fit=crop" alt="Restaurant-Innenraum" className="w-full h-full object-cover" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Reservierung */}
        <section id="reservieren" className="py-24 border-t border-stone-900/10 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-serif italic">Tisch reservieren.</h2>
              <p className="mt-6 text-stone-600 leading-relaxed">
                Am Wochenende empfehlen wir eine Reservierung. Rufen Sie an
                oder nutzen Sie das Formular — wir bestätigen innerhalb einer
                Stunde.
              </p>
              <div className="mt-10 space-y-5">
                <div className="flex items-center gap-4"><Phone className="h-5 w-5 text-rose-800" /><span>+49 451 987 654 32</span></div>
                <div className="flex items-center gap-4"><MapPin className="h-5 w-5 text-rose-800" /><span>Strandpromenade 18, 23683 Scharbeutz</span></div>
                <div className="flex items-center gap-4"><Clock className="h-5 w-5 text-rose-800" /><span>Di–So 12–22 Uhr · Montag Ruhetag</span></div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <form className="rounded-3xl bg-stone-50 border border-stone-900/10 p-8 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-sm text-stone-600 mb-2">Datum</label><input className="w-full rounded-xl bg-white border border-stone-900/10 px-4 py-3 focus:outline-none focus:border-rose-800 transition" /></div>
                  <div><label className="block text-sm text-stone-600 mb-2">Uhrzeit</label><input className="w-full rounded-xl bg-white border border-stone-900/10 px-4 py-3 focus:outline-none focus:border-rose-800 transition" /></div>
                </div>
                <div><label className="block text-sm text-stone-600 mb-2">Personen</label><input className="w-full rounded-xl bg-white border border-stone-900/10 px-4 py-3 focus:outline-none focus:border-rose-800 transition" /></div>
                <div><label className="block text-sm text-stone-600 mb-2">Name</label><input className="w-full rounded-xl bg-white border border-stone-900/10 px-4 py-3 focus:outline-none focus:border-rose-800 transition" /></div>
                <div><label className="block text-sm text-stone-600 mb-2">Telefon</label><input className="w-full rounded-xl bg-white border border-stone-900/10 px-4 py-3 focus:outline-none focus:border-rose-800 transition" /></div>
                <button type="button" className="w-full rounded-full bg-rose-900 text-white px-6 py-3 font-medium hover:bg-rose-800 transition">Reservierung anfragen</button>
              </form>
            </Reveal>
          </div>
        </section>

        <footer className="border-t border-stone-900/10 py-10 text-center text-sm text-stone-500">
          © {new Date().getFullYear()} Ostsee Stube · Demo-Seite von{" "}
          <Link href="/" className="underline hover:text-stone-900">Nordweb</Link>
        </footer>
      </div>
    </>
  );
}
