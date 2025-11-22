"use client";

import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import InfoSection from "../../components/InfoSection";

export default function Base64URLPage() {
  const generateBase64URL = () => {
    const bytes = new Uint8Array(18);
    crypto.getRandomValues(bytes);
    const binary = Array.from(bytes)
      .map((b) => String.fromCharCode(b))
      .join("");
    return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  };

  return (
    <>
      <TitleSection
        title="Base64URL Random ID Generator"
        subtitle="Base64URL-encoded random bytes"
      />
      <GeneratorDisplay
        label="Generated Base64URL ID"
        generateFn={generateBase64URL}
      />
      <InfoSection
        title="About Base64URL ID"
        info="Base64URL is a URL-safe variant of Base64 encoding. It uses - and _ instead of + and /, and omits padding characters (=). Base64URL IDs are perfect for use in URLs, filenames, and other contexts where special characters might cause issues. They're commonly used in JWT tokens and URL shortening services."
      />
    </>
  );
}

