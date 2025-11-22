"use client";

import cuid from "cuid";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import DetailedInfoSection from "../../components/DetailedInfoSection";

export default function CUIDClient() {
  return (
    <>
      <TitleSection
        title="CUID Generator"
        subtitle="Collision-resistant Unique Identifier"
      />
      <GeneratorDisplay
        label="Generated CUID"
        generateFn={() => cuid()}
      />
      <DetailedInfoSection
        about="CUID (Collision-resistant Unique Identifier) is a secure, URL-safe, unique ID generator that creates identifiers optimized for horizontal scaling and performance. CUIDs are designed to be collision-resistant and include a timestamp for sorting. CUID v1 uses a combination of timestamp, counter, fingerprint (host ID), and random values to ensure uniqueness. They're 25 characters long and start with 'c' followed by a timestamp, counter, fingerprint, and random characters."
        useCases={[
          "Distributed systems requiring collision resistance",
          "Database primary keys with timestamp sorting",
          "Horizontally scalable applications",
          "Systems with multiple ID generators",
          "Applications requiring high uniqueness guarantees",
          "Legacy systems using CUID v1"
        ]}
        howToGenerate={{
          library: "cuid",
          npmPackage: "npm install cuid",
          codeExample: `import cuid from 'cuid';\nconst id = cuid();\nconsole.log(id); // e.g., 'cjld2cjxh0000qzrmn831i7rn'`,
          note: "Note: CUID v1 is the original version. Consider CUID2 for newer applications as it provides better performance and security."
        }}
      />
    </>
  );
}

