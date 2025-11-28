import type { Metadata } from "next";
import KSUIDClient from "./KSUIDClient";

export const metadata: Metadata = {
  title: "KSUID Generator - K-Sortable Unique ID",
  description: "Generate KSUID (K-Sortable Unique Identifier) instantly. 27-character sortable identifiers with timestamp component. Free online KSUID generator.",
  alternates: {
    canonical: "https://randomid.app/ksuid",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/ksuid",
    siteName: "Random ID Generator",
    title: "KSUID Generator - K-Sortable Unique ID",
    description: "Generate KSUID (K-Sortable Unique Identifier) instantly. 27-character sortable identifiers with timestamp component. Free online KSUID generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "KSUID Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KSUID Generator - K-Sortable Unique ID",
    description: "Generate KSUID (K-Sortable Unique Identifier) instantly. 27-character sortable identifiers with timestamp component. Free online KSUID generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "KSUID Generator",
  description: "Generate KSUID (K-Sortable Unique Identifier) instantly. 27-character sortable identifiers with timestamp component. Free online KSUID generator.",
  url: "https://randomid.app/ksuid",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "KSUID generation",
    "K-sortable identifiers",
    "27-character format",
    "Timestamp component",
  ],
};

export default function KSUIDPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <KSUIDClient />
    </>
  );
}

