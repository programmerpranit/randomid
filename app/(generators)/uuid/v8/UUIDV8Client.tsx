"use client";

import TitleSection from "../../../components/TitleSection";
import GeneratorDisplay from "../../../components/GeneratorDisplay";
import DetailedInfoSection from "../../../components/DetailedInfoSection";

export default function UUIDV8Client() {
  const generateV8 = () => {
    const randomHex = () => Math.floor(Math.random() * 16).toString(16);
    const segments = [
      "8" + randomHex() + randomHex() + randomHex(),
      randomHex() + randomHex() + randomHex() + randomHex(),
      "8" + randomHex() + randomHex() + randomHex(),
      randomHex() + randomHex() + randomHex() + randomHex(),
      randomHex() +
        randomHex() +
        randomHex() +
        randomHex() +
        randomHex() +
        randomHex() +
        randomHex() +
        randomHex() +
        randomHex() +
        randomHex() +
        randomHex() +
        randomHex(),
    ];
    return segments.join("-");
  };

  return (
    <>
      <TitleSection
        title="UUID v8 Generator"
        subtitle="Custom/Implementation-defined UUID"
      />
      <GeneratorDisplay label="Generated UUID v8" generateFn={generateV8} />
      <DetailedInfoSection
        about="UUID Version 8 is reserved for custom, implementation-specific UUIDs. The format allows for vendor-specific or application-specific UUID generation schemes. This version gives you full control over the UUID structure while maintaining the standard UUID format (8-4-4-4-12 hexadecimal digits). Use v8 when you need custom UUID generation logic that doesn't fit other versions, such as embedding application-specific data or using custom algorithms while maintaining UUID compatibility."
        useCases={[
          "Custom UUID generation schemes",
          "Vendor-specific identifier formats",
          "Application-specific UUID structures",
          "Embedding custom data in UUID format",
          "Experimental or proprietary UUID formats"
        ]}
        howToGenerate={{
          library: "Custom implementation",
          npmPackage: "N/A - Custom implementation required",
          codeExample: `// Custom v8 UUID implementation\nfunction generateV8() {\n  const randomHex = () => \n    Math.floor(Math.random() * 16).toString(16);\n  const segments = [\n    '8' + randomHex() + randomHex() + randomHex(),\n    randomHex().repeat(4),\n    '8' + randomHex() + randomHex() + randomHex(),\n    randomHex().repeat(4),\n    randomHex().repeat(12)\n  ];\n  return segments.join('-');\n}`,
          note: "Note: UUID v8 allows custom implementations. Ensure your implementation follows the UUID format structure and maintains uniqueness guarantees."
        }}
      />
    </>
  );
}

