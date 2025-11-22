import type { Metadata } from "next";
import GUIDClient from "./GUIDClient";

export const metadata: Metadata = {
  title: "GUID Generator - Globally Unique Identifier",
  description: "Generate GUID (Globally Unique Identifier) instantly. Microsoft's term for UUID, commonly used in Windows development. Free online GUID generator.",
};

export default function GUIDPage() {
  return <GUIDClient />;
}
