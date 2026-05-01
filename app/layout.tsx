import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nordweb-drab.vercel.app"),
  title: "Nordweb — Moderne Webseiten für Ihr Unternehmen",
  description:
    "Moderne, schnelle Webseiten für Schweizer KMU — Restaurants, Handwerker, Coiffeure und mehr. Festpreis ab 1.490 CHF. Online in 14 Tagen.",
  openGraph: {
    title: "Nordweb — Webseiten, die verkaufen",
    description:
      "Festpreis ab 1.490 CHF · Online in 14 Tagen · Kein Baukasten, kein Abo-Zwang.",
    url: "https://nordweb-drab.vercel.app",
    siteName: "Nordweb",
    locale: "de_CH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nordweb — Webseiten, die verkaufen",
    description:
      "Festpreis ab 1.490 CHF · Online in 14 Tagen · Kein Baukasten.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-neutral-900">
        {children}
      </body>
    </html>
  );
}
