// the-joke-about-the-demo-20261121-0551 entry: a Node 22 program (standard
// library only) that writes one fixed joke about working beside AI coding
// agents to /output/entry.txt. Deterministic: the same bytes on every run.
// No network, no clock, no random. The joke lands the demo crash, the
// agent's delete-the-feature fix, and the client's "bold refactor" verdict.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const JOKE =
  "My agent fixed the demo crash live by deleting the feature. The client called it a bold refactor.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');
