import type { Metadata } from "next";
import SHA256Client from "./SHA256Client";

export const metadata: Metadata = {
  title: "SHA-256 ID Generator - Secure Hash Algorithm",
  description: "Generate SHA-256 hash-based unique identifiers instantly. Cryptographically secure 256-bit hash values. Free online SHA-256 generator with optional custom input.",
  alternates: {
    canonical: "https://randomid.app/sha256",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/sha256",
    siteName: "Random ID Generator",
    title: "SHA-256 ID Generator - Secure Hash Algorithm",
    description: "Generate SHA-256 hash-based unique identifiers instantly. Cryptographically secure 256-bit hash values. Free online SHA-256 generator with optional custom input.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "SHA-256 ID Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SHA-256 ID Generator - Secure Hash Algorithm",
    description: "Generate SHA-256 hash-based unique identifiers instantly. Cryptographically secure 256-bit hash values. Free online SHA-256 generator with optional custom input.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "SHA-256 ID Generator",
  description: "Generate SHA-256 hash-based unique identifiers instantly. Cryptographically secure 256-bit hash values. Free online SHA-256 generator with optional custom input.",
  url: "https://randomid.app/sha256",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "SHA-256 hash generation",
    "Cryptographically secure",
    "256-bit hash values",
    "Custom input support",
  ],
};

export default function SHA256Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SHA256Client />
    </>
  );
}
