import {test, expect} from '@playwright/test'
import { loadHomePage, assertTitle } from './helpers/helpers';

test('Simple basic test', async ({page}) => {
    await page.goto('https://www.example.com');
    const pageTitle = await page.locator('h1');
    await expect(pageTitle).toContainText("Example Domain");
})

test('Clicking on Elements', async ({page}) => {
    await page.goto('http://zero.webappsecurity.com/index.html');
    await page.click('#signin_button');
    await page.click('text=Sign in')
    const errorMessage = await page.locator('.alert-error');
    await expect(errorMessage).toContainText('Login and/or password are wrong.');
})

test.skip("Selectors", async ({page}) => {
    //text
    await page.click('text=some text')
    //css selector
    await page.click('button')
    await page.click('#id')
    await page.click('.class')

    //only visible css selector
    await page.click('.submit-button: visible')

    //combinations
    await page.click('#username .first')

    //xpath
    await page.click("//button")

})

test.describe("My first test suit", () => {

    test("Assertions @myTag", async ({page}) => { //we use npx ..... --grep @myTag opposit npx playwright test --grep-invert @myTag
        await page.goto('https://www.example.com');
        await expect(page).toHaveURL('https://www.example.com');
        await expect(page).toHaveTitle('Example Domain');
    
        const element = await page.locator('h1')
        await expect(element).toBeVisible();
        await expect(element).toHaveText("Example Domain");
        await expect(element).toHaveCount(1);
    
        const notExistingElement = await page.locator('h5');
        await expect(notExistingElement).not.toBeVisible();
    })

    test("Working with imputs @myTag", async ({page}) => {
        await page.goto('http://zero.webappsecurity.com/index.html');
        await page.click('#signin_button');
    
        await page.type('#user_login', 'some username');
        await page.type('#user_password', 'some password');
    
        await page.click("//input[@name='submit']");
    
        const errorMessage = await page.locator('.alert-error');
        await expect(errorMessage).toContainText('Login and/or password are wrong.');
    })

})

test("Mercado libre", async ({page}) => {
    //test.setTimeout(120000);
    await page.goto('https://www.mercadolibre.com.ar/');     
    await page.click("//button[text()='Aceptar cookies']");    
    await page.locator("//a[@class='nav-menu-categories-link']").hover();     
    const modaElement = await page.locator("//div[@class='nav-categs']//li/a[text()='Moda']");
    modaElement.click();
    await page.waitForURL("https://www.mercadolibre.com.ar/c/ropa-y-accesorios#menu=categories");
    const carusItem = await page.locator("//div[@class='carousel__item__3']//h3[text()='OFERTAS DEL DÍA']");
    await expect(carusItem).toBeVisible();   

})

test.describe.parallel.only("Hooks", () => {

    test.beforeEach(async ({page}) => {
        await page.goto('https://www.example.com');
    })   

    test("Screenshots", async ({page}) => {        
        await page.screenshot({path: 'screnshot.png', fullPage: true})
    })
    
    test("Single element screenshot", async ({page}) => {        
        const element = await page.$('h1');
        await element?.screenshot({path: "single_element_screenshot.png"})
    })

})


test("Custom helpers", async ({page}) => {
    await loadHomePage(page);    
    await assertTitle(page);
})






