import type { Metadata } from "next";
import Base32Client from "./Base32Client";

export const metadata: Metadata = {
  title: "Base32 ID Generator - Base32 Encoded Random Bytes",
  description: "Generate Base32-encoded random identifiers instantly. Case-insensitive, human-readable encoding. Free online Base32 ID generator.",
  alternates: {
    canonical: "https://randomid.app/base32",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/base32",
    siteName: "Random ID Generator",
    title: "Base32 ID Generator - Base32 Encoded Random Bytes",
    description: "Generate Base32-encoded random identifiers instantly. Case-insensitive, human-readable encoding. Free online Base32 ID generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Base32 ID Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Base32 ID Generator - Base32 Encoded Random Bytes",
    description: "Generate Base32-encoded random identifiers instantly. Case-insensitive, human-readable encoding. Free online Base32 ID generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Base32 ID Generator",
  description: "Generate Base32-encoded random identifiers instantly. Case-insensitive, human-readable encoding. Free online Base32 ID generator.",
  url: "https://randomid.app/base32",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Base32 encoding",
    "Random identifier generation",
    "Case-insensitive encoding",
    "Human-readable format",
  ],
};

export default function Base32Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Base32Client />
    </>
  );
}

