// The Worst App Idea Ever Pitched — make.fun entry.
// Writes one sentence pitching the worst, most useless app imaginable.
//
// The joke's structure: a deadpan founder pitch — "premium app" and
// "weekly report" lend the product a straight face, while the function
// itself is perfectly pointless (ranking how judgmentally a fridge hums),
// and the punchline lands on the last words: apologizing to an appliance.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Shush is a premium app that listens to your refrigerator hum, then sends a weekly report ranking how judgmentally it hums so you can apologize to it properly.";

// Gate self-check (RULES.txt): UTF-8 text, 1–240 chars, not only
// whitespace, exactly one line and exactly one sentence.
if (entry.length < 1 || entry.length > 240) {
  throw new Error(`entry is ${entry.length} chars, must be 1–240`);
}
if (!/\S/.test(entry)) {
  throw new Error("entry must not be only whitespace");
}
if (entry.includes("\n")) {
  throw new Error("entry must be exactly one line");
}
if ((entry.match(/\./g) ?? []).length !== 1) {
  throw new Error("entry must be exactly one sentence");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${entry.length} chars)`);
