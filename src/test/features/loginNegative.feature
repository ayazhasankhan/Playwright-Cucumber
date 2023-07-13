Feature: login into application with invalid credentials 

  Background:
    Given User navigates to the application
  
  Scenario Outline: Validate login - Negative Scenario
    And User enter the username as "<username>"
    And User enter the password as "<password>"
    And User click on the login button
    Then verify "<errorMessage>"

    Examples:
      | username | password    | errorMessage             |
      |          |             | Your username is invalid!|
      | student  |             | Your password is invalid!|
      |          | Password123 | Your username is invalid!|
      | student1 | Password124 | Your username is invalid!|
      | student1 | Password123 | Your username is invalid!|
      | student  | Password124 | Your password is invalid!|


