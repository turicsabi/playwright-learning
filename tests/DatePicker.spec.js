import {test, expect } from '@playwright/test';

test('DatePickers',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com');

    //  using fill
    await page.fill('#datepicker', '05/11/2022');
  
    //date picker using click
    const year="2021";
    const month="February";
    const day="21";

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    await page.click('#datepicker');
    while(true){
        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();

        if(currentYear == year && currentMonth == month){
            break;
        } else if(currentYear > year || (currentYear == year && monthNames.indexOf(currentMonth) > monthNames.indexOf(month))) { 
            await page.click('.ui-datepicker-prev');
        } else if(currentYear < year || (currentYear == year && monthNames.indexOf(currentMonth) < monthNames.indexOf(month)))  {
            await page.click('.ui-datepicker-next');           
        }
    }
    
    const dates=await page.$$("//a[@class='ui-state-default']");

    // for(let date of dates){
    //     const value = await date.textContent();
    //     if(value === day){
    //         await date.click();
    //         break;
    //     }
    // }

    //date selection without loop
    await page.click(`//a[@class='ui-state-default' and text()='${day}']`);

    await page.waitForTimeout(3000); 

    page.close;
})