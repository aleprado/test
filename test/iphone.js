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
  it('Search iphone', () => {
    page.inputSearch.setValue('iphone')
  });
});
