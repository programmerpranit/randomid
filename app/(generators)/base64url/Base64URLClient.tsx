"use client";

import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import DetailedInfoSection from "../../components/DetailedInfoSection";

export default function Base64URLClient() {
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
      <DetailedInfoSection
        about="Base64URL is a URL-safe variant of Base64 encoding. It uses - and _ instead of + and /, and omits padding characters (=). Base64URL IDs are perfect for use in URLs, filenames, and other contexts where special characters might cause issues. They're commonly used in JWT tokens and URL shortening services. Base64URL is defined in RFC 4648 Section 5 and is the recommended encoding for URL-safe contexts."
        useCases={[
          "JWT (JSON Web Tokens) encoding",
          "URL parameters and path segments",
          "URL shortening services",
          "Filename-safe identifiers",
          "API tokens and keys in URLs",
          "Web-safe binary data encoding",
          "OAuth and authentication tokens"
        ]}
        howToGenerate={{
          library: "Native JavaScript (btoa with URL-safe modifications)",
          npmPackage: "N/A - Native implementation",
          codeExample: `// Native implementation\nconst bytes = new Uint8Array(18);\ncrypto.getRandomValues(bytes);\nconst binary = Array.from(bytes)\n  .map(b => String.fromCharCode(b))\n  .join('');\nconst base64URL = btoa(binary)\n  .replace(/\\+/g, '-')\n  .replace(/\\//g, '_')\n  .replace(/=/g, '');`,
        }}
      />
    </>
  );
}

