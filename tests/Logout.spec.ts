import { test } from '@playwright/test';

import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { LogoutPage } from '../pages/LogoutPage';

test.beforeEach(async ({ page }) => {

    const home = new HomePage(page);

    await home.openApplication();

});

test('Verify User Logout', async ({ page }) => {

    const home = new HomePage(page);

    const login = new LoginPage(page);

    const logout = new LogoutPage(page);

    

    await home.clickSignupLogin();

    await login.login(

        "ere6667r@gmail.com",

        "1234"

    );

    await login.verifyLogin();

    await home.clickLogout();

    await logout.verifyLogout();

});