import type { Metadata } from "next";
import SnowflakeClient from "./SnowflakeClient";

export const metadata: Metadata = {
  title: "Snowflake ID Generator - Twitter Snowflake ID",
  description: "Generate Snowflake ID identifiers instantly. 64-bit time-ordered unique identifiers used by Twitter. Free online Snowflake ID generator.",
};

export default function SnowflakePage() {
  return <SnowflakeClient />;
}

