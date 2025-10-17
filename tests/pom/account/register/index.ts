import { Page, Locator } from '@playwright/test';
import {Login} from "../login";

export class Register {
    readonly page: Page;

    // Your Personal Details
    readonly title: Locator;
    readonly maleOption: Locator;
    readonly femaleOption: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly email: Locator;

    //Company Details
    readonly companyNameField: Locator;

    //Options
    readonly newLetterCheckBox: Locator;

    //Your Password
    readonly passwordField: Locator;
    readonly confirmPasswordField: Locator;


    readonly registerButton: Locator;
    readonly message: Locator;
    readonly continueButton: Locator;

    // Error
    readonly  firstNameErrorMessage: Locator;
    readonly  lastNameErrorMessage: Locator;
    readonly  emailNameErrorMessage: Locator;
    readonly  passwordErrorMessage: Locator;
    readonly  confirmPasswordErrorMessage: Locator;



    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('#main > div > div > div > div.page-title > h1');
        this.maleOption = page.locator('#gender-male');
        this.femaleOption = page.locator('#gender-female');
        this.firstName = page.locator('#FirstName');
        this.lastName = page.locator('#LastName');
        this.email = page.locator('#Email');

        this.companyNameField = page.locator('#Company');
        this.newLetterCheckBox = page.locator('#Newsletter');
        this.passwordField = page.locator('#Password');
        this.confirmPasswordField = page.locator('#ConfirmPassword');

        this.registerButton = page.locator('#register-button');
        this.message = page.locator('#main > div > div > div > div.page-body > div.result');
        this.continueButton = page.locator('#main > div > div > div > div.page-body > div.buttons > a');

        this.firstNameErrorMessage = page.locator('#FirstName-error');
        this.lastNameErrorMessage = page.locator('#LastName-error');
        this.emailNameErrorMessage = page.locator('#Email-error');
        this.passwordErrorMessage = page.locator('#Password-error');
        this.confirmPasswordErrorMessage = page.locator('#ConfirmPassword-error');
    }

    async pageIsVisible(): Promise<void> {
        await this.title.isVisible();
    }

    async fillForm(sexOption: boolean, firstName: string, lastName: string, email: string, password: string, confirmPassword: string): Promise<void> {
        if(sexOption) {
            await this.maleOption.check();
        }
        else await this.femaleOption.check();
        await this.firstName.click();
        await this.firstName.fill(firstName);
        await this.lastName.click();
        await this.lastName.fill(lastName);
        await this.email.click();
        await this.email.fill(email);
        await this.passwordField.click();
        await this.passwordField.fill(password);
        await this.confirmPasswordField.click();
        await this.confirmPasswordField.fill(confirmPassword);
        await this.registerButton.click();
    }

    async isError(): Promise<boolean> {
        var firstNameError = await this.firstNameErrorMessage.isVisible();
        var lastNameError = await this.lastNameErrorMessage.isVisible();
        var emailNameError = await this.emailNameErrorMessage.isVisible();
        var passwordError = await this.passwordErrorMessage.isVisible();
        var confirmPasswordError = await this.confirmPasswordErrorMessage.isVisible();
        return firstNameError&&lastNameError&&emailNameError&&passwordError&&confirmPasswordError;
    }

    async getMessage(): Promise<string> {
        return await this.message.textContent();
    }
    async clickContinue(): Promise<void> {
        await this.continueButton.click();
    }
}