"use client";

import TitleSection from "../../../components/TitleSection";
import GeneratorDisplay from "../../../components/GeneratorDisplay";
import InfoSection from "../../../components/InfoSection";

export default function UUIDV8Page() {
  const generateV8 = () => {
    const randomHex = () => Math.floor(Math.random() * 16).toString(16);
    const segments = [
      "8" + randomHex() + randomHex() + randomHex(),
      randomHex() + randomHex() + randomHex() + randomHex(),
      "8" + randomHex() + randomHex() + randomHex(),
      randomHex() + randomHex() + randomHex() + randomHex(),
      randomHex() +
        randomHex() +
        randomHex() +
        randomHex() +
        randomHex() +
        randomHex() +
        randomHex() +
        randomHex() +
        randomHex() +
        randomHex() +
        randomHex() +
        randomHex(),
    ];
    return segments.join("-");
  };

  return (
    <>
      <TitleSection
        title="UUID v8 Generator"
        subtitle="Custom/Implementation-defined UUID"
      />
      <GeneratorDisplay label="Generated UUID v8" generateFn={generateV8} />
      <InfoSection
        title="About UUID v8"
        info="UUID Version 8 is reserved for custom, implementation-specific UUIDs. The format allows for vendor-specific or application-specific UUID generation schemes. This version gives you full control over the UUID structure while maintaining the standard UUID format. Use v8 when you need custom UUID generation logic that doesn't fit other versions."
      />
    </>
  );
}
