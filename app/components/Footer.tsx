import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    categories: [
      { name: "UUID", href: "/uuid/v4" },
      { name: "CUID", href: "/cuid" },
      { name: "NanoID", href: "/nanoid-sync" },
      { name: "ULID", href: "/ulid" },
    ],
    formats: [
      { name: "Hash-based", href: "/sha256" },
      { name: "Base-encoded", href: "/base64" },
      { name: "Human-readable", href: "/petname" },
      { name: "Other Formats", href: "/guid" },
    ],
  };

  return (
    <footer className="bg-gray-900/80 backdrop-blur-md border-t border-gray-700/30 mt-auto">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="col-span-1 md:col-span-2">
              <Link
                href="/"
                className="flex items-center gap-2 text-gray-200 hover:text-orange-400 transition-colors mb-4"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                  <span className="text-white text-xs font-light tracking-wider">ID</span>
                </div>
                <span className="text-lg font-light tracking-wide text-gray-200">
                  Random ID
                </span>
              </Link>
              <p className="text-sm text-gray-400 font-light leading-relaxed max-w-md">
                Generate unique identifiers instantly. Free online ID generators for UUID, CUID, GUID, NanoID, and 30+ other formats.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-light tracking-wider uppercase text-gray-300 mb-4">
                Categories
              </h3>
              <ul className="space-y-2">
                {footerLinks.categories.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 font-light hover:text-orange-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Formats */}
            <div>
              <h3 className="text-sm font-light tracking-wider uppercase text-gray-300 mb-4">
                Formats
              </h3>
              <ul className="space-y-2">
                {footerLinks.formats.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 font-light hover:text-orange-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700/30 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-gray-500 font-light tracking-wider uppercase">
                © {currentYear} Random ID Generator. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <p className="text-xs text-gray-500 font-light tracking-wider uppercase">
                  Fast • Reliable • Open Source
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

