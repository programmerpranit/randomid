"use client";

import KSUID from "ksuid";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import DetailedInfoSection from "../../components/DetailedInfoSection";

export default function KSUIDClient() {
  return (
    <>
      <TitleSection
        title="KSUID Generator"
        subtitle="K-Sortable Unique Identifier"
      />
      <GeneratorDisplay
        label="Generated KSUID"
        generateFn={() => KSUID.randomSync().string}
      />
      <DetailedInfoSection
        about="KSUID (K-Sortable Unique Identifier) is a unique identifier that includes a timestamp component, making it sortable by creation time. It's 27 characters long, URL-safe, and contains both timestamp (32-bit Unix timestamp) and random data (160 bits). KSUIDs are useful for distributed systems where you need chronological ordering. They use Base62 encoding and are designed to be lexicographically sortable while maintaining strong uniqueness guarantees."
        useCases={[
          "Distributed systems requiring time-based sorting",
          "Database primary keys with chronological ordering",
          "Event logging and time-series data",
          "Systems requiring both uniqueness and sortability",
          "K-Sortable identifier requirements",
          "Applications needing timestamp-based ordering"
        ]}
        howToGenerate={{
          library: "ksuid",
          npmPackage: "npm install ksuid",
          codeExample: `import KSUID from 'ksuid';\nconst ksuid = KSUID.randomSync();\nconsole.log(ksuid.string); // e.g., '0ujsszwN8NRY24YaXiTIE2VwTSy'`,
        }}
      />
    </>
  );
}

