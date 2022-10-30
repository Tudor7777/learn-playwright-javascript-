const { chromium } = require('playwright');

(async()=> {
    //function code
    const browser = await chromium.launch ({headless:false, slowMo: 100});
    const page = await browser.newPage();
    await page.goto('http://applitools.com');
   
   //take screenshot code
    await page.screenshot({path: 'screenshot.png'})
    const logo = await page.$('.logo');
    await logo.screenshot({path: 'logo.png'})
   //closing browser
    await browser.close();

} )();