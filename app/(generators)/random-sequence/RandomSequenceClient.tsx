"use client";

import TitleSection from "../../components/TitleSection";
import GeneratorDisplayWithInput from "../../components/GeneratorDisplayWithInput";
import InfoSection from "../../components/InfoSection";

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
      <InfoSection
        title="About Random Sequence"
        info="Random sequences are strings of random alphanumeric characters. They're simple, easy to generate, and useful for creating unique identifiers, codes, or tokens. The length and character set can be customized based on your requirements. Commonly used for verification codes, access tokens, and simple unique IDs."
      />
    </>
  );
}

