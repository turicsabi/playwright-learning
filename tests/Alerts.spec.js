// const {test, expect }=require('@playwright/test');
import {test, expect } from '@playwright/test';

test('Alerts',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enabling alert handling // Dialog window handler
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    })

    await page.click('//button[normalize-space()="Alert"]');
    
    await page.waitForTimeout(5000); //pausing code
    
    page.close;
})

    test('Confirmation dialog',async ({page})=>{
        await page.goto('https://testautomationpractice.blogspot.com/');
    
        //Enabling alert handling // Dialog window handler
        page.on('dialog', async dialog=>{
            expect(dialog.type()).toContain('confirm');
            expect(dialog.message()).toContain('Press a button!');
            // await dialog.accept();
            await dialog.dismiss(); //close by pressing cancel
        })
    
        await page.click('//button[normalize-space()="Confirm Box"]');
        await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed Cancel!');
        
        await page.waitForTimeout(5000); //pausing code
        
        page.close;


})

test('Prompt dialog',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enabling alert handling // Dialog window handler
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('John');
        // await dialog.dismiss(); //close by pressing cancel
    })

    await page.click('//button[normalize-space()="Prompt"]');
    await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello John! How are you today?');
    
    await page.waitForTimeout(5000); //pausing code
    
    page.close;


})