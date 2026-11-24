// The Day in One Image — news-image-20261123 entry (Node 22, standard library only).
//
// The entry is one picture: entry.png next to this file. It is a broadsheet front
// page that sums up the world news of Monday 23 November 2026. The page was laid
// out as an HTML document (design.html, kept in this repository as the design
// source) and rendered to a PNG of exactly 1024 by 1024 pixels. All this program
// does is hand that picture in: it reads entry.png and writes the same bytes to
// the output directory, creating the directory first when it is missing.
//
// The grader runs the program with no network and a writable /output. Locally,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The output is a byte-for-byte copy of the shipped image, so running the
// program twice always produces identical bytes.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const image = readFileSync(new URL('./entry.png', import.meta.url));
const target = join(outputDir, 'entry.png');

mkdirSync(outputDir, { recursive: true });
writeFileSync(target, image);

console.log(`wrote ${target} (${image.length} bytes)`);
