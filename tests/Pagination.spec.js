import {test, expect } from '@playwright/test';

test('Pagination',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('#productTable');
    //total number of rows and columns
    const columns = table.locator('thead tr th');
    console.log('Total number of columns:',await columns.count());
    expect (await columns.count()).toBe(4);
    const rows = table.locator('tbody tr'); 
    console.log('Total number of rows:', await rows.count());
    expect (await rows.count()).toBe(5);   
    
   //select specific checkbox
    const matchedRow= rows.filter({
        has: page.locator('td'),
        hasText: 'Product 5'
    })
    await matchedRow.locator('input').check();

    //select multiple products with reusable function
    await selectProduct(rows, page, 'Product 1');
    await selectProduct(rows, page, 'Product 3');
    await selectProduct(rows, page, 'Product 5');
 
    await page.waitForTimeout(3000);    


    //print all product details using loop for each page    
    const pages = page.locator('.pagination li a');
    console.log('Total number of pages:', await pages.count());
    for(let p=0; p<await pages.count(); p++){
        if (p>0){
            await pages.nth(p).click();            
        }   
        for(let i=0; i<await rows.count(); i++){
           const row = rows.nth(i);
           const tds=row.locator('td');
           for(let j=0; j<await tds.count()-1; j++){
               console.log(await tds.nth(j).textContent());
           }
        }
    await page.waitForTimeout(1000);   
    } 
    await page.close(); 
   
})

async function selectProduct(rows, page, productName){
    const matchedRow= rows.filter({
        has: page.locator('td'),
        hasText: productName
    })
    await matchedRow.locator('input').check();
}