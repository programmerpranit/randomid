import type { Metadata } from "next";
import UUIDV4Client from "./UUIDV4Client";

export const metadata: Metadata = {
  title: "UUID v4 Generator - Random UUID",
  description: "Generate UUID v4 (random) identifiers instantly. The most commonly used UUID version with 122 random bits. Free online UUID v4 generator.",
};

export default function UUIDV4Page() {
  return <UUIDV4Client />;
}
