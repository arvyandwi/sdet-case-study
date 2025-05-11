const { expect } = require('@playwright/test');

class Homepage {
    constructor(page) {
        this.page = page;
        this.url = "https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring";
        this.btnLogin = page.locator("#dealls-navbar-login-btn");
        this.btnRegister = page.locator("#dealls-navbar-register-btn");

        this.btnAvatar = page.locator(".ant-avatar");
        this.btnLogout = page.locator("//span[text()='Keluar']");

        this.txfSearch = page.locator("#searchMentor");

        this.btnCloseModal = page.locator(".ant-modal-close-x");
    }

    async navigate() {
        await this.page.goto(this.url);
    }

    async assertInHomepage() {
        await expect(this.page).toHaveTitle(/Tingkatkan Karirmu Bersama/);
    }

    async clickLogin() {
        await this.btnLogin.click();
    }

    async clickRegister() {
        await this.btnRegister.click();
    }

    async searchMentor(search) {
        await this.txfSearch.fill(search);
    }

    async assertSearchMentor(search) {
        await expect(this.page.locator(`//h4[text()='${search}']`)).toBeVisible();
    }

    async closeModal() {
        await this.btnCloseModal.click();
    }

    async doLogout() {
        await this.btnAvatar.click();
        await this.btnLogout.click();
    }
}

module.exports = { Homepage };