const { expect } = require('@playwright/test');

class RegisterPage {
    constructor(page) {
        this.page = page;
        this.lblRegisterJobseeker = page.locator("//h3[text()='Job-Seeker / Mentee']/following::a[1]");
        this.lblRegisterMentor = page.locator("//h3[text()='Mentor']/following::a[2]");
        this.lblRegisterEmployer = page.locator("//h3[text()='Employer']/following::a[3]");
    }

    async assertInRegisterPage() {
        await expect(this.page).toHaveTitle(/Register/);
    }

    async clickRegisterAsJobseeker() {
        await this.lblRegisterJobseeker.click();
    }

    async clickRegisterAsMentor() {
        await this.lblRegisterMentor.click();
    }

    async clickRegisterAsEmployer() {
        await this.lblRegisterEmployer.click();
    }
}

module.exports = { RegisterPage };