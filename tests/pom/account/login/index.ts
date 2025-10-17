import { Page, Locator } from '@playwright/test';

export class Login {
    readonly page: Page;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly forgotPassword: Locator;
    readonly loginButton: Locator;
    readonly rememberMeCheckBox: Locator;
    readonly loginErrorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailField = page.locator('#Email');
        this.passwordField = page.locator('#Password');
        this.forgotPassword = page.locator('#main > div > div > div > div.page-body > div.customer-blocks > div.returning-wrapper.fieldset > form > div.form-fields > div.inputs.reversed > span > a');
        this.loginButton = page.locator('#main > div > div > div > div.page-body > div.customer-blocks > div.returning-wrapper.fieldset > form > div.buttons > button');
        this.rememberMeCheckBox = page.locator('#RememberMe');
        this.loginErrorMessage = page.locator('#main > div > div > div > div.page-body > div.customer-blocks > div.returning-wrapper.fieldset > form > div.message-error.validation-summary-errors');
    }

    async login(email: string,pasword: string): Promise<void> {
        await this.emailField.fill(email);
        await this.passwordField.fill(pasword);
        await this.loginButton.click();
    }

    async checkErrors(errorMessage:string) {
        return await this.loginErrorMessage.isVisible();
    }

}