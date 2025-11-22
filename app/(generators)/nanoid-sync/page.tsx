"use client";

import { nanoid } from "nanoid";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import InfoSection from "../../components/InfoSection";

export default function NanoIDSyncPage() {
  return (
    <>
      <TitleSection
        title="NanoID Sync Generator"
        subtitle="Synchronous URL-safe unique string ID"
      />
      <GeneratorDisplay label="Generated NanoID" generateFn={() => nanoid()} />
      <InfoSection
        title="About NanoID (Sync)"
        info="NanoID is a tiny, URL-safe, unique string ID generator. The synchronous version generates IDs immediately without async operations. It's smaller than UUID and uses a larger alphabet to achieve the same level of randomness in a shorter string. Perfect for client-side generation."
      />
    </>
  );
}

