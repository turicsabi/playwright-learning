import {test, expect, chromium } from '@playwright/test';

test('Handle pages/windows',async ()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();
    const page2 = await context.newPage();

    const allPages = context.pages();
    console.log('Number of created pages is:', allPages.length);

    await page1.goto('https://opensource-demo.orangehrmlive.com');
    await expect(page1).toHaveTitle('OrangeHRM');
    await page2.goto('https://www.orangehrm.com');
    await expect(page2).toHaveTitle('Human Resources Management Software | OrangeHRM');


})


test('Handle multiple pages/windows',async ()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();
 
    await page1.goto('https://opensource-demo.orangehrmlive.com');
    await expect(page1).toHaveTitle('OrangeHRM');
    const pagePromise = context.waitForEvent('page');
    await page1.click('//a[normalize-space()="OrangeHRM, Inc"]');

    const newPage =await pagePromise;
    await expect(newPage).toHaveTitle('Human Resources Management Software | OrangeHRM');
    await page1.waitForTimeout(3000);
    await newPage.waitForTimeout(3000);
    await browser.close();


})