const { test } = require('@playwright/test');
const { Homepage } = require('../pages/Homepage');
const { RegisterPage } = require('../pages/RegisterPage');
const { RegisterJobseekerPage } = require('../pages/RegisterJobseekerPage');

test.beforeEach('Navigate to URL', async ({page}) => {
    const homepage = new Homepage(page);
    await homepage.navigate();
    await homepage.assertInHomepage();
    await homepage.clickRegister();
});

test('Register and Return to Previous Screen Scenario', async ({page}) => {
    const register = new RegisterPage(page);
    await register.assertInRegisterPage();
    await register.clickRegisterAsJobseeker();

    const registerJobseeker = new registerJobseekerPage(page);
    await registerJobseeker.assertInregisterJobseekerPage();
    await registerJobseeker.clickBack();

    await register.assertInRegisterPage();
});

test('Register, Empty Username, Disabled Button and Return to Previous Screen Scenario', async ({page}) => {
    const register = new RegisterPage(page);
    await register.assertInRegisterPage();
    await register.clickRegisterAsJobseeker();

    const registerJobseeker = new RegisterJobseekerPage(page);
    await registerJobseeker.assertInregisterJobseekerPage();
    await registerJobseeker.assertButtonNextDisabledWhenEmpty();
    await registerJobseeker.inputUsername("john doe");
    await registerJobseeker.clearUsername();
    await registerJobseeker.assertUsernameIsRequired();
    await registerJobseeker.clickBack();

    await register.assertInRegisterPage();
});
