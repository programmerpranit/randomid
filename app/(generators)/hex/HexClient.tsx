"use client";

import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import InfoSection from "../../components/InfoSection";

export default function HexClient() {
  const generateHex = () => {
    const bytes = new Uint8Array(16);
    crypto.getRandomValues(bytes);
    return Array.from(bytes)
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  };

  return (
    <>
      <TitleSection
        title="Hex Random ID Generator"
        subtitle="Hexadecimal-encoded random bytes"
      />
      <GeneratorDisplay label="Generated Hex ID" generateFn={generateHex} />
      <InfoSection
        title="About Hex ID"
        info="Hex (Hexadecimal) encoding represents binary data using base-16 notation (0-9, a-f). Hex IDs are generated from random bytes and encoded in hexadecimal format. They're commonly used for unique identifiers, API keys, and tokens. A 16-byte random value produces a 32-character hex string."
      />
    </>
  );
}

