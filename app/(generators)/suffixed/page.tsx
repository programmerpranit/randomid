import type { Metadata } from "next";
import SuffixedClient from "./SuffixedClient";

export const metadata: Metadata = {
  title: "Suffixed ID Generator - Custom Suffix ID",
  description: "Generate Suffixed ID identifiers instantly. Combine random prefix with custom suffix for metadata and version indicators. Free online Suffixed ID generator.",
  alternates: {
    canonical: "https://randomid.app/suffixed",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/suffixed",
    siteName: "Random ID Generator",
    title: "Suffixed ID Generator - Custom Suffix ID",
    description: "Generate Suffixed ID identifiers instantly. Combine random prefix with custom suffix for metadata and version indicators. Free online Suffixed ID generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Suffixed ID Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suffixed ID Generator - Custom Suffix ID",
    description: "Generate Suffixed ID identifiers instantly. Combine random prefix with custom suffix for metadata and version indicators. Free online Suffixed ID generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Suffixed ID Generator",
  description: "Generate Suffixed ID identifiers instantly. Combine random prefix with custom suffix for metadata and version indicators. Free online Suffixed ID generator.",
  url: "https://randomid.app/suffixed",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Suffixed ID generation",
    "Custom suffixes",
    "Metadata indicators",
    "Version indicators",
  ],
};

export default function SuffixedPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SuffixedClient />
    </>
  );
}
