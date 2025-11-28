import type { Metadata } from "next";
import CUIDClient from "./CUIDClient";

export const metadata: Metadata = {
  title: "CUID Generator - Collision-resistant Unique ID",
  description: "Generate CUID (Collision-resistant Unique Identifier) instantly. Secure, URL-safe IDs optimized for horizontal scaling. Free online CUID generator.",
  alternates: {
    canonical: "https://randomid.app/cuid",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/cuid",
    siteName: "Random ID Generator",
    title: "CUID Generator - Collision-resistant Unique ID",
    description: "Generate CUID (Collision-resistant Unique Identifier) instantly. Secure, URL-safe IDs optimized for horizontal scaling. Free online CUID generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "CUID Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CUID Generator - Collision-resistant Unique ID",
    description: "Generate CUID (Collision-resistant Unique Identifier) instantly. Secure, URL-safe IDs optimized for horizontal scaling. Free online CUID generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "CUID Generator",
  description: "Generate CUID (Collision-resistant Unique Identifier) instantly. Secure, URL-safe IDs optimized for horizontal scaling. Free online CUID generator.",
  url: "https://randomid.app/cuid",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "CUID generation",
    "Collision-resistant IDs",
    "URL-safe format",
    "Horizontal scaling optimized",
  ],
};

export default function CUIDPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <CUIDClient />
    </>
  );
}
