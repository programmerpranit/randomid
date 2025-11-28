import type { Metadata } from "next";
import UUIDV3Client from "./UUIDV3Client";

export const metadata: Metadata = {
  title: "UUID v3 Generator - Name-based UUID (MD5)",
  description: "Generate UUID v3 identifiers instantly. Name-based UUIDs using MD5 hashing (deterministic). Free online UUID v3 generator.",
  alternates: {
    canonical: "https://randomid.app/uuid/v3",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/uuid/v3",
    siteName: "Random ID Generator",
    title: "UUID v3 Generator - Name-based UUID (MD5)",
    description: "Generate UUID v3 identifiers instantly. Name-based UUIDs using MD5 hashing (deterministic). Free online UUID v3 generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "UUID v3 Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UUID v3 Generator - Name-based UUID (MD5)",
    description: "Generate UUID v3 identifiers instantly. Name-based UUIDs using MD5 hashing (deterministic). Free online UUID v3 generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "UUID v3 Generator",
  description: "Generate UUID v3 identifiers instantly. Name-based UUIDs using MD5 hashing (deterministic). Free online UUID v3 generator.",
  url: "https://randomid.app/uuid/v3",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "UUID v3 generation",
    "Name-based UUIDs",
    "MD5 hashing",
    "Deterministic generation",
  ],
};

export default function UUIDV3Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <UUIDV3Client />
    </>
  );
}
