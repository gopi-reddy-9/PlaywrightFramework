import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

    

    readonly email: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly loggedInUser: Locator;
    readonly loginError: Locator;

    constructor(page: Page) {

        super(page)

        this.email = page.locator("input[data-qa='login-email']");
        this.password = page.locator("input[data-qa='login-password']");
        this.loginButton = page.locator("button[data-qa='login-button']");
        this.loggedInUser = page.locator("a:has-text('Logged in as')");
        this.loginError = page.locator("p[style='color: red;']");

    }

    async login(email: string, password: string) {

        await this.email.fill(email);

        await this.password.fill(password);

        await this.loginButton.click();

    }

    async verifyLogin() {

        await expect(this.loggedInUser).toBeVisible();
        

    }
    async verifyInvalidLogin() {

    await expect(this.loginError)
        .toContainText("Your email or password is incorrect!");

}
}