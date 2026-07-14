import Link from "next/link";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Datenschutzerklärung | Hugweb",
  description: "Datenschutzerklärung von Hugweb gemäss DSG.",
};

export default function Datenschutz() {
  return (
    <>
      <Nav />
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <div className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Rechtliches</div>
        <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">Datenschutzerklärung</h1>
        <p className="mt-4 text-neutral-600">Hugweb nimmt Ihre Privatsphäre ernst. Diese Erklärung beschreibt knapp und ehrlich, welche Daten wir erheben, warum und wie Sie Ihre Rechte ausüben können.</p>

        <div className="mt-12 space-y-12 text-neutral-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-neutral-900">1. Verantwortliche Stelle</h2>
            <div className="mt-3 space-y-1">
              <div>Thomas Hug</div>
              <div className="text-sm text-neutral-500">In gesetzlicher Vertretung von Ben Hug (minderjährig)</div>
              <div className="pt-2">c/o Nine Internet Solutions AG</div>
              <div>Badenerstrasse 47, 8004 Zürich, Schweiz</div>
              <div className="pt-2">
                E-Mail: <a href="mailto:benhug123@icloud.com" className="underline hover:text-neutral-900">benhug123@icloud.com</a>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900">2. Welche Daten erheben wir?</h2>
            <p className="mt-3">Wir erheben nur Daten, die Sie uns selbst aktiv mitteilen — vor allem wenn Sie uns per E-Mail kontaktieren:</p>
            <ul className="mt-3 space-y-2 list-disc pl-5">
              <li>Ihr Name (sofern Sie ihn angeben)</li>
              <li>Ihre E-Mail-Adresse</li>
              <li>Inhalt Ihrer Nachricht</li>
            </ul>
            <p className="mt-3">Wir erfassen <strong>keine</strong> automatisch erhobenen Tracking-Daten, setzen <strong>keine</strong> Cookies, nutzen <strong>kein</strong> Google Analytics und <strong>keine</strong> Werbe-Pixel. Einfach und sauber.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900">3. Hosting</h2>
            <p className="mt-3">
              Diese Webseite wird über die Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789, USA) gehostet. Vercel kann technisch notwendige Daten wie Ihre IP-Adresse, den verwendeten Browser und Zeitpunkt des Zugriffs in Server-Logs erfassen. Diese Daten sind erforderlich, damit die Webseite funktioniert. Vercel hat eigene{" "}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-neutral-900">Datenschutzbestimmungen</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900">4. Zweck der Datenverarbeitung</h2>
            <p className="mt-3">Ihre Daten werden ausschliesslich verwendet, um auf Ihre Anfrage zu antworten und das anschliessende Geschäfts­verhältnis abzuwickeln (Offerte, Auftrag, Rechnung). Keine Werbung. Keine Weitergabe an Dritte. Keine Verkaufsabsicht.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900">5. Aufbewahrungsdauer</h2>
            <p className="mt-3">E-Mail-Anfragen ohne Folge­auftrag werden nach 12 Monaten gelöscht. Bei Auftrags­erteilung gelten die gesetzlichen Aufbewahrungs­fristen (CH: 10 Jahre Geschäfts­bücher).</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900">6. Ihre Rechte</h2>
            <p className="mt-3">Nach Schweizer Datenschutzgesetz (DSG) haben Sie jederzeit das Recht auf:</p>
            <ul className="mt-3 space-y-2 list-disc pl-5">
              <li><strong>Auskunft</strong> — welche Daten wir über Sie haben</li>
              <li><strong>Berichtigung</strong> — falsche Daten korrigieren lassen</li>
              <li><strong>Löschung</strong> — Ihre Daten entfernen lassen</li>
              <li><strong>Datenübertragbarkeit</strong> — Sie erhalten Ihre Daten in einem gängigen Format</li>
              <li><strong>Widerspruch</strong> — gegen die Verarbeitung Einspruch erheben</li>
            </ul>
            <p className="mt-3">
              Schreiben Sie uns einfach eine kurze E-Mail an{" "}
              <a href="mailto:benhug123@icloud.com" className="underline hover:text-neutral-900">benhug123@icloud.com</a>{" "}
              — wir antworten innert 5 Werktagen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900">7. Datenweitergabe</h2>
            <p className="mt-3">Wir geben Ihre Daten nicht an Dritte weiter — ausser an technische Dienstleister, die für den Betrieb der Webseite nötig sind (siehe Punkt 3 — Hosting bei Vercel). Eine Weitergabe zu Werbezwecken findet nicht statt.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900">8. Änderungen dieser Erklärung</h2>
            <p className="mt-3">Wir können diese Datenschutz­erklärung jederzeit anpassen. Die jeweils aktuelle Version finden Sie auf dieser Seite.</p>
          </section>

          <p className="text-sm text-neutral-500 pt-4">
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
