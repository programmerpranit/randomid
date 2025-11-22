import type { Metadata } from "next";
import Base64Client from "./Base64Client";

export const metadata: Metadata = {
  title: "Base64 ID Generator - Base64 Encoded Random Bytes",
  description: "Generate Base64-encoded random identifiers instantly. Compact, efficient encoding using 64 characters. Free online Base64 ID generator.",
};

export default function Base64Page() {
  return <Base64Client />;
}

