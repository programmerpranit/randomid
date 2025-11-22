"use client";

import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import DetailedInfoSection from "../../components/DetailedInfoSection";

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
      <DetailedInfoSection
        about="Hex (Hexadecimal) encoding represents binary data using base-16 notation (0-9, a-f). Hex IDs are generated from random bytes and encoded in hexadecimal format. They're commonly used for unique identifiers, API keys, and tokens. A 16-byte random value produces a 32-character hex string. Hexadecimal is the most common way to represent binary data in human-readable form and is widely used in programming, debugging, and data representation."
        useCases={[
          "API keys and tokens",
          "Unique identifiers",
          "Cryptographic keys representation",
          "Debugging and logging",
          "Color codes (CSS hex colors)",
          "Memory addresses and pointers",
          "General-purpose binary data representation"
        ]}
        howToGenerate={{
          library: "Native JavaScript",
          npmPackage: "N/A - Native implementation",
          codeExample: `// Native implementation\nconst bytes = new Uint8Array(16);\ncrypto.getRandomValues(bytes);\nconst hexId = Array.from(bytes)\n  .map(b => b.toString(16).padStart(2, '0'))\n  .join('');`,
        }}
      />
    </>
  );
}

