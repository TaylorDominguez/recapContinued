import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class dropdownPage extends Page {
    /**
     * define selectors using getter methods
     */
    get option1 () {
        return $('//*[@id="dropdown"]/option[2]')
    }
    get option2 () {
        return $('//*[@id="dropdown"]/option[3]')
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('dropdown');
    }
}

export default new dropdownPage();