import { generateCaptcha, CaptchaMode } from "./index";
import Benchmark from "@leizm/benchmark";

const b = new Benchmark({ title: "Benchmark Example" });
b.addSync("Load", () => generateCaptcha(CaptchaMode.Easy))
  .addSync("Easy Mode", () => generateCaptcha(CaptchaMode.Easy))
  .addSync("Medium Mode", () => generateCaptcha(CaptchaMode.Medium))
  .addSync("Hard Mode", () => generateCaptcha(CaptchaMode.Hard))
  .run()
  .then(r => b.print(r))
  .catch(console.error);
