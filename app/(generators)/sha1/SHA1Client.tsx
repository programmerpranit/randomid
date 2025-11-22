"use client";

import CryptoJS from "crypto-js";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplayWithInput from "../../components/GeneratorDisplayWithInput";
import DetailedInfoSection from "../../components/DetailedInfoSection";

export default function SHA1Client() {
  return (
    <>
      <TitleSection
        title="SHA-1 Random ID Generator"
        subtitle="SHA-1 hash-based unique identifier"
      />
      <GeneratorDisplayWithInput
        label="Generated SHA-1 ID"
        generateFn={(inputs) => {
          const input = inputs.input || "";
          if (input) {
            return CryptoJS.SHA1(input).toString();
          }
          // If no input, generate from random bytes
          const randomBytes = CryptoJS.lib.WordArray.random(16);
          return CryptoJS.SHA1(randomBytes).toString();
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
        about="SHA-1 (Secure Hash Algorithm 1) generates a 160-bit (20-byte) hash value, typically rendered as a 40-character hexadecimal number. While SHA-1 is considered cryptographically broken and vulnerable to collision attacks, it's still used for generating deterministic unique identifiers from random input data in non-security-critical contexts. SHA-1 is deprecated for cryptographic purposes but may be used for legacy compatibility."
        useCases={[
          "Legacy system compatibility",
          "Non-security-critical unique identifiers",
          "Git commit hashes (legacy)",
          "Content-addressable storage (non-cryptographic)",
          "Deterministic ID generation from input"
        ]}
        howToGenerate={{
          library: "crypto-js",
          npmPackage: "npm install crypto-js",
          codeExample: `import CryptoJS from 'crypto-js';\n\n// Hash input text\nconst hash = CryptoJS.SHA1('input text').toString();\n\n// Or hash random bytes\nconst randomBytes = CryptoJS.lib.WordArray.random(16);\nconst randomHash = CryptoJS.SHA1(randomBytes).toString();`,
          note: "Warning: SHA-1 is cryptographically broken. Use SHA-256 or SHA-512 for security-critical applications."
        }}
      />
    </>
  );
}

