import type { Metadata } from "next";
import Blake2Client from "./Blake2Client";

export const metadata: Metadata = {
  title: "Blake2 ID Generator - Blake2 Hash Identifier",
  description: "Generate Blake2 hash-based identifiers instantly. Fast cryptographic hash function optimized for speed. Free online Blake2 ID generator.",
};

export default function Blake2Page() {
  return <Blake2Client />;
}

