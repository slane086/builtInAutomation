import { Builder, By, Capabilities, Key, until, WebDriver } from "selenium-webdriver";
import { BasePage } from "./basePage";
import { builtIn } from "./pageObjects";
const page = new builtIn()
const fs = require('fs')

describe('builtIn solo project', ()=> {
test("should look at the best places to work page and take a screenshot", async () => {
    await page.navigate()
    await page.driver.manage().window().maximize();
    await page.click(page.remoteBtn);
    await page.driver.sleep(3000);
    await page.click(page.clearBtn);
    await page.click(page.bestPlacesToWork);
    await fs.writeFile(`${__dirname}/bestwork.png`,
    await page.driver.takeScreenshot(), "base64", 
    (e) => {
        if (e) console.error(e)
        else console.log('Save Successful')
    })
    await page.driver.quit()
});
});