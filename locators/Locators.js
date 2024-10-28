class Locators {
    constructor() {
        this.usernameField = 'input[id="field-:r0:"]';  // Selector for username input
        this.passwordField = 'input[id="field-:r1:"]';  // Selector for password input
        this.submitButton = 'button[type="submit"]';     // Selector for the submit button
        
        this.nupipayImage = "img[alt='Nupipay']"; 
        this.ruleEngineText = 'p[class="chakra-text css-j1h24u"]';

        this.DashBoard = 'p.chakra-text.css-144uysu:has-text("dashboard")';
        this.dashboardLink = 'a[href="/dashboard"]';
        this.DashText = '.chakra-text.css-j1h24u';

        this.ReportsLink = 'a[href="/reports"]';
        this.ReportsText = '.chakra-text.css-j1h24u';

        this.ProgramConsole = "button[id='accordion-button-:r10:']";
        this.InviteCode = 'a[href="/invite-code"]';
        this.InviteCodeText = '.chakra-text.css-j1h24u'




    }
}

module.exports = Locators;
