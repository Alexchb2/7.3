const { clickElement, putText, getText } = require("./lib/commands.js");
const { generateName } = require("./lib/util.js");

let page;

describe("Positive tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/index.php");
    await clickElement(page, 'a:nth-child(2) > span.page-nav__day-week');
    await clickElement(page, 'a.movie-seances__time');
  });
  
  afterEach(() => {
    page.close();
  });
  
  test("The first ticket", async () => {
    await clickElement(page, '.buying-scheme__chair_standart:not(.buying-scheme__chair_taken)');
    await clickElement(page, 'body > main > section > button');
    const actual = await getText(page, "h2.ticket__check-title");
    expect(actual).toContain("Вы выбрали билеты:");
  });
  
  test("Buy two ticket", async () => {
    await clickElement(page, 'div:nth-child(7) > .buying-scheme__chair_standart:not(.buying-scheme__chair_taken)');
    await clickElement(page, 'div:nth-child(8) > .buying-scheme__chair_standart:not(.buying-scheme__chair_taken)');
    await clickElement(page, 'body > main > section > button');
    const actual = await getText(page, "h2.ticket__check-title");
    expect(actual).toContain("Вы выбрали билеты:");
  });
  
  test("Buy Occupied place", async () => {
    await clickElement(page, 'div > .buying-scheme__chair_taken');
    const actual = await page.$eval(".acceptin-button", (link) => link.getAttribute("disabled"));
    expect(actual).toEqual("true");
  });
});

