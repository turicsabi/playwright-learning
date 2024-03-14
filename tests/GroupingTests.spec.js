const{test, expect}=require('@playwright/test');

test.beforeAll(async()=>{
    console.log('This is beforeAll');
});

test.afterAll(async()=>{
    console.log('This is afterAll');
});

test.beforeEach(async()=>{
    console.log('This is beforeEach');
});

test.afterEach(async()=>{
    console.log('This is afterEach');
});

test.describe('Regression',()=> {

    test('test1', async({page})=>{
        console.log('This is test1');
    });

    test('test4', async({page})=>{
        console.log('This is test4');
    });

});

test.describe('Smoke',()=> {

    test('test2', async({page})=>{
        console.log('This is test2');
    });
    test.skip('test3', async({page})=>{
        console.log('This is test3');
    });

});