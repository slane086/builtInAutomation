import { Builder, By, Capabilities, Key, until, WebDriver } from "selenium-webdriver";
import { BasePage } from "./basePage";
import { builtIn } from "./pageObjects";
const page = new builtIn()
const fs = require('fs')

describe('builtIn Solo Project', () =>{
test("Will it select the job, years of experience and look at the jobs, and take a screenshot", async () => {
    await page.navigate()
    await page.driver.manage().window().maximize();
    await page.click(page.jobCategoryHomeBtn);
    await page.click(page.designUX);
    await page.driver.sleep(3000)
    await page.click(page.yearOfExperienceBtn);
    await page.click(page.oneYearBtn);
    await page.click(page.jobMatches);
    await page.driver.sleep(2000)
    await fs.writeFile(`${__dirname}/jobsMatches.png`,
    await page.driver.takeScreenshot(), "base64", 
    (e) => {
        if (e) console.error(e)
        else console.log('Save Successful')
    })
    await page.driver.quit()
});
})