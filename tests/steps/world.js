const { setWorldConstructor, BeforeAll, AfterAll, Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

class TestWorld {
  constructor() {
    this.browser = null;
    this.page = null;
    this.baseUrl = process.env.TEST_WP_URL || 'http://34.118.101.104/';
  }
}

setWorldConstructor(TestWorld);

BeforeAll(async function () {
  global.__browser = await chromium.launch({ headless: true });
});

AfterAll(async function () {
  if (global.__browser) {
    await global.__browser.close();
  }
});

Before(async function () {
  this.page = await global.__browser.newPage();
});

After(async function () {
  if (this.page) {
    await this.page.close();
  }
});
