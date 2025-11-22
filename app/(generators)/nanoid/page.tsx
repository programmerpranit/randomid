import type { Metadata } from "next";
import NanoIDClient from "./NanoIDClient";

export const metadata: Metadata = {
  title: "NanoID Generator - URL-safe Unique ID",
  description: "Generate NanoID identifiers instantly. Small, URL-safe, cryptographically strong unique string IDs. Perfect for URLs and database keys. Free online NanoID generator.",
};

export default function NanoIDPage() {
  return <NanoIDClient />;
}
