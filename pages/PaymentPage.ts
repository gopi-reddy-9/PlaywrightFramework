import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class PaymentPage extends BasePage {

    

    readonly nameOnCard: Locator;
    readonly cardNumber: Locator;
    readonly cvc: Locator;
    readonly expiryMonth: Locator;
    readonly expiryYear: Locator;
    readonly payButton: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {

        super(page)

        this.nameOnCard = page.locator("input[data-qa='name-on-card']");

        this.cardNumber = page.locator("input[data-qa='card-number']");

        this.cvc = page.locator("input[data-qa='cvc']");

        this.expiryMonth = page.locator("input[data-qa='expiry-month']");

        this.expiryYear = page.locator("input[data-qa='expiry-year']");

        this.payButton = page.locator("button[data-qa='pay-button']");

        this.successMessage = page.getByText('Congratulations! Your order has been confirmed!');

    }

    async makePayment() {

        await this.nameOnCard.fill("Gopi Reddy");

        await this.cardNumber.fill("4111111111111111");

        await this.cvc.fill("123");

        await this.expiryMonth.fill("12");

        await this.expiryYear.fill("2030");

        await this.payButton.click();

    }

    async verifyOrderPlaced() {

        await expect(this.successMessage)
            .toContainText("Congratulations! Your order has been confirmed!");
           

    }

}