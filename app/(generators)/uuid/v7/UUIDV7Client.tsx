"use client";

import { uuidv7 } from "uuidv7";
import TitleSection from "../../../components/TitleSection";
import GeneratorDisplay from "../../../components/GeneratorDisplay";
import DetailedInfoSection from "../../../components/DetailedInfoSection";

export default function UUIDV7Client() {
  return (
    <>
      <TitleSection
        title="UUID v7 Generator"
        subtitle="Time-ordered UUID with Unix epoch timestamp"
      />
      <GeneratorDisplay
        label="Generated UUID v7"
        generateFn={() => uuidv7()}
      />
      <DetailedInfoSection
        about="UUID Version 7 includes a Unix epoch timestamp in milliseconds, making it time-ordered and sortable. It combines the benefits of time-based ordering (like v1/v6) with a more modern timestamp format. Version 7 UUIDs are excellent for use as database primary keys where you want chronological ordering without exposing MAC addresses. The format includes 48 bits of Unix timestamp, 12 bits of random data, and 62 bits of additional random data, providing both time-ordering and strong uniqueness guarantees."
        useCases={[
          "Database primary keys with chronological ordering",
          "Time-series databases and logging systems",
          "Distributed systems requiring sortable IDs",
          "Event sourcing and audit trails",
          "Modern applications needing time-ordered UUIDs",
          "Systems where MAC address exposure is a concern"
        ]}
        howToGenerate={{
          library: "uuidv7",
          npmPackage: "npm install uuidv7",
          codeExample: `import { uuidv7 } from 'uuidv7';\nconst id = uuidv7();\nconsole.log(id); // e.g., '018f0c8a-1234-7890-abcd-ef1234567890'`,
        }}
      />
    </>
  );
}

