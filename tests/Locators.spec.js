// const {test, expect }=require('@playwright/test');
import {test, expect } from '@playwright/test';

test('Locators',async ({page})=>{
    await page.goto('http://www.demoblaze.com');
    //click on login
    // await page.locator('id=login2').click;
    await page.click('id=login2');
    await page.fill('#loginusername', 'pavanol');
    await page.fill("input[id='loginpassword']",'test@123');
    await page.click("//button[normalize-space()='Log in']");
    const logoutLink = await page.locator("//a[normalize-space()='Log out']");
    expect(logoutLink).toBeVisible;
    page.close;


})