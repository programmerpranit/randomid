import type { Metadata } from "next";
import MD5Client from "./MD5Client";

export const metadata: Metadata = {
  title: "MD5 ID Generator - MD5 Hash Identifier",
  description: "Generate MD5 hash-based identifiers instantly. 128-bit hash values (not secure for cryptography). Free online MD5 ID generator.",
  alternates: {
    canonical: "https://randomid.app/md5",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/md5",
    siteName: "Random ID Generator",
    title: "MD5 ID Generator - MD5 Hash Identifier",
    description: "Generate MD5 hash-based identifiers instantly. 128-bit hash values (not secure for cryptography). Free online MD5 ID generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "MD5 ID Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MD5 ID Generator - MD5 Hash Identifier",
    description: "Generate MD5 hash-based identifiers instantly. 128-bit hash values (not secure for cryptography). Free online MD5 ID generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "MD5 ID Generator",
  description: "Generate MD5 hash-based identifiers instantly. 128-bit hash values (not secure for cryptography). Free online MD5 ID generator.",
  url: "https://randomid.app/md5",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "MD5 hash generation",
    "128-bit hash values",
    "Hash-based identifiers",
    "Legacy support",
  ],
};

export default function MD5Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <MD5Client />
    </>
  );
}
