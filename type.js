const { chromium } = require('playwright');

(async()=> {
    //function code
    const browser = await chromium.launch ({headless: false, slowMo: 100});
    const page = await browser.newPage();
    await page.goto('http://the-internet.herokuapp.com/forgot_password');
    // code totype in email textbox 
    const email = await page.$('#email');
    await email.type('ixchel@mail.com', { delay : 50});
    await browser.close();

} )();