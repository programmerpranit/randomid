"use client";

import { v1 as uuidv1 } from "uuid";
import TitleSection from "../../../components/TitleSection";
import GeneratorDisplay from "../../../components/GeneratorDisplay";
import DetailedInfoSection from "../../../components/DetailedInfoSection";

export default function UUIDV6Client() {
  return (
    <>
      <TitleSection
        title="UUID v6 Generator"
        subtitle="Time-ordered UUID (RFC 4122 draft)"
      />
      <GeneratorDisplay
        label="Generated UUID v6"
        generateFn={() => uuidv1()}
      />
      <DetailedInfoSection
        about="UUID Version 6 is a time-ordered version designed for better database indexing performance. It's similar to v1 but with the timestamp bits reordered to be monotonically increasing. This makes v6 UUIDs sortable by creation time, which is beneficial for database primary keys and improves index performance. Version 6 maintains the MAC address component from v1 but reorders the timestamp for better sortability. Note: Full v6 support requires specialized libraries as it's still in draft status."
        useCases={[
          "Database primary keys requiring chronological sorting",
          "Time-ordered distributed systems",
          "Improved database index performance",
          "Event logging with time-based ordering",
          "Systems requiring sortable unique identifiers"
        ]}
        howToGenerate={{
          library: "uuid (limited support - uses v1 as fallback)",
          npmPackage: "npm install uuid",
          codeExample: `// Note: Full v6 support is limited\n// Most implementations use v1 as fallback\nimport { v1 as uuidv1 } from 'uuid';\nconst id = uuidv1(); // v6 not fully supported yet`,
          note: "Note: UUID v6 is still in draft status. Full support requires specialized libraries. Consider UUID v7 for time-ordered UUIDs with better support."
        }}
      />
    </>
  );
}

