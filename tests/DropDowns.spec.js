// const {test, expect }=require('@playwright/test');
import {test, expect } from '@playwright/test';

test('DropDowns',async ({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');

    await page.locator("#select-demo").selectOption({label:'Tuesday'}); //select by label
    await page.locator("#select-demo").selectOption('Monday'); //select by visible text
    await page.locator("#select-demo").selectOption({value:'Sunday'}); //select by value
    await page.locator("#select-demo").selectOption({index:4}); //select by index

    await page.selectOption("#select-demo", 'Monday'); 

    await page.waitForTimeout(3000); //pausing code
    
    //number of option assertions
    const options = (page.locator('#select-demo option'));
    await expect(options).toHaveCount(8);
    const options2 = await page.$$('#select-demo option');
    console.log('number of option:', options2.length)
    await expect(options2.length).toBe(8);

    //presence of value assertions
    const content = await page.locator("#select-demo").textContent();
    await expect(content.includes('Tuesday')).toBeTruthy();

    //using loop
    let status=false;
    for(const option of options2){
        let value = await option.textContent();
        if(value.includes('Friday')){
            await page.selectOption('#select-demo',value);
            status=true;
            break;
        }
    }
    expect(status).toBeTruthy();



    page.close;


})