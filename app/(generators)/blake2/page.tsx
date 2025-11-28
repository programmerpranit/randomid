import type { Metadata } from "next";
import Blake2Client from "./Blake2Client";

export const metadata: Metadata = {
  title: "Blake2 ID Generator - Blake2 Hash Identifier",
  description: "Generate Blake2 hash-based identifiers instantly. Fast cryptographic hash function optimized for speed. Free online Blake2 ID generator.",
  alternates: {
    canonical: "https://randomid.app/blake2",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/blake2",
    siteName: "Random ID Generator",
    title: "Blake2 ID Generator - Blake2 Hash Identifier",
    description: "Generate Blake2 hash-based identifiers instantly. Fast cryptographic hash function optimized for speed. Free online Blake2 ID generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Blake2 ID Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blake2 ID Generator - Blake2 Hash Identifier",
    description: "Generate Blake2 hash-based identifiers instantly. Fast cryptographic hash function optimized for speed. Free online Blake2 ID generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Blake2 ID Generator",
  description: "Generate Blake2 hash-based identifiers instantly. Fast cryptographic hash function optimized for speed. Free online Blake2 ID generator.",
  url: "https://randomid.app/blake2",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Blake2 hash generation",
    "Fast cryptographic hash",
    "Speed optimized",
    "Cryptographically secure",
  ],
};

export default function Blake2Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Blake2Client />
    </>
  );
}

