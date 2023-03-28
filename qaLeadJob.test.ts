import { Builder, By, Capabilities, Key, until, WebDriver } from "selenium-webdriver";
import { BasePage } from "./basePage";
import { builtIn } from "./pageObjects";
const page = new builtIn()
const fs = require('fs')

describe('builtIn solo project', () => {
test("Will search for Remote Jobs on the builtIn website", async () => {
    await page.navigate()
    await page.driver.manage().window().maximize();
    await page.driver.sleep(3000);
    await page.click(page.searchBtn)
    await page.click(page.viewAllJobs);
    await page.driver.sleep(3000);
    await page.click(page.jobCategorySearch);
    await page.click(page.designUXSearch);
    await page.driver.sleep(2000)
    await page.click(page.experienceBtn);
    await page.click(page.entryLevelBtn);
    await page.driver.sleep(2000)
    await page.click(page.companySize)
    await page.click(page.oneThousandEmployees)
    await page.driver.sleep(2000)
    await page.click(page.epicGamesSearch);
    await page.click(page.qaLeadJob)
    await fs.writeFile(`${__dirname}/qaleadjob.png`,
    await page.driver.takeScreenshot(), "base64", 
    (e) => {
        if (e) console.error(e)
        else console.log('Save Successful')
    })
    await page.driver.quit()
});
})