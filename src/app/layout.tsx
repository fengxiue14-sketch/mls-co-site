import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mls-co-site.vercel.app"),
  title: {
    default: "MLS Co — Agence Digitale | Sites Web, SaaS, Conseil",
    template: "%s | MLS Co",
  },
  description:
    "MLS Co transforme votre activité avec des solutions digitales sur mesure. Sites web, SaaS, conseil digital et maintenance à Ouagadougou, Burkina Faso.",
  keywords: [
    "MLS Co",
    "agence digitale",
    "site web",
    "SaaS",
    "développement web",
    "Burkina Faso",
    "Ouagadougou",
    "transformation digitale",
    "conseil digital",
    "maintenance informatique",
  ],
  authors: [{ name: "MLS Co" }],
  creator: "MLS Co",
  publisher: "MLS Co",
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://mls-co-site.vercel.app",
    siteName: "MLS Co",
    title: "MLS Co — Agence Digitale",
    description:
      "Transformez votre activité avec des solutions digitales sur mesure.",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "MLS Co — Agence Digitale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MLS Co — Agence Digitale",
    description:
      "Transformez votre activité avec des solutions digitales sur mesure.",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1628",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}