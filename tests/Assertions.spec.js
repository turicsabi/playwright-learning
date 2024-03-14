// const {test, expect }=require('@playwright/test');
import {test, expect} from '@playwright/test';

test('Assertions',async ({page})=>{
    await page.goto('https://demo.nopcommerce.com/register');   
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
    
    await expect(page).toHaveTitle('nopCommerce demo store. Register');
    const logoElement =  await page.locator('.header-logo');
    await expect(logoElement).toBeVisible();
    
    const searchBox = await page.locator('#small-searchterms');
    await expect(searchBox).toBeEnabled();
    
    const maleRB = await page.locator('#gender-male');
    await maleRB.click();
    await expect(maleRB).toBeChecked();

    const newsletterCheckBox = await page.locator('#Newsletter');
    await expect(newsletterCheckBox).toBeChecked();
    
    const regButton = await page.locator('#register-button');
    await expect(regButton).toHaveAttribute('type','submit');
    
    await expect(await page.locator('.page-title h1')).toHaveText('Register'); 
    
    await expect(await page.locator('.page-title h1')).toContainText('Reg'); 
    
    const emailInput = await page.locator('#Email');
    emailInput.fill('test@gmail.com')
    await expect(emailInput).toHaveValue('test@gmail.com');

    const options = await page.locator('select[name="DateOfBirthMonth"] option');
    await expect(options).toHaveCount(13);

    
    page.close;
})