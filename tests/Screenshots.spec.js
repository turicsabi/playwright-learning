const{test, expect}=require('@playwright/test');

    test('Page screenshot', async({page})=>{
        await page.goto('https://demo.opencart.com');
        await page.screenshot({path: 'tests/screenshots/' + new Date(Date.now()).toISOString().replace(/[:\/\s]/g, '-') +'homePage.png'});

    });

    test.only('Full page screenshot', async({page})=>{
        await page.goto('https://demo.opencart.com');
        await page.screenshot({path: 'tests/screenshots/' + new Date(Date.now()).toISOString().replace(/[:\/\s]/g, '-') +'homePage.png', fullPage: true});

    });

    test('Element screenshot', async({page})=>{
        await page.goto('https://demo.opencart.com');
        //locate the macbook div and take screenshot    
        await page.locator("//div[@id='content']//div[1]//form[1]").screenshot({path: 'tests/screenshots/' + new Date(Date.now()).toISOString().replace(/[:\/\s]/g, '-') +'MacBook.png'});

    });

    const PNG = require('pngjs').PNG;
    const pixelmatch = require('pixelmatch');
    const fs = require('fs');
    
    test('Compare screenshots', async({page})=>{
        await page.goto('https://www.lambdatest.com/selenium-playground/');
        //locate the macbook div and take screenshot    
        const img1Path = 'tests/screenshots/' + new Date(Date.now()).toISOString().replace(/[:\/\s]/g, '-') +'homePage.png';
        await page.locator("//div[@class='container__selenium']").screenshot({path: img1Path});
       //click on the Hover Demo link
        await page.click('a:has-text("Hover")');
        //go back to the home page using back button
        await page.goBack();
      
        const img2Path = 'tests/screenshots/' + new Date(Date.now()).toISOString().replace(/[:\/\s]/g, '-') +'homepageafter.png';
        await page.locator("//div[@class='container__selenium']").screenshot({path: img2Path});
        //compare the 2 screenshots taken before and after refresh
        const img1 = PNG.sync.read(fs.readFileSync(img1Path));
        const img2 = PNG.sync.read(fs.readFileSync(img2Path));
        const {width, height} = img1;
        const diff = new PNG({width, height});
        const numDiffPixels = pixelmatch(img1.data, img2.data, diff.data, width, height, {threshold: 0.1});
        expect(numDiffPixels).toBe(0);
    });


    test('Screenshot of failed test using the config', async({page})=>{
        await page.goto('https://demoblaze.com');
        //login
        await page.click('#login2');
        await page.fill('#loginusername', 'pavanol');
        await page.fill("input[id='loginpassword']", 'test@1234');
        await page.locator("//button[normalize-space()='Log in']").click();
        //assert a valid login
        expect(page.locator("#nameofuser")).toHaveText('Welcome pavanol');

        
       

    });
