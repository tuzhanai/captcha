import { expect } from "chai";
import {
  generateCaptcha,
  generateCaptchaAdvanced,
  CaptchaMode
} from "./index";

describe("@tuzhanai/captcha", function() {
  it("generateCaptcha Default", function() {
    const { text, data } = generateCaptcha();
    expect(text).to.be.string;
    expect(text.length).to.greaterThan(0);
    expect(data).to.be.instanceOf(Buffer);
    expect(data.length).to.greaterThan(0);
  });

  it("generateCaptcha Easy", function() {
    const { text, data } = generateCaptcha(CaptchaMode.Easy);
    expect(text).to.be.string;
    expect(text.length).to.greaterThan(0);
    expect(data).to.be.instanceOf(Buffer);
    expect(data.length).to.greaterThan(0);
  });

  it("generateCaptcha Medium", function() {
    const { text, data } = generateCaptcha(CaptchaMode.Medium);
    expect(text).to.be.string;
    expect(text.length).to.greaterThan(0);
    expect(data).to.be.instanceOf(Buffer);
    expect(data.length).to.greaterThan(0);
  });

  it("generateCaptcha Hard", function() {
    const { text, data } = generateCaptcha(CaptchaMode.Hard);
    expect(text).to.be.string;
    expect(text.length).to.greaterThan(0);
    expect(data).to.be.instanceOf(Buffer);
    expect(data.length).to.greaterThan(0);
  });

  it("generateCaptchaAdvanced", function() {
    const { text, data } = generateCaptchaAdvanced(
      { size: 6, digit: true, upper: true, lower: true },
      {
        colors: [0x0],
        backgroundColors: [0xffffff],
        circleCount: 10,
        lineCount: 10,
        pointCount: 10,
        mistyPercent: 0.1
      }
    );
    expect(text).to.be.string;
    expect(text.length).to.greaterThan(0);
    expect(data).to.be.instanceOf(Buffer);
    expect(data.length).to.greaterThan(0);
  });
});
