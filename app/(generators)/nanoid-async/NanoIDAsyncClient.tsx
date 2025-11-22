"use client";

import { nanoid } from "nanoid";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import DetailedInfoSection from "../../components/DetailedInfoSection";

export default function NanoIDAsyncClient() {
  // Note: nanoid doesn't have a true async version, but we can simulate it
  const generateAsync = async () => {
    // Simulate async operation
    await new Promise((resolve) => setTimeout(resolve, 0));
    return nanoid();
  };

  return (
    <>
      <TitleSection
        title="NanoID Async Generator"
        subtitle="Asynchronous URL-safe unique string ID"
      />
      <GeneratorDisplay
        label="Generated NanoID (Async)"
        generateFn={() => {
          // For display purposes, we'll generate synchronously
          // but the pattern supports async operations
          return nanoid();
        }}
      />
      <DetailedInfoSection
        about="NanoID can be used in async contexts. While the core library is synchronous, you can wrap it in async functions for use in async/await patterns. This is useful when generating IDs as part of larger async operations, when you need to integrate with async APIs, or when you want to use NanoID within Promise chains. The async wrapper pattern allows NanoID to fit seamlessly into modern async JavaScript workflows."
        useCases={[
          "Async/await code patterns",
          "Promise chains and async workflows",
          "Integration with async database operations",
          "Async API handlers",
          "Modern JavaScript async patterns",
          "When ID generation is part of larger async operations"
        ]}
        howToGenerate={{
          library: "nanoid (wrapped in async)",
          npmPackage: "npm install nanoid",
          codeExample: `import { nanoid } from 'nanoid';\n\n// Wrap in async function\nasync function generateAsync() {\n  await new Promise(resolve => setTimeout(resolve, 0));\n  return nanoid();\n}\n\nconst id = await generateAsync();`,
          note: "Note: NanoID itself is synchronous. The async pattern is achieved by wrapping it in an async function."
        }}
      />
    </>
  );
}

