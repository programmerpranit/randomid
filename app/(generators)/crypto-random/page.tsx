import type { Metadata } from "next";
import CryptoRandomClient from "./CryptoRandomClient";

export const metadata: Metadata = {
  title: "Crypto-Random Bytes Generator - Cryptographically Secure",
  description: "Generate cryptographically secure random bytes instantly. 32-byte (256-bit) secure random identifiers for keys and tokens. Free online Crypto-Random generator.",
  alternates: {
    canonical: "https://randomid.app/crypto-random",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/crypto-random",
    siteName: "Random ID Generator",
    title: "Crypto-Random Bytes Generator - Cryptographically Secure",
    description: "Generate cryptographically secure random bytes instantly. 32-byte (256-bit) secure random identifiers for keys and tokens. Free online Crypto-Random generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Crypto-Random Bytes Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto-Random Bytes Generator - Cryptographically Secure",
    description: "Generate cryptographically secure random bytes instantly. 32-byte (256-bit) secure random identifiers for keys and tokens. Free online Crypto-Random generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Crypto-Random Bytes Generator",
  description: "Generate cryptographically secure random bytes instantly. 32-byte (256-bit) secure random identifiers for keys and tokens. Free online Crypto-Random generator.",
  url: "https://randomid.app/crypto-random",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Cryptographically secure random bytes",
    "32-byte (256-bit) identifiers",
    "Key generation",
    "Token generation",
  ],
};

export default function CryptoRandomPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <CryptoRandomClient />
    </>
  );
}

