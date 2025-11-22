import type { Metadata } from "next";
import Word3Client from "./Word3Client";

export const metadata: Metadata = {
  title: "3-Word ID Generator - Three-word Identifier",
  description: "Generate 3-Word ID identifiers instantly. Memorable, human-readable three-word combinations. Free online 3-Word ID generator.",
};

export default function Word3Page() {
  return <Word3Client />;
}

