import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { GoogleTagManager } from '@next/third-parties/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://randomid.app"),
  title: {
    default: "Random ID Generator - UUID, CUID, GUID, NanoID & More",
    template: "%s | Random ID Generator",
  },
  description: "Generate unique identifiers instantly. Free online UUID, CUID, GUID, NanoID, and 50+ other ID generator formats. Copy to clipboard with one click. No registration required.",
  keywords: [
    "uuid generator",
    "cuid generator",
    "nanoid generator",
    "guid generator",
    "unique id generator",
    "random id generator",
    "identifier generator",
    "uuid v4",
    "uuid v7",
    "ulid generator",
    "ksuid generator",
    "snowflake id",
    "hash generator",
    "base64 generator",
    "random string generator",
  ],
  authors: [{ name: "Random ID Generator" }],
  creator: "Random ID Generator",
  publisher: "Random ID Generator",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://randomid.app",
  },
  category: "developer tools",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: ["/favicon.png"], // for Safari / legacy browsers
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-1CK6RX11B6" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
