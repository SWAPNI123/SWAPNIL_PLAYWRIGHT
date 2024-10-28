// Test.spec.js
const { test, expect } = require('@playwright/test');

test('Login', async ({ page }) => {

    await page.goto("https://qairisadmin.nupipay.com/login");

    await page.locator('input[id="field-:r0:"]').fill("9892737030");
    await page.locator('input[id="field-:r1:"]').fill("Alex@1234");
    await page.locator('button[type="submit"]').click();
    await page.waitForLoadState('networkidle');




    await expect(page.locator('button:has-text("Log out")')).toBeVisible();

    await page.locator("img[alt='Nupipay']").click();


    const title = await page.title();
    console.log("Page title after login: " + title);

    const pageUrl = page.url();
    console.log("Page URL is: " + pageUrl);


   //await page.locator('p.chakra-text.css-144uysu:has-text("dashboard")').click();
   //await page.locator('a[href="/dashboard"]').click();
   //console.log (await page.locator('.chakra-text.css-j1h24u').textContent()); 

   await page.locator("button[id='accordion-button-:r10:']").click();
    await page.locator('a[href="/invite-code"]').click();
    console.log (await page.locator('.chakra-text.css-j1h24u').textContent()); 



   

    await page.locator('button:has-text("Log out")').click(); 

    const logOutUrl = page.url();
    console.log(logOutUrl);
});
