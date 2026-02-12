import re
import os
from pathlib import Path

# --- CONFIGURATION ---
# The file pattern to look for (e.g., speedsolvingrubikscube_2000.html)
FILE_PATTERN = "*.html"
# Files to ignore (e.g., the main index file)
EXCLUDE_FILES = ["index.html"] 

# --- FUNCTIONAL FRAGMENTS ---

# CSS block to ensure headers are styled correctly for clicking
HEADER_CSS_FRAGMENT = """
/* New style for the clickable header link (Injected by html_updater.py) */
.header-link {
    color: inherit; /* Prevent default blue link color */
    text-decoration: none; /* Remove underline */
    cursor: pointer;
}
.header-link strong {
    color: #0056b3;
    font-size: 1.1em;
    transition: color 0.2s;
}
.header-link:hover strong {
    color: #cc4400; /* Subtle hover effect */
}
"""

# JavaScript function for copying the link
COPY_LINK_JS_FRAGMENT = """
<script>
// Function to copy the link of the clicked element's anchor
function copyLink(event) {
    event.preventDefault(); // Stop the browser from immediately scrolling

    // Get the full URL with the fragment (e.g., file:///.../file.html#msg-1)
    const url = event.currentTarget.href;

    // Use a temporary input field to copy the text to the clipboard
    const tempInput = document.createElement('input');
    tempInput.value = url;
    document.body.appendChild(tempInput);
    tempInput.select();

    try {
        // Use document.execCommand('copy') for better compatibility in iframe/local file environments
        const successful = document.execCommand('copy');
        if (successful) {
            // Provide visual feedback
            const feedback = document.createElement('div');
            feedback.textContent = 'Link copied!';
            feedback.style.cssText = 'position:fixed; bottom:100px; right:50px; background:#00AA00; color:white; padding:10px; border-radius:5px; z-index:1000; opacity:0.9; font-family: sans-serif;';
            document.body.appendChild(feedback);
            setTimeout(() => { feedback.remove(); }, 1500);
        }
    } catch (err) {
        console.error('Copy failed:', err);
    } finally {
        document.body.removeChild(tempInput);
    }
    
    // Manually scroll to the anchor after copying is done
    // This is important because event.preventDefault() stopped the initial jump.
    const targetId = url.substring(url.lastIndexOf('#'));
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

window.onscroll = function() {
    let btn = document.getElementById("toTopBtn");
    btn.style.display = (document.documentElement.scrollTop > 200) ? "block" : "none";
};
</script>
"""

# --- MAIN LOGIC ---

def update_html_files():
    """Finds all HTML archive files and updates their content for clickable headers."""
    current_dir = Path(".")
    
    print("Starting HTML file update utility...")
    print("-" * 40)
    
    updated_files_count = 0

    # Find all files matching the pattern
    for filepath in current_dir.glob(FILE_PATTERN):
        filename = filepath.name
        if filename in EXCLUDE_FILES:
            continue
            
        print(f"Processing: {filename}")
        
        try:
            # Read the entire file content
            content = filepath.read_text(encoding="utf-8")
            original_content = content
            
            # --- 1. Header Replacement ---
            
            # Regex to find the STRONG tag and wrap it in the functional A tag.
            # It's designed to be highly multi-line aware ([\s\S]*?) to handle Prettier formatting.
            # Group 1: Leading indentation/spaces
            # Group 2: Content inside the <strong tag (if Prettier added a newline)
            # Group 3: The message number (e.g., 1, 14) -> Used for #msg-ID
            # Group 4: The entire subject content
            HEADER_REGEX = r'([\s\t]*)<strong([\s\S]*?)>(\d+)\.([\s\S]*?)<\/strong><br>'
            
            # Replacement string: wraps the original content in an <a> tag
            # \1 preserves indentation
            # \3 is the message number (ID)
            # \2 is internal <strong tag formatting
            # \4 is the subject content
            REPLACEMENT_STRING = r'\1<a href="#msg-\3" class="header-link" onclick="copyLink(event)"><strong\2>\3.\4</strong></a><br>'
            
            # Perform the replacement using re.DOTALL flag for multi-line support
            new_content = re.sub(HEADER_REGEX, REPLACEMENT_STRING, content, flags=re.DOTALL)
            
            if new_content == content:
                print(f"  > Warning: Found 0 headers to replace in this file.")
            else:
                print(f"  > Successfully updated headers.")
                
            content = new_content
            
            # --- 2. CSS Injection ---
            # Inject CSS only if it's not already present
            if ".header-link {" not in content:
                # Find the closing </style> tag and insert the new CSS before it
                content = content.replace("</style>", HEADER_CSS_FRAGMENT + "\n</style>", 1)
                print("  > Injected required CSS styles.")
            
            # --- 3. JavaScript Injection ---
            
            # Check if the copyLink function is already present
            if "function copyLink(event)" not in content:
                # Find the existing scroll-to-top script, which usually sits before </body>
                # This regex captures everything from the opening <button tag to </body>, 
                # allowing us to replace the old script block entirely.
                JS_REPLACEMENT_REGEX = r'(<button id="toTopBtn"[\s\S]*?)<\/body>'
                
                # We assume the old script is using the basic structure from previous steps
                # If the button/script structure is missing, we'll try to insert before </body>
                if re.search(JS_REPLACEMENT_REGEX, content, flags=re.DOTALL):
                    # Replace the entire old script block with the new one
                    content = re.sub(JS_REPLACEMENT_REGEX, COPY_LINK_JS_FRAGMENT + "</body>", content, flags=re.DOTALL)
                    print("  > Replaced old JS script block with new functional script.")
                else:
                    # Fallback: just inject the new script before </body>
                    content = content.replace("</body>", COPY_LINK_JS_FRAGMENT + "\n</body>")
                    print("  > Injected new JS script before closing body tag.")

            # --- 4. Write Back to File ---
            if content != original_content:
                filepath.write_text(content, encoding="utf-8")
                updated_files_count += 1
                print(f"  > File SAVED successfully.")
            else:
                print("  > File was already up-to-date (no changes needed).")

        except Exception as e:
            print(f"  > FATAL ERROR processing {filename}: {e}")
            
    print("-" * 40)
    print(f"✅ Update complete! Modified {updated_files_count} HTML files.")
    print("Please check your archives in the browser now.")

if __name__ == "__main__":
    update_html_files()
