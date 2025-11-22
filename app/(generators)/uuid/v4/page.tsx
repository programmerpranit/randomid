"use client";

import { v4 as uuidv4 } from "uuid";
import TitleSection from "../../../components/TitleSection";
import GeneratorDisplay from "../../../components/GeneratorDisplay";
import InfoSection from "../../../components/InfoSection";

export default function UUIDV4Page() {
  return (
    <>
      <TitleSection
        title="UUID v4 Generator"
        subtitle="Random UUID (Most Common)"
      />
      <GeneratorDisplay
        label="Generated UUID v4"
        generateFn={() => uuidv4()}
      />
      <InfoSection
        title="About UUID v4"
        info="UUID Version 4 is randomly generated and contains 122 random bits. It's the most commonly used UUID version because it doesn't require any input and provides excellent uniqueness guarantees. Version 4 UUIDs are suitable for most use cases requiring unique identifiers without coordination between systems."
      />
    </>
  );
}
