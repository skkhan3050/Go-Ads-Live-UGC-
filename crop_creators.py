import os
from PIL import Image

img = Image.open(r"C:\Users\TARIF SK\.gemini\antigravity-ide\brain\1eb93d42-dcda-4e9c-94c5-d212ca3f9adb\.user_uploaded\media_1792651800808.png").convert("RGBA")
out_dir = r"c:\Users\TARIF SK\Documents\antigravity\epic-goodall\www.yuvichaarfunnels.com\creators"
os.makedirs(out_dir, exist_ok=True)

# Female Row 1 (8 cards): y=67 to y=118
# Female Row 2 (3 cards): y=125 to y=176
female_r1_x = [
    (80, 131),
    (139, 189),
    (197, 248),
    (255, 306),
    (314, 365),
    (372, 423),
    (431, 482),
    (489, 540)
]
female_r2_x = [
    (80, 131),
    (139, 189),
    (197, 248)
]

male_r1_x = [
    (626, 679),
    (687, 739),
    (747, 800),
    (807, 860),
    (868, 921)
]

# Crop female
for i, (x1, x2) in enumerate(female_r1_x):
    box = (x1, 67, x2, 118)
    cropped = img.crop(box)
    cropped.save(os.path.join(out_dir, f"female_{i+1}.png"))
    print(f"Saved female_{i+1}.png: {cropped.size}")

for i, (x1, x2) in enumerate(female_r2_x):
    box = (x1, 125, x2, 176)
    cropped = img.crop(box)
    cropped.save(os.path.join(out_dir, f"female_{i+9}.png"))
    print(f"Saved female_{i+9}.png: {cropped.size}")

# Crop male
for i, (x1, x2) in enumerate(male_r1_x):
    box = (x1, 67, x2, 118)
    cropped = img.crop(box)
    cropped.save(os.path.join(out_dir, f"male_{i+1}.png"))
    print(f"Saved male_{i+1}.png: {cropped.size}")
