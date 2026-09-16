import { Metadata } from "next";
import Link from "next/link";
import { generatorCategories } from "./lib/generators";

export const metadata: Metadata = {
  title: "Random ID Generator",
  description: "Generate unique identifiers instantly. Free online UUID, CUID, NanoID, and 50+ other ID generator formats.",
  alternates: {
    canonical: "https://randomid.app",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomid.app",
    siteName: "Random ID Generator",
    title: "Random ID Generator - UUID, CUID, GUID, NanoID & More",
    description: "Generate unique identifiers instantly. Free online UUID, CUID, GUID, NanoID, and 50+ other ID generator formats. Copy to clipboard with one click.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Random ID Generator Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Random ID Generator - UUID, CUID, GUID, NanoID & More",
    description: "Generate unique identifiers instantly. Free online UUID, CUID, GUID, NanoID, and 50+ other ID generator formats.",
    images: ["/logo.png"],
    creator: "@randomidapp",
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Random ID Generator",
    description: "Generate unique identifiers instantly. Free online UUID, CUID, GUID, NanoID, and 50+ other ID generator formats.",
    url: "https://randomid.app",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "UUID Generator",
      "CUID Generator",
      "NanoID Generator",
      "GUID Generator",
      "Hash-based ID Generators",
      "Base-encoded ID Generators",
      "Human-readable ID Generators",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "100",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-light mb-6 text-white tracking-tight">
              Random ID
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Generator
              </span>
            </h1>
            <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
              Generate unique identifiers instantly. Choose from 50+ ID generator formats including UUID, CUID, NanoID, hash-based, base-encoded, and human-readable formats.
            </p>
          </div>

          {/* Generator Categories */}
          <div className="space-y-12">
            {generatorCategories.map((category) => (
              <div key={category.key}>
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-light text-white mb-2 tracking-tight">
                    {category.name}
                  </h2>
                  <p className="text-sm text-gray-400 font-light">
                    {category.description}
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.generators.map((generator) => (
                    <Link
                      key={generator.href}
                      href={generator.href}
                      className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 p-6 hover:shadow-2xl hover:shadow-orange-500/10"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-lg font-light text-white mb-1 tracking-tight group-hover:text-orange-400 transition-colors">
                            {generator.name}
                          </h3>
                          <p className="text-xs text-gray-400 font-light">
                            {generator.description}
                          </p>
                        </div>
                        <div className="w-8 h-8 rounded bg-gradient-to-br from-orange-500 to-orange-600 opacity-20 group-hover:opacity-30 transition-opacity ml-3" />
                      </div>
                      <div className="flex items-center text-orange-400 text-xs font-light tracking-wide uppercase mt-4">
                        <span>Generate</span>
                        <svg
                          className="w-3 h-3 ml-2 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
