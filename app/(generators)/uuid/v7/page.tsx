import type { Metadata } from "next";
import UUIDV7Client from "./UUIDV7Client";

export const metadata: Metadata = {
  title: "UUID v7 Generator - Time-ordered UUID",
  description: "Generate UUID v7 identifiers instantly. Time-ordered UUIDs with Unix epoch timestamp, perfect for database primary keys. Free online UUID v7 generator.",
  alternates: {
    canonical: "https://randomid.app/uuid/v7",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/uuid/v7",
    siteName: "Random ID Generator",
    title: "UUID v7 Generator - Time-ordered UUID",
    description: "Generate UUID v7 identifiers instantly. Time-ordered UUIDs with Unix epoch timestamp, perfect for database primary keys. Free online UUID v7 generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "UUID v7 Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UUID v7 Generator - Time-ordered UUID",
    description: "Generate UUID v7 identifiers instantly. Time-ordered UUIDs with Unix epoch timestamp, perfect for database primary keys. Free online UUID v7 generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "UUID v7 Generator",
  description: "Generate UUID v7 identifiers instantly. Time-ordered UUIDs with Unix epoch timestamp, perfect for database primary keys. Free online UUID v7 generator.",
  url: "https://randomid.app/uuid/v7",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "UUID v7 generation",
    "Time-ordered UUIDs",
    "Unix epoch timestamp",
    "Database primary keys",
  ],
};

export default function UUIDV7Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <UUIDV7Client />
    </>
  );
}
