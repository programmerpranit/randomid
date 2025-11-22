"use client";

import { createId } from "@paralleldrive/cuid2";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import InfoSection from "../../components/InfoSection";

export default function CUID2Page() {
  return (
    <>
      <TitleSection
        title="CUID2 Generator"
        subtitle="Collision-resistant Unique Identifier v2"
      />
      <GeneratorDisplay label="Generated CUID2" generateFn={() => createId()} />
      <InfoSection
        title="About CUID2"
        info="CUID2 is the second version of CUID, providing improved collision resistance and performance. It's designed for distributed systems and maintains the same URL-safe, sortable properties as CUID but with enhanced security and better performance characteristics."
      />
    </>
  );
}

