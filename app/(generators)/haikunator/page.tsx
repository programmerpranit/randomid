import type { Metadata } from "next";
import HaikunatorClient from "./HaikunatorClient";

export const metadata: Metadata = {
  title: "Haikunator ID Generator - Haiku-style Identifier",
  description: "Generate Haikunator ID identifiers instantly. Memorable, haiku-like identifiers in adjective-noun-number format. Free online Haikunator ID generator.",
  alternates: {
    canonical: "https://randomid.app/haikunator",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/haikunator",
    siteName: "Random ID Generator",
    title: "Haikunator ID Generator - Haiku-style Identifier",
    description: "Generate Haikunator ID identifiers instantly. Memorable, haiku-like identifiers in adjective-noun-number format. Free online Haikunator ID generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Haikunator ID Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haikunator ID Generator - Haiku-style Identifier",
    description: "Generate Haikunator ID identifiers instantly. Memorable, haiku-like identifiers in adjective-noun-number format. Free online Haikunator ID generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Haikunator ID Generator",
  description: "Generate Haikunator ID identifiers instantly. Memorable, haiku-like identifiers in adjective-noun-number format. Free online Haikunator ID generator.",
  url: "https://randomid.app/haikunator",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Haikunator ID generation",
    "Haiku-style format",
    "Memorable identifiers",
    "Adjective-noun-number format",
  ],
};

export default function HaikunatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HaikunatorClient />
    </>
  );
}

