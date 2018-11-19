# @tuzhanai/captcha

生成验证码

## 安装

```bash
npm install @tuzhanai/captcha -S
```

## 使用方法

```typescript
import { generateCaptcha, CaptchaMode } from "@tuzhanai/captcha";

const { text, data } = generateCaptcha(CaptchaMode.Medium);
console.log("验证码：%s，图片Buffer：%s", text, data);
```

## 性能

i7-6820HQ CPU @ 2.70GHz 单核每秒可生成约 2W 次验证码

```text
Platform info:
- Darwin 18.2.0 x64
- Node.JS: 10.13.0
- V8: 6.8.275.32-node.36
  Intel(R) Core(TM) i7-6820HQ CPU @ 2.70GHz × 8

┌─────────────┬─────────┬─────────┬────────┐
│ test        │ rps     │ ns/op   │ spent  │
├─────────────┼─────────┼─────────┼────────┤
│ Load        │ 19546.0 │ 51161.4 │ 2.000s │
├─────────────┼─────────┼─────────┼────────┤
│ Easy Mode   │ 23471.5 │ 42604.9 │ 2.000s │
├─────────────┼─────────┼─────────┼────────┤
│ Medium Mode │ 22244.0 │ 44955.9 │ 2.000s │
├─────────────┼─────────┼─────────┼────────┤
│ Hard Mode   │ 19785.0 │ 50543.3 │ 2.000s │
└─────────────┴─────────┴─────────┴────────┘
```

## License

```text
MIT License

Copyright (c) 2018 兔展

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
