import { By } from "selenium-webdriver";
import { BasePage } from './basePage'

export class builtIn extends BasePage {
    jobCategory: By = By.xpath('//div[@class="homepage-select"]');
    designUX: By = By.xpath('//li[@class= "homepage-select__list-item d-flex align-center pl-4"]');
    yearsOfExperience: By = By.xpath('//div[@class=""]');
    companiesTab: By = By.xpath('//span[@class=""]');
    articlesTab: By = By.xpath('//span[@class=""]');
    remoteTab: By = By.xpath('//span[@class=""]');
    jobsTab: By = By.xpath('//svg[@class"fa-icon icon-dropdown svg-inline--fa fa-chevron-down"]');
    searchTab: By = By.xpath('//span[@class=""]');
    homeBtn: By = By.xpath('//div[@class="logo navigation-logo"]');

    static driver: any;


constructor() {
    super({url: 'https://builtin.com/'})
}

}

