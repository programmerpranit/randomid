"use client";

import cuid from "cuid";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import InfoSection from "../../components/InfoSection";

export default function CUIDPage() {
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
      <InfoSection
        title="About CUID"
        info="CUID (Collision-resistant Unique Identifier) is a secure, URL-safe, unique ID generator that creates identifiers optimized for horizontal scaling and performance. CUIDs are designed to be collision-resistant and include a timestamp for sorting. CUID v1 uses a combination of timestamp, counter, fingerprint, and random values to ensure uniqueness."
      />
    </>
  );
}
