import { test as base, expect } from '@playwright/test';

import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { ProductPage } from '../pages/ProductPage';
import { ShoppingCartPage } from '../pages/ShoppingCartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { PaymentPage } from '../pages/PaymentPage';

type MyFixtures = {

    homePage: HomePage;

    loginPage: LoginPage;
    
    registrationPage: RegistrationPage;

    productPage: ProductPage;

    shoppingCartPage: ShoppingCartPage;

    checkoutPage: CheckoutPage;

    paymentPage: PaymentPage;


};

export const test = base.extend<MyFixtures>({

    homePage: async ({ page }, use) => {

        await use(new HomePage(page));

    },

    loginPage: async ({ page }, use) => {

        await use(new LoginPage(page));

    },
    registrationPage: async ({ page }, use) => {

        await use(new RegistrationPage(page));

    },

    productPage: async ({ page }, use) => {

        await use(new ProductPage(page));

    },

    shoppingCartPage: async ({ page }, use) => {

        await use(new ShoppingCartPage(page));

    },

    checkoutPage: async ({ page }, use) => {

        await use(new CheckoutPage(page));

    },

    paymentPage: async ({ page }, use) => {

        await use(new PaymentPage(page));

    }

});
test.beforeEach(async ({ homePage }) => {

    await homePage.openApplication();

});
test.afterEach(async () => {

    console.log("Test Completed");

});

export { expect };