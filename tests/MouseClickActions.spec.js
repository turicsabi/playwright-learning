// const {test, expect }=require('@playwright/test');
import {test, expect } from '@playwright/test';

test('Mouse right click action',async ({page})=>{
    let dialogMessage;
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');    
   
    page.on('dialog', async dialog => {
        dialogMessage = dialog.message();
        await page.waitForTimeout(3000); 
        await dialog.dismiss();
    });

    const button = await page.locator('//span[normalize-space()="right click me"]');
    await button.dispatchEvent('contextmenu');

    const copyButton = await page.waitForSelector('//li[normalize-space()="Copy"]');
    await copyButton.click();    

    await page.waitForTimeout(3000); 

    expect(dialogMessage).toBe('clicked: copy');

    page.close;
})

test('Mouse double click action',async ({page})=>{
    let dialogMessage;
    await page.goto('http://testautomationpractice.blogspot.com/');    
   
    const buttonCopy= page.locator('//button[normalize-space()="Copy Text"]');
    await buttonCopy.dblclick();

    const secondField = page.locator('#field2');
    
    expect(secondField).toHaveValue(await page.locator('#field1').getAttribute('value')); 
    await page.waitForTimeout(3000);

    page.close;
})

test('Mouse drag and drop',async ({page})=>{
    let dialogMessage;
    await page.goto('https://www.lambdatest.com/selenium-playground/drag-and-drop-demo');
   
    const from1= page.locator("//span[normalize-space()='Draggable 1']")
    const from2= page.locator("//span[normalize-space()='Draggable 2']")
    const to= page.locator('#mydropzone');  

    //approach 1
    await from1.hover();
    await page.mouse.down();
    await to.hover();
    await page.mouse.up();

    //approach 2
    await from2.dragTo(to);

    await page.waitForTimeout(3000);

    page.close;
})