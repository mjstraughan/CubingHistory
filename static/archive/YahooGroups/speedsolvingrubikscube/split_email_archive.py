import os
from bs4 import BeautifulSoup
from pathlib import Path

# === SETTINGS ===
INPUT_FILE = "speedsolvingrubikscube_2007.html"    # Your original large HTML file
OUTPUT_BASENAME = "speedsolvingrubikscube_2007_Part" # Base name for output files
MESSAGES_PER_FILE = 2000          # Number of <div class="email-item"> per file

# --- MAIN EXECUTION ---
def split_archive():
    # 1. Determine the path of the Python script itself (most reliable starting point)
    # This ensures the script looks for files relative to its own location.
    script_dir = Path(__file__).resolve().parent 
    
    # 2. Construct the input file path relative to the script's location
    input_path = script_dir / INPUT_FILE
    
    # Check if the file exists at the determined path
    if not input_path.exists():
        print("-" * 50)
        print(f"FATAL ERROR: Input file not found.")
        print(f"Looked for file at: {input_path.absolute()}")
        print(f"Please ensure '{INPUT_FILE}' is located in the same directory as this script, or update the INPUT_FILE variable with the correct path.")
        print("-" * 50)
        return

    print(f"Loading archive from: {input_path}")

    try:
        # === LOAD THE FILE ===
        # Use the determined input_path for opening the file
        with open(input_path, "r", encoding="utf-8") as f:
            soup = BeautifulSoup(f, "html.parser")
    except Exception as e:
        print(f"Error reading or parsing file: {e}")
        return

    # Extract key structural parts
    head = soup.head
    body = soup.body

    # Find all the email message divs
    emails = body.find_all("div", class_="email-item")
    if not emails:
        print("Warning: Found no elements with class 'email-item'. Cannot split.")
        return

    # Split the messages into chunks
    chunks = [emails[i:i + MESSAGES_PER_FILE] for i in range(0, len(emails), MESSAGES_PER_FILE)]
    
    # --- Structural Elements Extraction ---
    
    # Get header elements (everything before the first .email-item)
    header_elements = []
    found_first_email = False
    for el in body.contents:
        if isinstance(el, str) and el.strip() == "": # Skip empty strings/whitespace
            continue
        
        # Check if the element itself is the first email-item
        if isinstance(el, str) or (el.name == 'div' and el.get("class") == ["email-item"]):
            # If it's the first email-item or plain text *after* the header, stop collecting
            if el.name == 'div' and el.get("class") == ["email-item"]:
                 found_first_email = True
            if found_first_email:
                break

        header_elements.append(el)

    # Get footer elements (everything after the last .email-item)
    footer_elements = []
    # Loop backwards through body contents
    for el in reversed(body.contents):
        if isinstance(el, str) and el.strip() == "": # Skip empty strings/whitespace
            continue
            
        # Check if this is the last email-item
        if el.name == 'div' and el.get("class") == ["email-item"]:
            break
            
        # Add element to the front of the footer list
        footer_elements.insert(0, el)


    # === CREATE OUTPUT FILES ===
    for idx, chunk in enumerate(chunks, start=1):
        new_soup = BeautifulSoup("<!DOCTYPE html><html></html>", "html.parser")

        # Rebuild structure
        html = new_soup.html
        html.append(head)
        new_body = new_soup.new_tag("body")

        # Add header
        for el in header_elements:
            new_body.append(el)

        # Add this chunk of messages
        for message in chunk:
            new_body.append(message)

        # Add footer
        for el in footer_elements:
            new_body.append(el)

        html.append(new_body)

        # Update title tag and h1 to reflect the part number
        title_tag = new_soup.find("title")
        h1_tag = new_body.find("h1")

        if title_tag and h1_tag:
            original_title = title_tag.text
            title_tag.string = f"{original_title} (Part {idx} of {len(chunks)})"
            h1_tag.string = f"{h1_tag.text} (Part {idx} of {len(chunks)})"
        
        # Write output files to the script's directory as well, for consistency
        output_filename = script_dir / f"{OUTPUT_BASENAME}{idx}.html"
        with open(output_filename, "w", encoding="utf-8") as f:
            f.write(str(new_soup.prettify())) # Use prettify for cleaner output

        print(f"Created: {output_filename.name} ({len(chunk)} messages)")

    print(f"\nSuccessfully split {len(emails)} messages into {len(chunks)} files.")

if __name__ == "__main__":
    split_archive()
