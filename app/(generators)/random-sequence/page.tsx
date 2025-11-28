import type { Metadata } from "next";
import RandomSequenceClient from "./RandomSequenceClient";

export const metadata: Metadata = {
  title: "Random Sequence Generator - Custom Alphanumeric ID",
  description: "Generate random sequence identifiers instantly. Customizable length and character set for unique identifiers, codes, and tokens. Free online Random Sequence generator.",
  alternates: {
    canonical: "https://randomid.app/random-sequence",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/random-sequence",
    siteName: "Random ID Generator",
    title: "Random Sequence Generator - Custom Alphanumeric ID",
    description: "Generate random sequence identifiers instantly. Customizable length and character set for unique identifiers, codes, and tokens. Free online Random Sequence generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Random Sequence Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Random Sequence Generator - Custom Alphanumeric ID",
    description: "Generate random sequence identifiers instantly. Customizable length and character set for unique identifiers, codes, and tokens. Free online Random Sequence generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Random Sequence Generator",
  description: "Generate random sequence identifiers instantly. Customizable length and character set for unique identifiers, codes, and tokens. Free online Random Sequence generator.",
  url: "https://randomid.app/random-sequence",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Random sequence generation",
    "Customizable length",
    "Custom character set",
    "Alphanumeric IDs",
  ],
};

export default function RandomSequencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <RandomSequenceClient />
    </>
  );
}
