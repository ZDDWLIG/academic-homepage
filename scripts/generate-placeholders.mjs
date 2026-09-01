// Generates placeholder assets:
//   - public/avatar.svg  (seismic-trace placeholder portrait)
//   - public/cv.pdf      (minimal valid PDF)
// Run: node scripts/generate-placeholders.mjs

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function write(rel, content) {
  const p = join(root, rel);
  mkdirSync(dirname(p), { recursive: true });
  writeFileSync(p, content, "utf8");
  console.log("wrote", rel);
}

// ── Avatar: rounded square with a vertical seismic section ──────────────────
function makeAvatar() {
  const W = 640;
  const H = 640;
  const R = 28;
  const count = 13;
  const samples = 90;
  let paths = "";
  for (let j = 0; j < count; j++) {
    const xc = ((j + 0.5) / count) * W;
    let d = "";
    for (let i = 0; i <= samples; i++) {
      const y = (i / samples) * H;
      const t = i / samples;
      const env = Math.sin(Math.PI * t); // 0 at top/bottom, 1 at middle
      const wiggle =
        Math.sin(t * Math.PI * 7 + j * 0.9) * 0.55 +
        Math.sin(t * Math.PI * 3.1 + j * 1.7) * 0.3 +
        Math.sin(t * Math.PI * 11 + j * 2.3) * 0.15;
      const x = xc + wiggle * env * 14;
      d += (i === 0 ? "M" : "L") + x.toFixed(1) + " " + y.toFixed(1);
    }
    paths += `<path d="${d}" fill="none" stroke="#B9B9B3" stroke-width="1.4" stroke-linecap="round"/>`;
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs><clipPath id="c"><rect width="${W}" height="${H}" rx="${R}"/></clipPath></defs>
  <rect width="${W}" height="${H}" rx="${R}" fill="#F5F5F2"/>
  <g clip-path="url(#c)">${paths}</g>
  <rect width="${W}" height="${H}" rx="${R}" fill="none" stroke="#E6E6E2"/>
</svg>`;
  write("public/avatar.svg", svg);
}

// ── Minimal valid PDF placeholder ───────────────────────────────────────────
function makePdf() {
  const content = [
    "BT /F1 20 Tf 72 720 Td (Tianxiang Gao) Tj ET",
    "BT /F1 12 Tf 72 696 Td (AI x Seismic Geophysics) Tj ET",
    "BT /F1 11 Tf 72 664 Td (Placeholder CV - replace public/cv.pdf with your real CV.) Tj ET",
  ].join("\n");

  const objects = [
    null,
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>",
    `<< /Length ${Buffer.byteLength(content)} >>\nstream\n${content}\nendstream`,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  ];

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  for (let i = 1; i < objects.length; i++) {
    offsets[i] = Buffer.byteLength(pdf);
    pdf += `${i} 0 obj\n${objects[i]}\nendobj\n`;
  }
  const xrefPos = Buffer.byteLength(pdf);
  pdf += `xref\n0 ${objects.length}\n0000000000 65535 f \n`;
  for (let i = 1; i < objects.length; i++) {
    pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\nstartxref\n${xrefPos}\n%%EOF\n`;
  write("public/cv.pdf", pdf);
}

makeAvatar();
makePdf();
