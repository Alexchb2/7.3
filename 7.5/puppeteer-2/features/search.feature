Feature: Tickets
  Scenario: The first ticket
    When user clicks on {int} day and {int} time
    When user clicks on {int} row and {int} chair
    When user clicks on Забронировать button
    Then user sees opened page with Row / Chair {int}

  Scenario: Buy two ticket
    When user clicks on {int} day and {int} time
    When user clicks on {int} row and {int} chair
    When user clicks on {int} row and {int} chair
    When user clicks on Забронировать button
    Then user sees opened page with Row / Chair: {int}, {int}

  Scenario: Buy Occupied place
    When user clicks on {int} day and {int} time
    When user clicks on 'taken' chair and 
    When user clicks on Забронировать button
    Then button Забронировать is disabled