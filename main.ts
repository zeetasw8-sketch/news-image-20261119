// World News — 19 November 2026 in one image (make.fun news-image-20261119).
//
// The infographic is entry.png, drawn at build time from the day's news
// (Reuters / AP / AFP / CNN) with Python + Pillow: flat colours, geometric
// pictograms, DejaVu fonts. The program runs with no network, so it simply
// writes the bundled image to the output path, byte for byte.
//
// Local run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//   # then compare: sha256sum out/entry.png entry.png

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true }); // /output exists in the grader

const here = dirname(fileURLToPath(import.meta.url));
const image = readFileSync(join(here, 'entry.png'));
writeFileSync(join(outDir, 'entry.png'), image);
