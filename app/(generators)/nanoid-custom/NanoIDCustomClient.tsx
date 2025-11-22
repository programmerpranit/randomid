"use client";

import { customAlphabet } from "nanoid";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplayWithInput from "../../components/GeneratorDisplayWithInput";
import DetailedInfoSection from "../../components/DetailedInfoSection";

export default function NanoIDCustomClient() {
  return (
    <>
      <TitleSection
        title="NanoID Custom Generator"
        subtitle="Custom alphabet and length NanoID"
      />
      <GeneratorDisplayWithInput
        label="Generated Custom NanoID"
        generateFn={(inputs) => {
          const alphabet = inputs.alphabet || "0123456789abcdefghijklmnopqrstuvwxyz";
          const length = parseInt(inputs.length || "21", 10);
          const customNanoid = customAlphabet(alphabet, length);
          return customNanoid();
        }}
        inputFields={[
          {
            name: "alphabet",
            label: "Custom Alphabet",
            type: "text",
            placeholder: "0123456789abcdefghijklmnopqrstuvwxyz",
            defaultValue: "0123456789abcdefghijklmnopqrstuvwxyz",
            required: true,
          },
          {
            name: "length",
            label: "Length",
            type: "number",
            placeholder: "21",
            defaultValue: "21",
            required: true,
          },
        ]}
      />
      <DetailedInfoSection
        about="NanoID supports custom alphabets and lengths. You can specify your own character set and desired length. Custom NanoIDs are useful when you need specific character sets for compatibility, branding, or system requirements. The alphabet determines which characters can appear in the ID, and the length determines how many characters the ID will have. Custom alphabets allow you to create IDs that match specific formats, avoid certain characters, or use only alphanumeric characters for case-insensitive systems."
        useCases={[
          "Case-insensitive systems (lowercase only)",
          "Numeric-only IDs for compatibility",
          "Custom character sets for branding",
          "Avoiding specific characters (e.g., no hyphens)",
          "Legacy system compatibility",
          "Custom length requirements"
        ]}
        howToGenerate={{
          library: "nanoid",
          npmPackage: "npm install nanoid",
          codeExample: `import { customAlphabet } from 'nanoid';\n\n// Custom alphabet (lowercase + numbers)\nconst alphabet = '0123456789abcdefghijklmnopqrstuvwxyz';\nconst customNanoid = customAlphabet(alphabet, 21);\nconst id = customNanoid();\nconsole.log(id); // e.g., 'k3j9h2f8m1n5p7q4r6s2t0'`,
        }}
      />
    </>
  );
}

