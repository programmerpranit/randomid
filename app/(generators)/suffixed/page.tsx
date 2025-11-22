import type { Metadata } from "next";
import SuffixedClient from "./SuffixedClient";

export const metadata: Metadata = {
  title: "Suffixed ID Generator - Custom Suffix ID",
  description: "Generate Suffixed ID identifiers instantly. Combine random prefix with custom suffix for metadata and version indicators. Free online Suffixed ID generator.",
};

export default function SuffixedPage() {
  return <SuffixedClient />;
}
