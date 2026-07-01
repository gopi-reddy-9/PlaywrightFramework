import { test, expect } from '../fixtures/baseTest';

import { RandomData } from '../utils/randomdata';

test('@regression Account Registration', async ({

    homePage,

    registrationPage

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

});