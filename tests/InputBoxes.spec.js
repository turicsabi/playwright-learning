// const {test, expect }=require('@playwright/test');
import {test, expect } from '@playwright/test';

test('Input Boxes',async ({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/input-form-demo');

    await expect (await page.locator('id=name')).toBeVisible();
    // await expect (await page.locator('id=name')).not.toBeEmtpy();
    await expect (await page.locator('id=name')).toBeEditable();
    await expect (await page.locator('id=name')).toBeEnabled();
    await page.locator('id=name').fill('John');
    await page.fill('id=name', 'pavanol');
    await page.waitForTimeout(5000); //pausing code

    page.close;


})