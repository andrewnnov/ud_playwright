import { expect, test } from "@playwright/test";
import { HomePage } from "../../page-objects/HomePage";
import { LoginPage } from "../../page-objects/LoginPage";


test.describe.only("Filter Transaction", () => {
    let homePage: HomePage;
    let loginPage: LoginPage;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);

        homePage.visit();
        homePage.clickOnSignIn();
        loginPage.login("username", "password");

    })
})