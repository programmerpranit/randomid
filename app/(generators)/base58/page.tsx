import type { Metadata } from "next";
import Base58Client from "./Base58Client";

export const metadata: Metadata = {
  title: "Base58 ID Generator - Base58 Encoded Random Bytes",
  description: "Generate Base58-encoded random identifiers instantly. Compact, URL-safe encoding without ambiguous characters. Free online Base58 ID generator.",
};

export default function Base58Page() {
  return <Base58Client />;
}

