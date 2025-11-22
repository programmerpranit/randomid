import type { Metadata } from "next";
import KSUIDClient from "./KSUIDClient";

export const metadata: Metadata = {
  title: "KSUID Generator - K-Sortable Unique ID",
  description: "Generate KSUID (K-Sortable Unique Identifier) instantly. 27-character sortable identifiers with timestamp component. Free online KSUID generator.",
};

export default function KSUIDPage() {
  return <KSUIDClient />;
}

