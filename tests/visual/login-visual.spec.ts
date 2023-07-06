import {test} from "@playwright/test"
import { HomePage } from "../../page-objects/HomePage"
import { LoginPage } from "../../page-objects/LoginPage"

test.describe("Login page visual tests", () => {
    let homePage: HomePage;
    let loginPage: LoginPage;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);

        await homePage.visit();
        await homePage.clickOnSignIn();
    })

    test.only("Login Form", async ({page}) => {
        await loginPage.snapshotLoginForm();
    })

    test.only("Login error message", async ({page}) => {
        await loginPage.login("fail", "invalidpasswor");        
        await loginPage.snapshotErrorMessage();
    })
})