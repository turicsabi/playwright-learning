import {test, expect, chromium } from '@playwright/test';

test('Without fixtures',async ({})=>{
    //create a chrome browser
    const browser = await chromium.launch();
    //created isolated context
    const context = await browser.newContext();
    //created a new page
    const page = await context.newPage();
    await page.goto('http://www.google.com');
    
    //use context to remove ccokies
    console.log(await context.cookies());
    console.log("After removing cookies");
    await context.clearCookies();
    console.log(await context.cookies());

    //create a new isolated context
    const context2= await browser.newContext();
    const page2 = await context2.newPage();
    await page2.goto('http://www.amazon.com');

    //make  arequest
    const response=await page.request.get('https://reqres.in/api/users?page=2');
    console.log(await response.json());

    //browser name
    console.log(await browser._name());

})


test('With fixtures',async ({page, context, browser, request, browserName})=>{
    await page.goto('http://www.google.com');
    
    //use context to remove ccokies
    console.log(await context.cookies());
    console.log("After removing cookies");
    await context.clearCookies();
    console.log(await context.cookies());

    //create a new isolated context
    const context2= await browser.newContext();
    const page2 = await context2.newPage();
    await page2.goto('http://www.amazon.com');

    //make  a request
    const response=await page.request.get('https://reqres.in/api/users?page=2');
    console.log(await response.json());

    //browser name
    console.log(await browserName);

})