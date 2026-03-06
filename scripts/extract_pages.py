"""Extract each page of img20260221_12072503.pdf as a PNG image at 150 DPI."""
import fitz  # PyMuPDF
import os

PDF_PATH = os.path.join(os.path.dirname(__file__), "..", "public", "certificados", "img20260221_12072503.pdf")
OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "images", "certificados")

os.makedirs(OUT_DIR, exist_ok=True)

doc = fitz.open(PDF_PATH)
print(f"PDF has {len(doc)} pages.")

DPI = 150
SCALE = DPI / 72  # fitz default is 72 DPI

for i, page in enumerate(doc, start=1):
    mat = fitz.Matrix(SCALE, SCALE)
    pix = page.get_pixmap(matrix=mat)
    out_path = os.path.join(OUT_DIR, f"img20260221_page_{i:02d}.png")
    pix.save(out_path)
    print(f"Saved page {i} -> {out_path}")

doc.close()
print("Done.")
