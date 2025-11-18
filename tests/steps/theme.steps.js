const { Given, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('I open the home page', async function () {
  await this.page.goto(this.baseUrl, { waitUntil: 'networkidle' });
});

Then('the body should have theme class {string}', async function (expectedClass) {
  const bodyClass = await this.page.getAttribute('body', 'class');
  assert.ok(
    bodyClass && bodyClass.includes(expectedClass),
    `Expected body class to include "${expectedClass}", got "${bodyClass}"`
  );
});

Then('I should see the post header {string}', async function (expectedHeader) {
  const locator = this.page.locator('a.post-title');
  const text = (await locator.first().innerText()).trim();

  assert.strictEqual(
    text,
    expectedHeader,
    `Expected first .post-title to be "${expectedHeader}", got "${text}"`
  );
});
