import type { Metadata } from "next";
import Base36Client from "./Base36Client";

export const metadata: Metadata = {
  title: "Base36 ID Generator - Base36 Encoded Random Number",
  description: "Generate Base36-encoded random identifiers instantly. Compact, case-insensitive alphanumeric encoding. Free online Base36 ID generator.",
};

export default function Base36Page() {
  return <Base36Client />;
}

