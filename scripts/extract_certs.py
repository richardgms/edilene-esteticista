import os
import fitz
import json

pdf_dir = r"d:\Workspace\edilene\public\certificados"
out_dir = r"d:\Workspace\edilene\public\images\certificados"
os.makedirs(out_dir, exist_ok=True)

results = {}

for file in os.listdir(pdf_dir):
    if file.endswith(".pdf"):
        path = os.path.join(pdf_dir, file)
        doc = fitz.open(path)
        page = doc[0]
        
        pix = page.get_pixmap(dpi=150)
        img_name = file.replace(".pdf", ".png")
        pix.save(os.path.join(out_dir, img_name))
        
        text = page.get_text()
        lines = [line.strip() for line in text.split('\n') if line.strip()]
        results[file] = lines[:20]

with open("cert_results.json", "w", encoding="utf-8") as f:
    json.dump(results, f, ensure_ascii=False, indent=2)
