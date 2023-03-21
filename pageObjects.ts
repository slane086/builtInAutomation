import { By } from "selenium-webdriver";
import { BasePage } from './basePage'
const chromedriver = require('chromedriver')

export class builtIn extends BasePage {

}
constructor() {
    super({url: 'https://builtin.com/'})
}

