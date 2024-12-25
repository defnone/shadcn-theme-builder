import { baseColors } from './constants';

export function generatePalette(baseHue: number, harmonyType: string) {
  const palette = [];
  
  switch (harmonyType) {
    case 'Complementary':
      palette.push(baseHue);
      palette.push((baseHue + 180) % 360);
      break;
    case 'Analogous':
      palette.push(baseHue);
      palette.push((baseHue + 30) % 360);
      palette.push((baseHue - 30 + 360) % 360);
      break;
    case 'Triadic':
      palette.push(baseHue);
      palette.push((baseHue + 120) % 360);
      palette.push((baseHue + 240) % 360);
      break;
    case 'Split Complementary':
      palette.push(baseHue);
      palette.push((baseHue + 150) % 360);
      palette.push((baseHue + 210) % 360);
      break;
    case 'Square':
      palette.push(baseHue);
      palette.push((baseHue + 90) % 360);
      palette.push((baseHue + 180) % 360);
      palette.push((baseHue + 270) % 360);
      break;
    default:
      palette.push(baseHue);
  }

  return palette;
}

export function getClosestColor(hue: number) {
  let closest = Object.values(baseColors)[0];
  let minDiff = 360;

  Object.values(baseColors).forEach((color) => {
    const diff = Math.min(
      Math.abs(hue - color.hue),
      Math.abs(hue - color.hue + 360),
      Math.abs(hue - color.hue - 360)
    );
    if (diff < minDiff) {
      minDiff = diff;
      closest = color;
    }
  });

  return closest;
} 