import { Page, Locator } from '@playwright/test';
import {Login} from './account/login/index'
import {Register} from './account/register/index'
import {userInfo} from "os";

export class HomePage {
    readonly page: Page;
    readonly registerLink: Locator;
    readonly loginLink: Locator;
    readonly searchBox: Locator;
    readonly searchButton: Locator;
    readonly categoryLevel1: Locator;
    readonly categoryLevel2: Locator;

    constructor(page: Page) {
        this.page = page;
        this.registerLink = page.locator('body > div.master-wrapper-page > div.header > div.header-upper > div.header-links-wrapper > div.header-links > ul > li:nth-child(1) > a');
        this.loginLink = page.locator('body > div.master-wrapper-page > div.header > div.header-upper > div.header-links-wrapper > div.header-links > ul > li:nth-child(2) > a');
        this.searchBox = page.locator('#small-searchterms');
        this.searchButton = page.locator('#small-search-box-form > button');
        this.categoryLevel1 = page.locator('body > div.master-wrapper-page > div.header-menu > ul.top-menu.notmobile > li:nth-child(1) > a');
        this.categoryLevel2 = page.locator('body > div.master-wrapper-page > div.header-menu > ul.top-menu.notmobile > li:nth-child(1) > ul > li:nth-child(1) > a');

    }


    async navigateToRegisterPage(): Promise<Register> {
        await this.registerLink.click();
        return new Register(this.page);
    }
    async goToHomePage(): Promise<void> {
     await this.page.goto('/');
     await this.registerLink.isVisible();
    }

    async navigateToLoginPage(): Promise<Login> {
        await this.loginLink.click();
        return new Login(this.page);
    }

    async selectSampleCategory(): Promise<void> {
        await this.categoryLevel1.click();
        await this.page.waitForTimeout(500);
        await this.categoryLevel2.click();
    }

    async searchProduct(searchKeyword: string): Promise<void> {
        await this.searchBox.fill(searchKeyword);
        await this.page.waitForTimeout(500);
        await this.searchButton.click();
    }
    async getPage(): Promise<Page> {
        return this.page;
    }
}