var express = require('express');
var router = express.Router();
var puppeteer = require('puppeteer');

const searchWeblio = async (searchQuery) =>{
    const browser = await puppeteer.launch();
    const page = await browser.newPage()
    await page.goto(`https://www.weblio.jp/content/${searchQuery}`)
  
    let data = await page.evaluate( () => {
  
      let reading = document.querySelector('div[class="NetDicHead"]').innerText;
      let meaning = document.querySelector('div[class="NetDicBody"]').innerText;
      
      return {
        reading,
        meaning
      }
    });

    return data;

    await browser.close() 
};

router.get('/', async function(req, res, next) {
    let data = await searchWeblio('猫'); 
    res.send(data);
});

module.exports = router;