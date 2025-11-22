"use client";

import { v1 as uuidv1 } from "uuid";
import TitleSection from "../../../components/TitleSection";
import GeneratorDisplay from "../../../components/GeneratorDisplay";
import InfoSection from "../../../components/InfoSection";

export default function UUIDV6Page() {
  return (
    <>
      <TitleSection
        title="UUID v6 Generator"
        subtitle="Time-ordered UUID (RFC 4122 draft)"
      />
      <GeneratorDisplay
        label="Generated UUID v6"
        generateFn={() => uuidv1()}
      />
      <InfoSection
        title="About UUID v6"
        info="UUID Version 6 is a time-ordered version designed for better database indexing performance. It's similar to v1 but with the timestamp bits reordered to be monotonically increasing. This makes v6 UUIDs sortable by creation time, which is beneficial for database primary keys. Note: Full v6 support requires specialized libraries as it's still in draft status."
      />
    </>
  );
}
