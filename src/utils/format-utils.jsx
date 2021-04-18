export function getCount(count) {
  if (count < 0) return;
  if (count < 100000) {
    return count;
  } else {
    return Math.floor(count / 10000)+ "万";
  }
}

export function getSizeImage(imgUrl, size) {
  return `${imgUrl}?param=${size}x${size}`;
}