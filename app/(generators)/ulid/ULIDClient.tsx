"use client";

import { ulid } from "ulid";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import DetailedInfoSection from "../../components/DetailedInfoSection";

export default function ULIDClient() {
  return (
    <>
      <TitleSection
        title="ULID Generator"
        subtitle="Universally Unique Lexicographically Sortable Identifier"
      />
      <GeneratorDisplay label="Generated ULID" generateFn={() => ulid()} />
      <DetailedInfoSection
        about="ULID (Universally Unique Lexicographically Sortable Identifier) is a 128-bit identifier that is both unique and sortable. It combines a 48-bit timestamp (milliseconds since Unix epoch) with 80 random bits. ULIDs are URL-safe, case-insensitive, and can be sorted chronologically using standard string sort, making them excellent for database primary keys. They're 26 characters long and use Crockford's Base32 encoding, which avoids ambiguous characters."
        useCases={[
          "Database primary keys with chronological ordering",
          "Time-ordered distributed systems",
          "Event logging and audit trails",
          "Sortable unique identifiers",
          "Database indexes with time-based queries",
          "Systems requiring both uniqueness and sortability"
        ]}
        howToGenerate={{
          library: "ulid",
          npmPackage: "npm install ulid",
          codeExample: `import { ulid } from 'ulid';\nconst id = ulid();\nconsole.log(id); // e.g., '01ARZ3NDEKTSV4RRFFQ69G5FAV'`,
        }}
      />
    </>
  );
}

