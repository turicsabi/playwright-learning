// const {test, expect }=require('@playwright/test');
import {test, expect } from '@playwright/test';
import { assert } from 'console';

test('Hidden dropdowns',async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const logo = page.getByAltText('company-branding');
    expect(logo).toBeVisible;

    await page.getByPlaceholder('Username').fill("Admin");
    await page.getByPlaceholder('Password').fill("admin123");
    await page.getByRole('button', {type: 'submit'}).click();

    await page.locator("//span[normalize-space()='PIM']").click();
    await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[6]/div/div[2]/div/div").click();

    await page.waitForTimeout(3000);

    const options = await page.$$("//div[@role='listbox']//span");
    for (let option of options){ 
        const value = await option.textContent();
        if(value ==='Software Architect'){
            await option.click();
            break;
        }              
    }
    await page.waitForTimeout(3000);

    page.close;


})