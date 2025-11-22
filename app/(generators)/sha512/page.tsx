"use client";

import CryptoJS from "crypto-js";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplayWithInput from "../../components/GeneratorDisplayWithInput";
import InfoSection from "../../components/InfoSection";

export default function SHA512Page() {
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
      <InfoSection
        title="About SHA-512 ID"
        info="SHA-512 (Secure Hash Algorithm 512-bit) generates a 512-bit (64-byte) hash value, typically rendered as a 128-character hexadecimal number. SHA-512 provides the highest level of security among SHA algorithms and is used for generating very secure unique identifiers and cryptographic hashes. You can provide custom input text to hash, or leave it empty for random generation."
      />
    </>
  );
}
