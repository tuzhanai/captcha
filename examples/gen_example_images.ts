import * as fs from "fs";
import * as path from "path";
import { generateCaptcha, CaptchaMode } from "../src";

function saveFile(mode: string, data: Buffer) {
  fs.writeFileSync(path.resolve(__dirname, `${mode}.bmp`), data);
}

saveFile("easy", generateCaptcha(CaptchaMode.Easy).data);
saveFile("medium", generateCaptcha(CaptchaMode.Medium).data);
saveFile("hard", generateCaptcha(CaptchaMode.Hard).data);
