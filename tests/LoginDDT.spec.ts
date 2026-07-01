import { test } from '@playwright/test';

import loginData from '../test-data/logindata.json';

import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

for (const data of loginData) {

    test(`Login Test - ${data.email}`, async ({ page }) => {

        const home = new HomePage(page);

        const login = new LoginPage(page);

        await home.openApplication();

        await home.clickSignupLogin();

        await login.login(

            data.email,

            data.password

        );

        if (data.expected === "valid") {

            await login.verifyLogin();

        }

        else {

            await login.verifyInvalidLogin();

        }

    });

}