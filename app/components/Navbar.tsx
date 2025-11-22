"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

type NavItem = {
  name: string;
  href: string;
  hasDropdown: boolean;
  children?: Array<{ name: string; href: string }>;
  defaultHref?: string;
};

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const toggleDropdown = (key: string) => {
    setOpenDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      Object.keys(dropdownRefs.current).forEach((key) => {
        const ref = dropdownRefs.current[key];
        if (ref && !ref.contains(event.target as Node)) {
          setOpenDropdowns((prev) => ({ ...prev, [key]: false }));
        }
      });
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems: NavItem[] = [
    {
      name: "UUID",
      href: "/uuid/v4",
      hasDropdown: true,
      defaultHref: "/uuid/v4",
      children: [
        { name: "Version 1", href: "/uuid/v1" },
        { name: "Version 3", href: "/uuid/v3" },
        { name: "Version 4", href: "/uuid/v4" },
        { name: "Version 5", href: "/uuid/v5" },
        { name: "Version 7", href: "/uuid/v7" },
        { name: "Version 8", href: "/uuid/v8" },
      ],
    },
    {
      name: "CUID",
      href: "/cuid",
      hasDropdown: true,
      defaultHref: "/cuid",
      children: [
        { name: "CUID", href: "/cuid" },
        { name: "CUID2", href: "/cuid2" },
      ],
    },
    {
      name: "NanoID",
      href: "/nanoid-sync",
      hasDropdown: true,
      defaultHref: "/nanoid-sync",
      children: [
        { name: "Sync", href: "/nanoid-sync" },
        { name: "Async", href: "/nanoid-async" },
        { name: "Custom", href: "/nanoid-custom" },
      ],
    },
    {
      name: "Hash",
      href: "/sha256",
      hasDropdown: true,
      defaultHref: "/sha256",
      children: [
        { name: "SHA-1", href: "/sha1" },
        { name: "SHA-256", href: "/sha256" },
        { name: "SHA-512", href: "/sha512" },
        { name: "Blake2", href: "/blake2" },
        { name: "MD5", href: "/md5" },
      ],
    },
    {
      name: "Base",
      href: "/base64",
      hasDropdown: true,
      defaultHref: "/base64",
      children: [
        { name: "Hex", href: "/hex" },
        { name: "Base32", href: "/base32" },
        { name: "Base36", href: "/base36" },
        { name: "Base58", href: "/base58" },
        { name: "Base62", href: "/base62" },
        { name: "Base64", href: "/base64" },
        { name: "Base64URL", href: "/base64url" },
      ],
    },
    {
      name: "Human",
      href: "/petname",
      hasDropdown: true,
      defaultHref: "/petname",
      children: [
        { name: "Petname", href: "/petname" },
        { name: "Haikunator", href: "/haikunator" },
        { name: "2-Word", href: "/word2" },
        { name: "3-Word", href: "/word3" },
      ],
    },
    {
      name: "Others",
      href: "/guid",
      hasDropdown: true,
      defaultHref: "/guid",
      children: [
        { name: "GUID", href: "/guid" },
        { name: "ULID", href: "/ulid" },
        { name: "KSUID", href: "/ksuid" },
        { name: "Snowflake", href: "/snowflake" },
        { name: "ShortUUID", href: "/shortuuid" },
        { name: "ShortID", href: "/shortid" },
        { name: "Crypto", href: "/crypto-random" },
        { name: "Timestamp", href: "/random-timestamp" },
        { name: "Sequence", href: "/random-sequence" },
        { name: "Prefixed", href: "/prefixed" },
        { name: "Suffixed", href: "/suffixed" },
      ],
    },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  const isItemActive = (item: NavItem) => {
    if (item.hasDropdown && item.children) {
      return item.children.some((child) => isActive(child.href));
    }
    return isActive(item.href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 backdrop-blur-md border-b border-gray-700/30 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-200 hover:text-orange-400 transition-colors"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
              <span className="text-white text-xs font-light tracking-wider">ID</span>
            </div>
            <span className="text-lg font-light tracking-wide hidden sm:block text-gray-200">
              Random ID
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className={cn(
                "px-4 py-2 text-sm font-light tracking-wider uppercase transition-colors",
                pathname === "/"
                  ? "text-orange-400 border-b-2 border-orange-400"
                  : "text-gray-300 hover:text-orange-400"
              )}
            >
              Home
            </Link>
            {navItems.map((item) => {
              const dropdownKey = item.name.toLowerCase();
              const isOpen = openDropdowns[dropdownKey] || false;
              const active = isItemActive(item);

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    ref={(el) => {
                      dropdownRefs.current[dropdownKey] = el;
                    }}
                  >
                    <div className="flex items-center">
                      <Link
                        href={item.defaultHref || item.href}
                        className={cn(
                          "px-4 py-2 text-sm font-light tracking-wider uppercase transition-colors",
                          active
                            ? "text-orange-400 border-b-2 border-orange-400"
                            : "text-gray-300 hover:text-orange-400"
                        )}
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => toggleDropdown(dropdownKey)}
                        className={cn(
                          "px-2 py-2 text-sm font-light transition-colors",
                          active ? "text-orange-400" : "text-gray-300 hover:text-orange-400"
                        )}
                        aria-label={`Toggle ${item.name} dropdown`}
                      >
                        <svg
                          className={cn(
                            "w-4 h-4 transition-transform duration-200",
                            isOpen ? "rotate-180" : ""
                          )}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>
                    {isOpen && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-gray-800 backdrop-blur-md border border-gray-700/50 shadow-2xl">
                        {item.children?.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpenDropdowns({})}
                            className={cn(
                              "block px-4 py-2.5 text-sm font-light tracking-wider uppercase transition-colors border-b border-gray-700/30 last:border-b-0",
                              isActive(child.href)
                                ? "text-orange-400 bg-orange-500/10 border-l-2 border-orange-400"
                                : "text-gray-300 hover:text-orange-400 hover:bg-gray-700/50"
                            )}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-light tracking-wider uppercase transition-colors",
                    isActive(item.href)
                      ? "text-orange-400 border-b-2 border-orange-400"
                      : "text-gray-300 hover:text-orange-400"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-300 hover:text-orange-400 transition-colors p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-700/30 py-4 max-h-[calc(100vh-4rem)] overflow-y-auto bg-gray-900/95 backdrop-blur-md">
            <div className="flex flex-col gap-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 text-sm font-light tracking-wider uppercase transition-colors",
                  pathname === "/"
                    ? "text-orange-400 bg-orange-500/10 border-l-2 border-orange-400"
                    : "text-gray-300 hover:text-orange-400 hover:bg-gray-800/50"
                )}
              >
                Home
              </Link>
              {navItems.map((item) => {
                const dropdownKey = item.name.toLowerCase();
                const isOpen = openDropdowns[dropdownKey] || false;
                const active = isItemActive(item);

                if (item.hasDropdown) {
                  return (
                    <div key={item.name}>
                      <div className="flex items-center">
                        <Link
                          href={item.defaultHref || item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "flex-1 px-4 py-3 text-sm font-light tracking-wider uppercase transition-colors",
                            active
                              ? "text-orange-400 bg-orange-500/10 border-l-2 border-orange-400"
                              : "text-gray-300 hover:text-orange-400 hover:bg-gray-800/50"
                          )}
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() => toggleDropdown(dropdownKey)}
                          className="px-4 py-3 text-gray-300 hover:text-orange-400 transition-colors"
                        >
                          <svg
                            className={cn(
                              "w-4 h-4 transition-transform duration-200",
                              isOpen ? "rotate-180" : ""
                            )}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      </div>
                      {isOpen && (
                        <div className="pl-4 border-l-2 border-gray-700/30 ml-4">
                          {item.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setOpenDropdowns({});
                              }}
                              className={cn(
                                "block px-4 py-2.5 text-sm font-light tracking-wider uppercase transition-colors",
                                isActive(child.href)
                                  ? "text-orange-400 bg-orange-500/10 border-l-2 border-orange-400"
                                  : "text-gray-300 hover:text-orange-400 hover:bg-gray-800/50"
                              )}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "px-4 py-3 text-sm font-light tracking-wider uppercase transition-colors",
                      isActive(item.href)
                        ? "text-orange-400 bg-orange-500/10 border-l-2 border-orange-400"
                        : "text-gray-300 hover:text-orange-400 hover:bg-gray-800/50"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
