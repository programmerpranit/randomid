"use client";

import PetName from "petname";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import InfoSection from "../../components/InfoSection";

const petname = new PetName();

export default function Word3Page() {
  return (
    <>
      <TitleSection
        title="3-Word ID Generator"
        subtitle="Three-word combination identifier"
      />
      <GeneratorDisplay
        label="Generated 3-Word ID"
        generateFn={() => petname.generate(3, "-")}
      />
      <InfoSection
        title="About 3-Word ID"
        info="3-Word IDs combine three words to create more unique, memorable identifiers. They provide better uniqueness than 2-word combinations while remaining human-readable and easy to communicate. Useful when you need more uniqueness but still want human-friendly identifiers."
      />
    </>
  );
}

