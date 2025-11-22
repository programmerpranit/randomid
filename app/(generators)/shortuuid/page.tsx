import type { Metadata } from "next";
import ShortUUIDClient from "./ShortUUIDClient";

export const metadata: Metadata = {
  title: "ShortUUID Generator - Shortened UUID",
  description: "Generate ShortUUID identifiers instantly. Compact, URL-friendly UUID representation using Base58 encoding. Free online ShortUUID generator.",
};

export default function ShortUUIDPage() {
  return <ShortUUIDClient />;
}

