Feature: Search Restaurant Voucher
  As as user
  I want to search a vourcher
@test
  Scenario: Verify user able search voucher for restaurant by sending values for city and people
    Given I visit home page
    And I navigate to "food" header
    When I search voucher for 5 people in "London"
    Then I am directed to search result page for 5 people
