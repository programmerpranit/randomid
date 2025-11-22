"use client";

import CryptoJS from "crypto-js";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplayWithInput from "../../components/GeneratorDisplayWithInput";
import InfoSection from "../../components/InfoSection";

export default function SHA1Page() {
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
      <InfoSection
        title="About SHA-1 ID"
        info="SHA-1 (Secure Hash Algorithm 1) generates a 160-bit (20-byte) hash value, typically rendered as a 40-character hexadecimal number. While SHA-1 is considered cryptographically broken for security purposes, it's still used for generating deterministic unique identifiers from random input data. You can provide custom input text to hash, or leave it empty for random generation."
      />
    </>
  );
}
