#!/usr/bin/env python3
import json
from pathlib import Path
import html
import sys
import re

# === CONFIG ===
INPUT_JSON = "zbmethod.json"   # Change to your JSON file
OUTPUT_BASE_FILENAME = "zbmethod"
TITLE = "Email Archive"
MESSAGES_PER_FILE = 2000
SPLIT_THRESHOLD = 3000   # Split into parts when messages > this number

# === LOAD JSON ===
script_dir = Path(sys.argv[0]).resolve().parent
input_file_path = script_dir / INPUT_JSON

print(f"Loading data from: {input_file_path}")
try:
    with open(input_file_path, "r", encoding="utf-8") as f:
        messages = json.load(f)
except FileNotFoundError:
    print(f"❌ Error: JSON file not found at {input_file_path}")
    sys.exit(1)
except json.JSONDecodeError as e:
    print(f"❌ Error decoding JSON: {e}")
    sys.exit(1)

# === GROUP MESSAGES BY YEAR ===
yearly_messages = {}
last_known_year = None
for i, msg in enumerate(messages):
    date_str = msg.get("date", "")
    match = re.search(r'\b(19\d{2}|20\d{2})\b', date_str)
    if match:
        year = match.group(0)
        last_known_year = year
    elif last_known_year:
        year = last_known_year
    else:
        year = "Unknown"
    yearly_messages.setdefault(year, []).append(msg)

# === STYLES ===
CSS = """
body {
    font-family: monospace;
    font-size: large;
    padding: 20px;
}
h1 {
    color: #333;
    border-bottom: 2px solid #ccc;
    padding-bottom: 10px;
}
.email-item {
    margin-bottom: 20px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
}
.email-item strong {
    color: #0056b3;
    font-size: 1.1em;
}
.email-item em {
    color: #666;
    font-style: normal;
}
.email-content {
    white-space: pre-wrap;
    font-family: monospace;
    overflow-x: auto;
    max-width: 100%;
    margin-top: 10px;
    padding: 10px;
    background-color: #fff;
    border-left: 3px solid #ccc;
    user-select: text;
}
.nav-links {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
}
.nav-links a {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
}
.nav-links a:hover { color: #0056b3; }
#toTopBtn {
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 40px;
    right: 30px;
    z-index: 100;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    line-height: 60px;
    background-color: #000;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: none;
    transition: opacity 0.3s ease;
}
#toTopBtn:hover { background-color: #444; }
"""

# === HELPER: SANITIZE CONTENT ===
def sanitize_and_preserve_newlines(content_raw: str) -> str:
    if not content_raw:
        return ""
    content = content_raw.replace("\r\n", "\n").replace("\r", "\n")
    has_tags = bool(re.search(r"<\s*\w", content))
    if has_tags:
        safe = html.escape(content)
        safe = re.sub(r"&lt;a\s+", "<a ", safe, flags=re.IGNORECASE)
        safe = safe.replace("&lt;/a&gt;", "</a>")
        safe = safe.replace("&lt;br&gt;", "<br>")
        safe = safe.replace("&gt;", ">")
        if safe.count("<a ") > safe.count("</a>"):
            safe += "</a>"
        return safe
    else:
        safe = html.escape(content)
        return safe.replace("\n", "<br>\n")

# === GENERATE SINGLE HTML PAGE ===
def generate_html_file(filename, title, messages_list, css, nav_prev=None, nav_next=None):
    parts = [
        "<!DOCTYPE html>",
        "<html><head><meta charset='utf-8'>",
        f"<title>{html.escape(title)}</title>",
        f"<style>{css}</style>",
        "</head><body>",
        f"<h1>{html.escape(title)}</h1>",
        f"<p><a href='../ArchiveIndex.html'>&larr; Back to Archive Index</a></p>"
    ]

    # navigation links at top
    if nav_prev or nav_next:
        parts.append('<div class="nav-links">')
        parts.append(f'<a href="{nav_prev}">&larr; Previous</a>' if nav_prev else "<span></span>")
        parts.append(f'<a href="{nav_next}">Next &rarr;</a>' if nav_next else "<span></span>")
        parts.append("</div>")

    for i, msg in enumerate(messages_list, start=1):
        subject = html.escape(msg.get("subject", "No Subject"))
        sender = html.escape(msg.get("from", "Unknown Sender"))
        to_field = html.escape(msg.get("to", ""))
        date = html.escape(msg.get("date", ""))
        content_raw = msg.get("content", "") or ""
        safe_content = sanitize_and_preserve_newlines(content_raw)

        parts.append(f"""
        <div class="email-item" id="msg-{i}">
          <a class="header-link" href="#msg-{i}"><strong>{i}. {subject}</strong></a><br>
          <em>From:</em> {sender}<br>
          <em>To:</em> {to_field}<br>
          <em>Date:</em> {date}<br><br>
          <div class="email-content">{safe_content}</div>
        </div>
        """)

    # navigation links at bottom
    if nav_prev or nav_next:
        parts.append('<div class="nav-links">')
        parts.append(f'<a href="{nav_prev}">&larr; Previous</a>' if nav_prev else "<span></span>")
        parts.append(f'<a href="{nav_next}">Next &rarr;</a>' if nav_next else "<span></span>")
        parts.append("</div>")

    parts.append("""
    <button id="toTopBtn" onclick="window.scrollTo({top: 0, behavior: 'smooth'});">↑</button>
    <script>
    window.onscroll = function() {
        let btn = document.getElementById("toTopBtn");
        btn.style.display = (document.documentElement.scrollTop > 200) ? "block" : "none";
    };
    </script>
    </body></html>
    """)

    Path(filename).write_text("\n".join(parts), encoding="utf-8")
    return len(messages_list)

# === GENERATE INDEX ===
def generate_index(yearly_data):
    index_file = "index.html"
    parts = [
        "<!DOCTYPE html>",
        "<html><head><meta charset='utf-8'>",
        f"<title>{html.escape(TITLE)} - Index</title>",
        """<style>
        body { font-family: sans-serif; padding: 20px; background-color: #f4f4f4;}
        h1 { color: #0056b3; border-bottom: 3px solid #0056b3; padding-bottom: 10px; }
        ul { list-style: none; padding: 0; }
        li { margin: 15px 0; background-color: #fff; padding: 15px; border-radius: 8px;
             box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        a { text-decoration: none; color: #007bff; font-weight: bold; font-size: 1.2em; transition: color 0.2s; }
        a:hover { color: #0056b3; }
        span { color: #888; font-size: 0.9em; margin-left: 20px; }
        </style></head><body>""",
        f"<h1>{html.escape(TITLE)} - Archive Index</h1>",
        "<ul>"
    ]
    for year in sorted(yearly_data.keys()):
        for entry in yearly_data[year]:
            ptxt = f" (Part {entry['part']} of {entry['total_parts']})" if entry['total_parts'] > 1 else ""
            parts.append(f"<li><a href='{entry['filename']}'>Archive for {year}{ptxt}</a> <span>({entry['count']} messages)</span></li>")
    parts.append("</ul></body></html>")
    Path(index_file).write_text("\n".join(parts), encoding="utf-8")
    print(f"✅ Created index: {index_file}")

# === MAIN LOOP ===
yearly_output_info = {}
for year, msgs in yearly_messages.items():
    total_msgs = len(msgs)
    chunks = [msgs[i:i + MESSAGES_PER_FILE] for i in range(0, total_msgs, MESSAGES_PER_FILE)] if total_msgs > SPLIT_THRESHOLD else [msgs]
    total_parts = len(chunks)
    yearly_output_info.setdefault(year, [])

    for part_index, chunk in enumerate(chunks, start=1):
        base = f"{OUTPUT_BASE_FILENAME}_{year}"
        filename = f"{base}_Part{part_index}.html" if total_parts > 1 else f"{base}.html"
        title = f"{TITLE} - Archive {year} ({total_msgs} messages){f' (Part {part_index} of {total_parts})' if total_parts > 1 else ''}"
        nav_prev = f"{base}_Part{part_index-1}.html" if part_index > 1 else None
        nav_next = f"{base}_Part{part_index+1}.html" if part_index < total_parts else None

        count = generate_html_file(filename, title, chunk, CSS, nav_prev, nav_next)
        yearly_output_info[year].append({'filename': filename, 'count': count, 'part': part_index, 'total_parts': total_parts})
        print(f"Generated {filename} with {count} messages.")

generate_index(yearly_output_info)
print("✅ Done!")
