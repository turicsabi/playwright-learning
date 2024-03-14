// const {test, expect }=require('@playwright/test');
import {test, expect} from '@playwright/test';

test('Soft assertions',async ({page})=>{
    await page.goto('https://demoblaze.com');   
    await expect.soft(page).toHaveTitle('STORES'); 
    await expect.soft(page).toHaveURL('https://demoblaze.com');
   
    const logoElement =  await page.locator('.navbar-brand');
    await expect.soft(logoElement).toBeVisible();

   
    page.close;
})