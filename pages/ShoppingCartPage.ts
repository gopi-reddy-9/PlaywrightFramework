import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';


export class ShoppingCartPage extends BasePage {

  

    readonly productName: Locator;
    readonly quantity: Locator;
    readonly price: Locator;
    readonly total: Locator;

    constructor(page: Page) {

        super(page)

        this.productName = page.locator(".cart_description h4 a");

        this.quantity = page.locator(".cart_quantity button");

        this.price = page.locator(".cart_price p");

        this.total = page.locator(".cart_total p");

    }

    async verifyProduct(product: string) {

        await expect(this.productName)
            .toContainText(product);

    }

    async verifyQuantity(quantity: string) {

        await expect(this.quantity)
            .toHaveText(quantity);

    }

    async verifyPrice() {

        await expect(this.price)
            .toBeVisible();

    }

    async verifyTotal() {

        await expect(this.total)
            .toBeVisible();

    }

}