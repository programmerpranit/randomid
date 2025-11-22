"use client";

import TitleSection from "../../components/TitleSection";
import GeneratorDisplay from "../../components/GeneratorDisplay";
import InfoSection from "../../components/InfoSection";

export default function Base62Page() {
  const base62Chars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  const generateBase62 = () => {
    const randomValue = BigInt(
      "0x" +
      Array.from(crypto.getRandomValues(new Uint8Array(8)))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("")
    );

    let result = "";
    let num = randomValue;

    if (num === BigInt(0)) return "0";

    while (num > BigInt(0)) {
      result = base62Chars[Number(num % BigInt(62))] + result;
      num = num / BigInt(62);
    }

    return result;
  };

  return (
    <>
      <TitleSection
        title="Base62 Random ID Generator"
        subtitle="Base62-encoded random number"
      />
      <GeneratorDisplay
        label="Generated Base62 ID"
        generateFn={generateBase62}
      />
      <InfoSection
        title="About Base62 ID"
        info="Base62 encoding uses 62 characters (0-9, A-Z, a-z) to represent numbers. Base62 IDs are compact, URL-safe, and use only alphanumeric characters. They're case-sensitive and provide a good balance between compactness and readability."
      />
    </>
  );
}

