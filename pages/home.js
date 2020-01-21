const assert = require('assert');

const Page = require('../pages/page');

const newPage = Object.create(Page, {
// elements
    window: { get() { return $('#root'); } },
    inputSearch: { get() { return $('#search-key'); } },
    paginator: { get() { return $('//div[@class="product-pagination-wrap"]'); } },
    buttonSearch: { get() { return $('//input[@class="search-button"]'); } },
    buttonPageNumber: { get(page) { return $('//button[@role="button"][text()="'+ page + '"]'); } },
    buttonCloseAd: { get() { return $('//a[@data-role="layer-close"]'); } },
    listOfItems: { get() { return $('//ul[@class="list-items"]'); } },
    item: { get() { return $('//li[@class="list-item"]'); } },
    allItems: { get() { return $('//ul[@class="list-items"]').$$('//li[@class="list-item"]'); } },
// methods

  goToPage: {
    value(page) {
      this.window.scrollIntoView(0,0)
      $('//button[text()="'+ page + '"]').click()
    },
  },

  searchProduct: {
    value(product) {
      this.inputSearch.setValue(product)
      this.buttonSearch.click();
    },
  },

  virifyItemsAmoutn: {
    value(page) {
      assert(this.allItems.length > 0)
    },
  },

  open: {
    value() {
      browser.url('');
      this.inputSearch.waitForDisplayed();
    },
  },

});

module.exports = newPage;
