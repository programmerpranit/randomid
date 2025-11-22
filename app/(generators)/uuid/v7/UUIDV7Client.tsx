"use client";

import { uuidv7 } from "uuidv7";
import TitleSection from "../../../components/TitleSection";
import GeneratorDisplay from "../../../components/GeneratorDisplay";
import InfoSection from "../../../components/InfoSection";

export default function UUIDV7Client() {
  return (
    <>
      <TitleSection
        title="UUID v7 Generator"
        subtitle="Time-ordered UUID with Unix epoch timestamp"
      />
      <GeneratorDisplay
        label="Generated UUID v7"
        generateFn={() => uuidv7()}
      />
      <InfoSection
        title="About UUID v7"
        info="UUID Version 7 includes a Unix epoch timestamp in milliseconds, making it time-ordered and sortable. It combines the benefits of time-based ordering (like v1/v6) with a more modern timestamp format. Version 7 UUIDs are excellent for use as database primary keys where you want chronological ordering without exposing MAC addresses."
      />
    </>
  );
}

