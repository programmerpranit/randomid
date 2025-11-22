import type { Metadata } from "next";
import NanoIDCustomClient from "./NanoIDCustomClient";

export const metadata: Metadata = {
  title: "NanoID Custom Generator - Custom Alphabet & Length",
  description: "Generate custom NanoID identifiers instantly. Specify custom alphabet and length for compatibility and branding. Free online NanoID Custom generator.",
};

export default function NanoIDCustomPage() {
  return <NanoIDCustomClient />;
}
