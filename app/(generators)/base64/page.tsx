import type { Metadata } from "next";
import Base64Client from "./Base64Client";

export const metadata: Metadata = {
  title: "Base64 ID Generator - Base64 Encoded Random Bytes",
  description: "Generate Base64-encoded random identifiers instantly. Compact, efficient encoding using 64 characters. Free online Base64 ID generator.",
  alternates: {
    canonical: "https://randomid.app/base64",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/base64",
    siteName: "Random ID Generator",
    title: "Base64 ID Generator - Base64 Encoded Random Bytes",
    description: "Generate Base64-encoded random identifiers instantly. Compact, efficient encoding using 64 characters. Free online Base64 ID generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Base64 ID Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Base64 ID Generator - Base64 Encoded Random Bytes",
    description: "Generate Base64-encoded random identifiers instantly. Compact, efficient encoding using 64 characters. Free online Base64 ID generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Base64 ID Generator",
  description: "Generate Base64-encoded random identifiers instantly. Compact, efficient encoding using 64 characters. Free online Base64 ID generator.",
  url: "https://randomid.app/base64",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Base64 encoding",
    "64-character alphabet",
    "Efficient encoding",
    "Compact format",
  ],
};

export default function Base64Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Base64Client />
    </>
  );
}

