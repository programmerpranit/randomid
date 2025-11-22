"use client";

import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import DetailedInfoSection from "../../components/DetailedInfoSection";

export default function Base64Client() {
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
      <DetailedInfoSection
        about="Base64 encoding uses 64 characters (A-Z, a-z, 0-9, +, /) to represent binary data. Base64 IDs are compact and efficient, using approximately 4/3 the size of the original binary data. They're widely used in web applications, APIs, and data transmission. Base64 is defined in RFC 4648 and is commonly used for encoding binary data in text-based protocols like JSON, XML, and URLs (with URL-safe variants)."
        useCases={[
          "Encoding binary data in JSON/XML",
          "API responses and data transmission",
          "Email attachments (MIME encoding)",
          "Data URLs and embedded resources",
          "Web storage and cookies",
          "General-purpose binary-to-text encoding"
        ]}
        howToGenerate={{
          library: "Native JavaScript (btoa/atob)",
          npmPackage: "N/A - Native implementation",
          codeExample: `// Native implementation\nconst bytes = new Uint8Array(18);\ncrypto.getRandomValues(bytes);\nconst binary = Array.from(bytes)\n  .map(b => String.fromCharCode(b))\n  .join('');\nconst base64Id = btoa(binary);`,
        }}
      />
    </>
  );
}

