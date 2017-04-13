import { browser, element, by } from 'protractor/globals';

export class CoreUIPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('atms-root h1')).getText();
  }
}
