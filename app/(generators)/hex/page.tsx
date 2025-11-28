import type { Metadata } from "next";
import HexClient from "./HexClient";

export const metadata: Metadata = {
  title: "Hex ID Generator - Hexadecimal Encoded Random Bytes",
  description: "Generate Hex (Hexadecimal) encoded random identifiers instantly. Base-16 encoding for unique identifiers, API keys, and tokens. Free online Hex ID generator.",
  alternates: {
    canonical: "https://randomid.app/hex",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/hex",
    siteName: "Random ID Generator",
    title: "Hex ID Generator - Hexadecimal Encoded Random Bytes",
    description: "Generate Hex (Hexadecimal) encoded random identifiers instantly. Base-16 encoding for unique identifiers, API keys, and tokens. Free online Hex ID generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Hex ID Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hex ID Generator - Hexadecimal Encoded Random Bytes",
    description: "Generate Hex (Hexadecimal) encoded random identifiers instantly. Base-16 encoding for unique identifiers, API keys, and tokens. Free online Hex ID generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Hex ID Generator",
  description: "Generate Hex (Hexadecimal) encoded random identifiers instantly. Base-16 encoding for unique identifiers, API keys, and tokens. Free online Hex ID generator.",
  url: "https://randomid.app/hex",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Hexadecimal encoding",
    "Base-16 format",
    "API key generation",
    "Token generation",
  ],
};

export default function HexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HexClient />
    </>
  );
}

