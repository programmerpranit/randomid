import Link from "next/link";

export default function Home() {
  const generators = [
    {
      name: "UUID",
      description: "8 versions available (v1-v8)",
      href: "/uuid/v4",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "CUID",
      description: "Collision-resistant Unique Identifier",
      href: "/cuid",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "GUID",
      description: "Globally Unique Identifier",
      href: "/guid",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "NanoID",
      description: "Small, URL-safe unique string ID",
      href: "/nanoid",
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-light mb-6 text-white tracking-tight">
              Random ID
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Generator
              </span>
            </h1>
            <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
              Generate unique identifiers instantly. Choose from UUID versions (1-8), CUID, GUID, or NanoID formats.
            </p>
          </div>

          {/* Generator Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {generators.map((generator) => (
              <Link
                key={generator.name}
                href={generator.href}
                className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 p-8 hover:shadow-2xl hover:shadow-orange-500/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-light text-white mb-2 tracking-tight">
                      {generator.name}
                    </h2>
                    <p className="text-sm text-gray-400 font-light">
                      {generator.description}
                    </p>
                  </div>
                  <div className={`w-12 h-12 rounded bg-gradient-to-br ${generator.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                </div>
                <div className="flex items-center text-orange-400 text-sm font-light tracking-wide uppercase mt-6">
                  <span>Generate</span>
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
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

          {/* Footer */}
          <div className="mt-16 text-center">
            <p className="text-xs text-gray-500 font-light tracking-wider uppercase">
              Fast • Reliable • Open Source
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
