"use client";

import { v4 as uuidv4 } from "uuid";
import TitleSection from "../../../components/TitleSection";
import GeneratorDisplay from "../../../components/GeneratorDisplay";
import DetailedInfoSection from "../../../components/DetailedInfoSection";

export default function UUIDV4Client() {
  return (
    <>
      <TitleSection
        title="UUID v4 Generator"
        subtitle="Random UUID (Most Common)"
      />
      <GeneratorDisplay
        label="Generated UUID v4"
        generateFn={() => uuidv4()}
      />
      <DetailedInfoSection
        about="UUID Version 4 is randomly generated and contains 122 random bits. It's the most commonly used UUID version because it doesn't require any input and provides excellent uniqueness guarantees. Version 4 UUIDs are suitable for most use cases requiring unique identifiers without coordination between systems. The format follows RFC 4122 and consists of 32 hexadecimal digits displayed in five groups separated by hyphens."
        useCases={[
          "Database primary keys and foreign keys",
          "API request/response identifiers",
          "Session tokens and authentication tokens",
          "Distributed system identifiers",
          "File and resource identifiers",
          "Transaction IDs and correlation IDs",
          "Event tracking and logging"
        ]}
        howToGenerate={{
          library: "uuid",
          npmPackage: "npm install uuid",
          codeExample: `import { v4 as uuidv4 } from 'uuid';\nconst id = uuidv4();\nconsole.log(id); // e.g., '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'`,
        }}
      />
    </>
  );
}

