"use client";

import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import InfoSection from "../../components/InfoSection";

export default function Base64Page() {
  const generateBase64 = () => {
    const bytes = new Uint8Array(18);
    crypto.getRandomValues(bytes);
    const binary = Array.from(bytes)
      .map((b) => String.fromCharCode(b))
      .join("");
    return btoa(binary);
  };

  return (
    <>
      <TitleSection
        title="Base64 Random ID Generator"
        subtitle="Base64-encoded random bytes"
      />
      <GeneratorDisplay
        label="Generated Base64 ID"
        generateFn={generateBase64}
      />
      <InfoSection
        title="About Base64 ID"
        info="Base64 encoding uses 64 characters (A-Z, a-z, 0-9, +, /) to represent binary data. Base64 IDs are compact and efficient, using approximately 4/3 the size of the original binary data. They're widely used in web applications, APIs, and data transmission."
      />
    </>
  );
}

