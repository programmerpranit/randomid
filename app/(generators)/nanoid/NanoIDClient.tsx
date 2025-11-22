"use client";

import { nanoid } from "nanoid";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import DetailedInfoSection from "../../components/DetailedInfoSection";

export default function NanoIDClient() {
  return (
    <>
      <TitleSection
        title="NanoID Generator"
        subtitle="Small, URL-safe unique string ID"
      />
      <GeneratorDisplay
        label="Generated NanoID"
        generateFn={() => nanoid()}
      />
      <DetailedInfoSection
        about="NanoID is a tiny, URL-safe, unique string ID generator. It's smaller than UUID and uses a larger alphabet (64 characters: A-Za-z0-9_-) to achieve the same level of randomness in a shorter string. NanoID is cryptographically strong, URL-friendly, and faster than UUID. By default, it generates 21-character IDs with a collision probability of less than 1 in a billion even at high generation rates. It's one of the most popular modern ID generators."
        useCases={[
          "Database primary keys and identifiers",
          "URL slugs and short links",
          "Session IDs and tokens",
          "API request identifiers",
          "File and resource identifiers",
          "Distributed system IDs",
          "Client-side ID generation"
        ]}
        howToGenerate={{
          library: "nanoid",
          npmPackage: "npm install nanoid",
          codeExample: `import { nanoid } from 'nanoid';\nconst id = nanoid();\nconsole.log(id); // e.g., 'V1StGXR8_Z5jdHi6B-myT'`,
        }}
      />
    </>
  );
}

