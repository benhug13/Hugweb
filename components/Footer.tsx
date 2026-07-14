export default function Footer() {
  return (
    <footer className="border-t border-black/5 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm text-neutral-500">
        <div>
          <div className="text-neutral-900 font-semibold">Hugweb</div>
          <div>Moderne Webseiten. Klare Preise. Persönlicher Service.</div>
        </div>
        <div className="flex gap-6">
          <a href="/#kontakt" className="hover:text-neutral-900 transition">
            Kontakt
          </a>
          <a href="/impressum" className="hover:text-neutral-900 transition">
            Impressum
          </a>
          <a href="/datenschutz" className="hover:text-neutral-900 transition">
            Datenschutz
          </a>
        </div>
        <div>© {new Date().getFullYear()} Hugweb</div>
      </div>
    </footer>
  );
}
