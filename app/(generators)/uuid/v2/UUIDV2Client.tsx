"use client";

import { v1 as uuidv1 } from "uuid";
import TitleSection from "../../../components/TitleSection";
import GeneratorDisplay from "../../../components/GeneratorDisplay";
import InfoSection from "../../../components/InfoSection";

export default function UUIDV2Client() {
  return (
    <>
      <TitleSection
        title="UUID v2 Generator"
        subtitle="DCE Security UUID (POSIX UID/GID based)"
      />
      <GeneratorDisplay
        label="Generated UUID v2"
        generateFn={() => uuidv1()}
      />
      <InfoSection
        title="About UUID v2"
        info="UUID Version 2 is a DCE Security version that includes POSIX UID/GID information. This version is rarely used in practice as it requires system-specific user/group identifiers. Most implementations don't fully support v2, so this generator uses a v1-based approach. For production use, consider v1, v4, or v7 instead."
      />
    </>
  );
}

