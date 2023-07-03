import {test, expect} from "@playwright/test"
import { LoginPage } from "../../page-objects/LoginPage";
import { HomePage } from "../../page-objects/HomePage";

test.describe.parallel.only("Login / Logout Flow", () => {

    let loginPage: LoginPage;
    let homePage: HomePage;

    //before hook
    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);  
        homePage = new HomePage(page);     
        await homePage.visit();
    })

    //negative

    test("Negative scenario for login", async ({page}) => {        
        await homePage.clickOnSignIn();      
        await loginPage.login("invalidusername", "invalidpassword");
        await loginPage.assertErrorMessage();

         
    })

    //positive
    test("Positive scenario for login + logout", async ({page}) => {
        await homePage.clickOnSignIn();        
        await loginPage.login("username", "password");       

        const accountSummaryTab = await page.locator("#account_summary_tab");
        await expect(accountSummaryTab).toBeVisible();    
        
        await page.goto("http://zero.webappsecurity.com/logout.html");
        await expect(page).toHaveURL('http://zero.webappsecurity.com/index.html');
    })
})





