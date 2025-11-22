"use client";

import { v4 as uuidv4 } from "uuid";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import InfoSection from "../../components/InfoSection";

export default function GUIDPage() {
  return (
    <>
      <TitleSection
        title="GUID Generator"
        subtitle="Globally Unique Identifier"
      />
      <GeneratorDisplay
        label="Generated GUID"
        generateFn={() => uuidv4().toUpperCase()}
      />
      <InfoSection
        title="About GUID"
        info="GUID (Globally Unique Identifier) is a Microsoft term for UUID. It's a 128-bit identifier that is guaranteed to be unique across space and time. GUIDs are commonly used in Windows development and are essentially the same as UUIDs, often displayed in uppercase format."
      />
    </>
  );
}
