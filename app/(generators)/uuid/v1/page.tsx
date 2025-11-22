import type { Metadata } from "next";
import UUIDV1Client from "./UUIDV1Client";

export const metadata: Metadata = {
  title: "UUID v1 Generator - Time-based UUID",
  description: "Generate UUID v1 (time-based) identifiers instantly. UUID Version 1 uses timestamp and MAC address for time-ordered unique identifiers. Free online UUID v1 generator.",
};

export default function UUIDV1Page() {
  return <UUIDV1Client />;
}
