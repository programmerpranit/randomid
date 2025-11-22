"use client";

import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import DetailedInfoSection from "../../components/DetailedInfoSection";

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
      <DetailedInfoSection
        about="Crypto-random bytes are generated using cryptographically secure random number generators (CSPRNG). They provide the highest level of randomness and security, suitable for cryptographic keys, tokens, and security-sensitive identifiers. The Web Crypto API's getRandomValues() method uses a CSPRNG that is suitable for cryptographic purposes. The length can be customized based on your security requirements, with 32 bytes (256 bits) being a common choice for high-security applications."
        useCases={[
          "Cryptographic keys and secrets",
          "Security tokens and session IDs",
          "Initialization vectors (IVs)",
          "Nonces and random challenges",
          "Password reset tokens",
          "API keys and authentication tokens",
          "High-security unique identifiers"
        ]}
        howToGenerate={{
          library: "Web Crypto API (native)",
          npmPackage: "N/A - Native Web Crypto API",
          codeExample: `// Native Web Crypto API\nconst length = 32; // 32 bytes = 256 bits\nconst bytes = new Uint8Array(length);\ncrypto.getRandomValues(bytes);\nconst hexId = Array.from(bytes)\n  .map(b => b.toString(16).padStart(2, '0'))\n  .join('');`,
        }}
      />
    </>
  );
}

