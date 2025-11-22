"use client";

import PetName from "petname";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import DetailedInfoSection from "../../components/DetailedInfoSection";

const petname = new PetName();

export default function Word3Client() {
  return (
    <>
      <TitleSection
        title="3-Word ID Generator"
        subtitle="Three-word combination identifier"
      />
      <GeneratorDisplay
        label="Generated 3-Word ID"
        generateFn={() => petname.generate(3, "-")}
      />
      <DetailedInfoSection
        about="3-Word IDs combine three words to create more unique, memorable identifiers. They provide better uniqueness than 2-word combinations while remaining human-readable and easy to communicate. 3-word combinations offer significantly more possible combinations, reducing collision probability while still maintaining human readability. Useful when you need more uniqueness but still want human-friendly identifiers."
        useCases={[
          "Higher uniqueness requirements",
          "User-facing identifiers needing more uniqueness",
          "Resource names requiring better collision resistance",
          "Human-readable IDs with better uniqueness",
          "Applications needing memorable but unique identifiers",
          "Systems requiring more word combinations"
        ]}
        howToGenerate={{
          library: "petname",
          npmPackage: "npm install petname",
          codeExample: `import PetName from 'petname';\n\nconst petname = new PetName();\nconst id = petname.generate(3, '-');\nconsole.log(id); // e.g., 'happy-dog-mountain'`,
        }}
      />
    </>
  );
}

