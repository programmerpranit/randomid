import type { Metadata } from "next";
import UUIDV5Client from "./UUIDV5Client";

export const metadata: Metadata = {
  title: "UUID v5 Generator - Name-based UUID (SHA-1)",
  description: "Generate UUID v5 identifiers instantly. Name-based UUIDs using SHA-1 hashing (deterministic, preferred over v3). Free online UUID v5 generator.",
  alternates: {
    canonical: "https://randomid.app/uuid/v5",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/uuid/v5",
    siteName: "Random ID Generator",
    title: "UUID v5 Generator - Name-based UUID (SHA-1)",
    description: "Generate UUID v5 identifiers instantly. Name-based UUIDs using SHA-1 hashing (deterministic, preferred over v3). Free online UUID v5 generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "UUID v5 Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UUID v5 Generator - Name-based UUID (SHA-1)",
    description: "Generate UUID v5 identifiers instantly. Name-based UUIDs using SHA-1 hashing (deterministic, preferred over v3). Free online UUID v5 generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "UUID v5 Generator",
  description: "Generate UUID v5 identifiers instantly. Name-based UUIDs using SHA-1 hashing (deterministic, preferred over v3). Free online UUID v5 generator.",
  url: "https://randomid.app/uuid/v5",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "UUID v5 generation",
    "Name-based UUIDs",
    "SHA-1 hashing",
    "Deterministic generation",
  ],
};

export default function UUIDV5Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <UUIDV5Client />
    </>
  );
}
