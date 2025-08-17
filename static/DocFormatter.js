#!/usr/bin/env node
const fs = require("fs");

function transformMarkdown(input) {
  // Normalize line endings
  let text = input.replace(/\r\n/g, "\n");

  // Step 1: Find and remove the "References" header/line.
  const headerRegex =
    /(?:^|\n)\s*##?\s*References\s*\n+|\n\s*References\s*\n+/i;
  const splitByHeader = text.split(headerRegex);

  let body = splitByHeader[0];
  let references = splitByHeader.length > 1 ? splitByHeader[1] : null;

  // Step 2: Handle in-text citations in the body.
  // This regex handles both single [1] and combined [1, 2, 3] formats.
  body = body.replace(
    /(?<!\^|:|a-zA-Z\d)\[([\d,\s]+)\](?!:|\()/g,
    (match, p1) => {
      // Split the numbers, trim whitespace, and format each one.
      const citations = p1.split(",").map((num) => `[^${num.trim()}]`);
      return citations.join(" "); // Join with a space.
    }
  );

  // If no references block was found via the header, try to find it at the end of the file.
  if (!references) {
    const endBlockRegex = /(?:\n\n|^)((?:\[\d+\][\s\S]+?)+)$/m;
    const endBlockMatch = body.match(endBlockRegex);
    if (endBlockMatch) {
      references = endBlockMatch[1];
      body = body.substring(0, endBlockMatch.index);
    }
  }

  // Step 3: If a references block was found, process it.
  if (references) {
    // 3a. Change starting format from [1] to [^1]:
    references = references.replace(/^\[(\d+)\]/gm, "[^$1]:");

    // 3b. Add a blank line after the last period of each reference.
    // This looks for a period or closing bracket followed by a newline and the start of a new reference.
    references = references.replace(/(\.|\))\n(?=\[\^)/g, "$1\n\n");

    // 3c. Ensure multiple newlines are collapsed to a single blank line.
    references = references.replace(/\n{2,}/g, "\n\n");

    references = references.trim();
  }

  // Step 4: Reassemble the document.
  if (references) {
    return `${body.trim()}\n\n${references}`;
  } else {
    return body.trim();
  }
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
