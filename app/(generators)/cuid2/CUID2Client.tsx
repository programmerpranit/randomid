"use client";

import { createId } from "@paralleldrive/cuid2";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import DetailedInfoSection from "../../components/DetailedInfoSection";

export default function CUID2Client() {
  return (
    <>
      <TitleSection
        title="CUID2 Generator"
        subtitle="Collision-resistant Unique Identifier v2"
      />
      <GeneratorDisplay label="Generated CUID2" generateFn={() => createId()} />
      <DetailedInfoSection
        about="CUID2 is the second version of CUID, providing improved collision resistance and performance. It's designed for distributed systems and maintains the same URL-safe, sortable properties as CUID but with enhanced security and better performance characteristics. CUID2 uses a more efficient algorithm, better randomness sources, and improved timestamp encoding. It's the recommended version for new applications requiring CUID-style identifiers."
        useCases={[
          "Modern distributed systems",
          "High-performance applications",
          "Database primary keys with sorting",
          "Systems requiring strong collision resistance",
          "Applications needing better performance than CUID v1",
          "New projects requiring CUID-style IDs"
        ]}
        howToGenerate={{
          library: "@paralleldrive/cuid2",
          npmPackage: "npm install @paralleldrive/cuid2",
          codeExample: `import { createId } from '@paralleldrive/cuid2';\nconst id = createId();\nconsole.log(id); // e.g., 'cl9ebqhxk00003b600tymydho'`,
        }}
      />
    </>
  );
}

