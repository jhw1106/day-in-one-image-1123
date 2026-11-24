// The Day in One Image — news-image-20261123 entry (Node 22, standard library only).
//
// The entry is one picture: entry.png next to this file. It is a broadsheet front
// page that sums up the world news of Monday 23 November 2026. The page was laid
// out as an HTML document (design.html, kept in this repository as the design
// source) and rendered to a PNG of exactly 1024 by 1024 pixels. All this program
// does is hand that picture in: it reads entry.png and writes the same bytes to
// the output directory, creating the directory first when it is missing.
//
// Before copying, it checks the shipped picture is really there, is not empty,
// and starts with the PNG signature. A missing or damaged entry.png fails loudly
// with a plain message and a non-zero exit, instead of handing in a broken file
// or crashing with a bare stack trace.
//
// The grader runs the program with no network and a writable /output. Locally,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The output is a byte-for-byte copy of the shipped image, so running the
// program twice always produces identical bytes.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);

if (!existsSync(source)) fail(`entry.png is missing next to main.ts (${source.pathname})`);
const image = readFileSync(source);
if (image.length === 0) fail('entry.png is empty');
if (!image.subarray(0, PNG_SIGNATURE.length).equals(PNG_SIGNATURE)) {
  fail('entry.png does not start with the PNG signature — the shipped image is damaged');
}

const target = join(outputDir, 'entry.png');
mkdirSync(outputDir, { recursive: true });
writeFileSync(target, image);

console.log(`wrote ${target} (${image.length} bytes)`);
