"use client";

import KSUID from "ksuid";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import InfoSection from "../../components/InfoSection";

export default function KSUIDClient() {
  return (
    <>
      <TitleSection
        title="KSUID Generator"
        subtitle="K-Sortable Unique Identifier"
      />
      <GeneratorDisplay
        label="Generated KSUID"
        generateFn={() => KSUID.randomSync().string}
      />
      <InfoSection
        title="About KSUID"
        info="KSUID (K-Sortable Unique Identifier) is a unique identifier that includes a timestamp component, making it sortable by creation time. It's 27 characters long, URL-safe, and contains both timestamp and random data. KSUIDs are useful for distributed systems where you need chronological ordering."
      />
    </>
  );
}

