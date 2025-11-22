"use client";

import { v4 as uuidv4 } from "uuid";
import short from "short-uuid";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import InfoSection from "../../components/InfoSection";

export default function ShortUUIDClient() {
  const translator = short();

  return (
    <>
      <TitleSection
        title="ShortUUID Generator"
        subtitle="Shortened UUID representation"
      />
      <GeneratorDisplay
        label="Generated ShortUUID"
        generateFn={() => translator.fromUUID(uuidv4())}
      />
      <InfoSection
        title="About ShortUUID"
        info="ShortUUID is a library that converts standard UUIDs into shorter, URL-friendly strings using Base58 encoding. It maintains the uniqueness properties of UUIDs while being more compact. ShortUUIDs are useful when you need shorter identifiers but want to maintain UUID compatibility."
      />
    </>
  );
}

