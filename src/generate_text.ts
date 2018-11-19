/**
 * 生成文本选项
 */
export interface IGenerateTextOptions {
  /** 字符数量 */
  size: number;
  /** 是否包含数字 */
  digit: boolean;
  /** 是否包含小写字母 */
  lower: boolean;
  /** 是否包含大写字母 */
  upper: boolean;
}

/**
 * 默认生成文本选项
 */
const defaultGenerateTextOptions: IGenerateTextOptions = {
  size: 4,
  digit: true,
  lower: false,
  upper: true
};

const digitChars = "0123456789";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function getRandomNumber(max: number) {
  return Math.floor(Math.random() * max);
}

/**
 * 生成文本
 * @param options 生成文本选项
 */
export function generateText(
  options: IGenerateTextOptions = defaultGenerateTextOptions
): string {
  let chars = "";
  if (options.digit) chars += digitChars;
  if (options.lower) chars += lowerChars;
  if (options.upper) chars += upperChars;
  const lens = chars.length;
  let result = "";
  for (let i = 0; i < options.size; i++) {
    result += chars[getRandomNumber(lens)];
  }
  return result;
}
