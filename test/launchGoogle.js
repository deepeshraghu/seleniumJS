const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');
require('chromedriver'); // Import Chromedriver

describe('Launch Google', function () {
    this.timeout(30000); // Set a timeout in case the browser takes time to load

    let driver;

    before(async () => {
        const chrome = require('selenium-webdriver/chrome');
        const options = new chrome.Options().headless(); // Add headless option
        driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
 // Launch Chrome browser
    });

    after(async () => {
        await driver.quit(); // Quit the browser after test
    });

    it('should open Google and verify the title', async () => {
        // Open Google
        await driver.get('https://www.google.com');

        // Wait until the title contains 'Google'
        await driver.wait(until.titleContains('Google'), 5000);

        // Get the page title and assert
        const title = await driver.getTitle();
        console.log('Page title is: ' + title);
        expect(title).to.equal('Google');
    });
});
