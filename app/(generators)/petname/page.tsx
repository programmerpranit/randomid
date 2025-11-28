import type { Metadata } from "next";
import PetnameClient from "./PetnameClient";

export const metadata: Metadata = {
  title: "Petname ID Generator - Human-readable Identifier",
  description: "Generate Petname ID identifiers instantly. Human-readable, memorable identifiers from word combinations. Free online Petname ID generator.",
  alternates: {
    canonical: "https://randomid.app/petname",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/petname",
    siteName: "Random ID Generator",
    title: "Petname ID Generator - Human-readable Identifier",
    description: "Generate Petname ID identifiers instantly. Human-readable, memorable identifiers from word combinations. Free online Petname ID generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Petname ID Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Petname ID Generator - Human-readable Identifier",
    description: "Generate Petname ID identifiers instantly. Human-readable, memorable identifiers from word combinations. Free online Petname ID generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Petname ID Generator",
  description: "Generate Petname ID identifiers instantly. Human-readable, memorable identifiers from word combinations. Free online Petname ID generator.",
  url: "https://randomid.app/petname",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Petname ID generation",
    "Human-readable format",
    "Memorable identifiers",
    "Word combinations",
  ],
};

export default function PetnamePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PetnameClient />
    </>
  );
}

