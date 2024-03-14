import { test, expect } from '@playwright/test';

let page;

test.beforeEach(async ({browser})=>{
    page=await browser.newPage();
    await page.goto('http://www.demoblaze.com');
   //login
    await page.click('#login2');
    await page.fill('#loginusername', 'pavanol');
    await page.fill("input[id='loginpassword']", 'test@123');
    await page.locator("//button[normalize-space()='Log in']").click();

});


test.afterEach(async () => {
    await page.click('#logout2');
    await page.close();
});

test('HomePage', async () => {
    const products = await page.$$('.hrefch');
    expect(products).toHaveLength(9);
});



test('Add product to cart', async () => {
    await page.click('a:has-text("Samsung galaxy s6")');
    await page.click("#tbodyid > div.row > div > a"); 
    page.on('dialog', async dialog => {
        expect(dialog.message()).toBe('Product added');
        await dialog.accept();
    });

});
