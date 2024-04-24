Feature: Order for princess house

  Scenario Outline: As a user, I msut be able to place an order.


    Given I am on the login page
    When I enter the username and password
    Then it should go to the home page
    When I click on orders button 
    Then It should go to orders page
    When I click on new orders
    Then it should go to that page
    When I click on create order
    Then it should go to the next page
    When I add something and select payment method
    Then payment page should appear
    When I put in the payment details
    And click submit order
    Then order should be placed.



