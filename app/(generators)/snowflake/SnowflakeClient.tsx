"use client";

import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import DetailedInfoSection from "../../components/DetailedInfoSection";

export default function SnowflakeClient() {
  // Simple Snowflake ID implementation
  // Real Snowflake IDs require a datacenter ID and worker ID
  const generateSnowflake = () => {
    const timestamp = BigInt(Date.now() - 1609459200000); // Epoch: 2021-01-01
    const datacenterId = BigInt(1);
    const workerId = BigInt(1);
    const sequence = BigInt(Math.floor(Math.random() * 4096));

    const id =
      (timestamp << BigInt(22)) | (datacenterId << BigInt(17)) | (workerId << BigInt(12)) | sequence;
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
      <DetailedInfoSection
        about="Snowflake ID is a 64-bit unique identifier format used by Twitter. It consists of a 41-bit timestamp (milliseconds since custom epoch), 5-bit datacenter ID, 5-bit worker ID, and 12-bit sequence number. Snowflake IDs are time-ordered and can generate up to 4096 IDs per millisecond per worker. The format allows for distributed ID generation across multiple datacenters and workers without coordination, making it ideal for large-scale distributed systems."
        useCases={[
          "Distributed system ID generation",
          "Twitter-style social media platforms",
          "High-throughput ID generation",
          "Database primary keys with time ordering",
          "Systems requiring no coordination between generators",
          "Large-scale applications with multiple workers"
        ]}
        howToGenerate={{
          library: "Custom implementation or snowflake-id libraries",
          npmPackage: "npm install snowflake-id or similar",
          codeExample: `// Custom implementation\nconst timestamp = BigInt(Date.now() - customEpoch);\nconst datacenterId = BigInt(1);\nconst workerId = BigInt(1);\nconst sequence = BigInt(/* sequence counter */);\nconst id = (timestamp << 22n) | (datacenterId << 17n) | (workerId << 12n) | sequence;`,
          note: "Note: Production Snowflake implementations require proper sequence management and worker/datacenter ID coordination."
        }}
      />
    </>
  );
}

