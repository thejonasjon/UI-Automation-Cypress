Feature: Search for Computer Products

  Background: Filter computer products
    Given I have launched the website URL

  Scenario: Verify about section on product detail page
    When User click the hambuger menu
    And User can filter computer product
    Then User can confirm product detail