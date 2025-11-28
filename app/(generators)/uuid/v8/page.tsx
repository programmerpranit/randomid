import type { Metadata } from "next";
import UUIDV8Client from "./UUIDV8Client";

export const metadata: Metadata = {
  title: "UUID v8 Generator - Custom Implementation UUID",
  description: "Generate UUID v8 identifiers instantly. Custom, implementation-specific UUIDs for vendor-specific schemes. Free online UUID v8 generator.",
  alternates: {
    canonical: "https://randomid.app/uuid/v8",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/uuid/v8",
    siteName: "Random ID Generator",
    title: "UUID v8 Generator - Custom Implementation UUID",
    description: "Generate UUID v8 identifiers instantly. Custom, implementation-specific UUIDs for vendor-specific schemes. Free online UUID v8 generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "UUID v8 Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UUID v8 Generator - Custom Implementation UUID",
    description: "Generate UUID v8 identifiers instantly. Custom, implementation-specific UUIDs for vendor-specific schemes. Free online UUID v8 generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "UUID v8 Generator",
  description: "Generate UUID v8 identifiers instantly. Custom, implementation-specific UUIDs for vendor-specific schemes. Free online UUID v8 generator.",
  url: "https://randomid.app/uuid/v8",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "UUID v8 generation",
    "Custom implementation",
    "Vendor-specific schemes",
    "Implementation-specific UUIDs",
  ],
};

export default function UUIDV8Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <UUIDV8Client />
    </>
  );
}
