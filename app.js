const puppeteer = require("puppeteer");

exports.dosomefun = async (name) => {
  let trueResult = [];
  await (async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(`https://www.instagram.com/${name}/`, {
      waitUntil: "networkidle0",
    });
    await page.waitForSelector(".g47SY");

    let res = await page.evaluate(() => {
      let ar = [];
      document.querySelectorAll(".g47SY").forEach((e) => {
        ar.push(e.innerHTML);
      });
      return ar;
    });
    console.log(`Posts\t${res[0]}, Followers\t${res[1]}, Following\t${res[2]}`);
    trueResult = res;
    await browser.close();
  })().catch((err) => {
    trueResult = err;
  });
  return trueResult;
};
