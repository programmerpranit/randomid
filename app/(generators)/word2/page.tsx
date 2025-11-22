"use client";

import PetName from "petname";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import InfoSection from "../../components/InfoSection";

const petname = new PetName();

export default function Word2Page() {
  return (
    <>
      <TitleSection
        title="2-Word ID Generator"
        subtitle="Two-word combination identifier"
      />
      <GeneratorDisplay
        label="Generated 2-Word ID"
        generateFn={() => petname.generate(2, "-")}
      />
      <InfoSection
        title="About 2-Word ID"
        info="2-Word IDs combine two words (typically an adjective and a noun) to create memorable, human-readable identifiers. They're shorter than longer word combinations while still being easy to remember and communicate. Useful for user-facing identifiers and resource naming."
      />
    </>
  );
}

