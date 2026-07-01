import { test, expect } from '../fixtures/baseTest';

import { RandomData } from '../utils/RandomData';

test('@regression Complete End To End Flow', async ({

    homePage,

    registrationPage,

    loginPage,

    productPage,

    shoppingCartPage,

    checkoutPage,

    paymentPage

}) => {

    const firstName = RandomData.getFirstName();

    const email = RandomData.getEmail();

    const password = RandomData.getPassword();

    

    await homePage.clickSignupLogin();

    await registrationPage.enterRegistrationDetails(firstName, email);

    await registrationPage.clickSignup();

    await registrationPage.verifyEnterAccountInformationPage();

    await registrationPage.completeRegistration(password);

    await registrationPage.verifyAccountCreated();

    await registrationPage.clickContinue();

    await homePage.clickLogout();

    await homePage.clickSignupLogin();

    await loginPage.login(email, password);

    await loginPage.verifyLogin();

    await productPage.clickProducts();

    await productPage.verifyProductsPage();

    await productPage.searchProduct("Blue Top");

    await productPage.verifySearchedProductsHeading();

    await productPage.addProductToCart();

    await productPage.clickViewCart();

    await shoppingCartPage.verifyProduct("Blue Top");

    await checkoutPage.clickProceedToCheckout();

    await checkoutPage.verifyDeliveryAddress();

    await checkoutPage.enterComment("Playwright Automation");

    await checkoutPage.clickPlaceOrder();

    await paymentPage.makePayment();

    await paymentPage.verifyOrderPlaced();

});