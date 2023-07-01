import {test, expect} from "@playwright/test";

test.describe.parallel("Feedback form", () => {

    test.beforeEach(async ({page}) => {
        await page.goto('http://zero.webappsecurity.com/index.html');
        await page.click("#feedback");        
    })

    //reset feedback form
    test.only("Reset feedback form", async ({page}) => {
        await page.type('#name', 'somename');
        await page.type('#subject', 'someesubject');
        await page.type('#email', 'someemail@com.com');
        await page.type('#comment', 'some nice comment about application');
        await page.click("input[name='clear']");
        const nameImput = await page.locator('#name');
        const commentInput = await page.locator('#comment');
        await expect(nameImput).toBeEmpty();
        await expect(commentInput).toBeEmpty();
    })


    //submit feedback form
    test.only("Submit feedback form", async ({page}) => {
        await page.type('#name', 'somename');
        await page.type('#subject', 'someesubject');
        await page.type('#email', 'someemail@com.com');
        await page.type('#comment', 'some nice comment about application');
        await page.click("input[type='submit']");
        await page.waitForSelector("#feedback-title");        
    })
})