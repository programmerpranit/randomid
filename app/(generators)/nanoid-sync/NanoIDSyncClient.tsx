"use client";

import { nanoid } from "nanoid";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import DetailedInfoSection from "../../components/DetailedInfoSection";

export default function NanoIDSyncClient() {
  return (
    <>
      <TitleSection
        title="NanoID Sync Generator"
        subtitle="Synchronous URL-safe unique string ID"
      />
      <GeneratorDisplay label="Generated NanoID" generateFn={() => nanoid()} />
      <DetailedInfoSection
        about="NanoID's synchronous version generates IDs immediately without async operations. It's smaller than UUID and uses a larger alphabet to achieve the same level of randomness in a shorter string. The synchronous API is perfect for client-side generation, server-side rendering, and any context where you need immediate ID generation without promises or callbacks. It's the default and most commonly used NanoID API."
        useCases={[
          "Client-side ID generation in React/Vue/Angular",
          "Server-side rendering (SSR) applications",
          "Synchronous code paths",
          "Real-time ID generation without async overhead",
          "Browser-based applications",
          "Immediate ID requirements"
        ]}
        howToGenerate={{
          library: "nanoid",
          npmPackage: "npm install nanoid",
          codeExample: `import { nanoid } from 'nanoid';\nconst id = nanoid(); // Synchronous\nconsole.log(id); // e.g., 'V1StGXR8_Z5jdHi6B-myT'`,
        }}
      />
    </>
  );
}

