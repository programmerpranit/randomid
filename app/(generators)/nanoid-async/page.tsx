import type { Metadata } from "next";
import NanoIDAsyncClient from "./NanoIDAsyncClient";

export const metadata: Metadata = {
  title: "NanoID Async Generator - Asynchronous URL-safe ID",
  description: "Generate NanoID identifiers asynchronously. For use in async/await patterns and async operations. Free online NanoID Async generator.",
  alternates: {
    canonical: "https://randomid.app/nanoid-async",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/nanoid-async",
    siteName: "Random ID Generator",
    title: "NanoID Async Generator - Asynchronous URL-safe ID",
    description: "Generate NanoID identifiers asynchronously. For use in async/await patterns and async operations. Free online NanoID Async generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "NanoID Async Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NanoID Async Generator - Asynchronous URL-safe ID",
    description: "Generate NanoID identifiers asynchronously. For use in async/await patterns and async operations. Free online NanoID Async generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "NanoID Async Generator",
  description: "Generate NanoID identifiers asynchronously. For use in async/await patterns and async operations. Free online NanoID Async generator.",
  url: "https://randomid.app/nanoid-async",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "NanoID async generation",
    "Asynchronous generation",
    "Async/await support",
    "URL-safe format",
  ],
};

export default function NanoIDAsyncPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <NanoIDAsyncClient />
    </>
  );
}

