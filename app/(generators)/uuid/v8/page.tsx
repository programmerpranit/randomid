import type { Metadata } from "next";
import UUIDV8Client from "./UUIDV8Client";

export const metadata: Metadata = {
  title: "UUID v8 Generator - Custom Implementation UUID",
  description: "Generate UUID v8 identifiers instantly. Custom, implementation-specific UUIDs for vendor-specific schemes. Free online UUID v8 generator.",
};

export default function UUIDV8Page() {
  return <UUIDV8Client />;
}
