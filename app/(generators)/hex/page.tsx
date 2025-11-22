import type { Metadata } from "next";
import HexClient from "./HexClient";

export const metadata: Metadata = {
  title: "Hex ID Generator - Hexadecimal Encoded Random Bytes",
  description: "Generate Hex (Hexadecimal) encoded random identifiers instantly. Base-16 encoding for unique identifiers, API keys, and tokens. Free online Hex ID generator.",
};

export default function HexPage() {
  return <HexClient />;
}

