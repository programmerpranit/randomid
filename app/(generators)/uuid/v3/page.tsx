import type { Metadata } from "next";
import UUIDV3Client from "./UUIDV3Client";

export const metadata: Metadata = {
  title: "UUID v3 Generator - Name-based UUID (MD5)",
  description: "Generate UUID v3 identifiers instantly. Name-based UUIDs using MD5 hashing (deterministic). Free online UUID v3 generator.",
};

export default function UUIDV3Page() {
  return <UUIDV3Client />;
}
