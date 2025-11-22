import type { Metadata } from "next";
import UUIDV5Client from "./UUIDV5Client";

export const metadata: Metadata = {
  title: "UUID v5 Generator - Name-based UUID (SHA-1)",
  description: "Generate UUID v5 identifiers instantly. Name-based UUIDs using SHA-1 hashing (deterministic, preferred over v3). Free online UUID v5 generator.",
};

export default function UUIDV5Page() {
  return <UUIDV5Client />;
}
