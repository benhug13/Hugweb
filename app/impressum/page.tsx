import Link from "next/link";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Impressum | Nordweb",
  description: "Impressum und rechtliche Angaben von Nordweb.",
};

export default function Impressum() {
  return (
    <>
      <Nav />
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <div className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Rechtliches</div>
        <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">Impressum</h1>

        <div className="mt-12 prose prose-neutral max-w-none">
          <p className="text-neutral-600 leading-relaxed">Angaben gemäss Art. 322a OR sowie FMG / UWG.</p>

          <h2 className="mt-12 text-xl font-semibold">Verantwortlich für den Inhalt</h2>
          <div className="mt-3 text-neutral-700 leading-relaxed space-y-1">
            <div>Thomas Hug</div>
            <div className="text-sm text-neutral-500">In gesetzlicher Vertretung von Ben Hug (minderjährig)</div>
          </div>

          <h2 className="mt-10 text-xl font-semibold">Korrespondenzadresse</h2>
          <div className="mt-3 text-neutral-700 leading-relaxed space-y-1">
            <div>c/o Nine Internet Solutions AG</div>
            <div>Badenerstrasse 47</div>
            <div>8004 Zürich</div>
            <div>Schweiz</div>
          </div>

          <h2 className="mt-10 text-xl font-semibold">Kontakt</h2>
          <div className="mt-3 text-neutral-700 leading-relaxed">
            E-Mail: <a href="mailto:benhug123@icloud.com" className="underline hover:text-neutral-900">benhug123@icloud.com</a>
          </div>

          <h2 className="mt-12 text-xl font-semibold">Haftungsausschluss</h2>
          <p className="mt-3 text-neutral-700 leading-relaxed">Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschliesslich deren Betreiber verantwortlich.</p>
          <p className="mt-3 text-neutral-700 leading-relaxed">Wir bemühen uns, sämtliche Informationen auf dieser Webseite korrekt und aktuell zu halten. Trotzdem können Fehler oder Unklarheiten nicht ausgeschlossen werden. Eine Haftung für Schäden, die aus der Nutzung dieser Webseite entstehen, ist ausgeschlossen.</p>

          <h2 className="mt-10 text-xl font-semibold">Urheberrecht</h2>
          <p className="mt-3 text-neutral-700 leading-relaxed">Sämtliche Inhalte dieser Webseite (Texte, Bilder, Grafiken, Layout) sind urheberrechtlich geschützt. Eine Verwendung — insbesondere die Vervielfältigung oder Speicherung in Datenbanken — bedarf der vorherigen schriftlichen Zustimmung.</p>

          <h2 className="mt-10 text-xl font-semibold">Bildquellen</h2>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            Die auf den Demo-Seiten verwendeten Bilder stammen von{" "}
            <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-neutral-900">Unsplash</a>{" "}
            und unterliegen der Unsplash-Lizenz.
          </p>

          <p className="mt-16 text-sm text-neutral-500">
            Stand: {new Date().toLocaleDateString("de-CH", { year: "numeric", month: "long" })}
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-black/10">
          <Link href="/" className="text-sm text-neutral-600 hover:text-neutral-900 underline">← Zurück zur Startseite</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
