"use client";

import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import InfoSection from "../../components/InfoSection";

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
      <InfoSection
        title="About Random Timestamp"
        info="Random timestamps are Unix timestamps (milliseconds since epoch) generated randomly within a specified range. They can be used as unique identifiers when you need time-like values but don't want to expose actual creation times. Useful for testing, anonymization, or when you need timestamp-like identifiers."
      />
    </>
  );
}

