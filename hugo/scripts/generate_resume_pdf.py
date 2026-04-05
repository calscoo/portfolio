#!/usr/bin/env python3
"""Convert resume.md to a styled PDF using weasyprint."""
import os
import re

import markdown
from weasyprint import HTML

with open("content/resume.md", "r") as f:
    raw = f.read()

content = re.sub(r"^---\n.*?\n---\n", "", raw, flags=re.DOTALL)

html_body = markdown.markdown(content, extensions=["extra"])

CSS = """
@page {
    size: letter;
    margin: 0.5in 0.7in;
}
body {
    font-family: 'Liberation Sans', 'Helvetica Neue', Arial, sans-serif;
    font-size: 10pt;
    line-height: 1.35;
    color: #222;
}
h2 {
    font-size: 14pt;
    color: #1a1a2e;
    border-bottom: 1.5px solid #3366cc;
    padding-bottom: 3px;
    margin-top: 18px;
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
    margin-top: 4px;
    margin-bottom: 4px;
    padding-left: 18px;
}
li {
    margin-bottom: 2px;
}
p {
    margin-top: 4px;
    margin-bottom: 4px;
}
strong {
    color: #111;
}
"""

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

os.makedirs("static", exist_ok=True)
HTML(string=html_doc).write_pdf("static/resume.pdf")
print("Successfully generated static/resume.pdf")
