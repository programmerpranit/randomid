import type { Metadata } from "next";
import NanoIDSyncClient from "./NanoIDSyncClient";

export const metadata: Metadata = {
  title: "NanoID Sync Generator - Synchronous URL-safe ID",
  description: "Generate NanoID identifiers synchronously instantly. Immediate generation without async operations. Free online NanoID Sync generator.",
};

export default function NanoIDSyncPage() {
  return <NanoIDSyncClient />;
}

