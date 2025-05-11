const { test } = require('@playwright/test');
const { Homepage } = require('../pages/Homepage');

test.beforeEach('Navigate to URL', async ({page}) => {
    const homepage = new Homepage(page);
    await homepage.navigate();
    await homepage.assertInHomepage();
});

test('Search Mentor & Assert', async ({page}) => {
    const homepage = new Homepage(page);
    await homepage.searchMentor("Anya Forger");
    await homepage.assertSearchMentor("Anya Forger");
});