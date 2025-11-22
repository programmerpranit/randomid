"use client";

import CryptoJS from "crypto-js";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplayWithInput from "../../components/GeneratorDisplayWithInput";
import DetailedInfoSection from "../../components/DetailedInfoSection";

export default function SHA512Client() {
  return (
    <>
      <TitleSection
        title="SHA-512 Random ID Generator"
        subtitle="SHA-512 hash-based unique identifier"
      />
      <GeneratorDisplayWithInput
        label="Generated SHA-512 ID"
        generateFn={(inputs) => {
          const input = inputs.input || "";
          if (input) {
            return CryptoJS.SHA512(input).toString();
          }
          // If no input, generate from random bytes
          const randomBytes = CryptoJS.lib.WordArray.random(16);
          return CryptoJS.SHA512(randomBytes).toString();
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
        about="SHA-512 (Secure Hash Algorithm 512-bit) generates a 512-bit (64-byte) hash value, typically rendered as a 128-character hexadecimal number. SHA-512 provides the highest level of security among SHA-2 algorithms and is used for generating very secure unique identifiers and cryptographic hashes. It offers stronger security than SHA-256 but produces longer hashes. SHA-512 is ideal for applications requiring maximum security and collision resistance."
        useCases={[
          "Maximum security unique identifiers",
          "High-security cryptographic applications",
          "Password hashing (with salt)",
          "Digital signatures requiring maximum security",
          "Blockchain and cryptocurrency (some implementations)",
          "Security-critical systems",
          "Long-term data integrity"
        ]}
        howToGenerate={{
          library: "crypto-js",
          npmPackage: "npm install crypto-js",
          codeExample: `import CryptoJS from 'crypto-js';\n\n// Hash input text\nconst hash = CryptoJS.SHA512('input text').toString();\n\n// Or hash random bytes\nconst randomBytes = CryptoJS.lib.WordArray.random(16);\nconst randomHash = CryptoJS.SHA512(randomBytes).toString();`,
        }}
      />
    </>
  );
}

