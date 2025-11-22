"use client";

import CryptoJS from "crypto-js";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplayWithInput from "../../components/GeneratorDisplayWithInput";
import DetailedInfoSection from "../../components/DetailedInfoSection";

export default function MD5Client() {
  return (
    <>
      <TitleSection
        title="MD5 Random ID Generator"
        subtitle="MD5 hash-based unique identifier (not secure)"
      />
      <GeneratorDisplayWithInput
        label="Generated MD5 ID"
        generateFn={(inputs) => {
          const input = inputs.input || "";
          if (input) {
            return CryptoJS.MD5(input).toString();
          }
          // If no input, generate from random bytes
          const randomBytes = CryptoJS.lib.WordArray.random(16);
          return CryptoJS.MD5(randomBytes).toString();
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
        about="MD5 (Message Digest Algorithm 5) generates a 128-bit (16-byte) hash value, typically rendered as a 32-character hexadecimal number. MD5 is cryptographically broken and vulnerable to collision attacks, so it should not be used for security purposes. However, it's still used for generating non-security-critical unique identifiers, checksums, and data integrity verification in non-sensitive contexts. MD5 is fast but insecure for cryptographic purposes."
        useCases={[
          "Non-security-critical unique identifiers",
          "Legacy system compatibility",
          "Checksums for non-sensitive data",
          "Content-addressable storage (non-cryptographic)",
          "Quick hash generation for non-security purposes"
        ]}
        howToGenerate={{
          library: "crypto-js",
          npmPackage: "npm install crypto-js",
          codeExample: `import CryptoJS from 'crypto-js';\n\n// Hash input text\nconst hash = CryptoJS.MD5('input text').toString();\n\n// Or hash random bytes\nconst randomBytes = CryptoJS.lib.WordArray.random(16);\nconst randomHash = CryptoJS.MD5(randomBytes).toString();`,
          note: "Warning: MD5 is cryptographically broken. Use SHA-256 or SHA-512 for security-critical applications."
        }}
      />
    </>
  );
}

