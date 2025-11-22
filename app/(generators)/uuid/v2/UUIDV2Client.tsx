"use client";

import { v1 as uuidv1 } from "uuid";
import TitleSection from "../../../components/TitleSection";
import GeneratorDisplay from "../../../components/GeneratorDisplay";
import DetailedInfoSection from "../../../components/DetailedInfoSection";

export default function UUIDV2Client() {
  return (
    <>
      <TitleSection
        title="UUID v2 Generator"
        subtitle="DCE Security UUID (POSIX UID/GID based)"
      />
      <GeneratorDisplay
        label="Generated UUID v2"
        generateFn={() => uuidv1()}
      />
      <DetailedInfoSection
        about="UUID Version 2 is a DCE Security version that includes POSIX UID/GID information. This version is rarely used in practice as it requires system-specific user/group identifiers and is not widely supported. Most implementations don't fully support v2, so this generator uses a v1-based approach for demonstration. Version 2 was designed for DCE (Distributed Computing Environment) security but is largely obsolete."
        useCases={[
          "Legacy DCE systems",
          "Historical reference and testing",
          "Systems requiring POSIX user/group identifiers"
        ]}
        howToGenerate={{
          library: "uuid (limited support)",
          npmPackage: "npm install uuid",
          codeExample: `// Note: Full v2 support is limited\n// Most libraries use v1 as fallback\nimport { v1 as uuidv1 } from 'uuid';\nconst id = uuidv1(); // v2 not fully supported`,
          note: "Warning: UUID v2 is rarely supported and largely obsolete. For production use, consider v1, v4, or v7 instead."
        }}
      />
    </>
  );
}

