"use client";

import { v1 as uuidv1 } from "uuid";
import TitleSection from "../../../components/TitleSection";
import GeneratorDisplay from "../../../components/GeneratorDisplay";
import DetailedInfoSection from "../../../components/DetailedInfoSection";

export default function UUIDV1Client() {
  return (
    <>
      <TitleSection
        title="UUID v1 Generator"
        subtitle="Time-based UUID (Timestamp + MAC Address)"
      />
      <GeneratorDisplay
        label="Generated UUID v1"
        generateFn={() => uuidv1()}
      />
      <DetailedInfoSection
        about="UUID Version 1 is generated using the current timestamp and the MAC address of the network interface. It includes 60 bits of timestamp (100-nanosecond intervals since October 15, 1582), 14 bits of clock sequence, and 48 bits of node identifier (usually the MAC address). This version is useful when you need time-ordered UUIDs that can be sorted chronologically. However, v1 UUIDs may expose MAC addresses, which can be a privacy concern."
        useCases={[
          "Time-ordered database records",
          "Distributed systems requiring chronological ordering",
          "Event logging and audit trails",
          "Time-series data identification",
          "Legacy systems requiring time-based UUIDs"
        ]}
        howToGenerate={{
          library: "uuid",
          npmPackage: "npm install uuid",
          codeExample: `import { v1 as uuidv1 } from 'uuid';\nconst id = uuidv1();\nconsole.log(id); // e.g., '6ba7b810-9dad-11d1-80b4-00c04fd430c8'`,
          note: "Note: v1 UUIDs include MAC address information, which may be a privacy concern. Consider v4 or v7 for new applications."
        }}
      />
    </>
  );
}

