const { test, expect } = require('@playwright/test');

test('test1 @smoke', async ({ page }) => {
    console.log('This is test1');
});

test('test4 @regression', async ({ page }) => {
    console.log('This is test4');
});

test('test2 @regression', async ({ page }) => {
    console.log('This is test2');
});

test('test3 @smoke', async ({ page }) => {
    console.log('This is test3');
});

test('test5 @regression @smoke', async ({ page }) => {
    console.log('This is test5');
});