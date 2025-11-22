import type { Metadata } from "next";
import Base62Client from "./Base62Client";

export const metadata: Metadata = {
  title: "Base62 ID Generator - Base62 Encoded Random Number",
  description: "Generate Base62-encoded random identifiers instantly. Compact, URL-safe alphanumeric encoding. Free online Base62 ID generator.",
};

export default function Base62Page() {
  return <Base62Client />;
}

