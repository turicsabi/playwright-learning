// const {test, expect }=require('@playwright/test');
import {test, expect } from '@playwright/test';

test('Frames',async ({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');

    //find total frames
    const allFrames=await page.frames();
    console.log('Number of frames:', allFrames.length);

    //using name or url of frame
    // await page.frame('name');
    const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    await frame1.fill("[name='mytext1']",'Hello');
   
    await page.waitForTimeout(3000);


    // using frame locator

    const inputBox=await page.frameLocator("frame[src='frame_2.html']").locator("[name='mytext2']")
    inputBox.fill('Hello');
    
    await page.waitForTimeout(3000);
     
    await page.close();
});

test('Nested frames',async ({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');
    
    //find total frames
    const allFrames=await page.frames();
    console.log('Number of frames:', allFrames.length);
    
    //using name or url of frame 
    const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    await frame3.fill("[name='mytext3']",'Welcome');
                 
    //nested frame
    const childframes = await frame3.childFrames();
    await childframes[0].locator("//div[@id='i5']//div[@class='AB7Lab Id5V1']").check();
    await page.waitForTimeout(3000);    
      
    await page.close();

});
