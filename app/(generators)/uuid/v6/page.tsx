import type { Metadata } from "next";
import UUIDV6Client from "./UUIDV6Client";

export const metadata: Metadata = {
  title: "UUID v6 Generator - Time-ordered UUID",
  description: "Generate UUID v6 identifiers instantly. Time-ordered UUIDs for better database indexing (RFC 4122 draft). Free online UUID v6 generator.",
};

export default function UUIDV6Page() {
  return <UUIDV6Client />;
}
