"use client";

import PetName from "petname";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import DetailedInfoSection from "../../components/DetailedInfoSection";

const petname = new PetName();

export default function Word2Client() {
  return (
    <>
      <TitleSection
        title="2-Word ID Generator"
        subtitle="Two-word combination identifier"
      />
      <GeneratorDisplay
        label="Generated 2-Word ID"
        generateFn={() => petname.generate(2, "-")}
      />
      <DetailedInfoSection
        about="2-Word IDs combine two words (typically an adjective and a noun) to create memorable, human-readable identifiers. They're shorter than longer word combinations while still being easy to remember and communicate. 2-word combinations provide a good balance between uniqueness and brevity, making them ideal for user-facing identifiers and resource naming where you want something memorable but not too long."
        useCases={[
          "Short user-facing identifiers",
          "Resource names in development environments",
          "Human-readable unique IDs",
          "Friendly application identifiers",
          "Quick memorable identifiers",
          "Resource naming in cloud platforms"
        ]}
        howToGenerate={{
          library: "petname",
          npmPackage: "npm install petname",
          codeExample: `import PetName from 'petname';\n\nconst petname = new PetName();\nconst id = petname.generate(2, '-');\nconsole.log(id); // e.g., 'happy-dog'`,
        }}
      />
    </>
  );
}

