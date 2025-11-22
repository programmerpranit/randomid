import type { Metadata } from "next";
import SHA1Client from "./SHA1Client";

export const metadata: Metadata = {
  title: "SHA-1 ID Generator - SHA-1 Hash Identifier",
  description: "Generate SHA-1 hash-based identifiers instantly. 160-bit hash values (cryptographically broken, use SHA-256 for security). Free online SHA-1 ID generator.",
};

export default function SHA1Page() {
  return <SHA1Client />;
}
