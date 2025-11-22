import type { Metadata } from "next";
import MD5Client from "./MD5Client";

export const metadata: Metadata = {
  title: "MD5 ID Generator - MD5 Hash Identifier",
  description: "Generate MD5 hash-based identifiers instantly. 128-bit hash values (not secure for cryptography). Free online MD5 ID generator.",
};

export default function MD5Page() {
  return <MD5Client />;
}
