import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {

    

    readonly proceedToCheckoutButton: Locator;
    readonly deliveryAddress: Locator;
    readonly reviewOrderHeading: Locator;
    readonly commentBox: Locator;
    readonly placeOrderButton: Locator;

    constructor(page: Page) {

       super(page)

        this.proceedToCheckoutButton =
            page.locator("a.check_out");

        this.deliveryAddress =
            page.locator("#address_delivery");

        this.reviewOrderHeading =
            page.locator("#cart_items");

        this.commentBox =
            page.locator("textarea[name='message']");

        this.placeOrderButton =
            page.locator("a.check_out");

    }

    async clickProceedToCheckout() {

        await this.proceedToCheckoutButton.click();

    }

    async verifyDeliveryAddress() {

        await expect(this.deliveryAddress)
            .toBeVisible();

    }

    async verifyReviewOrder() {

        await expect(this.reviewOrderHeading)
            .toBeVisible();

    }

    async enterComment(comment: string) {

        await this.commentBox.fill(comment);

    }

    async clickPlaceOrder() {

        await this.placeOrderButton.click();

    }

}