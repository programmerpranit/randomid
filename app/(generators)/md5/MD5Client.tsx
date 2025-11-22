"use client";

import CryptoJS from "crypto-js";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplayWithInput from "../../components/GeneratorDisplayWithInput";
import InfoSection from "../../components/InfoSection";

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
      <InfoSection
        title="About MD5 ID"
        info="MD5 (Message Digest Algorithm 5) generates a 128-bit (16-byte) hash value, typically rendered as a 32-character hexadecimal number. MD5 is cryptographically broken and should not be used for security purposes. However, it's still used for generating non-security-critical unique identifiers, checksums, and data integrity verification in non-sensitive contexts. You can provide custom input text to hash, or leave it empty for random generation."
      />
    </>
  );
}

