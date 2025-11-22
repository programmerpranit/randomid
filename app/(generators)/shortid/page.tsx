import type { Metadata } from "next";
import ShortIDClient from "./ShortIDClient";

export const metadata: Metadata = {
  title: "ShortID Generator - Compact Unique Identifier",
  description: "Generate ShortID identifiers instantly. Compact, URL-safe unique identifiers with customizable length. Free online ShortID generator.",
};

export default function ShortIDPage() {
  return <ShortIDClient />;
}

