Feature: Tickets
    Scenario: The first tickett
    When user clicks on 16 day and 12:00 time, on 10 row and 6 chair and on Забронировать button
    Then user sees opened page with Row / Chair '10/6'

  Scenario: Buy two ticket
    When user clicks on 16 day and 12:00 time, on 10 row and 6 chair and on 10 row and 6 chair and on Забронировать button
    Then user sees opened page with Row / Chair: '10/6, 10/7'

  Scenario: Buy Occupied place
    When user clicks on today and 21:00 time, on 'taken' chair and on Забронировать button
    Then button Забронировать is disabled