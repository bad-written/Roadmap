const puppeteer = require(`puppeteer`);
const request = require(`request-promise-native`);
// 使用 puppeteer.launch 启动 Chrome
(async () => {
  const browser = await puppeteer.launch({
    headless: false, // 有浏览器界面启动
    slowMo: 100, // 放慢浏览器执行速度，方便测试观察
    args: [
      // 启动 Chrome 的参数，详见上文中的介绍
      `–no-sandbox`,
      `--window-size=1280,960`
    ]
  });
  const page = await browser.newPage();
  await page.goto(`https://www.baidu.com`);
  await page.close();
  await browser.close();
})();

// 使用 puppeteer.connect 连接一个已经存在的 Chrome 实例
(async () => {
  // 通过 9222 端口的 http 接口获取对应的 websocketUrl
  const version = await request({
    uri: `http://127.0.0.1:9222/json/version`,
    json: true
  });
  // 直接连接已经存在的 Chrome
  const browser = await puppeteer.connect({
    browserWSEndpoint: version.webSocketDebuggerUrl
  });
  const page = await browser.newPage();
  await page.goto(`https://www.baidu.com`);
  await page.close();
  await browser.disconnect();
})();
