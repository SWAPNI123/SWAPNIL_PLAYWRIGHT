const { readFileSync } = require('fs');
const path = require('path');
const Locators = require('../locators/Locators');

// Function to read credentials from CSV file
function getCredentials() {
    const csvPath = path.join(__dirname, '../data/credentials.csv');
    const csvData = readFileSync(csvPath, 'utf-8');
    const lines = csvData.split('\n');
    const [username, password] = lines[1].split(','); // Read second line for credentials
    return { username, password };
}

class Auth {
    constructor(page) {
        this.page = page;
        this.locators = new Locators(); // Initialize Locators
    }

    async login() {
        const { username, password } = getCredentials(); // Get credentials from CSV
        await this.page.goto('https://qairisadmin.nupipay.com/login'); 
        
        // Fill in the username and password fields
        await this.page.locator(this.locators.usernameField).fill(username);
        await this.page.locator(this.locators.passwordField).fill(password);
        await this.page.locator(this.locators.submitButton).click();
    }

    async verifyRuleEnginePage() {
        await this.page.locator(this.locators.nupipayImage).click(); 
        const pageName = await this.page.locator(this.locators.ruleEngineText).textContent(); 
        console.log(`This is ${pageName.toUpperCase()} page`);
    }

    async verifyDashBoardPage() {
        await this.page.locator(this.locators.DashBoard).click(); 
        await this.page.locator(this.locators.dashboardLink).click();
        const DashName = await this.page.locator(this.locators.DashText).textContent(); 

        console.log(`This is ${DashName.toUpperCase()} page`);
    }

    async verifyReportsPage() {
        await this.page.locator(this.locators.ReportsLink).click();
        const ReportsName = await this.page.locator(this.locators.ReportsText).textContent(); 
        console.log(`This is ${ReportsName.toUpperCase()} page`);
    }

    async verifyInviteCodePage() {
        await this.page.locator(this.locators.ProgramConsole).click();
        await this.page.locator(this.locators.InviteCode).click();
        const ReportsName = await this.page.locator(this.locators.InviteCodeText).textContent(); 
        console.log(`This is ${ReportsName.toUpperCase()} page`);
    }


}

module.exports = Auth;
