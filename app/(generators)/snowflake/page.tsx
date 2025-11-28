import type { Metadata } from "next";
import SnowflakeClient from "./SnowflakeClient";

export const metadata: Metadata = {
  title: "Snowflake ID Generator - Twitter Snowflake ID",
  description: "Generate Snowflake ID identifiers instantly. 64-bit time-ordered unique identifiers used by Twitter. Free online Snowflake ID generator.",
  alternates: {
    canonical: "https://randomid.app/snowflake",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/snowflake",
    siteName: "Random ID Generator",
    title: "Snowflake ID Generator - Twitter Snowflake ID",
    description: "Generate Snowflake ID identifiers instantly. 64-bit time-ordered unique identifiers used by Twitter. Free online Snowflake ID generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Snowflake ID Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Snowflake ID Generator - Twitter Snowflake ID",
    description: "Generate Snowflake ID identifiers instantly. 64-bit time-ordered unique identifiers used by Twitter. Free online Snowflake ID generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Snowflake ID Generator",
  description: "Generate Snowflake ID identifiers instantly. 64-bit time-ordered unique identifiers used by Twitter. Free online Snowflake ID generator.",
  url: "https://randomid.app/snowflake",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Snowflake ID generation",
    "64-bit identifiers",
    "Time-ordered format",
    "Twitter-style IDs",
  ],
};

export default function SnowflakePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SnowflakeClient />
    </>
  );
}

