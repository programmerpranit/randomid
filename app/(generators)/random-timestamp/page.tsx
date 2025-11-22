import type { Metadata } from "next";
import RandomTimestampClient from "./RandomTimestampClient";

export const metadata: Metadata = {
  title: "Random Timestamp Generator - Random Unix Timestamp",
  description: "Generate random timestamp identifiers instantly. Random Unix timestamps for testing and anonymization. Free online Random Timestamp generator.",
};

export default function RandomTimestampPage() {
  return <RandomTimestampClient />;
}

