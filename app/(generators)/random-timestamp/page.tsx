import type { Metadata } from "next";
import RandomTimestampClient from "./RandomTimestampClient";

export const metadata: Metadata = {
  title: "Random Timestamp Generator - Random Unix Timestamp",
  description: "Generate random timestamp identifiers instantly. Random Unix timestamps for testing and anonymization. Free online Random Timestamp generator.",
  alternates: {
    canonical: "https://randomid.app/random-timestamp",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/random-timestamp",
    siteName: "Random ID Generator",
    title: "Random Timestamp Generator - Random Unix Timestamp",
    description: "Generate random timestamp identifiers instantly. Random Unix timestamps for testing and anonymization. Free online Random Timestamp generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Random Timestamp Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Random Timestamp Generator - Random Unix Timestamp",
    description: "Generate random timestamp identifiers instantly. Random Unix timestamps for testing and anonymization. Free online Random Timestamp generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Random Timestamp Generator",
  description: "Generate random timestamp identifiers instantly. Random Unix timestamps for testing and anonymization. Free online Random Timestamp generator.",
  url: "https://randomid.app/random-timestamp",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Random timestamp generation",
    "Unix timestamp format",
    "Testing support",
    "Anonymization support",
  ],
};

export default function RandomTimestampPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <RandomTimestampClient />
    </>
  );
}

