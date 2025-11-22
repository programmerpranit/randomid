"use client";

import CryptoJS from "crypto-js";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplayWithInput from "../../components/GeneratorDisplayWithInput";
import DetailedInfoSection from "../../components/DetailedInfoSection";

export default function SHA256Client() {
  return (
    <>
      <TitleSection
        title="SHA-256 Random ID Generator"
        subtitle="SHA-256 hash-based unique identifier"
      />
      <GeneratorDisplayWithInput
        label="Generated SHA-256 ID"
        generateFn={(inputs) => {
          const input = inputs.input || "";
          if (input) {
            return CryptoJS.SHA256(input).toString();
          }
          // If no input, generate from random bytes
          const randomBytes = CryptoJS.lib.WordArray.random(16);
          return CryptoJS.SHA256(randomBytes).toString();
        }}
        inputFields={[
          {
            name: "input",
            label: "Input Text (optional)",
            type: "text",
            placeholder: "Enter text to hash, or leave empty for random",
            defaultValue: "",
            required: false,
          },
        ]}
      />
      <DetailedInfoSection
        about="SHA-256 (Secure Hash Algorithm 256-bit) generates a 256-bit (32-byte) hash value, typically rendered as a 64-character hexadecimal number. SHA-256 is cryptographically secure and widely used for generating unique identifiers, checksums, and cryptographic signatures. It's part of the SHA-2 family and is the recommended hash function for most security-critical applications. SHA-256 provides strong collision resistance and is used in Bitcoin, SSL/TLS certificates, and many security protocols."
        useCases={[
          "Cryptographically secure unique identifiers",
          "Content-addressable storage",
          "Digital signatures and certificates",
          "Blockchain and cryptocurrency applications",
          "Password hashing (with salt)",
          "Data integrity verification",
          "API keys and tokens"
        ]}
        howToGenerate={{
          library: "crypto-js",
          npmPackage: "npm install crypto-js",
          codeExample: `import CryptoJS from 'crypto-js';\n\n// Hash input text\nconst hash = CryptoJS.SHA256('input text').toString();\n\n// Or hash random bytes\nconst randomBytes = CryptoJS.lib.WordArray.random(16);\nconst randomHash = CryptoJS.SHA256(randomBytes).toString();`,
        }}
      />
    </>
  );
}

