Feature: Login validation test scenarios

    Scenario: Valid login scenario
        Given user is on login
        When user login with valid credentails
        Then user sees login success page
        When user logout of the application
        Then user sees login page