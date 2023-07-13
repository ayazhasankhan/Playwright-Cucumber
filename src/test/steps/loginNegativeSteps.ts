import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2)

Given('User navigates to the application', async function () {
    await fixture.page.goto(process.env.BASEURL);
    fixture.logger.info("Navigated to the application")
})

Given('User enter the username as {string}', async function (username) {
    await fixture.page.locator('[name="username"]').type(username);
});

Given('User enter the password as {string}', async function (password) {
    await fixture.page.locator('[name="password"]').type(password);
})

When('User click on the login button', async function () {
    await fixture.page.locator('[id="submit"]').click();
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
    await fixture.page.waitForTimeout(2000);
});


Then('verify {string}', async function (errorMessage) {
    const actualErrorMessage = await fixture.page.locator('[id="error"]').textContent();
    console.log("actualErrorMessage: " + actualErrorMessage);
    fixture.logger.info("actualErrorMessage: " + actualErrorMessage);
    await expect(fixture.page.locator('[id="error"]')).toContainText(errorMessage);
  
    
})
