import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const confession = "I never liked your idea.";

// Fail loudly instead of writing an entry the gate would refuse.
const words = confession.trim().split(/\s+/);
if (confession.length < 1 || confession.length > 88 || words.length < 1 || words.length > 5) {
  throw new Error(`entry out of bounds: ${confession.length} chars, ${words.length} words`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), confession, "utf8");
