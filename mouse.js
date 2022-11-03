const { chromium } = require('playwright');

(async()=> {
    //function code
    const browser = await chromium.launch ({headless:false, slowMo: 100});
    const page = await browser.newPage();
    await page.goto('http://paint.js.org/');

    
    await page.mouse.move(150,150);
    await page.mouse.down();
    await page.mouse.move(300,150);
    await page.mouse.move(300,300);
    await page.mouse.move(150,300);
    await page.mouse.move(150,150);
    await page.mouse.up ();

    await browser.close();


    


} )();