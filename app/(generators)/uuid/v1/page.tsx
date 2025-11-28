import type { Metadata } from "next";
import UUIDV1Client from "./UUIDV1Client";

export const metadata: Metadata = {
  title: "UUID v1 Generator - Time-based UUID",
  description: "Generate UUID v1 (time-based) identifiers instantly. UUID Version 1 uses timestamp and MAC address for time-ordered unique identifiers. Free online UUID v1 generator.",
  alternates: {
    canonical: "https://randomid.app/uuid/v1",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/uuid/v1",
    siteName: "Random ID Generator",
    title: "UUID v1 Generator - Time-based UUID",
    description: "Generate UUID v1 (time-based) identifiers instantly. UUID Version 1 uses timestamp and MAC address for time-ordered unique identifiers. Free online UUID v1 generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "UUID v1 Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UUID v1 Generator - Time-based UUID",
    description: "Generate UUID v1 (time-based) identifiers instantly. UUID Version 1 uses timestamp and MAC address for time-ordered unique identifiers. Free online UUID v1 generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "UUID v1 Generator",
  description: "Generate UUID v1 (time-based) identifiers instantly. UUID Version 1 uses timestamp and MAC address for time-ordered unique identifiers. Free online UUID v1 generator.",
  url: "https://randomid.app/uuid/v1",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "UUID v1 generation",
    "Time-based identifiers",
    "MAC address integration",
    "Time-ordered UUIDs",
  ],
};

export default function UUIDV1Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <UUIDV1Client />
    </>
  );
}
