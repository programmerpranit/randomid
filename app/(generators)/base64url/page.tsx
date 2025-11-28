import type { Metadata } from "next";
import Base64URLClient from "./Base64URLClient";

export const metadata: Metadata = {
  title: "Base64URL ID Generator - URL-safe Base64",
  description: "Generate Base64URL-encoded random identifiers instantly. URL-safe variant of Base64, perfect for URLs and JWT tokens. Free online Base64URL ID generator.",
  alternates: {
    canonical: "https://randomid.app/base64url",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/base64url",
    siteName: "Random ID Generator",
    title: "Base64URL ID Generator - URL-safe Base64",
    description: "Generate Base64URL-encoded random identifiers instantly. URL-safe variant of Base64, perfect for URLs and JWT tokens. Free online Base64URL ID generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Base64URL ID Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Base64URL ID Generator - URL-safe Base64",
    description: "Generate Base64URL-encoded random identifiers instantly. URL-safe variant of Base64, perfect for URLs and JWT tokens. Free online Base64URL ID generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Base64URL ID Generator",
  description: "Generate Base64URL-encoded random identifiers instantly. URL-safe variant of Base64, perfect for URLs and JWT tokens. Free online Base64URL ID generator.",
  url: "https://randomid.app/base64url",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Base64URL encoding",
    "URL-safe format",
    "JWT token compatible",
    "URL-friendly encoding",
  ],
};

export default function Base64URLPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Base64URLClient />
    </>
  );
}

