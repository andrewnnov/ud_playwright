import {test, expect} from "@playwright/test"

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
    
    //await page.pause();

    await page.click("(//div[@class='carousel__item__1'])[1]");
    //await page.pause();

    const categorias = await page.locator("//div[@class='ui-search-filter-dt-title shops-custom-primary-font' and text()='Categorías']");
    await expect(categorias).toBeVisible();

    await page.type("//div[@class='andes-form-control__control']//input[@name='Minimum']", "30000");
    //await page.pause();
    await page.type("//div[@class='andes-form-control__control']//input[@name='Maximum']", "50000");
    
    //await page.pause();
    //await page.pause();
    const buttonSubmitPrice = await page.locator("//button[@data-testid='submit-price']");
    await expect(buttonSubmitPrice).toBeVisible();
    buttonSubmitPrice.click();

    //await page.click("//button[@data-testid='submit-price']");
    //await page.pause();

    await page.click("//span[@class='ui-search-filter-name shops-custom-secondary-font' and text()='adidas']");
    //await page.pause();




})