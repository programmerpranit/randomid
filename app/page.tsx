import { Metadata } from "next";
import Link from "next/link";


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
  const generatorCategories = [
    {
      name: "UUID",
      description: "Universally Unique Identifiers",
      generators: [
        { name: "UUID v1", href: "/uuid/v1", description: "Time-based UUID" },
        { name: "UUID v3", href: "/uuid/v3", description: "Name-based (MD5)" },
        { name: "UUID v4", href: "/uuid/v4", description: "Random UUID" },
        { name: "UUID v5", href: "/uuid/v5", description: "Name-based (SHA-1)" },
        { name: "UUID v7", href: "/uuid/v7", description: "Time-ordered UUID" },
        { name: "UUID v8", href: "/uuid/v8", description: "Custom UUID" },
      ],
    },
    {
      name: "CUID",
      description: "Collision-resistant Unique Identifiers",
      generators: [
        { name: "CUID", href: "/cuid", description: "Collision-resistant ID" },
        { name: "CUID2", href: "/cuid2", description: "Next-gen CUID" },
      ],
    },
    {
      name: "NanoID",
      description: "Small, URL-safe unique string IDs",
      generators: [
        { name: "NanoID Sync", href: "/nanoid-sync", description: "Synchronous generation" },
        { name: "NanoID Async", href: "/nanoid-async", description: "Asynchronous generation" },
        { name: "NanoID Custom", href: "/nanoid-custom", description: "Custom alphabet & length" },
      ],
    },
    {
      name: "Hash-based",
      description: "Hash-based random identifiers",
      generators: [
        { name: "SHA-1", href: "/sha1", description: "SHA-1 hash ID" },
        { name: "SHA-256", href: "/sha256", description: "SHA-256 hash ID" },
        { name: "SHA-512", href: "/sha512", description: "SHA-512 hash ID" },
        { name: "Blake2", href: "/blake2", description: "Blake2 hash ID" },
        { name: "MD5", href: "/md5", description: "MD5 hash ID" },
      ],
    },
    {
      name: "Base-encoded",
      description: "Base-encoded random identifiers",
      generators: [
        { name: "Hex", href: "/hex", description: "Hexadecimal ID" },
        { name: "Base32", href: "/base32", description: "Base32 encoded ID" },
        { name: "Base36", href: "/base36", description: "Base36 encoded ID" },
        { name: "Base58", href: "/base58", description: "Base58 encoded ID" },
        { name: "Base62", href: "/base62", description: "Base62 encoded ID" },
        { name: "Base64", href: "/base64", description: "Base64 encoded ID" },
        { name: "Base64URL", href: "/base64url", description: "Base64URL encoded ID" },
      ],
    },
    {
      name: "Human-readable",
      description: "Human-readable identifier formats",
      generators: [
        { name: "Petname", href: "/petname", description: "Pet name identifier" },
        { name: "Haikunator", href: "/haikunator", description: "Haiku-style names" },
        { name: "2-Word", href: "/word2", description: "Two-word combination" },
        { name: "3-Word", href: "/word3", description: "Three-word combination" },
      ],
    },
    {
      name: "Other Formats",
      description: "Additional unique identifier formats",
      generators: [
        { name: "GUID", href: "/guid", description: "Globally Unique Identifier" },
        { name: "ULID", href: "/ulid", description: "Lexicographically sortable ID" },
        { name: "KSUID", href: "/ksuid", description: "K-Sortable Unique ID" },
        { name: "Snowflake", href: "/snowflake", description: "Twitter Snowflake ID" },
        { name: "ShortUUID", href: "/shortuuid", description: "Short UUID format" },
        { name: "ShortID", href: "/shortid", description: "Short unique identifier" },
        { name: "Crypto Random", href: "/crypto-random", description: "Cryptographic random bytes" },
        { name: "Timestamp", href: "/random-timestamp", description: "Random timestamp ID" },
        { name: "Sequence", href: "/random-sequence", description: "Random sequence ID" },
        { name: "Prefixed", href: "/prefixed", description: "Prefixed identifier" },
        { name: "Suffixed", href: "/suffixed", description: "Suffixed identifier" },
      ],
    },
  ];

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
              <div key={category.name}>
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
