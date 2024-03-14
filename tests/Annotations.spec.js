const { test, expect } = require('@playwright/test');

// test.only('test1 @smoke', async ({ page }) => {
//     console.log('This is test1');
// });

test.skip('test2 @regression', async ({ page }) => {
    console.log('This is test2');
});

test('test3 @smoke', async ({ page, browserName}) => {
    console.log('This is test3');
    if(browserName === 'chromium'){
       test.skip();
    }
});

test('test5 @regression @smoke', async ({ page }) => {
    console.log('This is test5');
});

//Fixme
test('test4 @regression @smoke', async ({ page }) => {
    test.fixme();
    console.log('This test needs work');
});

//Fail
test('test6 @regression @smoke', async ({ page }) => {
    test.fail();
    console.log('This is test6');
    expect(1).toBe(2); //if both expected and actual will fail then the test will pass
});


test('test7 @regression @smoke', async ({ page, browserName }) => {
    if(browserName === 'firefox'){
        test.fail();
     }    
    console.log('This is test7');

});

//Triple default timeout
test('test8 @regression @smoke', async ({ page}) => {
    test.slow();
    //test.setTimeout(5000);
    console.log('This is test8');
    await page.goto('https://www.google.com')

});