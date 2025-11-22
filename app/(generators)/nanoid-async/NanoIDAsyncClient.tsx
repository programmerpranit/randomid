"use client";

import { nanoid } from "nanoid";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import InfoSection from "../../components/InfoSection";

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
      <InfoSection
        title="About NanoID (Async)"
        info="NanoID can be used in async contexts. While the core library is synchronous, you can wrap it in async functions for use in async/await patterns. This is useful when generating IDs as part of larger async operations or when you need to integrate with async APIs."
      />
    </>
  );
}

