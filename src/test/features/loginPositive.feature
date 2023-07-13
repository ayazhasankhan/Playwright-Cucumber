Feature: login into application with valid credentials 

  Background: 
    Given User go to the application

  Scenario: Login should be success
    And User enter the username as "student"
    And User enter the password as "Password123"
    When User click on the login button
    Then Login should be success


