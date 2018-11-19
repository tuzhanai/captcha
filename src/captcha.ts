import { IGenerateTextOptions, generateText } from "./generate_text";
import {
  IGenerateImageOptions,
  defaultGenerateImageOptions,
  generateImage
} from "./generate_image";

/**
 * 生成验证码难度
 */
export enum CaptchaMode {
  /** 简单 */
  Easy,
  /** 中等 */
  Medium,
  /** 难 */
  Hard
}

/**
 * 默认生成难度对应的选项
 */
export const defaultCaptchaMode: Record<
  string,
  { text: IGenerateTextOptions; image: IGenerateImageOptions }
> = {
  [CaptchaMode.Easy]: {
    text: { size: 4, digit: true, lower: false, upper: false },
    image: {
      ...defaultGenerateImageOptions,
      circleCount: 10,
      pointCount: 50,
      lineCount: 10,
      mistyPercent: 0.2
    }
  },
  [CaptchaMode.Medium]: {
    text: { size: 4, digit: true, lower: false, upper: true },
    image: {
      ...defaultGenerateImageOptions,
      circleCount: 10,
      pointCount: 50,
      lineCount: 10,
      mistyPercent: 0.2
    }
  },
  [CaptchaMode.Hard]: {
    text: { size: 4, digit: true, lower: false, upper: true },
    image: {
      ...defaultGenerateImageOptions,
      circleCount: 10,
      pointCount: 50,
      lineCount: 10,
      mistyPercent: 0.3
    }
  }
};

/**
 * 生成验证码结果
 */
export interface IGenerateCaptchaResult {
  /** 验证码文本 */
  text: string;
  /** 验证码图片 */
  data: Buffer;
}

/**
 * 生成验证码
 * @param mode 难度
 */
export function generateCaptcha(
  mode: CaptchaMode = CaptchaMode.Medium
): IGenerateCaptchaResult {
  const options =
    defaultCaptchaMode[mode] || defaultCaptchaMode[CaptchaMode.Medium];
  const text = generateText(options.text);
  const data = generateImage(text, options.image);
  return { text, data };
}

/**
 * 生成验证码
 * @param textOptions 生成文本选项
 * @param imageOptions 生成图片选项
 */
export function generateCaptchaAdvanced(
  textOptions: IGenerateTextOptions,
  imageOptions: IGenerateImageOptions
): IGenerateCaptchaResult {
  const text = generateText(textOptions);
  const data = generateImage(text, imageOptions);
  return { text, data };
}
