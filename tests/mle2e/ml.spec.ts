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

    const elemMinim = await page.locator("//div[@class='andes-form-control__control']//input[@name='Minimum']");
    await elemMinim.waitFor();
    await elemMinim.focus();
    await page.keyboard.type("30000", {delay: 500});
    //await page.pause();


    const elemMax = await page.locator("//div[@class='andes-form-control__control']//input[@name='Maximum']");
    await elemMax.waitFor();
    await elemMax.focus();
    await page.keyboard.type("50000", {delay: 500});
    //await page.pause();
    
    
    const priceButton = await page.locator("//button[@data-testid='submit-price']");
    await priceButton.waitFor();
    await priceButton.click();

    //await page.pause();
    

    
    // await page.type("//div[@class='andes-form-control__control']//input[@name='Maximum']", "50000");

    const filterForUn = await page.locator("//a[@aria-label='Puma']//ancestor::ul//li[last()]");
    await filterForUn.waitFor();
    await filterForUn.focus();
    await filterForUn.click();

    await page.pause();

    const adidasFilter = await page.locator("//span[@class='ui-search-filter-name shops-custom-secondary-font' and text()='adidas']");
    await adidasFilter.waitFor();

    await page.pause();

    await adidasFilter.click()

    
    // await page.locator("//button[@data-testid='submit-price']").dispatchEvent('click');
    //await page.pause();

    const elements =  await page.$$("//li[@class='ui-search-layout__item']");

    console.log((elements).length);

    //await page.pause();

    // for (let elem of elements) {

    //     const atrValue = await elem.$
    //     console.log(atrValue);
    // }

    const elemAdid = await page.locator("(//li[@class='ui-search-layout__item']//a[@title='Zapatillas adidas Galaxy 6 9339 Mark'])[1]");
    await elemAdid.click();

    //await page.pause();

    const opinionElem = await page.locator("//h2[@class='ui-review-capability__header__title']");
    await opinionElem.waitFor();

    const tmpThumUp = await page.locator("(//button[@type='button' and @data-testid='like-button'])[1]");
    await tmpThumUp.waitFor();
    await expect(tmpThumUp).toBeEnabled();

    await tmpThumUp.click();
    await tmpThumUp.click();
    
    await page.pause();









    
    

    

    // await page.click("//span[@class='ui-search-filter-name shops-custom-secondary-font' and text()='adidas']");
    




})