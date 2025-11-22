"use client";

import { v4 as uuidv4 } from "uuid";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import DetailedInfoSection from "../../components/DetailedInfoSection";

export default function GUIDClient() {
  return (
    <>
      <TitleSection
        title="GUID Generator"
        subtitle="Globally Unique Identifier"
      />
      <GeneratorDisplay
        label="Generated GUID"
        generateFn={() => uuidv4().toUpperCase()}
      />
      <DetailedInfoSection
        about="GUID (Globally Unique Identifier) is a Microsoft term for UUID. It's a 128-bit identifier that is guaranteed to be unique across space and time. GUIDs are commonly used in Windows development and are essentially the same as UUIDs, often displayed in uppercase format. The term GUID is primarily used in Microsoft technologies (COM, .NET, Windows Registry) while UUID is the more universal term. Both follow the same RFC 4122 standard."
        useCases={[
          "Windows COM components and interfaces",
          ".NET Framework applications",
          "Windows Registry keys",
          "Microsoft SQL Server unique identifiers",
          "Windows API and system programming",
          "Cross-platform applications using Microsoft conventions"
        ]}
        howToGenerate={{
          library: "uuid",
          npmPackage: "npm install uuid",
          codeExample: `import { v4 as uuidv4 } from 'uuid';\nconst guid = uuidv4().toUpperCase();\nconsole.log(guid); // e.g., '9B1DEB4D-3B7D-4BAD-9BDD-2B0D7B3DCB6D'`,
          note: "Note: GUID is Microsoft's term for UUID. They are functionally identical, with GUIDs often displayed in uppercase."
        }}
      />
    </>
  );
}

