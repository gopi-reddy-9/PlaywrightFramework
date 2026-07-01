import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {

    

    readonly signupLoginLink: Locator;
    readonly productsLink: Locator;
    readonly cartLink: Locator;
    readonly contactUsLink: Locator;
    readonly homeLink: Locator;
    readonly logoutLink: Locator;
    readonly loggedInUser: Locator;
    

    
    constructor(page:Page){
        super(page)

        this.signupLoginLink = page.locator("a[href='/login']");
        this.productsLink = page.locator("a[href='/products']");
        this.cartLink = page.locator("a[href='/view_cart']");
        this.contactUsLink = page.locator("a[href='/contact_us']");
        this.homeLink = page.locator("a[href='/']");
        this.logoutLink = page.locator("a[href='/logout']");
        this.loggedInUser = page.locator("a:has-text('Logged in as')");

    
    }
    async openApplication() {

        await this.page.goto(process.env.BASE_URL!);

    }

    async clickSignupLogin() {

        await this.signupLoginLink.click();

    }

    async clickProducts() {

        await this.productsLink.click();

    }

    async clickCart() {

        await this.cartLink.click();

    }
    async clickLogout() {

        await this.logoutLink.click();

    }

    async verifyLoggedInUser() {

        await this.loggedInUser.isVisible();

    }

}