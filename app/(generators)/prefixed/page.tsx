import type { Metadata } from "next";
import PrefixedClient from "./PrefixedClient";

export const metadata: Metadata = {
  title: "Prefixed ID Generator - Custom Prefix ID",
  description: "Generate Prefixed ID identifiers instantly. Combine custom prefixes with random suffixes for categorized, namespaced IDs. Free online Prefixed ID generator.",
  alternates: {
    canonical: "https://randomid.app/prefixed",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/prefixed",
    siteName: "Random ID Generator",
    title: "Prefixed ID Generator - Custom Prefix ID",
    description: "Generate Prefixed ID identifiers instantly. Combine custom prefixes with random suffixes for categorized, namespaced IDs. Free online Prefixed ID generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Prefixed ID Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prefixed ID Generator - Custom Prefix ID",
    description: "Generate Prefixed ID identifiers instantly. Combine custom prefixes with random suffixes for categorized, namespaced IDs. Free online Prefixed ID generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Prefixed ID Generator",
  description: "Generate Prefixed ID identifiers instantly. Combine custom prefixes with random suffixes for categorized, namespaced IDs. Free online Prefixed ID generator.",
  url: "https://randomid.app/prefixed",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Prefixed ID generation",
    "Custom prefixes",
    "Categorized IDs",
    "Namespaced identifiers",
  ],
};

export default function PrefixedPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PrefixedClient />
    </>
  );
}
