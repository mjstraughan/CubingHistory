#!/usr/bin/env node
const fs = require("fs");

function transformMarkdown(input) {
  // normalize line endings so ^/$ work reliably
  let text = input.replace(/\r\n/g, "\n");

  // Split at the first "## References" header (case-insensitive, flexible spaces)
  const splitRe = /(?:^|\n)##\s*References\s*\n/i;
  const parts = text.split(splitRe);

  // If no references section, just do in-text conversion and return
  if (parts.length < 2) {
    const bodyOnly = text.replace(/(?<!\^)\[(\d+)\](?!:|\()/g, "[^$1]");
    return bodyOnly;
  }

  const body = parts[0];
  let refsTail = parts.slice(1).join("\n"); // in case "References" appears again later

  // 1) Convert in-text citations in the body only:
  //    - not already a footnote ([^n])
  //    - not a link like [1](...)
  const bodyConverted = body.replace(/(?<!\^)\[(\d+)\](?!:|\()/g, "[^$1]");

  // 2) Clean the Word-inserted plain "References" line right under the header, if present
  refsTail = refsTail.replace(/^\s*References\s*\n+/i, "");

  // 3) Convert footer lines:
  //    Match optional leading spaces, [n], optional spaces, then the rest of the line
  //    Example: "   [1]  Author..." -> "[^1]: Author..."
  refsTail = refsTail.replace(/^\s*\[(\d+)\]\s*(.+)$/gm, "[^$1]: $2");

  // 4) Optional: collapse multiple blank lines in refs
  refsTail = refsTail.replace(/\n{3,}/g, "\n\n");

  // Reassemble with a normalized header
  return `${bodyConverted}\n\n## References\n${refsTail}`.replace(
    /\n{3,}/g,
    "\n\n"
  );
}

const filePath = process.argv[2];
if (!filePath) {
  console.error("❌ Usage: node transform.js <file.md>");
  process.exit(1);
}

try {
  const md = fs.readFileSync(filePath, "utf8");
  const transformed = transformMarkdown(md);
  fs.writeFileSync(filePath, transformed, "utf8");
  console.log(`✅ Transformed: ${filePath}`);
} catch (err) {
  console.error("❌ Error processing file:", err.message);
}
