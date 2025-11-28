import type { Metadata } from "next";
import UUIDV4Client from "./UUIDV4Client";

export const metadata: Metadata = {
  title: "UUID v4 Generator - Random UUID",
  description: "Generate UUID v4 (random) identifiers instantly. The most commonly used UUID version with 122 random bits. Free online UUID v4 generator.",
  alternates: {
    canonical: "https://randomid.app/uuid/v4",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/uuid/v4",
    siteName: "Random ID Generator",
    title: "UUID v4 Generator - Random UUID",
    description: "Generate UUID v4 (random) identifiers instantly. The most commonly used UUID version with 122 random bits. Free online UUID v4 generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "UUID v4 Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UUID v4 Generator - Random UUID",
    description: "Generate UUID v4 (random) identifiers instantly. The most commonly used UUID version with 122 random bits. Free online UUID v4 generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "UUID v4 Generator",
  description: "Generate UUID v4 (random) identifiers instantly. The most commonly used UUID version with 122 random bits. Free online UUID v4 generator.",
  url: "https://randomid.app/uuid/v4",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "UUID v4 generation",
    "Random UUIDs",
    "122 random bits",
    "Most common UUID version",
  ],
};

export default function UUIDV4Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <UUIDV4Client />
    </>
  );
}
