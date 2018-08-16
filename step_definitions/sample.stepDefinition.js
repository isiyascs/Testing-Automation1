import { defineSupportCode } from 'cucumber';
import samplePage from '../functions/sample.page.js';

defineSupportCode(function({ Given, When, Then }) {

  Given(/^User goes to WebdriverIO Home page$/, () => {
    samplePage.goToHome();
  });

  When(/^User clicks signin$/, () => {
    samplePage.goToSignInPage();
  });

  When(/^User enter email address$/, () => {
    samplePage.enterEmail();
  });

  When(/^User click create account button$/, () => {
    samplePage.goToCreateAccountPage();
  });

  When(/^User enter datas$/, () => {
    samplePage.fillFormElements();
  });

  When(/^User click register now$/, () => {
    samplePage.clickRegisterButton();
  });

  When(/^User search for item$/, () => {
    samplePage.searchAndAddItem();
  });
});
