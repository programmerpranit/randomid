import type { Metadata } from "next";
import UUIDV6Client from "./UUIDV6Client";

export const metadata: Metadata = {
  title: "UUID v6 Generator - Time-ordered UUID",
  description: "Generate UUID v6 identifiers instantly. Time-ordered UUIDs for better database indexing (RFC 4122 draft). Free online UUID v6 generator.",
  alternates: {
    canonical: "https://randomid.app/uuid/v6",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/uuid/v6",
    siteName: "Random ID Generator",
    title: "UUID v6 Generator - Time-ordered UUID",
    description: "Generate UUID v6 identifiers instantly. Time-ordered UUIDs for better database indexing (RFC 4122 draft). Free online UUID v6 generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "UUID v6 Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UUID v6 Generator - Time-ordered UUID",
    description: "Generate UUID v6 identifiers instantly. Time-ordered UUIDs for better database indexing (RFC 4122 draft). Free online UUID v6 generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "UUID v6 Generator",
  description: "Generate UUID v6 identifiers instantly. Time-ordered UUIDs for better database indexing (RFC 4122 draft). Free online UUID v6 generator.",
  url: "https://randomid.app/uuid/v6",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "UUID v6 generation",
    "Time-ordered UUIDs",
    "Database indexing optimized",
    "RFC 4122 draft",
  ],
};

export default function UUIDV6Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <UUIDV6Client />
    </>
  );
}
