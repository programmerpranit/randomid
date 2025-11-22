import type { Metadata } from "next";
import Base64URLClient from "./Base64URLClient";

export const metadata: Metadata = {
  title: "Base64URL ID Generator - URL-safe Base64",
  description: "Generate Base64URL-encoded random identifiers instantly. URL-safe variant of Base64, perfect for URLs and JWT tokens. Free online Base64URL ID generator.",
};

export default function Base64URLPage() {
  return <Base64URLClient />;
}

