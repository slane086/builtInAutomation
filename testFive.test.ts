import { Builder, By, Capabilities, Key, until, WebDriver } from "selenium-webdriver";
import { BasePage } from "./basePage";
import { builtIn } from "./pageObjects";
const page = new builtIn()
const fs = require('fs')

test("", async () => {
    await page.navigate()
    await page.driver.manage().window().maximize();
    await page.driver.sleep(3000);
    await fs.writeFile(`${__dirname}/IrishCoffee.png`,
    await page.driver.takeScreenshot(), "base64", 
    (e) => {
        if (e) console.error(e)
        else console.log('Save Successful')
    })
    await page.driver.quit()
});