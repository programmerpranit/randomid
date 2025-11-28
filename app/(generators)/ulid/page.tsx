import type { Metadata } from "next";
import ULIDClient from "./ULIDClient";

export const metadata: Metadata = {
  title: "ULID Generator - Sortable Unique ID",
  description: "Generate ULID (Universally Unique Lexicographically Sortable Identifier) instantly. Sortable, URL-safe, 128-bit identifiers perfect for database keys. Free online ULID generator.",
  alternates: {
    canonical: "https://randomid.app/ulid",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/ulid",
    siteName: "Random ID Generator",
    title: "ULID Generator - Sortable Unique ID",
    description: "Generate ULID (Universally Unique Lexicographically Sortable Identifier) instantly. Sortable, URL-safe, 128-bit identifiers perfect for database keys. Free online ULID generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ULID Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ULID Generator - Sortable Unique ID",
    description: "Generate ULID (Universally Unique Lexicographically Sortable Identifier) instantly. Sortable, URL-safe, 128-bit identifiers perfect for database keys. Free online ULID generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "ULID Generator",
  description: "Generate ULID (Universally Unique Lexicographically Sortable Identifier) instantly. Sortable, URL-safe, 128-bit identifiers perfect for database keys. Free online ULID generator.",
  url: "https://randomid.app/ulid",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "ULID generation",
    "Sortable identifiers",
    "URL-safe format",
    "128-bit identifiers",
  ],
};

export default function ULIDPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ULIDClient />
    </>
  );
}

