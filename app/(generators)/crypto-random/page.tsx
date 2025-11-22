import type { Metadata } from "next";
import CryptoRandomClient from "./CryptoRandomClient";

export const metadata: Metadata = {
  title: "Crypto-Random Bytes Generator - Cryptographically Secure",
  description: "Generate cryptographically secure random bytes instantly. 32-byte (256-bit) secure random identifiers for keys and tokens. Free online Crypto-Random generator.",
};

export default function CryptoRandomPage() {
  return <CryptoRandomClient />;
}

