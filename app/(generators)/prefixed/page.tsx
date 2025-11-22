"use client";

import { nanoid } from "nanoid";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplayWithInput from "../../components/GeneratorDisplayWithInput";
import InfoSection from "../../components/InfoSection";

export default function PrefixedPage() {
  return (
    <>
      <TitleSection
        title="Prefixed ID Generator"
        subtitle="ID with custom prefix"
      />
      <GeneratorDisplayWithInput
        label="Generated Prefixed ID"
        generateFn={(inputs) => {
          const prefix = inputs.prefix || "ID";
          const length = parseInt(inputs.length || "12", 10);
          const randomPart = nanoid(length);
          return `${prefix}-${randomPart}`;
        }}
        inputFields={[
          {
            name: "prefix",
            label: "Prefix",
            type: "text",
            placeholder: "e.g., USER, ORDER, TXN",
            defaultValue: "ID",
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
        title="About Prefixed ID"
        info="Prefixed IDs combine a custom prefix with a random suffix. They're useful for categorizing identifiers, adding branding, or creating namespaced IDs. The prefix helps identify the type or source of the ID, while the random suffix ensures uniqueness. Common patterns include 'USER-', 'ORDER-', 'TXN-' etc."
      />
    </>
  );
}
