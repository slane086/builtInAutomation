import { By } from "selenium-webdriver";
import { BasePage } from './basePage'

export class builtIn extends BasePage {

    // SALARYINFORMATION
    growSkillsBtn: By = By.xpath('(//a[@class="d-inline-flex align-center justify-space-between rounded text-decoration-none"])[3]')
    // for the grow your skills button

    softwareBtn: By = By.xpath('//span[@class="category category-4149"]')
    // for the cybersecurity button under the featured + certification topics

    viewBtn: By = By.xpath('(//span[@class="field-content"])[8]')
    // this is for the view button to see the salesforce

    qaEngineerBtn: By = By.xpath('(//button[@class="filter__jobs-title-item"])[1]')
    // this is to select the qa engineer button

    salaryInfo: By = By.xpath('(//a[@class="card__button"])[1]')
    // this is for the salary button




    // NAVIGATETOFACEBOOK
    techCompanies: By = By.xpath('(//a[@class="d-inline-flex align-center justify-space-between rounded text-decoration-none"])[1]')
    // this is to select the discover tech companies button

    nextArrow: By  = By.xpath('(//div[@class="v-window__next"])[1]')
    // this is to press the next arrow to scroll through tech companies

    homeBtn: By = By.xpath('(//div[@class="logo navigation-logo"])')
    // builtIn homepage button

    faceBookBtn: By = By.xpath('(//a[@class="social-link__item"])[1]')
    // this is for the facebook button on the bottom of the page




    // JOBMATCHES
    jobCategoryHomeBtn: By = By.xpath('(//div[@class="homepage-select"])[1]')
    // job category selection

    designUX: By = By.xpath('(//li[@class="homepage-select__list-item d-flex align-center pl-4"])[3]')
    // Design + UX option

    yearOfExperienceBtn: By = By.xpath('(//button)[5]')
    // year of experience selection

    oneYearBtn: By = By.xpath('(//li[@class="homepage-select__list-item d-flex align-center pl-4"])[13]')
    // <1 year of experience

    jobMatches: By = By.xpath('//button[@class="hjm-see-matches-link mt-6 mt-lg-0 ml-lg-8 hcm-see-matches-link__btn py-3 midnight-blue--text"]')
    // see job matches button



    // BESTPLACETOWORK
    remoteBtn: By = By.xpath('(//a[@class="menu-link bix_link nav-remote"])')
    // this is for the remote section button

    bestPlacesToWork: By = By.xpath('(//a[@class="bptw-banner-link d-flex justify-center align-center"])[1]')
    // this is to select the best places to work page

    clearBtn: By = By.xpath('(//button)[11]')



    // TESTTWO
    searchBtn: By = By.xpath('//button[@class="menu-search"]')
    // search button

    viewAllJobs: By = By.xpath('(//div[@class="search-results search-results-all-results"])')
    // input bar for the search option

    jobCategorySearch: By = By.xpath('(//button[@class="bix-dropdown-trigger"])[3]')
    // job category selector for the search jobs page

    designUXSearch: By = By.xpath('(//button[@class="toggle-selection-button"])[11]')
    // this is to select designUX option for search jobs page

    experienceBtn: By = By.xpath('(//button[@class="bix-dropdown-trigger"])[3]')
    // this is to select the experience button on the job search page

    entryLevelBtn: By = By.xpath('(//span[@class="item-title"])[1]')
    // this is to select the entry level option for experience in the jobsearch page

    companySize: By = By.xpath('(//button[@class="bix-dropdown-trigger"])[4]')
    // this is for the company size selection on the jobsearch page

    oneThousandEmployees: By = By.xpath('(//span[@class="item-title"])[6]')
    // this is for the selection of the 1000+ employees option on the company size

    epicGamesSearch: By = By.xpath('(//a[@class="b-jobs text-ellipsis"])')
    // this is to select the jobs button for epic games

    qaLeadJob: By = By.xpath('(//a[@class="job-details-link"])[18]')
    // this is to select the qa lead job available at epic games

    saveJobBtn: By = By.xpath('(//a[@class="ga-event-processed"])[1]')
    // this is for the save job button on epic games for the qa lead



    // NONUSED SELECTORS
    
    // buffaloBtn: By = By.xpath('(//span[@class="item-title"])[11]')
    // this is to select the buffaloNY button
    // cryptoBtn: By = By.xpath('(//button[@class="toggle-selection-button"])[105]')
    // this is to select the crypto button
    // industryBtn: By = By.xpath('(//button[@class="bix-dropdown-trigger active"])[2]')
    // this is to select the industry button
    // perksbtn: By = By.xpath('(//button[@class="bix-dropdown-trigger"])[5]')
    // this is to select the perks button
    // beerPerk: By = By.xpath('(//span[@class="item-title"])[87]')
    // this is to select the beer perk option
    // gamePerk: By = By.xpath('(//span[@class="item-title"])[109]')
    // this is to select the gameroom perk
    // searchJobBtn: By = By.xpath('(//a[@class="call-to-action-link"])')
    // this is to select the button the takes user to the jobs
    // artDirectorBtn: By = By.xpath('(//a[@class="job-details-link"])[8]')
    // this is to view the job of the art director
    // this is to clear the filters


constructor() {
    super({url: 'https://builtin.com/'})
}

async tabSwitch() {
    let myTabs = await this.driver.getAllWindowHandles()
    await this.driver.switchTo().window(myTabs[1])
    await this.driver.sleep(1000)
    await this.driver.close()
    await this.driver.switchTo().window(myTabs[0])
}

}

