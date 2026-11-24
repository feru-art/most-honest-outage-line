// The Most Honest Outage Line — V1 (winner, 4-0 local race)
// Angle A: the fate of the user's in-flight work. One status page line, 91 characters.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 160 characters, not only whitespace.
// This line is 91 characters, one line, no trailing newline — it passes the gate.
// Writes the line to the output path (arg, $OUTPUT_FILE, or /output/entry.txt).
// Deterministic: same bytes on every run. No network, no clock, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "All of my servers are down, and I cannot check whether your last request was saved or lost.";

const target = process.argv[2] ?? process.env.OUTPUT_FILE ?? "/output/entry.txt";
mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, LINE, "utf8");
