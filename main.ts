import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one funny line, 138 characters, within the 1-200 gate.
const line =
  "I told the taxi driver to take the fastest route. He cut through a car park, a wedding, and what I can only describe as a family argument.";

// Gate guard: the sealed scorer requires 1-200 UTF-8 chars, not whitespace-only.
if (line.length < 1 || line.length > 200 || !line.trim()) {
  throw new Error(`entry line fails the 1-200 char gate (${line.length} chars)`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
