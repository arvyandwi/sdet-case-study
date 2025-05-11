const { expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;
        this.txtEmail = page.locator("#basic_email");
        this.txtPassword = page.locator("#basic_password");
        this.btnLogin = page.locator("//span[text()='Sign In']");

        this.lblErrorEmptyEmail = page.locator("//div[text()='Missing email']");
        this.lblErrorEmptyPassword = page.locator("//div[text()='Missing password']");

        this.lblErrorInvalidEmail = page.locator("//div[text()='Invalid email format']");
        this.lblErrorInvalidPassword = page.locator("//div[text()='Password must be at least 8 characters']");
    }

    async assertInLoginPage() {
        await expect(this.page).toHaveTitle(/Sign In/);
    }

    async inputEmail(email) {
        await this.txtEmail.fill(email);
    }

    async inputPassword(password) {
        await this.txtPassword.fill(password);
    }

    async doLogin() {
        await this.btnLogin.click();
    }

    async assertErrorEmptyEmail() {
        await expect(this.lblErrorEmptyEmail).toHaveText("Missing email");
    }

    async assertErrorEmptyPassword() {
        await expect(this.lblErrorEmptyPassword).toHaveText("Missing password");
    }

    async assertErrorInvalidEmail() {
        await expect(this.lblErrorInvalidEmail).toHaveText("Invalid email format")
    }

    async assertErrorInvalidPassword() {
        await expect(this.lblErrorInvalidPassword).toHaveText("Password must be at least 8 characters']");
    }
}

module.exports = { LoginPage };