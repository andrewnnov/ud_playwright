import {test, expect} from '@playwright/test'

test.describe.only("Tips and Trics Section", () => {
    test("TestInfo object", async ({page}, TestInfo) => {
        await page.goto("https://www.example.com");
        console.log(TestInfo.title);

    })
})

