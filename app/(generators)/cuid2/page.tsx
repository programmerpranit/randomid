import type { Metadata } from "next";
import CUID2Client from "./CUID2Client";

export const metadata: Metadata = {
  title: "CUID2 Generator - Collision-resistant Unique ID v2",
  description: "Generate CUID2 identifiers instantly. Improved collision resistance and performance over CUID v1. Free online CUID2 generator.",
};

export default function CUID2Page() {
  return <CUID2Client />;
}

