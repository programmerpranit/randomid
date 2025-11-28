import type { Metadata } from "next";
import Base62Client from "./Base62Client";

export const metadata: Metadata = {
  title: "Base62 ID Generator - Base62 Encoded Random Number",
  description: "Generate Base62-encoded random identifiers instantly. Compact, URL-safe alphanumeric encoding. Free online Base62 ID generator.",
  alternates: {
    canonical: "https://randomid.app/base62",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app/base62",
    siteName: "Random ID Generator",
    title: "Base62 ID Generator - Base62 Encoded Random Number",
    description: "Generate Base62-encoded random identifiers instantly. Compact, URL-safe alphanumeric encoding. Free online Base62 ID generator.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Base62 ID Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Base62 ID Generator - Base62 Encoded Random Number",
    description: "Generate Base62-encoded random identifiers instantly. Compact, URL-safe alphanumeric encoding. Free online Base62 ID generator.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Base62 ID Generator",
  description: "Generate Base62-encoded random identifiers instantly. Compact, URL-safe alphanumeric encoding. Free online Base62 ID generator.",
  url: "https://randomid.app/base62",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Base62 encoding",
    "URL-safe format",
    "Alphanumeric encoding",
    "Compact format",
  ],
};

export default function Base62Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Base62Client />
    </>
  );
}

