const { clickElement, putText, getText } = require("./lib/commands.js");
const { generateName } = require("./lib/util.js");

let page;

describe("Positive tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/index.php");
    await clickElement(page, '[data-time-stamp="1676494800"]');
    await clickElement(page, '[data-seance-id="140"]');
  });
  
  afterEach(() => {
    page.close();
  });
  
  test("The first ticket", async () => {
    await clickElement(page, 'div:nth-child(10) > span:nth-child(6)');
    await clickElement(page, 'body > main > section > button');
    const actual = await getText(page, "h2.ticket__check-title");
    expect(actual).toContain("Вы выбрали билеты:");
  });
  
  test("Buy two ticket", async () => {
    await clickElement(page, 'div:nth-child(10) > span:nth-child(6)');
    await clickElement(page, 'div:nth-child(10) > span:nth-child(7)');
    await clickElement(page, 'body > main > section > button');
    const actual = await getText(page, "h2.ticket__check-title");
    expect(actual).toContain("Вы выбрали билеты:");
  });
  });

describe("Positive tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/index.php");
    await clickElement(page, '[data-time-stamp="1676149200"]');
    await clickElement(page, '[data-seance-time-stamp="1676224800"]');

  });
  afterEach(() => {
    page.close();
  });
  test("Buy Occupied place", async () => {
    await clickElement(page, 'div:nth-child(10) > span.buying-scheme__chair.buying-scheme__chair_standart.buying-scheme__chair_taken');
    const actual = await page.$eval(".acceptin-button", (link) => link.getAttribute("disabled"));
    expect(actual).toEqual("true");
  });
});

