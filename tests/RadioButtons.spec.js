// const {test, expect }=require('@playwright/test');
import {test, expect } from '@playwright/test';

test('Radio Buttons',async ({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/radiobutton-demo');

    await page.locator("input[value='Male'][name='optradio']").check();
    await page.check("input[value='Female'][name='optradio']");
    await expect(page.locator("input[value='Female'][name='optradio']")).toBeChecked();
    await expect(page.locator("input[value='Female'][name='optradio']").isChecked()).toBeTruthy();
    await expect(page.locator("input[value='Male'][name='optradio']").isChecked()).toBeFalsy();

    // await page.waitForTimeout(5000); //pausing code

    page.close;


})