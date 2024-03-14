// const {test, expect }=require('@playwright/test');
import {test, expect } from '@playwright/test';

test('Checkboxes',async ({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/checkbox-demo');

  
    await page.locator('id=isAgeSelected').check();
      await expect(await page.locator('id=isAgeSelected')).toBeChecked();
      await expect(await page.locator('id=isAgeSelected').isChecked()).toBeTruthy();
      await page.locator('id=isAgeSelected').click();
    
    
    const checkboxes = ['id=ex1-check2', "(//input[@id='ex1-check3'])[2]"];

    for(const checkbox of checkboxes){
        await page.locator(checkbox).check();        
    }
    
    for(const checkbox of checkboxes){
        if (await page.locator(checkbox).isChecked()){
            await page.locator(checkbox).uncheck();      

        }
    }

    await page.waitForTimeout(5000); //pausing code
    

    page.close;


})