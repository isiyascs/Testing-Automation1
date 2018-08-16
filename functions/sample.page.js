import Page from './page.js';

class samplePage extends Page {
  get signInButton() { return browser.element('//a[@class="login"]'); }
  get emailField() {return browser.element('//input[contains(@class,"account_input")]');}
  get createButton() {return browser.element('//button[contains(@class,"button-medium")]');}
  get radioButton() {return browser.element('//*[@id="id_gender1"]');}
  get firstName() {return browser.element('//*[@id="customer_firstname"]');}
  get lastName() {return browser.element('//*[@id="customer_lastname"]');}
  get password() {return browser.element('//*[@id="passwd"]');}
  get day() {return browser.element('//*[@id="days"]');}
  get month() {return browser.element('//*[@id="months"]');}
  get year() {return browser.element('//*[@id="years"]');}
  get address() {return browser.element('//*[@id="address1"]');}
  get city() {return browser.element('//*[@id="city"]');}
  get state() {return browser.element('//*[@id="id_state"]');}
  get zip() {return browser.element('//*[@id="postcode"]');}
  get country() {return browser.element('//*[@id="id_country"]');}
  get mobileNumber() {return browser.element('//*[@id="phone_mobile"]');}
  get aliasAddress() {return browser.element('//*[@id="alias"]');}
  get registerButton() {return browser.element('//*[@id="submitAccount"]');}
  get searchBar() {return browser.element('//*[@id="search_query_top"]');}
  get searchButton() {return browser.element('//*[@id="searchbox"]/button');}
  get addToCartButton() {return browser.element('//*[@id="center_column"]/ul/li/div/div[2]/div[2]/a[1]');}
  
  goToHome () {
    browser.url('http://automationpractice.com');
    browser.pause(1000);
  }

  goToSignInPage () {
    this.signInButton.click();
  }

  enterEmail() {
    this.emailField.setValue('sidesssswws@gmail.com');

  }

  goToCreateAccountPage() {
    this.createButton.click();
    browser.pause(3000);
  }

  fillFormElements() {
    this.radioButton.click();
   this.firstName.setValue('Moahamed');
   this.lastName.setValue('Siyas');
   this.password.setValue('siyas123');
   this.day.selectByVisibleText('9');
   this.month.selectByVisibleText('June');
   this.year.selectByVisibleText('1995');
   this.address.setValue('Chakkammalath house , Nattika');
   this.city.setValue('Thrissur');
   this.state.selectByVisibleText('Alaska');
   this.zip.setValue('68056');
   this.mobileNumber.setValue('7907607583');
   this.aliasAddress.setValue('Chakkammalath house , Nattika');
   
  }

  clickRegisterButton() {
    this.registerButton.click();
    browser.pause(3000);
  }

  searchAndAddItem() {
    this.searchBar.setValue('Shirt');
    this.searchButton.click();
    browser.pause(2000);
    this.addToCartButton.click();
    browser.pause(3000);
  }

};
export default new samplePage();
