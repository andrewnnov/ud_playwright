import {test, expect} from "@playwright/test"
import { HomePage } from "../../page-objects/HomePage"
import { LoginPage } from "../../page-objects/LoginPage"


test.describe("Currency Exchange form",  () => {
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




