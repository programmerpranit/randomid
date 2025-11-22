"use client";

import { customAlphabet } from "nanoid";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplayWithInput from "../../components/GeneratorDisplayWithInput";
import InfoSection from "../../components/InfoSection";

export default function NanoIDCustomPage() {
  return (
    <>
      <TitleSection
        title="NanoID Custom Generator"
        subtitle="Custom alphabet and length NanoID"
      />
      <GeneratorDisplayWithInput
        label="Generated Custom NanoID"
        generateFn={(inputs) => {
          const alphabet = inputs.alphabet || "0123456789abcdefghijklmnopqrstuvwxyz";
          const length = parseInt(inputs.length || "21", 10);
          const customNanoid = customAlphabet(alphabet, length);
          return customNanoid();
        }}
        inputFields={[
          {
            name: "alphabet",
            label: "Custom Alphabet",
            type: "text",
            placeholder: "0123456789abcdefghijklmnopqrstuvwxyz",
            defaultValue: "0123456789abcdefghijklmnopqrstuvwxyz",
            required: true,
          },
          {
            name: "length",
            label: "Length",
            type: "number",
            placeholder: "21",
            defaultValue: "21",
            required: true,
          },
        ]}
      />
      <InfoSection
        title="About NanoID (Custom)"
        info="NanoID supports custom alphabets and lengths. You can specify your own character set and desired length. Custom NanoIDs are useful when you need specific character sets for compatibility or branding purposes. The alphabet determines which characters can appear in the ID, and the length determines how many characters the ID will have."
      />
    </>
  );
}
