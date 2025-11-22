"use client";

import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import InfoSection from "../../components/InfoSection";

export default function SnowflakePage() {
  // Simple Snowflake ID implementation
  // Real Snowflake IDs require a datacenter ID and worker ID
  const generateSnowflake = () => {
    const timestamp = BigInt(Date.now() - 1609459200000); // Epoch: 2021-01-01
    const datacenterId = BigInt(1);
    const workerId = BigInt(1);
    const sequence = BigInt(Math.floor(Math.random() * 4096));

    const id =
      (timestamp << 22n) | (datacenterId << 17n) | (workerId << 12n) | sequence;
    return id.toString();
  };

  return (
    <>
      <TitleSection
        title="Snowflake ID Generator"
        subtitle="Twitter Snowflake-style unique identifier"
      />
      <GeneratorDisplay
        label="Generated Snowflake ID"
        generateFn={generateSnowflake}
      />
      <InfoSection
        title="About Snowflake ID"
        info="Snowflake ID is a 64-bit unique identifier format used by Twitter. It consists of a 41-bit timestamp, 5-bit datacenter ID, 5-bit worker ID, and 12-bit sequence number. Snowflake IDs are time-ordered and can generate up to 4096 IDs per millisecond per worker. This implementation uses simplified values for demonstration."
      />
    </>
  );
}

