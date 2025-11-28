import type { Metadata } from "next";
import SHA1Client from "./SHA1Client";

export const metadata: Metadata = {
  title: "SHA-1 ID Generator - SHA-1 Hash Identifier",
  description: "Generate SHA-1 hash-based identifiers instantly. 160-bit hash values (cryptographically broken, use SHA-256 for security). Free online SHA-1 ID generator.",
  alternates: {
    canonical: "https://randomid.app/sha1",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/sha1",
    siteName: "Random ID Generator",
    title: "SHA-1 ID Generator - SHA-1 Hash Identifier",
    description: "Generate SHA-1 hash-based identifiers instantly. 160-bit hash values (cryptographically broken, use SHA-256 for security). Free online SHA-1 ID generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "SHA-1 ID Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SHA-1 ID Generator - SHA-1 Hash Identifier",
    description: "Generate SHA-1 hash-based identifiers instantly. 160-bit hash values (cryptographically broken, use SHA-256 for security). Free online SHA-1 ID generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "SHA-1 ID Generator",
  description: "Generate SHA-1 hash-based identifiers instantly. 160-bit hash values (cryptographically broken, use SHA-256 for security). Free online SHA-1 ID generator.",
  url: "https://randomid.app/sha1",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "SHA-1 hash generation",
    "160-bit hash values",
    "Hash-based identifiers",
    "Legacy support",
  ],
};

export default function SHA1Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SHA1Client />
    </>
  );
}
