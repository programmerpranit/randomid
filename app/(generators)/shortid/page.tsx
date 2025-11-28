import type { Metadata } from "next";
import ShortIDClient from "./ShortIDClient";

export const metadata: Metadata = {
  title: "ShortID Generator - Compact Unique Identifier",
  description: "Generate ShortID identifiers instantly. Compact, URL-safe unique identifiers with customizable length. Free online ShortID generator.",
  alternates: {
    canonical: "https://randomid.app/shortid",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/shortid",
    siteName: "Random ID Generator",
    title: "ShortID Generator - Compact Unique Identifier",
    description: "Generate ShortID identifiers instantly. Compact, URL-safe unique identifiers with customizable length. Free online ShortID generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ShortID Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShortID Generator - Compact Unique Identifier",
    description: "Generate ShortID identifiers instantly. Compact, URL-safe unique identifiers with customizable length. Free online ShortID generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "ShortID Generator",
  description: "Generate ShortID identifiers instantly. Compact, URL-safe unique identifiers with customizable length. Free online ShortID generator.",
  url: "https://randomid.app/shortid",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "ShortID generation",
    "Compact format",
    "URL-safe identifiers",
    "Customizable length",
  ],
};

export default function ShortIDPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ShortIDClient />
    </>
  );
}

