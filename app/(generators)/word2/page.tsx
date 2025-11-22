import type { Metadata } from "next";
import Word2Client from "./Word2Client";

export const metadata: Metadata = {
  title: "2-Word ID Generator - Two-word Identifier",
  description: "Generate 2-Word ID identifiers instantly. Memorable, human-readable two-word combinations. Free online 2-Word ID generator.",
};

export default function Word2Page() {
  return <Word2Client />;
}

