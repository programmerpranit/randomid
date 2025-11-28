import type { Metadata } from "next";
import Word2Client from "./Word2Client";

export const metadata: Metadata = {
  title: "2-Word ID Generator - Two-word Identifier",
  description: "Generate 2-Word ID identifiers instantly. Memorable, human-readable two-word combinations. Free online 2-Word ID generator.",
  alternates: {
    canonical: "https://randomid.app/word2",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/word2",
    siteName: "Random ID Generator",
    title: "2-Word ID Generator - Two-word Identifier",
    description: "Generate 2-Word ID identifiers instantly. Memorable, human-readable two-word combinations. Free online 2-Word ID generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "2-Word ID Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2-Word ID Generator - Two-word Identifier",
    description: "Generate 2-Word ID identifiers instantly. Memorable, human-readable two-word combinations. Free online 2-Word ID generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "2-Word ID Generator",
  description: "Generate 2-Word ID identifiers instantly. Memorable, human-readable two-word combinations. Free online 2-Word ID generator.",
  url: "https://randomid.app/word2",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "2-Word ID generation",
    "Two-word combinations",
    "Human-readable format",
    "Memorable identifiers",
  ],
};

export default function Word2Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Word2Client />
    </>
  );
}

