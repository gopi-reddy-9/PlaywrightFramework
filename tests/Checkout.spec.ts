import { test } from '@playwright/test';

import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { ShoppingCartPage } from '../pages/ShoppingCartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('@regession Verify Checkout Flow', async ({ page }) => {

    const home = new HomePage(page);

    const login = new LoginPage(page);

    const product = new ProductPage(page);

    const cart = new ShoppingCartPage(page);

    const checkout = new CheckoutPage(page);

    await home.openApplication();

    await home.clickSignupLogin();

    await login.login(

        "ere6667r@gmail.com",

        "1234"

    );

    await login.verifyLogin();

    await product.clickProducts();

    await product.searchProduct("Blue Top");

    await product.addProductToCart();

    await product.clickViewCart();

    await cart.verifyProduct("Blue Top");

    await checkout.clickProceedToCheckout();

    await checkout.verifyDeliveryAddress();

    await checkout.verifyReviewOrder();

    await checkout.enterComment("Automation Order");

    await checkout.clickPlaceOrder();

});