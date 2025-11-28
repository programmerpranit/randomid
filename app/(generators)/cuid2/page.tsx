import type { Metadata } from "next";
import CUID2Client from "./CUID2Client";

export const metadata: Metadata = {
  title: "CUID2 Generator - Collision-resistant Unique ID v2",
  description: "Generate CUID2 identifiers instantly. Improved collision resistance and performance over CUID v1. Free online CUID2 generator.",
  alternates: {
    canonical: "https://randomid.app/cuid2",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/cuid2",
    siteName: "Random ID Generator",
    title: "CUID2 Generator - Collision-resistant Unique ID v2",
    description: "Generate CUID2 identifiers instantly. Improved collision resistance and performance over CUID v1. Free online CUID2 generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "CUID2 Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CUID2 Generator - Collision-resistant Unique ID v2",
    description: "Generate CUID2 identifiers instantly. Improved collision resistance and performance over CUID v1. Free online CUID2 generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "CUID2 Generator",
  description: "Generate CUID2 identifiers instantly. Improved collision resistance and performance over CUID v1. Free online CUID2 generator.",
  url: "https://randomid.app/cuid2",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "CUID2 generation",
    "Improved collision resistance",
    "Enhanced performance",
    "Next-gen CUID",
  ],
};

export default function CUID2Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <CUID2Client />
    </>
  );
}

