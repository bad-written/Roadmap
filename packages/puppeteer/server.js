const path = require(`path`);
const puppeteer = require(`puppeteer`);

// eslint-disable-next-line no-unused-vars
const chromiumPath = path.join(
  __dirname,
  `../`,
  `chromium/chromium/chrome.exe`
);

async function main() {
  // const browser = await puppeteer.launch({
  //     headless: false,   //有浏览器界面启动
  //     slowMo: 100,       //放慢浏览器执行速度，方便测试观察
  //     args: [            //启动 Chrome 的参数，详见上文中的介绍
  //         '–no-sandbox',
  //         '--window-size=1280,960'
  //     ],
  // });
  // // const page = await browser.newPage();
  // // await page.goto('https://www.baidu.com');
  // // await page.close();
  // // await browser.close();

  // // 在一个默认的浏览器上下文中被创建一个新页面
  // const page1 = await browser.newPage();

  // // 空白页刚问该指定网址
  // await page1.goto('https://www.baidu.com');

  // // 等待title节点出现
  // await page1.waitForSelector('title');

  // // 用page自带的方法获取节点
  // const titleDomText1 = await page1.$eval('title', el => el.innerText);
  // console.log(titleDomText1);// 百度一下

  // // 用js获取节点
  // const titleDomText2 = await page1.evaluate(() => {
  //     const titleDom = document.querySelector('title');
  //     return titleDom.innerText;
  // });
  // console.log(titleDomText2);

  // await page1.pdf({
  //     path: '../pdf/baidu.pdf'
  // });

  // const browser = await puppeteer.launch();
  // const page = await browser.newPage();
  // //设置可视区域大小
  // await page.setViewport({width: 1920, height: 800});
  // await page.goto('https://youdata.163.com');
  // //对整个页面截图
  // await page.screenshot({
  //     path: './files/capture.png',  //图片保存路径
  //     type: 'png',
  //     fullPage: true //边滚动边截图
  //     // clip: {x: 0, y: 0, width: 1920, height: 800}
  // });
  // //对页面某个元素截图
  // let [element] = await page.$x('/html/body/section[4]/div/div[2]');
  // await element.screenshot({
  //     path: './files/element.png'
  // });
  // await page.close();
  // await browser.close();

  // const browser = await puppeteer.launch({
  //     slowMo: 100,    //放慢速度
  //     headless: false,
  //     defaultViewport: {width: 1440, height: 780},
  //     ignoreHTTPSErrors: false, //忽略 https 报错
  //     args: ['--start-fullscreen'] //全屏打开页面
  // });
  // const page = await browser.newPage();
  // await page.goto('https://demo.youdata.com');
  // //输入账号密码
  // const uniqueIdElement = await page.$('#uniqueId');
  // await uniqueIdElement.type('admin@admin.com', {delay: 20});
  // const passwordElement = await page.$('#password', {delay: 20});
  // await passwordElement.type('123456');
  // //点击确定按钮进行登录
  // let okButtonElement = await page.$('#btn-ok');
  // //等待页面跳转完成，一般点击某个按钮需要跳转时，都需要等待 page.waitForNavigation() 执行完毕才表示跳转成功
  // await Promise.all([
  //     okButtonElement.click(),
  //     page.waitForNavigation()
  // ]);
  // console.log('admin 登录成功');
  // await page.close();
  // await browser.close();

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.tracing.start({ path: `./files/trace.json` });
  await page.goto(`https://www.google.com`);
  await page.tracing.stop();
  /*
        continue analysis from 'trace.json'
    */
  browser.close();
}

main();
