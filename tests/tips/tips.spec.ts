import {test, expect} from '@playwright/test'
import { getRundomNumber, getNumberString } from '../../utils/data-helpers';

test.describe.only("Tips and Trics Section", () => {
    test.only("TestInfo object", async ({page}, TestInfo) => {
        await page.goto("https://www.example.com");
        //console.log(TestInfo.title);
        let newNumber = await getRundomNumber();
        console.log(newNumber);
        let newString = await getNumberString();
        console.log(newString);

    })

    test("Test skip browser", async ({page, browserName}) => {
        test.skip(browserName === "chromium", "Feature nor ready in chrome browser")
        await page.goto("https://www.example.com");
    })

    test("Test Fixme annotation", async ({page, browserName}) => {
        test.fixme(browserName === "chromium", "Test is not stable needs revision")
        await page.goto("https://www.example.com");
    })

    test("Test for retries", async ({page, browserName}) => {        
        await page.goto("https://www.example.com");
    })

    const people =["Mike", "Judy", "Elon", "Alice"]
    for (const name of people) {
        test(`Running test for ${name}`, async ({page}) => {
            await page.goto("http://zero.webappsecurity.com/index.html")
            await page.type("#searchTerm", `${name}`)
            await page.waitForTimeout(3000);
        })
    }

    test("Mouse movement sumulation", async ({page}) => {
        await page.goto("https://www.example.com");
        await page.mouse.move(0, 0);
        await page.mouse.down();
        await page.mouse.move(0, 100);
        await page.mouse.up();
    })

    test("Multiple browser tabs inside 1 browse", async({browser}) => {
        const context = await browser.newContext();
        const page1 = await context.newPage();
        const page2 = await context.newPage();
        const page3 = await context.newPage();
        await page1.goto("https://www.example.com");
        await page2.goto("https://www.example.com");
        await page3.goto("https://www.example.com");
        await page1.waitForTimeout(5000);        
    })    

})



