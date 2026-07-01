import { test, expect } from '../fixtures/baseTest';

test('@smoke Add Product To Cart', async ({

    homePage,

    productPage,

    shoppingCartPage

}) => {



    await productPage.clickProducts();

    await productPage.verifyProductsPage();

    await productPage.searchProduct("Blue Top");

    await productPage.verifySearchedProductsHeading();

    await productPage.addProductToCart();

    await productPage.clickViewCart();

    await shoppingCartPage.verifyProduct("Blue Top");

});