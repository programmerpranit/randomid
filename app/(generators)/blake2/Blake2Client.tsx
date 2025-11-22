"use client";

import { blake2b } from "blakejs";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import InfoSection from "../../components/InfoSection";

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
      <InfoSection
        title="About Blake2 ID"
        info="Blake2 is a cryptographic hash function faster than MD5, SHA-1, SHA-2, and SHA-3, while maintaining security. It generates hash values that can be used as unique identifiers. Blake2 is optimized for speed and is used in various applications requiring fast cryptographic hashing."
      />
    </>
  );
}

