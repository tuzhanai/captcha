import { BMP24 } from "gd-bmp";

/**
 * 生成图片选项
 */
export interface IGenerateImageOptions {
  /** 颜色列表 */
  colors: number[];
  /** 背景颜色列表 */
  backgroundColors: number[];
  /** 圆形数量 */
  circleCount: number;
  /** 点数量 */
  pointCount: number;
  /** 横线数量 */
  lineCount: number;
  /** 前景干扰百分比 */
  mistyPercent: number;
}

/**
 * 默认生成图片选项
 */
export const defaultGenerateImageOptions: IGenerateImageOptions = {
  colors: [
    0xd73a49,
    0x6f42c1,
    0x24292e,
    0x428bca,
    0xff0000,
    0x00ff00,
    0x0000ff,
    0x5c3f27,
    0x8e44ad,
    0xcb4335,
    0x2e4053,
    0xb9770e,
    0x239b56
  ],
  backgroundColors: [
    0xffffff,
    0xeeeeee,
    0xf0f0f0,
    0xcccccc,
    0xf9f4ea,
    0xf5eef8,
    0xeaf2f8,
    0xebedef,
    0xe8f8f5,
    0xfef5e7,
    0xfbeee6,
    0xd5d8dc
  ],
  circleCount: 10,
  pointCount: 100,
  lineCount: 10,
  mistyPercent: 0.2
};

function getRandomItem<T>(items: T[]): T {
  const i = Math.floor(Math.random() * items.length);
  return items[i];
}

function getRandomNumber(max: number) {
  return Math.floor(Math.random() * max);
}

/**
 * 生成图片
 * @param text 文本内容
 * @param options 生成图片选项
 */
export function generateImage(
  text: string,
  options: IGenerateImageOptions = defaultGenerateImageOptions
): Buffer {
  const width = 16 * text.length + 6;
  const height = 38;
  const fontSizes = [BMP24.font12x24, BMP24.font16x32];
  const img = new BMP24(width, height);
  img.fillRect(0, 0, width, height, getRandomItem(options.backgroundColors));

  const drawMisty = (percent: number) => {
    const pointCount = Math.round(options.pointCount * options.mistyPercent);
    const circleCount = Math.round(options.circleCount * options.mistyPercent);
    const lineCount = Math.round(options.lineCount * options.mistyPercent);
    for (let i = 0; i < pointCount; i++) {
      const x = getRandomNumber(width);
      const y = getRandomNumber(height);
      img.drawPoint(x, y, getRandomItem(options.colors));
      img.drawPoint(x + 1, y + 1, getRandomItem(options.colors));
      img.drawPoint(x, y + 1, getRandomItem(options.colors));
      img.drawPoint(x + 1, y, getRandomItem(options.colors));
    }
    for (let i = 0; i < circleCount; i++) {
      img.drawCircle(
        getRandomNumber(width),
        getRandomNumber(height),
        getRandomNumber(width),
        getRandomItem(options.colors)
      );
    }
    for (let i = 0; i < lineCount; i++) {
      img.drawLineH(
        0,
        width,
        getRandomNumber(height / 2) + 10,
        getRandomItem(options.colors)
      );
    }
  };

  drawMisty(1 - options.mistyPercent);
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    const x = 16 * i + getRandomNumber(6);
    const y = getRandomNumber(12);
    const s = getRandomItem(fontSizes);
    img.drawString(c, x, y, s, getRandomItem(options.colors));
    img.drawString(c, x + 1, y + 1, s, getRandomItem(options.colors));
  }
  drawMisty(options.mistyPercent);

  return img.getFileData();
}
