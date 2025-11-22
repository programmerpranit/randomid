import type { Metadata } from "next";
import PrefixedClient from "./PrefixedClient";

export const metadata: Metadata = {
  title: "Prefixed ID Generator - Custom Prefix ID",
  description: "Generate Prefixed ID identifiers instantly. Combine custom prefixes with random suffixes for categorized, namespaced IDs. Free online Prefixed ID generator.",
};

export default function PrefixedPage() {
  return <PrefixedClient />;
}
