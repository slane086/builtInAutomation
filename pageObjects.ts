import { By } from "selenium-webdriver";
import { BasePage } from './basePage'

export class builtIn extends BasePage {
    jobCategory: By = By.xpath('(//div[@class="homepage-select"])[1]')
    // job category selection
    designUX: By = By.xpath('(//li[@class="homepage-select__list-item d-flex align-center pl-4"])[3]')
    // Design + UX option
    yearOfExperienceBtn: By = By.xpath('(//button)[5]')
    // year of experience selection
    oneYearBtn: By = By.xpath('(//li[@class="homepage-select__list-item d-flex align-center pl-4"])[13]')
    // <1 year of experience
    jobMatches: By = By.xpath('//button[@class="hjm-see-matches-link mt-6 mt-lg-0 ml-lg-8 hcm-see-matches-link__btn py-3 midnight-blue--text"]')
    // see job matches button
    expertiseBtn: By = By.xpath('(//div[@class="field-content"])[1]')
    // your expertise selector
    emailAddress: By = By.xpath('(//div[@class="field-content"])[2]')
    // email address input
    searchBtn: By = By.xpath('//button[@class="menu-search"]')
    // search button
    homeBtn: By = By.xpath('//div[@class="logo navigation-logo"]')
    // builtIn homepage button
    searchInputBar: By = By.xpath('//div[@class="company-search"]')
    // input bar for the search option
    growSkillsBtn: By = By.xpath('(//a[@class="d-inline-flex align-center justify-space-between rounded text-decoration-none"])[3]')
    // for the grow your skills button
    softwareBtn: By = By.xpath('//span[@class="category category-4149"]')
    // for the cybersecurity button under the featured + certification topics
    viewBtn: By = By.xpath('(//span[@class="field-content"])[8]')
    // this is for the view button to see the salesforce
    qaEngineerBtn: By = By.xpath('(//button[@class="filter__jobs-title-item"])[1]')
    // this is to select the qa engineer button
    salaryInfo: By = By.xpath('(//a[@class="card__button"])[1]')
constructor() {
    super({url: 'https://builtin.com/'})
}

}

