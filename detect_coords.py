from PIL import Image
import numpy as np

img = Image.open(r"C:\Users\TARIF SK\.gemini\antigravity-ide\brain\1eb93d42-dcda-4e9c-94c5-d212ca3f9adb\.user_uploaded\media_1792651800808.png").convert("RGB")
arr = np.array(img)
h, w, _ = arr.shape

# Let's inspect rows to find the vertical positions of the creator cards
# In the image, top has text "Creators (female)" and "Creators (Male)"
# Row 1 of cards starts around y = 60 to 120
# Row 2 of cards starts around y = 120 to 180

# Let's detect bounding boxes using simple connected components or thresholding on variance
# Since avatars have rich colors and background is uniform:
bg_color = arr[10, 10]
print("Top-left pixel color (bg):", bg_color)

# Let's find coordinates manually or semi-automatically
# Let's print out the profile along Y and X
y_diff = np.mean(np.abs(arr.astype(int) - bg_color.astype(int)), axis=(1, 2))
for y in range(0, h, 10):
    print(f"y={y}: diff={y_diff[y]:.1f}")
