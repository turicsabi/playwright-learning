// const {test, expect }=require('@playwright/test');
import {test, expect } from '@playwright/test';

test('Built-in locators',async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const logo = page.getByAltText('company-branding');
    expect(logo).toBeVisible;

    await page.getByPlaceholder('Username').fill("Admin");
    await page.getByPlaceholder('Password').fill("admin123");
    await page.getByRole('button', {type: 'submit'}).click();

    await expect(page.getByText('Bob Tester')).toBeVisible(); 

    page.close;


})