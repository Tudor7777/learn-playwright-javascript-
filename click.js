const { chromium } = require('playwright');

(async()=> {
    //function code
    const browser = await chromium.launch ({headless:false, slowMo: 300});
    const page = await browser.newPage();
    await page.goto('https://www.apronus.com/music/lessons/unit01.htm');
    // click on the keynotes
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(5)');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1)');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(8)');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(10)');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1)');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(7)');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(6)');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(8)');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(5)');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1)');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(8)');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(10)');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1)');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(7)');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(6)');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(8)');
    await browser.close();

} )();