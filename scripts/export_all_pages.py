import os
import fitz

pdf_dir = r"d:\Workspace\edilene\public\certificados"
out_dir = r"d:\Workspace\edilene\public\images\certificados_inspection"
os.makedirs(out_dir, exist_ok=True)

for file in os.listdir(pdf_dir):
    if file.endswith(".pdf"):
        path = os.path.join(pdf_dir, file)
        doc = fitz.open(path)
        base_name = file.replace(".pdf", "")
        for i in range(len(doc)):
            page = doc[i]
            pix = page.get_pixmap(dpi=150)
            img_name = f"{base_name}_page_{i+1}.png"
            pix.save(os.path.join(out_dir, img_name))
        doc.close()

print(f"Extraction complete. Check {out_dir}")
