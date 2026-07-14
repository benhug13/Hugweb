"use client";

import { useState } from "react";
import { ShoppingCart, Plus, Check } from "lucide-react";
import Reveal from "@/components/Reveal";

// Beispiel-Shop fuer den Entwurf: Produkt-Karten mit Warenkorb-Optik.
// Rein visuell — der Warenkorb zaehlt lokal, es gibt keine echte Bezahlung.
// Bilder direkt vom Bild-Scaler von highdefinition.ch (echte Produkte).
const hd = (name: string) =>
  `https://www.highdefinition.ch/imagescaler/content/${name}_w800fg_h600fg.jpeg`;

const products = [
  {
    name: "LG OLED evo G5 65\"",
    category: "Fernseher",
    price: "2'490",
    img: hd("lgoledc4"),
  },
  {
    name: "Bowers & Wilkins 702 S3 (Paar)",
    category: "Lautsprecher",
    price: "4'900",
    img: hd("bw702s3"),
  },
  {
    name: "Marantz Cinema 30",
    category: "AV-Receiver",
    price: "3'490",
    img: hd("cinema301"),
  },
  {
    name: "Sony BRAVIA Projektor XW7000",
    category: "Projektion",
    price: "13'900",
    img: hd("XW7000"),
  },
  {
    name: "KEF R Meta Serie",
    category: "HiFi",
    price: "2'990",
    img: hd("KEFrSeries"),
  },
  {
    name: "Barco 4K8 Projektor",
    category: "Projektion",
    price: "auf Anfrage",
    img: hd("barco4k8"),
  },
];

export default function ShopDemo() {
  const [cart, setCart] = useState(0);
  const [added, setAdded] = useState<number | null>(null);

  function add(i: number) {
    setCart((c) => c + 1);
    setAdded(i);
    setTimeout(() => setAdded((a) => (a === i ? null : a)), 1200);
  }

  return (
    <section id="shop" className="py-24 md:py-32 border-t border-black/10">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="font-[family-name:var(--font-mono)] text-xs tracking-[0.35em] uppercase text-red-600">
              Online-Shop
            </div>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
              Direkt online bestellen.
            </h2>
            <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
              Beispiel eines Online-Shops — Ihre Produkte bequem von zu Hause,
              mit Bezahlung per Kreditkarte oder TWINT. Optional zubuchbar.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.05}>
              <div className="group h-full overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition hover:border-red-300 hover:shadow-md">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wider text-red-600">
                    {p.category}
                  </div>
                  <h3 className="mt-1 text-lg font-semibold text-neutral-900">{p.name}</h3>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-semibold text-neutral-900">
                      {p.price === "auf Anfrage" ? "Auf Anfrage" : `CHF ${p.price}`}
                    </span>
                    <button
                      type="button"
                      onClick={() => add(i)}
                      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                        added === i
                          ? "bg-emerald-600 text-white"
                          : "bg-red-600 text-white hover:bg-red-500"
                      }`}
                    >
                      {added === i ? (
                        <>
                          <Check className="h-4 w-4" /> Hinzugefügt
                        </>
                      ) : (
                        <>
                          <Plus className="h-4 w-4" /> In den Warenkorb
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-neutral-500">
          Beispiel-Ansicht · echte Produkte, Preise und Bezahlung richten wir
          gemeinsam ein.
        </p>
      </div>

      {/* Schwebender Warenkorb */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          cart > 0
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <div className="flex items-center gap-3 rounded-full bg-red-600 px-5 py-3 font-medium text-white shadow-lg shadow-red-600/25">
          <ShoppingCart className="h-5 w-5" />
          <span>{cart} im Warenkorb</span>
        </div>
      </div>
    </section>
  );
}
