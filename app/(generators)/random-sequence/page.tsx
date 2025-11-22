import type { Metadata } from "next";
import RandomSequenceClient from "./RandomSequenceClient";

export const metadata: Metadata = {
  title: "Random Sequence Generator - Custom Alphanumeric ID",
  description: "Generate random sequence identifiers instantly. Customizable length and character set for unique identifiers, codes, and tokens. Free online Random Sequence generator.",
};

export default function RandomSequencePage() {
  return <RandomSequenceClient />;
}
