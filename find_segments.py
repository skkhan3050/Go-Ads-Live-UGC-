from PIL import Image

img = Image.open(r"C:\Users\TARIF SK\.gemini\antigravity-ide\brain\1eb93d42-dcda-4e9c-94c5-d212ca3f9adb\.user_uploaded\media_1792651800808.png").convert("RGB")
w, h = img.size
bg = img.getpixel((500, 10))

def is_bg(rgb):
    return abs(rgb[0] - bg[0]) < 10 and abs(rgb[1] - bg[1]) < 10 and abs(rgb[2] - bg[2]) < 10

def find_segments(y):
    segments = []
    in_seg = False
    start = 0
    for x in range(w):
        p = img.getpixel((x, y))
        if not is_bg(p):
            if not in_seg:
                in_seg = True
                start = x
        else:
            if in_seg:
                in_seg = False
                if x - start > 20: # significant card
                    segments.append((start, x))
    if in_seg and w - start > 20:
        segments.append((start, w))
    return segments

print("Row 1 (y=90) segments:", find_segments(90))
print("Row 2 (y=150) segments:", find_segments(150))
