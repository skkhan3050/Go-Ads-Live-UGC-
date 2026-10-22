import os
from PIL import Image

img_path = r"C:\Users\TARIF SK\.gemini\antigravity-ide\brain\1eb93d42-dcda-4e9c-94c5-d212ca3f9adb\.user_uploaded\media_1792651800808.png"
img = Image.open(img_path)
print("Image size:", img.size)

out_dir = r"c:\Users\TARIF SK\Documents\antigravity\epic-goodall\www.yuvichaarfunnels.com\creators"
os.makedirs(out_dir, exist_ok=True)
