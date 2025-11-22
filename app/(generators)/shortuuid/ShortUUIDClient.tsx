"use client";

import { v4 as uuidv4 } from "uuid";
import short from "short-uuid";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import DetailedInfoSection from "../../components/DetailedInfoSection";

export default function ShortUUIDClient() {
  const translator = short();

  return (
    <>
      <TitleSection
        title="ShortUUID Generator"
        subtitle="Shortened UUID representation"
      />
      <GeneratorDisplay
        label="Generated ShortUUID"
        generateFn={() => translator.fromUUID(uuidv4())}
      />
      <DetailedInfoSection
        about="ShortUUID is a library that converts standard UUIDs into shorter, URL-friendly strings using Base58 encoding. It maintains the uniqueness properties of UUIDs while being more compact (typically 22 characters instead of 36). ShortUUIDs are useful when you need shorter identifiers but want to maintain UUID compatibility. The encoding is reversible, allowing you to convert back to standard UUID format when needed."
        useCases={[
          "URLs and slugs requiring shorter identifiers",
          "Systems needing UUID compatibility with shorter format",
          "User-facing identifiers derived from UUIDs",
          "API endpoints with shorter path parameters",
          "Systems requiring reversible UUID encoding",
          "Applications needing compact UUID representation"
        ]}
        howToGenerate={{
          library: "short-uuid",
          npmPackage: "npm install short-uuid uuid",
          codeExample: `import { v4 as uuidv4 } from 'uuid';\nimport short from 'short-uuid';\n\nconst translator = short();\nconst uuid = uuidv4();\nconst shortUuid = translator.fromUUID(uuid);\nconsole.log(shortUuid); // e.g., 'mhvXdrZT4jP5T8vBxuvm75'`,
        }}
      />
    </>
  );
}

