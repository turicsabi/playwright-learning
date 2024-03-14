import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {HomePage} from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

test('Home Page', async ({page})=>{
    //Login using POM
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.login('pavanol','test@123');
    await page.waitForTimeout(3000);

    //Home
    const homePage = new HomePage(page);
    await homePage.addProductToCart('Nexus 6');
    await page.waitForTimeout(3000);
    await homePage.goToCart();

    //Cart
    const cart=new CartPage(page);
    await page.waitForTimeout(3000);
    const status = await cart.checkProductInCart('Nexus 6');
    expect(status).toBe(true);


    
    })