"use client";

import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import InfoSection from "../../components/InfoSection";

export default function Base32Page() {
  const base32Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";

  const generateBase32 = () => {
    const bytes = new Uint8Array(10);
    crypto.getRandomValues(bytes);
    let result = "";
    let bits = 0;
    let value = 0;

    for (const byte of bytes) {
      value = (value << 8) | byte;
      bits += 8;

      while (bits >= 5) {
        result += base32Chars[(value >>> (bits - 5)) & 31];
        bits -= 5;
      }
    }

    if (bits > 0) {
      result += base32Chars[(value << (5 - bits)) & 31];
    }

    return result;
  };

  return (
    <>
      <TitleSection
        title="Base32 Random ID Generator"
        subtitle="Base32-encoded random bytes"
      />
      <GeneratorDisplay
        label="Generated Base32 ID"
        generateFn={generateBase32}
      />
      <InfoSection
        title="About Base32 ID"
        info="Base32 encoding uses 32 characters (A-Z, 2-7) to represent binary data. Base32 IDs are case-insensitive, human-readable, and avoid ambiguous characters like 0, O, 1, I, and L. They're useful for identifiers that need to be communicated verbally or in case-insensitive contexts."
      />
    </>
  );
}

