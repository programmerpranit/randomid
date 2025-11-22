import type { Metadata } from "next";
import UUIDV7Client from "./UUIDV7Client";

export const metadata: Metadata = {
  title: "UUID v7 Generator - Time-ordered UUID",
  description: "Generate UUID v7 identifiers instantly. Time-ordered UUIDs with Unix epoch timestamp, perfect for database primary keys. Free online UUID v7 generator.",
};

export default function UUIDV7Page() {
  return <UUIDV7Client />;
}
