import { test, expect } from '@playwright/test';
import {Login} from "../../../pom/account/login";
import {HomePage} from "../../../pom";
import {Register} from "../../../pom/account/register";


test.describe('Register Functionality', () => {
    let homePage: HomePage;
    let registerPage: Register

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        homePage.goToHomePage();
        registerPage = await homePage.navigateToRegisterPage();
    });

    test('User can register to system with non-existed email', async ({ page },testInfo) => {
        await registerPage.pageIsVisible();
        await registerPage.fillForm(true,'Test', 'Test', 'Test123@getnada.com',"Abcd1234","Abcd1234");

        // Take screenshot
        let screenshotBuffer1 = await page.screenshot();
        await testInfo.attach('Screenshot - Fill Info', {
            body: screenshotBuffer1,
            contentType: 'image/png',
        });
        let error = await registerPage.isError();
        await expect(error).toEqual(false)
        // Take screenshot
        let screenshotBuffer2 = await page.screenshot();
        await testInfo.attach('Screenshot - Message Screen', {
            body: screenshotBuffer2,
            contentType: 'image/png',
        });
        await registerPage.clickContinue();
    });
});