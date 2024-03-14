// const {test, expect }=require('@playwright/test');
import {test, expect } from '@playwright/test';

test('MultiSelect DropDowns',async ({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');

    await page.selectOption('id=multi-select', ['Florida', 'Texas']); 
    

   
    await page.waitForTimeout(3000); //pausing code
  
  
   //number of option assertions
    const options = await page.locator('#multi-select option');
    await expect(options).toHaveCount(8);
    const options2 = await page.$$('#multi-select option');
    await expect(options2.length).toBe(8);
  
    const content = await page.locator('#multi-select').textContent();
    await expect(content.includes('Texas')).toBeTruthy();  

    page.close;


})