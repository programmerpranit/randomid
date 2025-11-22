"use client";

import { nanoid } from "nanoid";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import InfoSection from "../../components/InfoSection";

export default function ShortIDPage() {
  // Generate a short ID using a smaller alphabet
  const generateShortId = () => {
    return nanoid(8); // 8 characters for a short ID
  };

  return (
    <>
      <TitleSection
        title="ShortID Generator"
        subtitle="Short unique identifier"
      />
      <GeneratorDisplay
        label="Generated ShortID"
        generateFn={generateShortId}
      />
      <InfoSection
        title="About ShortID"
        info="ShortID is a compact unique identifier, typically 8-12 characters long. It's generated using a URL-safe alphabet and provides a good balance between uniqueness and brevity. ShortIDs are useful for user-facing identifiers, short URLs, or when you need compact but unique identifiers."
      />
    </>
  );
}

