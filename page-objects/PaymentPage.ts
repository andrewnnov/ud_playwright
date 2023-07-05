import { expect, Locator, Page } from "@playwright/test";


export class PaymentPage {
    readonly page: Page;
    readonly paySelectBox: Locator;
    readonly payDetailButton: Locator;
    readonly payDetail: Locator;
    readonly accountSelectBox: Locator;
    readonly acamountInput: Locator;
    readonly dateInput: Locator;
    readonly descriptionInput: Locator;
    readonly submitPaymentButton: Locator;
    readonly message: Locator;

    constructor(page: Page) {
        this.page = page;
        this.paySelectBox = page.locator("#sp_payee");
        this.payDetailButton = page.locator("#sp_get_payee_details");
        this.payDetail = page.locator("#sp_payee_details");
        this.acamountInput = page.locator("#sp_amount")
        this.accountSelectBox = page.locator("#sp_account");
        this.dateInput = page.locator("#sp_date");
        this.descriptionInput = page.locator("#sp_description");
        this.submitPaymentButton = page.locator("#pay_saved_payees");
        this.message = page.locator("#alert_content > span")
    }

    async createPayment() {
        await this.paySelectBox.selectOption('apple');
        await this.payDetailButton.click();
        await expect(this.payDetail).toBeVisible();
        await this.accountSelectBox.selectOption("6");
        await this.acamountInput.type("5000");
        await this.dateInput.type("2021-11-09");
        await this.descriptionInput.type("Some message");
        await this.submitPaymentButton.click();
    }

    async assertSuccessMessage() {
        await expect(this.message).toBeVisible();
        await expect(this.message).toContainText('The payment was successfully submitted.');
    }




}