import type { Metadata } from "next";
import ShortUUIDClient from "./ShortUUIDClient";

export const metadata: Metadata = {
  title: "ShortUUID Generator - Shortened UUID",
  description: "Generate ShortUUID identifiers instantly. Compact, URL-friendly UUID representation using Base58 encoding. Free online ShortUUID generator.",
  alternates: {
    canonical: "https://randomid.app/shortuuid",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/shortuuid",
    siteName: "Random ID Generator",
    title: "ShortUUID Generator - Shortened UUID",
    description: "Generate ShortUUID identifiers instantly. Compact, URL-friendly UUID representation using Base58 encoding. Free online ShortUUID generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ShortUUID Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShortUUID Generator - Shortened UUID",
    description: "Generate ShortUUID identifiers instantly. Compact, URL-friendly UUID representation using Base58 encoding. Free online ShortUUID generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "ShortUUID Generator",
  description: "Generate ShortUUID identifiers instantly. Compact, URL-friendly UUID representation using Base58 encoding. Free online ShortUUID generator.",
  url: "https://randomid.app/shortuuid",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "ShortUUID generation",
    "Compact format",
    "URL-friendly",
    "Base58 encoding",
  ],
};

export default function ShortUUIDPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ShortUUIDClient />
    </>
  );
}

