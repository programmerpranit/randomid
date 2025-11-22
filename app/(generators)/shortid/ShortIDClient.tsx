"use client";

import { nanoid } from "nanoid";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplayWithInput from "../../components/GeneratorDisplayWithInput";
import DetailedInfoSection from "../../components/DetailedInfoSection";

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
      <DetailedInfoSection
        about="ShortID is a compact unique identifier, typically 8-12 characters long. It's generated using a URL-safe alphabet and provides a good balance between uniqueness and brevity. ShortIDs are useful for user-facing identifiers, short URLs, or when you need compact but unique identifiers. The length can be customized to suit your needs, with shorter IDs being more readable but having lower uniqueness guarantees. This implementation uses NanoID with a custom length."
        useCases={[
          "User-facing identifiers and codes",
          "Short URL slugs and links",
          "Invite codes and referral codes",
          "Compact API identifiers",
          "Human-readable unique IDs",
          "Systems requiring short but unique identifiers"
        ]}
        howToGenerate={{
          library: "nanoid",
          npmPackage: "npm install nanoid",
          codeExample: `import { nanoid } from 'nanoid';\n// Generate short ID with custom length\nconst shortId = nanoid(8);\nconsole.log(shortId); // e.g., 'V1StGXR8'`,
          note: "Note: Shorter IDs have lower uniqueness guarantees. Use longer IDs (12-21 characters) for higher collision resistance."
        }}
      />
    </>
  );
}

