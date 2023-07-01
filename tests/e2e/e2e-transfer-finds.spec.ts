import {test, expect} from "@playwright/test"




test.describe.only("Transfer Funds and Make Payments", () => {

    test.beforeEach(async ({page}) => {
        await page.goto('http://zero.webappsecurity.com/index.html');
        await page.click("#signin_button")
        await page.type("#user_login", "username");
        await page.type("#user_password", "password")
        await page.click("text=Sign in")
        await page.pause();
    })


    test("Transfer funds", async ({page}) => {

       

        
    })
})