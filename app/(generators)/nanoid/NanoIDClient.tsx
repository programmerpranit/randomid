"use client";

import { nanoid } from "nanoid";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import InfoSection from "../../components/InfoSection";

export default function NanoIDClient() {
  return (
    <>
      <TitleSection
        title="NanoID Generator"
        subtitle="Small, URL-safe unique string ID"
      />
      <GeneratorDisplay
        label="Generated NanoID"
        generateFn={() => nanoid()}
      />
      <InfoSection
        title="About NanoID"
        info="NanoID is a tiny, URL-safe, unique string ID generator. It's smaller than UUID and uses a larger alphabet to achieve the same level of randomness in a shorter string. NanoID is cryptographically strong and URL-friendly, making it perfect for use in URLs and database keys."
      />
    </>
  );
}

