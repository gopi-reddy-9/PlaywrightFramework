import { test, expect } from '../fixtures/baseTest';

test('@smoke Search Product', async ({

    homePage,

    productPage

}) => {

    

    await productPage.clickProducts();

    await productPage.verifyProductsPage();

    await productPage.searchProduct("Blue Top");

    await productPage.verifySearchedProductsHeading();

});