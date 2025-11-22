"use client";

import TitleSection from "../../components/TitleSection";
import GeneratorDisplayWithInput from "../../components/GeneratorDisplayWithInput";
import DetailedInfoSection from "../../components/DetailedInfoSection";

export default function RandomSequenceClient() {
  return (
    <>
      <TitleSection
        title="Random Sequence Generator"
        subtitle="Random alphanumeric sequence"
      />
      <GeneratorDisplayWithInput
        label="Generated Random Sequence"
        generateFn={(inputs) => {
          const length = parseInt(inputs.length || "12", 10);
          const chars = inputs.chars || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          let result = "";
          const bytes = new Uint8Array(length);
          crypto.getRandomValues(bytes);
          for (let i = 0; i < length; i++) {
            result += chars[bytes[i] % chars.length];
          }
          return result;
        }}
        inputFields={[
          {
            name: "length",
            label: "Length",
            type: "number",
            placeholder: "12",
            defaultValue: "12",
            required: true,
          },
          {
            name: "chars",
            label: "Character Set",
            type: "text",
            placeholder: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            defaultValue: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            required: true,
          },
        ]}
      />
      <DetailedInfoSection
        about="Random sequences are strings of random alphanumeric characters. They're simple, easy to generate, and useful for creating unique identifiers, codes, or tokens. The length and character set can be customized based on your requirements. Random sequences provide flexibility in character selection and length, making them suitable for various use cases from simple codes to complex identifiers. They use cryptographically secure random number generation for security."
        useCases={[
          "Verification codes and OTPs",
          "Access tokens and API keys",
          "Simple unique identifiers",
          "Custom character set requirements",
          "Promo codes and coupon codes",
          "Temporary access codes",
          "Flexible ID generation"
        ]}
        howToGenerate={{
          library: "Native Web Crypto API",
          npmPackage: "N/A - Native implementation",
          codeExample: `// Native implementation\nconst length = 12;\nconst chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';\nconst bytes = new Uint8Array(length);\ncrypto.getRandomValues(bytes);\nlet result = '';\nfor (let i = 0; i < length; i++) {\n  result += chars[bytes[i] % chars.length];\n}`,
        }}
      />
    </>
  );
}

