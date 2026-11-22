import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text =
  "A library book came back forty years late, and no fine was paid. " +
  "In the margin of page 112, in the librarian's own handwriting: " +
  "'Do not shelve this. It is still being read.' " +
  "She never checked it out. Tonight she opens it. " +
  "One new line, in pencil, was not there this morning.";

const outDir =
  process.env.MAKEFUN_OUTPUT_PATH !== undefined
    ? join(process.env.MAKEFUN_OUTPUT_PATH, "..")
    : process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath =
  process.env.MAKEFUN_OUTPUT_PATH !== undefined
    ? process.env.MAKEFUN_OUTPUT_PATH
    : join(outDir, "entry.txt");

const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 280 || text.trim().length === 0) {
  throw new Error(
    `entry text must be 1-280 code points and not whitespace-only, got ${codePoints}`,
  );
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, text, "utf8");
