import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';


export class ProductPage extends BasePage {

    readonly productsLink: Locator;
    readonly searchBox: Locator;
    readonly searchButton: Locator;
    readonly searchedProductsHeading: Locator;
    readonly searchedProduct: Locator;
    readonly addToCartButton: Locator;
    readonly viewCartButton: Locator;

    constructor(page: Page) {

        super(page)

        this.productsLink = page.locator("a[href='/products']");
        this.searchBox = page.locator("#search_product");
        this.searchButton = page.locator("#submit_search");
        this.searchedProductsHeading = page.locator("h2.title.text-center");
        this.searchedProduct = page.locator(".productinfo p");
        this.addToCartButton = page.locator("a[data-product-id]").first();

        this.viewCartButton = page.locator("u:text('View Cart')");

    }

    async clickProducts() {
        await this.productsLink.waitFor();
        await this.productsLink.click();

    }

    async verifyProductsPage() {

        await expect(this.page).toHaveURL(/products/);

    }

    async searchProduct(productName: string) {

        await this.searchBox.fill(productName);

        await this.searchButton.click();

    }

    async verifySearchedProductsHeading() {

        await expect(this.searchedProductsHeading)
            .toHaveText("Searched Products");

    }

    async verifyProduct(productName: string) {

        await expect(this.searchedProduct.first())
            .toContainText(productName);

    }

    async addProductToCart() {

        await this.addToCartButton.click();

    }

    async clickViewCart() {

        await this.viewCartButton.click();

    }

}