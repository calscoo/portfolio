#!/usr/bin/env python3
"""Convert resume.md and portfolio.md to styled PDFs using weasyprint."""
import os
import re

import markdown
from weasyprint import HTML

# (content file, output pdf, prepend the front-matter title as a heading)
PAGES = [
    ("content/resume.md", "static/resume.pdf", False),
    ("content/portfolio.md", "static/portfolio.pdf", True),
]

CSS = """
@page {
    size: letter;
    margin: 0.5in 0.7in;
}
body {
    font-family: 'Liberation Sans', 'Helvetica Neue', Arial, sans-serif;
    font-size: 9.5pt;
    line-height: 1.3;
    color: #222;
}
h1 {
    font-size: 17pt;
    color: #1a1a2e;
    margin-top: 0;
    margin-bottom: 8px;
}
h2 {
    font-size: 14pt;
    color: #1a1a2e;
    border-bottom: 1.5px solid #3366cc;
    padding-bottom: 3px;
    margin-top: 14px;
    margin-bottom: 8px;
}
h3 {
    font-size: 11pt;
    color: #333;
    margin-bottom: 2px;
    margin-top: 10px;
}
h4 {
    font-size: 10pt;
    color: #555;
    margin-top: 6px;
    margin-bottom: 4px;
}
a {
    color: #3366cc;
    text-decoration: none;
}
ul {
    margin-top: 3px;
    margin-bottom: 3px;
    padding-left: 18px;
}
li {
    margin-bottom: 1px;
}
p {
    margin-top: 4px;
    margin-bottom: 4px;
}
strong {
    color: #111;
}
"""


def generate(md_path, pdf_path, include_title):
    with open(md_path, "r") as f:
        raw = f.read()

    front_matter = re.match(r"^---\n(.*?)\n---\n", raw, flags=re.DOTALL)
    content = raw[front_matter.end():] if front_matter else raw

    if include_title and front_matter:
        title = re.search(r'^title:\s*"?([^"\n]+)"?', front_matter.group(1), flags=re.MULTILINE)
        if title:
            content = f"# {title.group(1)}\n\n{content}"

    html_body = markdown.markdown(content, extensions=["extra"])

    html_doc = f"""<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>{CSS}</style>
</head>
<body>
{html_body}
</body>
</html>"""

    HTML(string=html_doc).write_pdf(pdf_path)
    print(f"Successfully generated {pdf_path}")


os.makedirs("static", exist_ok=True)
for md_path, pdf_path, include_title in PAGES:
    generate(md_path, pdf_path, include_title)
