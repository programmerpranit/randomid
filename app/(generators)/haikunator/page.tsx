import type { Metadata } from "next";
import HaikunatorClient from "./HaikunatorClient";

export const metadata: Metadata = {
  title: "Haikunator ID Generator - Haiku-style Identifier",
  description: "Generate Haikunator ID identifiers instantly. Memorable, haiku-like identifiers in adjective-noun-number format. Free online Haikunator ID generator.",
};

export default function HaikunatorPage() {
  return <HaikunatorClient />;
}

