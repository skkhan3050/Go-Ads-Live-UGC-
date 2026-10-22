from PIL import Image

img = Image.open(r"C:\Users\TARIF SK\.gemini\antigravity-ide\brain\1eb93d42-dcda-4e9c-94c5-d212ca3f9adb\.user_uploaded\media_1792651800808.png").convert("RGB")
w, h = img.size

# Background color at (500, 10):
bg = img.getpixel((500, 10))
print("Background color at (500, 10):", bg)

# Check vertical lines across cards
# Let's inspect along a column in female creator 1 (around x=100)
for y in range(0, h, 5):
    p = img.getpixel((100, y))
    print(f"y={y}: rgb={p}")
