import type { Metadata } from "next";
import Base58Client from "./Base58Client";

export const metadata: Metadata = {
  title: "Base58 ID Generator - Base58 Encoded Random Bytes",
  description: "Generate Base58-encoded random identifiers instantly. Compact, URL-safe encoding without ambiguous characters. Free online Base58 ID generator.",
  alternates: {
    canonical: "https://randomid.app/base58",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/base58",
    siteName: "Random ID Generator",
    title: "Base58 ID Generator - Base58 Encoded Random Bytes",
    description: "Generate Base58-encoded random identifiers instantly. Compact, URL-safe encoding without ambiguous characters. Free online Base58 ID generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Base58 ID Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Base58 ID Generator - Base58 Encoded Random Bytes",
    description: "Generate Base58-encoded random identifiers instantly. Compact, URL-safe encoding without ambiguous characters. Free online Base58 ID generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Base58 ID Generator",
  description: "Generate Base58-encoded random identifiers instantly. Compact, URL-safe encoding without ambiguous characters. Free online Base58 ID generator.",
  url: "https://randomid.app/base58",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Base58 encoding",
    "URL-safe format",
    "No ambiguous characters",
    "Compact encoding",
  ],
};

export default function Base58Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Base58Client />
    </>
  );
}

