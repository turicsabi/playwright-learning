const {test, expect }=require('@playwright/test');

test('Home Page', async ({page})=>{

await page.goto('http://www.demoblaze.com');
const pageTitle = page.title();
console.log('Page title is', pageTitle);
await expect(page).toHaveTitle('STORE');
await expect(page).toHaveURL('https://www.demoblaze.com/');
await page.close

})
