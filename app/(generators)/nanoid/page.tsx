import type { Metadata } from "next";
import NanoIDClient from "./NanoIDClient";

export const metadata: Metadata = {
  title: "NanoID Generator - URL-safe Unique ID",
  description: "Generate NanoID identifiers instantly. Small, URL-safe, cryptographically strong unique string IDs. Perfect for URLs and database keys. Free online NanoID generator.",
  alternates: {
    canonical: "https://randomid.app/nanoid",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/nanoid",
    siteName: "Random ID Generator",
    title: "NanoID Generator - URL-safe Unique ID",
    description: "Generate NanoID identifiers instantly. Small, URL-safe, cryptographically strong unique string IDs. Perfect for URLs and database keys. Free online NanoID generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "NanoID Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NanoID Generator - URL-safe Unique ID",
    description: "Generate NanoID identifiers instantly. Small, URL-safe, cryptographically strong unique string IDs. Perfect for URLs and database keys. Free online NanoID generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "NanoID Generator",
  description: "Generate NanoID identifiers instantly. Small, URL-safe, cryptographically strong unique string IDs. Perfect for URLs and database keys. Free online NanoID generator.",
  url: "https://randomid.app/nanoid",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "NanoID generation",
    "URL-safe format",
    "Cryptographically strong",
    "Small size identifiers",
  ],
};

export default function NanoIDPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <NanoIDClient />
    </>
  );
}
