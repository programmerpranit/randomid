"use client";

import CryptoJS from "crypto-js";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplayWithInput from "../../components/GeneratorDisplayWithInput";
import InfoSection from "../../components/InfoSection";

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
      <InfoSection
        title="About SHA-256 ID"
        info="SHA-256 (Secure Hash Algorithm 256-bit) generates a 256-bit (32-byte) hash value, typically rendered as a 64-character hexadecimal number. SHA-256 is cryptographically secure and widely used for generating unique identifiers, checksums, and cryptographic signatures. You can provide custom input text to hash, or leave it empty for random generation."
      />
    </>
  );
}

