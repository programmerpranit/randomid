import type { Metadata } from "next";
import GUIDClient from "./GUIDClient";

export const metadata: Metadata = {
  title: "GUID Generator - Globally Unique Identifier",
  description: "Generate GUID (Globally Unique Identifier) instantly. Microsoft's term for UUID, commonly used in Windows development. Free online GUID generator.",
  alternates: {
    canonical: "https://randomid.app/guid",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/guid",
    siteName: "Random ID Generator",
    title: "GUID Generator - Globally Unique Identifier",
    description: "Generate GUID (Globally Unique Identifier) instantly. Microsoft's term for UUID, commonly used in Windows development. Free online GUID generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "GUID Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GUID Generator - Globally Unique Identifier",
    description: "Generate GUID (Globally Unique Identifier) instantly. Microsoft's term for UUID, commonly used in Windows development. Free online GUID generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "GUID Generator",
  description: "Generate GUID (Globally Unique Identifier) instantly. Microsoft's term for UUID, commonly used in Windows development. Free online GUID generator.",
  url: "https://randomid.app/guid",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "GUID generation",
    "Microsoft UUID format",
    "Windows development",
    "Globally unique identifiers",
  ],
};

export default function GUIDPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <GUIDClient />
    </>
  );
}
