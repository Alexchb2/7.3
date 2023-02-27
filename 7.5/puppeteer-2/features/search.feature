Feature: Tickets
  Scenario: The first ticket
    When user clicks on 10 row and 6 chair
    When user clicks on Забронировать button
    Then user sees opened page with Row / Chair: 10/6

  Scenario: Buy two ticket
    When user clicks on 10 row and 6 chair
    When user clicks on 10 row and 7 chair
    When user clicks on Забронировать button
    Then user sees opened page with Row / Chair: 10/6, 10/7

  Scenario: Buy Occupied place
    When user clicks on 'taken' chair 
    When user clicks on Забронировать button
    Then button Забронировать is disabled