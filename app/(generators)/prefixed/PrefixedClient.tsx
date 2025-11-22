"use client";

import { nanoid } from "nanoid";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplayWithInput from "../../components/GeneratorDisplayWithInput";
import DetailedInfoSection from "../../components/DetailedInfoSection";

export default function PrefixedClient() {
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
      <DetailedInfoSection
        about="Prefixed IDs combine a custom prefix with a random suffix. They're useful for categorizing identifiers, adding branding, or creating namespaced IDs. The prefix helps identify the type or source of the ID, while the random suffix ensures uniqueness. Common patterns include 'USER-', 'ORDER-', 'TXN-' etc. Prefixed IDs make it easy to identify the type or category of an identifier at a glance, which is helpful for debugging, logging, and system organization."
        useCases={[
          "Categorizing identifiers by type (USER, ORDER, etc.)",
          "Adding branding to IDs",
          "Creating namespaced identifiers",
          "Database IDs with type prefixes",
          "API identifiers with resource type",
          "System organization and debugging"
        ]}
        howToGenerate={{
          library: "nanoid",
          npmPackage: "npm install nanoid",
          codeExample: `import { nanoid } from 'nanoid';\n\nconst prefix = 'USER';\nconst randomPart = nanoid(12);\nconst prefixedId = \`\${prefix}-\${randomPart}\`;\nconsole.log(prefixedId); // e.g., 'USER-V1StGXR8_Z5j'`,
        }}
      />
    </>
  );
}

