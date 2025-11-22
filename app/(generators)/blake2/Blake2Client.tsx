"use client";

import { blake2b } from "blakejs";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import DetailedInfoSection from "../../components/DetailedInfoSection";

export default function Blake2Client() {
  const generateBlake2 = () => {
    const randomBytes = new Uint8Array(16);
    crypto.getRandomValues(randomBytes);
    const hash = blake2b(randomBytes, undefined, 32);
    return Array.from(hash)
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  };

  return (
    <>
      <TitleSection
        title="Blake2 ID Generator"
        subtitle="Blake2 hash-based unique identifier"
      />
      <GeneratorDisplay label="Generated Blake2 ID" generateFn={generateBlake2} />
      <DetailedInfoSection
        about="Blake2 is a cryptographic hash function faster than MD5, SHA-1, SHA-2, and SHA-3, while maintaining security. It generates hash values that can be used as unique identifiers. Blake2 is optimized for speed and is used in various applications requiring fast cryptographic hashing. It's designed to be faster than SHA-3 while providing similar security guarantees. Blake2b (the 64-bit version) is particularly fast on 64-bit platforms."
        useCases={[
          "High-performance cryptographic hashing",
          "Fast unique identifier generation",
          "Content-addressable storage",
          "Performance-critical security applications",
          "Blockchain and cryptocurrency (some implementations)",
          "Applications requiring speed and security",
          "Real-time hash generation"
        ]}
        howToGenerate={{
          library: "blakejs",
          npmPackage: "npm install blakejs",
          codeExample: `import { blake2b } from 'blakejs';\n\nconst randomBytes = new Uint8Array(16);\ncrypto.getRandomValues(randomBytes);\nconst hash = blake2b(randomBytes, undefined, 32);\nconst hexHash = Array.from(hash)\n  .map(b => b.toString(16).padStart(2, '0'))\n  .join('');`,
        }}
      />
    </>
  );
}

