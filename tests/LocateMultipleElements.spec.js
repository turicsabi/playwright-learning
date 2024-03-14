// const {test, expect }=require('@playwright/test');
import {test, expect } from '@playwright/test';

test('Locate multiple elements',async ({page})=>{
    await page.goto('http://www.demoblaze.com');
    page.waitForLoadState();
    const links = await page.$$('a');
    for(const link of links){
        const linkText = await link.textContent();
        console.log(linkText);
    }

    page.waitForSelector("//div[@id='tbodyid']//h4/a");
    const products = await page.$$("//div[@id='tbodyid']//h4/a");

        for(const product of products){
        const productName = await product.textContent();
        console.log(productName);
    }

page.close;
    
})