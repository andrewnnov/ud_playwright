import {test, expect} from "@playwright/test"

test.describe("Login / Logout Flow", () => {

    //before hook
    test.beforeEach(async ({page}) => {
        await page.goto('http://zero.webappsecurity.com/');
    })

    //negative

    test("Negative scenario for login", async ({page}) => {
        await page.click("#signin_button")
        await page.type("#user_login", "invalid username");
        await page.type("#user_password", "invalid password")
        await page.click("text=Sign in")

        const errorMessage = await page.locator(".alert-error");
        await expect(errorMessage).toContainText("Login and/or password are wrong.");  
    })

    //positive
    test("Positive scenario for login + logout", async ({page}) => {
        await page.click("#signin_button")
        await page.type("#user_login", "username");
        await page.type("#user_password", "password")
        await page.click("text=Sign in")
        //await page.pause();
        const accountSummaryTab = await page.locator("#account_summary_tab");
        await expect(accountSummaryTab).toBeVisible();    
        
        await page.goto("http://zero.webappsecurity.com/logout.html");
        await expect(page).toHaveURL('http://zero.webappsecurity.com/index.html');
    })
})





