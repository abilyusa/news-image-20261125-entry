// news-image-20261125: Wednesday 25 November 2026 in one front page.
// The picture is drawn in this repository as entry.png; this program only
// moves those exact bytes to the output directory. Nothing is generated at
// run time, so the output is byte-identical on every run, with no network.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ENTRY_NAME = 'entry.png';
const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, ENTRY_NAME);
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const bytes = readFileSync(sourcePath);
if (bytes.length === 0) {
  throw new Error('entry.png is empty, refusing to write an invalid image');
}
mkdirSync(targetDir, { recursive: true });
writeFileSync(join(targetDir, ENTRY_NAME), bytes);
