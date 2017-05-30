import { browser, by, element } from 'protractor';

export class ZippyAccordianPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
