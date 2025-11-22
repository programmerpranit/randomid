"use client";

import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import InfoSection from "../../components/InfoSection";

export default function CryptoRandomClient() {
  const generateCryptoRandom = () => {
    const length = 32; // 32 bytes = 256 bits
    const bytes = new Uint8Array(length);
    crypto.getRandomValues(bytes);
    return Array.from(bytes)
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  };

  return (
    <>
      <TitleSection
        title="Crypto-Random Bytes Generator"
        subtitle="Cryptographically secure random bytes"
      />
      <GeneratorDisplay
        label="Generated Crypto-Random ID (32 bytes)"
        generateFn={generateCryptoRandom}
      />
      <InfoSection
        title="About Crypto-Random Bytes"
        info="Crypto-random bytes are generated using cryptographically secure random number generators (CSPRNG). They provide the highest level of randomness and security, suitable for cryptographic keys, tokens, and security-sensitive identifiers. The length can be customized based on your security requirements."
      />
    </>
  );
}

