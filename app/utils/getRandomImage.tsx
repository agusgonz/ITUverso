const previewImages = [
  "https://picsum.photos/seed/a/400/250",
  "https://picsum.photos/seed/b/400/250",
  "https://picsum.photos/seed/c/400/250",
  "https://picsum.photos/seed/d/400/250",
  "https://picsum.photos/seed/e/400/250",
  "https://picsum.photos/seed/f/400/250",
  "https://picsum.photos/seed/g/400/250",
  "https://picsum.photos/seed/h/400/250",
  "https://picsum.photos/seed/i/400/250",
  "https://picsum.photos/seed/j/400/250",
];

export function getRandomImage() {
  return previewImages[Math.floor(Math.random() * previewImages.length)];
}
