"use client";

import Haikunator from "haikunator";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import InfoSection from "../../components/InfoSection";

export default function HaikunatorPage() {
  const haikunator = new Haikunator();

  return (
    <>
      <TitleSection
        title="Haikunator ID Generator"
        subtitle="Haiku-style human-readable identifier"
      />
      <GeneratorDisplay
        label="Generated Haikunator ID"
        generateFn={() => haikunator.haikunate()}
      />
      <InfoSection
        title="About Haikunator ID"
        info="Haikunator generates memorable, haiku-like identifiers in the format 'adjective-noun-number'. These IDs are human-readable, easy to remember, and provide a friendly alternative to technical identifiers. They're popular in cloud platforms like Heroku for resource naming."
      />
    </>
  );
}

