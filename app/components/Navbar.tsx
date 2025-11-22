"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [uuidDropdownOpen, setUuidDropdownOpen] = useState(false);

  const uuidVersions = [
    { name: "Version 1", href: "/uuid/v1" },
    { name: "Version 2", href: "/uuid/v2" },
    { name: "Version 3", href: "/uuid/v3" },
    { name: "Version 4", href: "/uuid/v4" },
    { name: "Version 5", href: "/uuid/v5" },
    { name: "Version 6", href: "/uuid/v6" },
    { name: "Version 7", href: "/uuid/v7" },
    { name: "Version 8", href: "/uuid/v8" },
  ];

  const navItems: Array<{
    name: string;
    href: string;
    hasDropdown: boolean;
    children?: typeof uuidVersions;
    defaultHref?: string;
  }> = [
    {
      name: "UUID",
      href: "/uuid/v4",
      hasDropdown: true,
      children: uuidVersions,
      defaultHref: "/uuid/v4",
    },
    { name: "CUID", href: "/cuid", hasDropdown: false },
    { name: "GUID", href: "/guid", hasDropdown: false },
    { name: "NanoID", href: "/nanoid", hasDropdown: false },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  const isUuidActive = () => {
    return pathname?.startsWith("/uuid");
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-white hover:text-orange-400 transition-colors"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
              <span className="text-white text-sm font-light">ID</span>
            </div>
            <span className="text-lg font-light tracking-tight hidden sm:block">
              Random ID
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className={`px-4 py-2 text-sm font-light tracking-wide transition-all duration-200 ${
                pathname === "/"
                  ? "text-orange-400"
                  : "text-gray-400 hover:text-orange-400"
              }`}
            >
              Home
            </Link>
            {navItems.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setUuidDropdownOpen(true)}
                    onMouseLeave={() => setUuidDropdownOpen(false)}
                  >
                    <Link
                      href={item.defaultHref || item.href}
                      className={`px-4 py-2 text-sm font-light tracking-wide transition-all duration-200 flex items-center gap-1 ${
                        isUuidActive()
                          ? "text-orange-400"
                          : "text-gray-400 hover:text-orange-400"
                      }`}
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          uuidDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </Link>
                    {uuidDropdownOpen && (
                      <>
                        {/* Invisible bridge to maintain hover */}
                        <div className="absolute top-full left-0 right-0 h-1" />
                        {/* Dropdown menu */}
                        <div className="absolute top-full left-0 mt-1 w-48 bg-gray-800 border border-gray-700/50 shadow-xl py-1 z-50">
                          {item.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block px-4 py-2 text-sm font-light tracking-wide transition-all duration-200 ${
                                isActive(child.href)
                                  ? "text-orange-400 bg-orange-500/10 border-l-2 border-orange-500"
                                  : "text-gray-400 hover:text-orange-400 hover:bg-gray-700/50"
                              }`}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-light tracking-wide transition-all duration-200 ${
                    isActive(item.href)
                      ? "text-orange-400"
                      : "text-gray-400 hover:text-orange-400"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-400 hover:text-orange-400 transition-colors p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-700/50 py-4">
            <div className="flex flex-col gap-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 text-sm font-light tracking-wide transition-all duration-200 ${
                  pathname === "/"
                    ? "text-orange-400 bg-orange-500/10 border-l-2 border-orange-500"
                    : "text-gray-400 hover:text-orange-400 hover:bg-gray-800/50"
                }`}
              >
                Home
              </Link>
              {navItems.map((item) => {
                if (item.hasDropdown) {
                  return (
                    <div key={item.name}>
                      <div className="flex items-center">
                        <Link
                          href={item.defaultHref || item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex-1 px-4 py-3 text-sm font-light tracking-wide transition-all duration-200 ${
                            isUuidActive()
                              ? "text-orange-400 bg-orange-500/10 border-l-2 border-orange-500"
                              : "text-gray-400 hover:text-orange-400 hover:bg-gray-800/50"
                          }`}
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() => setUuidDropdownOpen(!uuidDropdownOpen)}
                          className="px-4 py-3 text-gray-400 hover:text-orange-400 transition-colors"
                        >
                          <svg
                            className={`w-4 h-4 transition-transform ${
                              uuidDropdownOpen ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      </div>
                      {uuidDropdownOpen && (
                        <div className="pl-4">
                          {item.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setUuidDropdownOpen(false);
                              }}
                              className={`block px-4 py-2 text-sm font-light tracking-wide transition-all duration-200 ${
                                isActive(child.href)
                                  ? "text-orange-400 bg-orange-500/10 border-l-2 border-orange-500"
                                  : "text-gray-400 hover:text-orange-400 hover:bg-gray-800/50"
                              }`}
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
                    className={`px-4 py-3 text-sm font-light tracking-wide transition-all duration-200 ${
                      isActive(item.href)
                        ? "text-orange-400 bg-orange-500/10 border-l-2 border-orange-500"
                        : "text-gray-400 hover:text-orange-400 hover:bg-gray-800/50"
                    }`}
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
