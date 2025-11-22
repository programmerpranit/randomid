import type { Metadata } from "next";
import NanoIDAsyncClient from "./NanoIDAsyncClient";

export const metadata: Metadata = {
  title: "NanoID Async Generator - Asynchronous URL-safe ID",
  description: "Generate NanoID identifiers asynchronously. For use in async/await patterns and async operations. Free online NanoID Async generator.",
};

export default function NanoIDAsyncPage() {
  return <NanoIDAsyncClient />;
}

