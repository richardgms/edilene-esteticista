import sys
import subprocess
import os

try:
    from PIL import Image
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

base_dir = r"d:\Workspace\edilene\public\images\certificados"
peim_path = os.path.join(base_dir, "img20260221_12072503.png")
unp_path = os.path.join(base_dir, "unp.png")

print("Rotating PEIM left...")
if os.path.exists(peim_path):
    with Image.open(peim_path) as img:
        # ROTATE_90 rotates 90 degrees counter-clockwise
        rotated = img.transpose(Image.ROTATE_90)
        rotated.save(peim_path)
        print("Success for PEIM")
else:
    print("File not found:", peim_path)

print("Rotating UNP right...")
if os.path.exists(unp_path):
    with Image.open(unp_path) as img:
        # ROTATE_270 rotates 270 degrees counter-clockwise (90 degrees clockwise)
        rotated = img.transpose(Image.ROTATE_270)
        rotated.save(unp_path)
        print("Success for UNP")
else:
    print("File not found:", unp_path)

print("Done.")
