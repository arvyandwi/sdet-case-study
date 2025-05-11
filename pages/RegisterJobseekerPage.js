const { expect } = require('@playwright/test');

class RegisterJobseekerPage {
    constructor(page) {
        this.page = page;
        this.txtUsername = page.locator("#fullName");
        this.btnBack = page.locator("//button/span[text()='Kembali']");
        this.btnNext = page.locator("//button/span[text()='Selanjutnya']");

        this.lblRequired = page.locator("//div[text()='Required']");

        this.dropdownStatus = page.locator("#jobSearchStatus");
        this.txtWhatsAppNumber = page.locator("#whatsapp");
        this.txtEmail = page.locator("#email");
        this.txtCampus = page.locator("#campus");
        this.txtExperience = page.locator("#eligibility");

        this.btnUploadCV = page.locator("//p[contains(text(), 'Upload')]");
        this.btnSkipCV = page.locator("//p[contains(text(), 'Skip')]");

        this.txtCompanyName = page.locator("#companyName");
        this.txtRoleLevel = page.locator("#roleLevel");
        this.txtRoleName = page.locator("#roleName");
        this.txtStartDate = page.locator("#startDate");
        this.txtEndDate = page.locator("#endDate");
        this.chkOccupied = page.locator("[value='occupied']");

        this.txtPassword = page.locator("#password");
        this.txtConfirmPassword = page.locator("#passwordConfirmation");
        this.chkPrivacyPolicy = page.locator("#checkPrivacyPolicy");
    }

    async assertInRegisterJobseekerPage() {
        await expect(this.txtUsername).toBeVisible();
    }

    async clickBack() {
        await this.btnBack.click();
    }

    async clickNext() {
        await this.btnNext.click();
    }

    async assertButtonNextDisabledWhenEmpty() {
        await expect(this.btnNext).toBeDisabled();
    }

    async clearUsername() {
        await this.txtUsername.press("Control+A");
        await this.txtUsername.press("Backspace");
    }

    async inputUsername(username) {
        await this.txtUsername.fill(username);
    }

    async assertUsernameIsRequired() {
        await expect(this.lblRequired).toHaveText("Required");
    }

    async selectJobSearchStatus(status) {
        await this.dropdownStatus.selectOption(status);
    }

    async inputWhatsAppNumber(wanumber) {
        await this.txtWhatsAppNumber.fill(wanumber);
    }

    async inputEmail(email) {
        await this.txtEmail.fill(email);
    }

    async inputCampus(campus) {
        await this.txtCampus.fill(campus);
        await this.txtCampus.press("Enter");
    }

    async selectExperience(experience) {
        await this.txtExperience.selectOption(experience);
    }

    async uploadCV() {
        await this.btnUploadCV.click();
    }

    async skipCV() {
        await this.btnSkipCV.click();
    }

    async inputCompanyName(companyName) {
        await this.txtCompanyName.fill(companyName);
        await this.txtCampus.press("Enter");
    }

    async inputRoleLevel(roleLevel) {
        await this.txtRoleLevel.fill(roleLevel);
        await this.txtCampus.press("Enter");
    }

    async inputRoleName(roleName) {
        await this.txtRoleName.fill(roleName);
        await this.txtCampus.press("Enter");
    }

    async inputStartDate(month, year) {
        await this.txtStartDate(month);
        await this.txtStartDate(year);
    }

    async inputEndDate(endDate) {
        await this.txtEndDate(endDate);
    }

    async checkOccupied() {
        await this.chkOccupied.click();
        await expect(this.chkOccupied).toBeChecked();
    }

    async inputPassword(password) {
        await this.txtPassword.fill(password);
    }

    async inputConfirmPassword(password) {
        await this.txtConfirmPassword.fill(password);
    }

    async checkPrivacyPolicy() {
        await this.chkPrivacyPolicy.click();
        await expect(this.chkPrivacyPolicy).toBeChecked();
    }
}

module.exports = { RegisterJobseekerPage };