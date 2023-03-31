import { Builder, By, Capabilities, Key, until, WebDriver } from "selenium-webdriver";
import { BasePage } from "./basePage";
import { builtIn } from "./pageObjects";
const page = new builtIn()
const fs = require('fs')

describe('builtIn solo project', ()=> {
    test("should look at the salary information and take a screenshot", async () => {
    await page.navigate()
    await page.driver.manage().window().maximize();
    await page.driver.sleep(3000)
    await page.click(page.searchBtn)
    await page.setInput(page.searchBar, 'Cloud Data Architect')
    await page.click(page.searchAllJobs);
    await page.driver.sleep(3000)
    await page.click(page.jobCategorySearch)
    await page.click(page.internshipButton);
    await page.click(page.experienceBtn)
    await page.click(page.entryLevelBtn)
    await page.driver.sleep(2000)
    await page.click(page.internshipJob);
    await page.driver.sleep(3000)
    await page.driver.quit() 
    });
    });