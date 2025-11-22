"use client";

import { ulid } from "ulid";
import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import InfoSection from "../../components/InfoSection";

export default function ULIDPage() {
  return (
    <>
      <TitleSection
        title="ULID Generator"
        subtitle="Universally Unique Lexicographically Sortable Identifier"
      />
      <GeneratorDisplay label="Generated ULID" generateFn={() => ulid()} />
      <InfoSection
        title="About ULID"
        info="ULID (Universally Unique Lexicographically Sortable Identifier) is a 128-bit identifier that is both unique and sortable. It combines a 48-bit timestamp with 80 random bits. ULIDs are URL-safe, case-insensitive, and can be sorted chronologically, making them excellent for database primary keys."
      />
    </>
  );
}

