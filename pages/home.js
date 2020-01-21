const Page = require('../pages/page');

const newPage = Object.create(Page, {
// elements
    inputSearch: { get() { return $('#search-key'); } },
    elem: { get() { return $('xpath|id|value|text'); } },
    elem: { get() { return $('xpath|id|value|text'); } },
// methods
  open: {
    value() {
      browser.url('');
      this.inputSearch.waitForDisplayed();
    },
  },

});

module.exports = newPage;
