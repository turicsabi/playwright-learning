// const {test, expect }=require('@playwright/test');
import {test, expect } from '@playwright/test';

test('Mouse over actions',async ({page})=>{
    await page.goto('https://gotranscript.com/text-compare');
    await page.locator('[name=text1]').fill('This is a test');
    // await page.type('name=text1','This is a test');
 
    //select the text
    await page.keyboard.press('Control+A');
    //copy the text
    await page.keyboard.press('Control+C');
    //move to the second text area
    await page.keyboard.press('Tab');
    //paste the text
    await page.keyboard.press('Control+V');

    await page.waitForTimeout(5000); //pausing code
    

    page.close;


})