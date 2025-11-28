import type { Metadata } from "next";
import SHA512Client from "./SHA512Client";

export const metadata: Metadata = {
  title: "SHA-512 ID Generator - SHA-512 Hash Identifier",
  description: "Generate SHA-512 hash-based identifiers instantly. 512-bit hash values with highest security level. Free online SHA-512 ID generator.",
  alternates: {
    canonical: "https://randomid.app/sha512",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/sha512",
    siteName: "Random ID Generator",
    title: "SHA-512 ID Generator - SHA-512 Hash Identifier",
    description: "Generate SHA-512 hash-based identifiers instantly. 512-bit hash values with highest security level. Free online SHA-512 ID generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "SHA-512 ID Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SHA-512 ID Generator - SHA-512 Hash Identifier",
    description: "Generate SHA-512 hash-based identifiers instantly. 512-bit hash values with highest security level. Free online SHA-512 ID generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "SHA-512 ID Generator",
  description: "Generate SHA-512 hash-based identifiers instantly. 512-bit hash values with highest security level. Free online SHA-512 ID generator.",
  url: "https://randomid.app/sha512",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "SHA-512 hash generation",
    "512-bit hash values",
    "Highest security level",
    "Cryptographically secure",
  ],
};

export default function SHA512Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SHA512Client />
    </>
  );
}
