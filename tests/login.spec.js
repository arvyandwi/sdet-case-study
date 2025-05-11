const { test } = require('@playwright/test');
const { Homepage } = require('../pages/Homepage');
const { LoginPage } = require('../pages/LoginPage');

test.beforeEach('Navigate to URL', async ({page}) => {
    const homepage = new Homepage(page);
    await homepage.navigate();
    await homepage.assertInHomepage();
    await homepage.clickLogin();
});

test('Login Negative Empty Scenario', async ({page}) => {
    const login = new LoginPage(page);
    await login.assertInLoginPage();
    await login.doLogin();
    await login.assertErrorEmptyEmail();
    await login.assertErrorEmptyPassword();
});

test('Login Negative Empty Email Scenario', async ({page}) => {
    const login = new LoginPage(page);
    await login.assertInLoginPage();
    await login.inputPassword("password");
    await login.doLogin();
    await login.assertErrorEmptyEmail();
});

test('Login Negative Empty Password Scenario', async ({page}) => {
    const login = new LoginPage(page);
    await login.assertInLoginPage();
    await login.inputEmail("johndoe@gmail.com");
    await login.doLogin();
    await login.assertErrorEmptyPassword();
});

test('Login Negative Invalid Email Scenario', async ({page}) => {
    const login = new LoginPage(page);
    await login.assertInLoginPage();
    await login.inputEmail("johndoe@");
    await login.inputPassword("password");
    await login.doLogin();
    await login.assertErrorInvalidEmail();
});

test('Login Negative Password Less than 8 Characters Scenario', async ({page}) => {
    const login = new LoginPage(page);
    await login.assertInLoginPage();
    await login.inputEmail("johndoe@gmail.com");
    await login.inputPassword("pass");
    await login.doLogin();
    await login.assertErrorInvalidPassword();
});

