const {When, Then, Before, After, setDefaultTimeout} = require('cucumber');
const puppeteer = require('puppeteer');
const chai = require('chai');
const expect = chai.expect;
const {clickElement, getText} = require("../../lib/commands.js");

setDefaultTimeout(30000);

Before(async function () {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    this.browser = browser;
    this.page = page;
    await this.page.goto('http://qamid.tmweb.ru/client/index.php');
    await clickElement(this.page, 'a:nth-child(2) > span.page-nav__day-week');
    await clickElement(this.page, 'body > main > section:nth-child(1) > div.movie-seances__hall > ul > li:nth-child(1)');

});
After(async function () {
    if(this.browser) {
        await this.browser.close();
    }
});

When("user clicks on {int} row and {int} chair", async function (row, chair) {
    await clickElement(this.page, `div:nth-child(${row}) > span:nth-child(${chair})`);
});

When("user clicks on Забронировать button", async function () {
    return await clickElement(this.page, "button.acceptin-button");
});

Then("user sees opened page with Row / Chair {string}", async function (string) {
    const actual = await getText(this.page, ".ticket__chairs");
    const expected = string;
    expect(actual).contains(expected);
});

When("user clicks on {int} row and {int} chair", async function (row, chair) {
    await clickElement(this.page, `div:nth-child(${row}) > span:nth-child(${chair})`);
});

When("user clicks on {int} row and {int} chair", async function (row, chair) {
    await clickElement(this.page, `div:nth-child(${row}) > span:nth-child(${chair})`);
});

When("user clicks on Забронировать button", async function () {
    return await clickElement(this.page, "button.acceptin-button");
});

Then("user sees opened page with Row / Chair: {string}", async function (string) {
    const actual = await getText(this.page, ".ticket__chairs");
    const expected = string;
    expect(actual).contains(expected);
});

When("user clicks on 'taken' chair and", async function (chair) {
    await clickElement(this.page, `div > .buying-scheme__chair_${chair}`);
});

When("user clicks on Забронировать button", async function () {
    return await clickElement(this.page, "button.acceptin-button");
})

Then("button Забронировать is disabled", async function () {
    const actual = await this.page.$eval(".acceptin-button", (link) => link.getAttribute("disabled"));
    expect(actual).equal(true);
});