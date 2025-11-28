import type { Metadata } from "next";
import NanoIDSyncClient from "./NanoIDSyncClient";

export const metadata: Metadata = {
  title: "NanoID Sync Generator - Synchronous URL-safe ID",
  description: "Generate NanoID identifiers synchronously instantly. Immediate generation without async operations. Free online NanoID Sync generator.",
  alternates: {
    canonical: "https://randomid.app/nanoid-sync",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/nanoid-sync",
    siteName: "Random ID Generator",
    title: "NanoID Sync Generator - Synchronous URL-safe ID",
    description: "Generate NanoID identifiers synchronously instantly. Immediate generation without async operations. Free online NanoID Sync generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "NanoID Sync Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NanoID Sync Generator - Synchronous URL-safe ID",
    description: "Generate NanoID identifiers synchronously instantly. Immediate generation without async operations. Free online NanoID Sync generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "NanoID Sync Generator",
  description: "Generate NanoID identifiers synchronously instantly. Immediate generation without async operations. Free online NanoID Sync generator.",
  url: "https://randomid.app/nanoid-sync",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "NanoID sync generation",
    "Synchronous generation",
    "URL-safe format",
    "Immediate generation",
  ],
};

export default function NanoIDSyncPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <NanoIDSyncClient />
    </>
  );
}

