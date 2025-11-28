import type { Metadata } from "next";
import NanoIDCustomClient from "./NanoIDCustomClient";

export const metadata: Metadata = {
  title: "NanoID Custom Generator - Custom Alphabet & Length",
  description: "Generate custom NanoID identifiers instantly. Specify custom alphabet and length for compatibility and branding. Free online NanoID Custom generator.",
  alternates: {
    canonical: "https://randomid.app/nanoid-custom",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/nanoid-custom",
    siteName: "Random ID Generator",
    title: "NanoID Custom Generator - Custom Alphabet & Length",
    description: "Generate custom NanoID identifiers instantly. Specify custom alphabet and length for compatibility and branding. Free online NanoID Custom generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "NanoID Custom Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NanoID Custom Generator - Custom Alphabet & Length",
    description: "Generate custom NanoID identifiers instantly. Specify custom alphabet and length for compatibility and branding. Free online NanoID Custom generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "NanoID Custom Generator",
  description: "Generate custom NanoID identifiers instantly. Specify custom alphabet and length for compatibility and branding. Free online NanoID Custom generator.",
  url: "https://randomid.app/nanoid-custom",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "NanoID custom generation",
    "Custom alphabet",
    "Custom length",
    "Branding support",
  ],
};

export default function NanoIDCustomPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <NanoIDCustomClient />
    </>
  );
}
