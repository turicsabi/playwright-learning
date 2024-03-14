// const {test, expect }=require('@playwright/test');
import {test, expect } from '@playwright/test';
const path = require('path');

test('Upload single file',async ({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/upload-file-demo');    
    const inputFile = path.join(__dirname, 'uploadFiles/test.jpg');
    console.log(inputFile);
    await page.locator('#file').setInputFiles(inputFile);
   
    await page.waitForTimeout(5000); //pausing code
    

    page.close;

})

test('Upload multiple file',async ({page})=>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    await page.locator('#filesToUpload').setInputFiles(['uploadFiles/test.jpg','uploadFiles/car.jpg']);       
   
    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('test.jpg');
    expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('car.jpg');
    
    await page.waitForTimeout(3000);

    //remove files
    await page.locator('#filesToUpload').setInputFiles([]);
    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected');
   
    await page.waitForTimeout(3000); //pausing code

    page.close;
    

})
