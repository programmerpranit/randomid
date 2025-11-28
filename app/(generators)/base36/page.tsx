import type { Metadata } from "next";
import Base36Client from "./Base36Client";

export const metadata: Metadata = {
  title: "Base36 ID Generator - Base36 Encoded Random Number",
  description: "Generate Base36-encoded random identifiers instantly. Compact, case-insensitive alphanumeric encoding. Free online Base36 ID generator.",
  alternates: {
    canonical: "https://randomid.app/base36",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/base36",
    siteName: "Random ID Generator",
    title: "Base36 ID Generator - Base36 Encoded Random Number",
    description: "Generate Base36-encoded random identifiers instantly. Compact, case-insensitive alphanumeric encoding. Free online Base36 ID generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Base36 ID Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Base36 ID Generator - Base36 Encoded Random Number",
    description: "Generate Base36-encoded random identifiers instantly. Compact, case-insensitive alphanumeric encoding. Free online Base36 ID generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Base36 ID Generator",
  description: "Generate Base36-encoded random identifiers instantly. Compact, case-insensitive alphanumeric encoding. Free online Base36 ID generator.",
  url: "https://randomid.app/base36",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Base36 encoding",
    "Compact format",
    "Case-insensitive",
    "Alphanumeric encoding",
  ],
};

export default function Base36Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Base36Client />
    </>
  );
}

