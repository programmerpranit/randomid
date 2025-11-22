import type { Metadata } from "next";
import SHA512Client from "./SHA512Client";

export const metadata: Metadata = {
  title: "SHA-512 ID Generator - SHA-512 Hash Identifier",
  description: "Generate SHA-512 hash-based identifiers instantly. 512-bit hash values with highest security level. Free online SHA-512 ID generator.",
};

export default function SHA512Page() {
  return <SHA512Client />;
}
