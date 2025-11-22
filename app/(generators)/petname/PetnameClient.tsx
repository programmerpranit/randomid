"use client";

import PetName from "petname";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplayWithInput from "../../components/GeneratorDisplayWithInput";
import DetailedInfoSection from "../../components/DetailedInfoSection";

const petname = new PetName();

export default function PetnameClient() {
  return (
    <>
      <TitleSection
        title="Petname ID Generator"
        subtitle="Human-readable pet name identifier"
      />
      <GeneratorDisplayWithInput
        label="Generated Petname ID"
        generateFn={(inputs) => {
          const words = parseInt(inputs.words || "2", 10);
          const separator = inputs.separator || "-";
          if (words < 1 || words > 10) {
            throw new Error("Number of words must be between 1 and 10");
          }
          return petname.generate(words, separator);
        }}
        inputFields={[
          {
            name: "words",
            label: "Number of Words",
            type: "number",
            placeholder: "2",
            defaultValue: "2",
            required: true,
          },
          {
            name: "separator",
            label: "Separator",
            type: "text",
            placeholder: "-",
            defaultValue: "-",
            required: false,
          },
        ]}
      />
      <DetailedInfoSection
        about="Petname IDs are human-readable identifiers generated from combinations of words, typically adjectives and nouns. They're easy to remember, pronounce, and communicate verbally. Petnames are useful for user-facing identifiers, resource names, or when you need memorable but unique identifiers. You can customize the number of words (1-10) and the separator character between words. Petnames provide a balance between uniqueness and human readability, making them ideal for identifiers that users will see and potentially communicate."
        useCases={[
          "User-facing resource names",
          "Development and staging environment names",
          "Human-readable unique identifiers",
          "Resource naming in cloud platforms",
          "Friendly application identifiers",
          "Identifiers that need to be communicated verbally"
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

