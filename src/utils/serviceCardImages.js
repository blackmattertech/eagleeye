/** Image index 1–8 maps to /public/media/servicescards/1.jpg, 2.jpg, … */
export function getServiceCardImage(index) {
  return `/media/servicescards/${index + 1}.jpg`;
}

export function getServiceCardImageFallback(index) {
  return `/media/servicescards/${index + 1}.png`;
}
