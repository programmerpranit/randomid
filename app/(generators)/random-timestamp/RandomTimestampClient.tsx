"use client";

import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import DetailedInfoSection from "../../components/DetailedInfoSection";

export default function RandomTimestampClient() {
  const generateRandomTimestamp = () => {
    // Generate a random timestamp between 2000-01-01 and now
    const start = new Date("2000-01-01").getTime();
    const end = Date.now();
    const randomTime = Math.floor(Math.random() * (end - start) + start);
    return randomTime.toString();
  };

  return (
    <>
      <TitleSection
        title="Random Timestamp Generator"
        subtitle="Random Unix timestamp identifier"
      />
      <GeneratorDisplay
        label="Generated Random Timestamp"
        generateFn={generateRandomTimestamp}
      />
      <DetailedInfoSection
        about="Random timestamps are Unix timestamps (milliseconds since epoch) generated randomly within a specified range. They can be used as unique identifiers when you need time-like values but don't want to expose actual creation times. Random timestamps maintain the numeric format of timestamps while providing randomness, making them useful for testing, anonymization, or when you need timestamp-like identifiers without revealing actual temporal information."
        useCases={[
          "Testing and development",
          "Data anonymization",
          "Timestamp-like identifiers without temporal exposure",
          "Mock data generation",
          "Privacy-preserving identifiers",
          "Systems requiring numeric timestamp format"
        ]}
        howToGenerate={{
          library: "Native JavaScript",
          npmPackage: "N/A - Native implementation",
          codeExample: `// Native implementation\nconst start = new Date('2000-01-01').getTime();\nconst end = Date.now();\nconst randomTime = Math.floor(Math.random() * (end - start) + start);\nconst timestampId = randomTime.toString();`,
        }}
      />
    </>
  );
}

