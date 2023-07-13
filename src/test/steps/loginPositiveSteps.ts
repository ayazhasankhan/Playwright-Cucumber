import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2)

Given('User go to the application', async function () {
    await fixture.page.goto(process.env.BASEURL);
    fixture.logger.info("Go to the application")
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


Then('Login should be success', async function () {
    const actualSuccessMessage = await fixture.page.locator('[class="post-title"]').textContent();
    console.log("actualErrorMessage: " + actualSuccessMessage);
    fixture.logger.info("actualErrorMessage: " + actualSuccessMessage);
    await expect(fixture.page.locator('[class="post-title"]')).toContainText("Logged In Successfully");
  
    
})
