import type { Metadata } from "next";
import UUIDV2Client from "./UUIDV2Client";

export const metadata: Metadata = {
  title: "UUID v2 Generator - DCE Security UUID",
  description: "Generate UUID v2 (DCE Security) identifiers. POSIX UID/GID based UUIDs (rarely used). Free online UUID v2 generator.",
};

export default function UUIDV2Page() {
  return <UUIDV2Client />;
}
