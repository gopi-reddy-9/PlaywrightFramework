import { test, expect } from '../fixtures/baseTest';

test('@smoke Login Test', async ({

    homePage,

    loginPage

}) => {

    await homePage.clickSignupLogin();

    await loginPage.login('ere6667r@gmail.com','1234');

    await loginPage.verifyLogin();

    
});