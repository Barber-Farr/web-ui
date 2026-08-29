import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";

import { bookingUrl, instagramUrl } from "./data/links";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Barber Farr | Independent Barber in Tetbury",
    template: "%s | Barber Farr",
  },
  description:
    "Modern, considered barbering in Tetbury. Book your next cut with Barber Farr at Moli Barbers.",
  applicationName: "Barber Farr",
  authors: [{ name: "Barber Farr" }],
  creator: "Barber Farr",
  publisher: "Barber Farr",
  keywords: [
    "Barber Farr",
    "barber Tetbury",
    "Tetbury barber",
    "haircuts Tetbury",
    "skin fade Tetbury",
    "taper fade Tetbury",
    "men's haircuts Tetbury",
    "Moli Barbers",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: "Barber Farr",
    title: "Barber Farr | Independent Barber in Tetbury",
    description: "Classic cuts, technical trims and modern barbering from Barber Farr in Tetbury.",
    images: [
      {
        url: "/images/barber-farr-social.jpg",
        alt: "Barber Farr — Classic Cuts and Technical Trims",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barber Farr | Independent Barber in Tetbury",
    description: "Classic cuts, technical trims and modern barbering from Barber Farr in Tetbury.",
    images: ["/images/barber-farr-social.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#f5f2ec",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#111210",
    },
  ],
};

const themeScript = `
  try {
    const savedTheme = localStorage.getItem("barber-farr-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    document.documentElement.classList.toggle(
      "dark",
      savedTheme ? savedTheme === "dark" : prefersDark,
    );
  } catch {}
`;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Charlie Farr",
  alternateName: "Barber Farr",
  url: siteUrl,
  image: new URL("/images/barber-farr-logo.png", siteUrl).toString(),
  jobTitle: "Barber",
  description:
    "Independent barber offering classic cuts, technical trims and modern barbering in Tetbury.",
  sameAs: [instagramUrl],
  areaServed: {
    "@type": "Place",
    name: "Tetbury",
  },
  worksFor: {
    "@type": "HairSalon",
    name: "Moli Barbers",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Avening G2 Priory Park, London Road",
      addressLocality: "Tetbury",
      postalCode: "GL8 8HZ",
      addressCountry: "GB",
    },
  },
  potentialAction: {
    "@type": "ReserveAction",
    target: bookingUrl,
    name: "Book a haircut",
  },
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
};

export default RootLayout;
