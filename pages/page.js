/* eslint-disable no-console */
/* eslint-disable func-names */
function Page() {
    this.title = 'generic';
  }
  
  Page.prototype.open = function (path) {
    browser.url(path);
  };
  
  Page.prototype.wait = function (time) {
    browser.pause(time);
  };
  
  Page.prototype.getUrl = function () {
    browser.getUrl();
  };
  
  Page.prototype.back = function () {
    browser.back();
  };
  
  Page.prototype.switchToTab = function (currentTab) {
    const openTabs = browser.getTabIds();
    const openedTab = openTabs.find((id) => id !== currentTab);
    browser.pause(1000);
    browser.switchTab(openedTab);
  };
  
  Page.prototype.switchBackToTab = function (currentTab) {
    browser.close(currentTab);
  };
  
  Page.prototype.close = function () {
    browser.close();
  };
  
  Page.prototype.window = function () {
    browser.window();
  };
  
  Page.prototype.waitForText = function (text) { // call this function using ""
    const textToFind = $(`//*[contains(., '${text}')]`);
    browser.waitUntil(() => textToFind.isDisplayed(), 15000, 'text is not present after 15 sec');
  };
  
  browser.addCommand('waitAndClick', function () {
    browser.waitUntil(() => this.isDisplayed(), 4000, 'element is not visible');
    browser.waitUntil(() => this.waitForEnabled(), 4000, 'element is not enabled');
    this.moveTo();
    browser.waitUntil(() => this.isDisplayedInViewport(), 4000, 'element is not displayed in the view port');
    let flag = true;
    let count = 1;
    while (flag && count < 10) {
      try {
        this.click();
        flag = false;
      } catch (error) {
        console.log(`click element retry - ${count}`);
        count += 1;
        browser.pause(100);
      }
    }
  }, true);
  
  browser.addCommand('waitForDisappear', function () {
    browser.waitUntil(() => this.isDisplayed() === false, 15000, 'element never disappear');
  }, true);
  
  module.exports = new Page();
  