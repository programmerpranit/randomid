import type { Metadata } from "next";
import PetnameClient from "./PetnameClient";

export const metadata: Metadata = {
  title: "Petname ID Generator - Human-readable Identifier",
  description: "Generate Petname ID identifiers instantly. Human-readable, memorable identifiers from word combinations. Free online Petname ID generator.",
};

export default function PetnamePage() {
  return <PetnameClient />;
}

