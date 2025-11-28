import type { Metadata } from "next";
import UUIDV2Client from "./UUIDV2Client";

export const metadata: Metadata = {
  title: "UUID v2 Generator - DCE Security UUID",
  description: "Generate UUID v2 (DCE Security) identifiers. POSIX UID/GID based UUIDs (rarely used). Free online UUID v2 generator.",
  alternates: {
    canonical: "https://randomid.app/uuid/v2",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/uuid/v2",
    siteName: "Random ID Generator",
    title: "UUID v2 Generator - DCE Security UUID",
    description: "Generate UUID v2 (DCE Security) identifiers. POSIX UID/GID based UUIDs (rarely used). Free online UUID v2 generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "UUID v2 Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UUID v2 Generator - DCE Security UUID",
    description: "Generate UUID v2 (DCE Security) identifiers. POSIX UID/GID based UUIDs (rarely used). Free online UUID v2 generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "UUID v2 Generator",
  description: "Generate UUID v2 (DCE Security) identifiers. POSIX UID/GID based UUIDs (rarely used). Free online UUID v2 generator.",
  url: "https://randomid.app/uuid/v2",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "UUID v2 generation",
    "DCE Security UUIDs",
    "POSIX UID/GID based",
    "Security identifiers",
  ],
};

export default function UUIDV2Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <UUIDV2Client />
    </>
  );
}
