"use client";

import { nanoid } from "nanoid";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplayWithInput from "../../components/GeneratorDisplayWithInput";
import InfoSection from "../../components/InfoSection";

export default function ShortIDClient() {
  return (
    <>
      <TitleSection
        title="ShortID Generator"
        subtitle="Short unique identifier"
      />
      <GeneratorDisplayWithInput
        label="Generated ShortID"
        generateFn={(inputs) => {
          const length = parseInt(inputs.length || "8", 10);
          if (length < 8 || length > 20) {
            throw new Error("Length must be between 8 and 20");
          }
          return nanoid(length);
        }}
        inputFields={[
          {
            name: "length",
            label: "Length",
            type: "number",
            placeholder: "8",
            defaultValue: "8",
            required: true,
          },
        ]}
      />
      <InfoSection
        title="About ShortID"
        info="ShortID is a compact unique identifier, typically 8-12 characters long. It's generated using a URL-safe alphabet and provides a good balance between uniqueness and brevity. ShortIDs are useful for user-facing identifiers, short URLs, or when you need compact but unique identifiers. You can customize the length to suit your needs (1-100 characters)."
      />
    </>
  );
}

