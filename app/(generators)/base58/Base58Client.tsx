"use client";

import { v4 as uuidv4 } from "uuid";
import short from "short-uuid";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import DetailedInfoSection from "../../components/DetailedInfoSection";

export default function Base58Client() {
  const translator = short();

  return (
    <>
      <TitleSection
        title="Base58 Random ID Generator"
        subtitle="Base58-encoded random bytes"
      />
      <GeneratorDisplay
        label="Generated Base58 ID"
        generateFn={() => translator.fromUUID(uuidv4())}
      />
      <DetailedInfoSection
        about="Base58 encoding uses 58 characters, excluding 0, O, I, and l to avoid confusion. It's similar to Base64 but without special characters. Base58 is used by Bitcoin addresses and is popular for generating compact, URL-safe identifiers that avoid ambiguous characters. The alphabet consists of numbers and letters, excluding visually similar characters to prevent errors in transcription."
        useCases={[
          "Bitcoin and cryptocurrency addresses",
          "URL-safe identifiers avoiding ambiguous characters",
          "Compact unique identifiers",
          "Human-readable IDs without special characters",
          "Systems requiring alphanumeric-only IDs",
          "Blockchain and cryptocurrency applications"
        ]}
        howToGenerate={{
          library: "short-uuid (uses Base58 internally)",
          npmPackage: "npm install short-uuid uuid",
          codeExample: `import { v4 as uuidv4 } from 'uuid';\nimport short from 'short-uuid';\n\nconst translator = short();\nconst base58Id = translator.fromUUID(uuidv4());`,
          note: "Note: short-uuid uses Base58 encoding internally. For pure Base58 encoding, consider libraries like 'bs58'."
        }}
      />
    </>
  );
}

