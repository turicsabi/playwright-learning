// const {test, expect }=require('@playwright/test');
import {test, expect } from '@playwright/test';

test('Bootstrap DropDowns',async ({page})=>{
    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');
    await page.locator('.multiselect').click();
    const options = await page.$$('ul>li label');
    // await expect(options).toHaveCount(14);
   
    
    for(let option of options)
    {
        const value = await option.textContent();
        if(value.includes("Angular") || value.includes("Java")){
            await option.click();
        }
       
    }
    
    await page.waitForTimeout(3000); //pausing code
  
    
  

    page.close;


})