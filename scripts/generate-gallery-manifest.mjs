/**
 * Scans public/media/servicescards/ and writes src/data/galleryManifest.json.
 * Run automatically via predev / prebuild, or: node scripts/generate-gallery-manifest.mjs
 *
 * To add gallery images: drop a file into public/media/servicescards/ (not marquee.png),
 * then restart dev or run npm run build.
 */

import { readdir, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SOURCE_DIR = path.join(ROOT, "public/media/servicescards");
const OUTPUT_FILE = path.join(ROOT, "src/data/galleryManifest.json");

const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp"]);
const EXCLUDED = new Set(["marquee.png"]);

function isGalleryImage(filename) {
  const lower = filename.toLowerCase();
  if (EXCLUDED.has(lower)) return false;
  const ext = path.extname(lower);
  return IMAGE_EXTENSIONS.has(ext);
}

function naturalCompare(a, b) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
}

const entries = await readdir(SOURCE_DIR, { withFileTypes: true });
const filenames = entries
  .filter((e) => e.isFile() && isGalleryImage(e.name))
  .map((e) => e.name)
  .sort(naturalCompare);

const manifest = filenames.map((filename) => ({
  filename,
  url: `/media/servicescards/${filename}`,
}));

await mkdir(path.dirname(OUTPUT_FILE), { recursive: true });
await writeFile(OUTPUT_FILE, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

console.log(`Gallery manifest: ${manifest.length} image(s) → ${path.relative(ROOT, OUTPUT_FILE)}`);
