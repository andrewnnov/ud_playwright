import {test, expect} from '@playwright/test'

test.describe.only("Tips and Trics Section", () => {
    test("TestInfo object", async ({page}, TestInfo) => {
        await page.goto("https://www.example.com");
        //console.log(TestInfo.title);

    })

    test("Test skip browser", async ({page, browserName}) => {
        test.skip(browserName === "chromium", "Feature nor ready in chrome browser")
        await page.goto("https://www.example.com");
    })

    test("Test Fixme annotation", async ({page, browserName}) => {
        test.fixme(browserName === "chromium", "Test is not stable needs revision")
        await page.goto("https://www.example.com");
    })
})



