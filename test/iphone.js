// Required In Each
const assert = require('assert');

// Create new page
const page = require('../pages/home');

before(() => {
  page.open();
});

// afterEach(() => {
//   page.wait(500);
// });

describe('Loking for an Iphone', () => {
  it('Close "New to ALIXPRESS" ad', () => {
    page.buttonCloseAd.waitAndClick()
  });
  it('Search iphone', () => {
    page.searchProduct('iphone')
  });
  it('Go to page 2', () => {
    page.goToPage('2')
  });
  it('Verify exist at least 1 item', () => {
    page.virifyItemsAmoutn('2')
  });
});
