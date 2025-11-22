"use client";

import { v1 as uuidv1 } from "uuid";
import TitleSection from "../../../components/TitleSection";
import GeneratorDisplay from "../../../components/GeneratorDisplay";
import InfoSection from "../../../components/InfoSection";

export default function UUIDV1Client() {
  return (
    <>
      <TitleSection
        title="UUID v1 Generator"
        subtitle="Time-based UUID (Timestamp + MAC Address)"
      />
      <GeneratorDisplay
        label="Generated UUID v1"
        generateFn={() => uuidv1()}
      />
      <InfoSection
        title="About UUID v1"
        info="UUID Version 1 is generated using the current timestamp and the MAC address of the network interface. It includes 60 bits of timestamp, 14 bits of clock sequence, and 48 bits of node identifier (usually the MAC address). This version is useful when you need time-ordered UUIDs."
      />
    </>
  );
}

