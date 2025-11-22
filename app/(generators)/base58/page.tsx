"use client";

import { v4 as uuidv4 } from "uuid";
import short from "short-uuid";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import InfoSection from "../../components/InfoSection";

export default function Base58Page() {
  const translator = short();

  return (
    <>
      <TitleSection
        title="Base58 Random ID Generator"
        subtitle="Base58-encoded random bytes"
      />
      <GeneratorDisplay
        label="Generated Base58 ID"
        generateFn={() => translator.fromUUID(uuidv4())}
      />
      <InfoSection
        title="About Base58 ID"
        info="Base58 encoding uses 58 characters, excluding 0, O, I, and l to avoid confusion. It's similar to Base64 but without special characters. Base58 is used by Bitcoin addresses and is popular for generating compact, URL-safe identifiers that avoid ambiguous characters."
      />
    </>
  );
}

