import { Page, Locator, expect } from '@playwright/test';

export class LogoutPage {

    readonly page: Page;

    readonly loginHeading: Locator;

    constructor(page: Page) {

        this.page = page;

        this.loginHeading = page.getByText("Login to your account");

    }

    async verifyLogout() {

        await expect(this.loginHeading).toBeVisible();

    }

}