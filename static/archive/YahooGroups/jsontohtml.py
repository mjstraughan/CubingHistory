import json
from pathlib import Path
import html
import sys
import re # Used for robust year extraction
from datetime import datetime

# === CONFIG ===
INPUT_JSON = "deutscherspeedcubingclub.json"  # Change to your JSON filename
OUTPUT_BASE_FILENAME = "deutscherspeedcubingclub"
TITLE = "Email Archive"

# === PATH & LOAD JSON ===
# Get the directory where the current Python script is located
script_dir = Path(sys.argv[0]).resolve().parent

# Combine the script's directory with the JSON filename to get the absolute path
input_file_path = script_dir / INPUT_JSON

print(f"Loading data from: {input_file_path}")

try:
    with open(input_file_path, "r", encoding="utf-8") as f:
        messages = json.load(f)
except FileNotFoundError:
    print(f"Error: JSON file not found at {input_file_path}")
    sys.exit(1)
except json.JSONDecodeError as e:
    print(f"Error decoding JSON. Please check file structure and ensure no hidden characters (e.g., U+00A0). Error: {e}")
    sys.exit(1)

# === NEW: Group messages by year ===
yearly_messages = {}
last_known_year = None # Store the year of the previous message that had a valid date

for i, msg in enumerate(messages):
    date_str = msg.get("date", "Unknown Date")
    current_year = "Unknown"

    # 1. Attempt to extract the year
    # Heuristic: Find 4 consecutive digits that look like a year (19xx or 20xx)
    match = re.search(r'\b(19\d{2}|20\d{2})\b', date_str)

    if match:
         # Success: Use the found year and update last_known_year
         current_year = match.group(0)
         last_known_year = current_year
    else:
        # Failure: Try to inherit the year from the previous message
        if last_known_year is not None:
            current_year = last_known_year
        else:
            # Still Unknown (e.g., first message, or long string of undated messages)
            # Print warning only if it's a date string but couldn't be parsed
            if date_str != "Unknown Date":
                print(f"Warning: Message {i+1} date '{date_str}' could not be parsed. Grouping as '{current_year}'.")
            
            current_year = "Unknown" # Keep default 'Unknown' if no previous year exists
            
    # Group the message using the determined year
    if current_year not in yearly_messages:
        yearly_messages[current_year] = []
    yearly_messages[current_year].append(msg)

# === CSS STYLES (copied from your sample) ===
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
    white-space: pre-wrap; /* Preserve ASCII spacing and allow wrapping */
    font-family: monospace;
    overflow-x: auto;
    max-width: 100%;
    margin-top: 10px;
    padding: 10px;
    background-color: #fff;
    border-left: 3px solid #ccc;
}

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

# === FUNCTION TO BUILD SINGLE YEAR HTML FILE ===
def generate_html_file(filename, title, messages_list, css):
    parts = [
        "<!DOCTYPE html>",
        "<html><head><meta charset='utf-8'>",
        f"<title>{html.escape(title)}</title>",
        f"<style>{css}</style>",
        "</head><body>",
        f"<h1>{html.escape(title)}</h1>",
        f"<p><a href='../ArchiveIndex.html'>&larr; Back to Archive Index</a></p>"
    ]

    for i, msg in enumerate(messages_list, start=1):
        subject = html.escape(msg.get("subject", "No Subject"))
        sender = html.escape(msg.get("from", "Unknown Sender"))
        to = html.escape(msg.get("to", ""))
        date = html.escape(msg.get("date", ""))
        content = msg.get("content", "").strip()

        # 1. Escape all content initially
        safe_content = html.escape(content)

        # 2. Un-escape common HTML tags
        safe_content = safe_content.replace("&lt;br&gt;", "<br>")
        safe_content = safe_content.replace("&lt;a ", "<a ")
        safe_content = safe_content.replace("&lt;/a&gt;", "</a>")
        safe_content = safe_content.replace("&gt;", ">")

        # 3. *** HEURISTIC FIX FOR BLEEDING LINKS ***
        # Close any open anchor tag to prevent it from linking the rest of the file
        if "<a " in safe_content and safe_content.count("<a ") > safe_content.count("</a>"):
            safe_content += "</a>"
        # *** END HEURISTIC FIX ***

        parts.append(f"""
        <div class="email-item" id="msg-{i}">
          <strong>{i}. {subject}</strong><br>
          <em>From:</em> {sender}<br>
          <em>To:</em> {to}<br>
          <em>Date:</em> {date}<br><br>
          <div class="email-content">{safe_content}</div>
        </div>
        """)

    # Add a simple “scroll to top” button
    parts.append("""
    <button id="toTopBtn" onclick="window.scrollTo({top: 0, behavior: 'smooth'});">↑</button>
    <script>
    window.onscroll = function() {
        let btn = document.getElementById("toTopBtn");
        btn.style.display = (document.documentElement.scrollTop > 200) ? "block" : "none";
    };
    </script>
    """)

    parts.append("</body></html>")

    Path(filename).write_text("\n".join(parts), encoding="utf-8")
    return len(messages_list)

# === FUNCTION TO GENERATE INDEX FILE ===
def generate_index(yearly_messages_count):
    index_file = "index.html"
    index_parts = [
        "<!DOCTYPE html>",
        "<html><head><meta charset='utf-8'>",
        f"<title>{html.escape(TITLE)} - Index</title>",
        """<style>
            body { font-family: sans-serif; padding: 20px; background-color: #f4f4f4;}
            h1 { color: #0056b3; border-bottom: 3px solid #0056b3; padding-bottom: 10px; }
            ul { list-style: none; padding: 0; }
            li { margin: 15px 0; background-color: #fff; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            a { text-decoration: none; color: #007bff; font-weight: bold; font-size: 1.2em; transition: color 0.2s; }
            a:hover { color: #0056b3; }
            span { color: #888; font-size: 0.9em; margin-left: 20px; }
        </style>""",
        "</head><body>",
        f"<h1>{html.escape(TITLE)} - Archive Index</h1>",
        "<p>Select a year below to view the messages from that period.</p>",
        "<ul>"
    ]

    # Sort years from oldest to newest for chronological display
    sorted_years = sorted(yearly_messages_count.keys())

    for year in sorted_years:
        count = yearly_messages_count[year]['count']
        filename = yearly_messages_count[year]['filename']

        index_parts.append(f"""
        <li>
            <a href="{filename}">Archive for {year}</a>
            <span>({count} messages)</span>
        </li>
        """)

    index_parts.append("</ul></body></html>")
    Path(index_file).write_text("\n".join(index_parts), encoding="utf-8")
    print(f"✅ Created index file: '{index_file}'")

# === MAIN EXECUTION LOOP FOR FILE GENERATION ===
yearly_messages_count = {}
total_messages_processed = 0

print("-" * 40)
print("Starting file generation...")
print("-" * 40)

# Generate files for each year
for year, msgs in yearly_messages.items():
    output_filename = f"{OUTPUT_BASE_FILENAME}_{year}.html"
    page_title = f"{TITLE} - Archive {year} ({len(msgs)} messages)"

    # Generate the yearly file
    count = generate_html_file(output_filename, page_title, msgs, CSS)

    yearly_messages_count[year] = {
        'count': count,
        'filename': output_filename
    }
    total_messages_processed += count
    print(f"   Generated: '{output_filename}' with {count} messages.")

# Generate the index file
generate_index(yearly_messages_count)

print("-" * 40)
print(f"Successfully split archive into {len(yearly_messages)} files.")
print(f"Total archive messages processed: {total_messages_processed}")
