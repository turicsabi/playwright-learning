// const {test, expect }=require('@playwright/test');
import {test, expect } from '@playwright/test';

test('Mouse over actions',async ({page})=>{
    await page.goto('https://demo.opencart.com');

  
    const desktops=page.locator('//a[normalize-space()="Desktops"]');
    const mac=page.locator('//a[normalize-space()="Mac (1)"]');
    await desktops.hover();
    await mac.hover();
    await mac.click();
  


    await page.waitForTimeout(5000); //pausing code
    

    page.close;


})