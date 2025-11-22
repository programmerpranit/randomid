import type { Metadata } from "next";
import SHA256Client from "./SHA256Client";

export const metadata: Metadata = {
  title: "SHA-256 ID Generator - Secure Hash Algorithm",
  description: "Generate SHA-256 hash-based unique identifiers instantly. Cryptographically secure 256-bit hash values. Free online SHA-256 generator with optional custom input.",
};

export default function SHA256Page() {
  return <SHA256Client />;
}
