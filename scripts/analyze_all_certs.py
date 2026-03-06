import os
import fitz
import json

pdf_dir = r"d:\Workspace\edilene\public\certificados"
results = {}

for file in os.listdir(pdf_dir):
    if file.endswith(".pdf"):
        path = os.path.join(pdf_dir, file)
        doc = fitz.open(path)
        file_results = []
        for i in range(len(doc)):
            page = doc[i]
            text = page.get_text()
            lines = [line.strip() for line in text.split('\n') if line.strip()]
            file_results.append({
                "page": i + 1,
                "text": lines[:50]  # Get enough lines to identify the certificate
            })
        results[file] = file_results
        doc.close()

with open("all_certs_analysis.json", "w", encoding="utf-8") as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print(f"Analyzed {len(results)} files.")
