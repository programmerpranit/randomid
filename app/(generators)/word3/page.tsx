import type { Metadata } from "next";
import Word3Client from "./Word3Client";

export const metadata: Metadata = {
  title: "3-Word ID Generator - Three-word Identifier",
  description: "Generate 3-Word ID identifiers instantly. Memorable, human-readable three-word combinations. Free online 3-Word ID generator.",
  alternates: {
    canonical: "https://randomid.app/word3",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/word3",
    siteName: "Random ID Generator",
    title: "3-Word ID Generator - Three-word Identifier",
    description: "Generate 3-Word ID identifiers instantly. Memorable, human-readable three-word combinations. Free online 3-Word ID generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "3-Word ID Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3-Word ID Generator - Three-word Identifier",
    description: "Generate 3-Word ID identifiers instantly. Memorable, human-readable three-word combinations. Free online 3-Word ID generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "3-Word ID Generator",
  description: "Generate 3-Word ID identifiers instantly. Memorable, human-readable three-word combinations. Free online 3-Word ID generator.",
  url: "https://randomid.app/word3",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "3-Word ID generation",
    "Three-word combinations",
    "Human-readable format",
    "Memorable identifiers",
  ],
};

export default function Word3Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Word3Client />
    </>
  );
}

