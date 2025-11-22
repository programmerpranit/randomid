"use client";

import { nanoid } from "nanoid";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplayWithInput from "../../components/GeneratorDisplayWithInput";
import InfoSection from "../../components/InfoSection";

export default function SuffixedPage() {
  return (
    <>
      <TitleSection
        title="Suffixed ID Generator"
        subtitle="ID with custom suffix"
      />
      <GeneratorDisplayWithInput
        label="Generated Suffixed ID"
        generateFn={(inputs) => {
          const length = parseInt(inputs.length || "12", 10);
          const randomPart = nanoid(length);
          const suffix = inputs.suffix || "X";
          return `${randomPart}-${suffix}`;
        }}
        inputFields={[
          {
            name: "suffix",
            label: "Suffix",
            type: "text",
            placeholder: "e.g., DEV, PROD, X",
            defaultValue: "X",
            required: true,
          },
          {
            name: "length",
            label: "Random Part Length",
            type: "number",
            placeholder: "12",
            defaultValue: "12",
            required: true,
          },
        ]}
      />
      <InfoSection
        title="About Suffixed ID"
        info="Suffixed IDs combine a random prefix with a custom suffix. They're useful for adding metadata, version indicators, or type markers to the end of identifiers. Common patterns include adding environment indicators ('-DEV', '-PROD'), version numbers, or type markers to IDs."
      />
    </>
  );
}
