"use client";

import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import DetailedInfoSection from "../../components/DetailedInfoSection";

export default function Base36Client() {
  const generateBase36 = () => {
    const randomValue = BigInt(
      "0x" +
        Array.from(crypto.getRandomValues(new Uint8Array(8)))
          .map((b) => b.toString(16).padStart(2, "0"))
          .join("")
    );
    return randomValue.toString(36).toUpperCase();
  };

  return (
    <>
      <TitleSection
        title="Base36 Random ID Generator"
        subtitle="Base36-encoded random number"
      />
      <GeneratorDisplay
        label="Generated Base36 ID"
        generateFn={generateBase36}
      />
      <DetailedInfoSection
        about="Base36 encoding uses 36 characters (0-9, A-Z) to represent numbers. Base36 IDs are compact, case-insensitive, and use only alphanumeric characters. They're useful for generating short, URL-friendly identifiers that are easy to read and type. Base36 is the highest base that can be represented using only Arabic numerals and Latin letters without case sensitivity."
        useCases={[
          "Case-insensitive identifier systems",
          "Short URL slugs and links",
          "Compact numeric representations",
          "URL-friendly identifiers",
          "Human-readable unique IDs",
          "Systems requiring alphanumeric-only IDs"
        ]}
        howToGenerate={{
          library: "Native JavaScript (BigInt.toString(36))",
          npmPackage: "N/A - Native implementation",
          codeExample: `// Native implementation using BigInt\nconst randomValue = BigInt(\n  '0x' + Array.from(crypto.getRandomValues(new Uint8Array(8)))\n    .map(b => b.toString(16).padStart(2, '0'))\n    .join('')\n);\nconst base36Id = randomValue.toString(36).toUpperCase();`,
        }}
      />
    </>
  );
}

