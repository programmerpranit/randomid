import type { Metadata } from "next";
import Base32Client from "./Base32Client";

export const metadata: Metadata = {
  title: "Base32 ID Generator - Base32 Encoded Random Bytes",
  description: "Generate Base32-encoded random identifiers instantly. Case-insensitive, human-readable encoding. Free online Base32 ID generator.",
};

export default function Base32Page() {
  return <Base32Client />;
}

