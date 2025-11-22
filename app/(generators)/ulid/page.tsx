import type { Metadata } from "next";
import ULIDClient from "./ULIDClient";

export const metadata: Metadata = {
  title: "ULID Generator - Sortable Unique ID",
  description: "Generate ULID (Universally Unique Lexicographically Sortable Identifier) instantly. Sortable, URL-safe, 128-bit identifiers perfect for database keys. Free online ULID generator.",
};

export default function ULIDPage() {
  return <ULIDClient />;
}

