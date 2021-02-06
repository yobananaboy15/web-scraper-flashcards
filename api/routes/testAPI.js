var express = require("express");
var router = express.Router();
var puppeteer = require("puppeteer");

const searchWeblio = async (searchQuery) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`https://www.weblio.jp/content/${searchQuery}`);

  let data = await page.evaluate(() => {
    let reading = document.querySelector('h2[class="midashigo"]').innerText;
    let meaning = document.querySelector('div[class="Sgkdj"]').innerText;

    return {
      reading,
      meaning,
    };
  });

  return data;
};

router.get("/", async function (req, res, next) {
  let data = await searchWeblio(req.query.word);
  res.send(data);
});

module.exports = router;
