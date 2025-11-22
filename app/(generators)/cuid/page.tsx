import type { Metadata } from "next";
import CUIDClient from "./CUIDClient";

export const metadata: Metadata = {
  title: "CUID Generator - Collision-resistant Unique ID",
  description: "Generate CUID (Collision-resistant Unique Identifier) instantly. Secure, URL-safe IDs optimized for horizontal scaling. Free online CUID generator.",
};

export default function CUIDPage() {
  return <CUIDClient />;
}
