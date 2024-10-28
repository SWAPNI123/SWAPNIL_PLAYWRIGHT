// Test.spec.js
const { test, expect } = require('@playwright/test');
const Auth = require('../Auth/auth');

test('User can sign in and log out', async ({ page }) => {
    const auth = new Auth(page);
    await auth.login(); 
    await page.waitForLoadState('networkidle');

    await expect(page.locator('button:has-text("Log out")')).toBeVisible();

    const title = await page.title();
    console.log("Page title after login: " + title);
   expect(title).toBe('Iris Admin Portal');

    const pageUrl = page.url();
    console.log("Page URL after logged in is: " + pageUrl);
    expect(pageUrl).toBe('https://qairisadmin.nupipay.com/');

    await auth.verifyRuleEnginePage(); 

    await auth.verifyDashBoardPage();

    await auth.verifyReportsPage();

    await auth.verifyInviteCodePage();

    await page.locator('button:has-text("Log out")').click(); 


    const logOutUrl = page.url();
    console.log(logOutUrl);
});
