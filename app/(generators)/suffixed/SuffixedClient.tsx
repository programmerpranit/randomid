"use client";

import { nanoid } from "nanoid";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplayWithInput from "../../components/GeneratorDisplayWithInput";
import DetailedInfoSection from "../../components/DetailedInfoSection";

export default function SuffixedClient() {
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
      <DetailedInfoSection
        about="Suffixed IDs combine a random prefix with a custom suffix. They're useful for adding metadata, version indicators, or type markers to the end of identifiers. Common patterns include adding environment indicators ('-DEV', '-PROD'), version numbers, or type markers to IDs. Suffixed IDs allow you to add contextual information to identifiers without changing the main ID structure, which is helpful for environment identification, versioning, or categorization."
        useCases={[
          "Environment indicators (DEV, PROD, STAGING)",
          "Version markers and identifiers",
          "Type categorization at the end of IDs",
          "Metadata attachment to identifiers",
          "System organization and filtering",
          "Contextual information in IDs"
        ]}
        howToGenerate={{
          library: "nanoid",
          npmPackage: "npm install nanoid",
          codeExample: `import { nanoid } from 'nanoid';\n\nconst randomPart = nanoid(12);\nconst suffix = 'DEV';\nconst suffixedId = \`\${randomPart}-\${suffix}\`;\nconsole.log(suffixedId); // e.g., 'V1StGXR8_Z5j-DEV'`,
        }}
      />
    </>
  );
}

