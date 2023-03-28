import { Builder, By, Capabilities, Key, until, WebDriver } from "selenium-webdriver";
import { BasePage } from "./basePage";
import { builtIn } from "./pageObjects";
const page = new builtIn()
const fs = require('fs')

describe('builtIn solo project', () => {
test("should scroll through different jobs and then navigate to the facebook page", async () => {
    await page.navigate()
    await page.driver.manage().window().maximize();
    await page.click(page.techCompanies)
    await page.driver.sleep(3000);
    await page.click(page.nextArrow);
    await page.click(page.nextArrow);
    await page.driver.sleep(3000)
    await page.click(page.homeBtn)
    await page.click(page.faceBookBtn);
    await page.driver.sleep(2000)
    await page.tabSwitch()
    await page.driver.quit()
});
})