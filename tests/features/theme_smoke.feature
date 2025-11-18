Feature: Argon theme smoke test

  Scenario: Argon theme is active on the homepage
    Given I open the home page
    Then the body should have theme class "wp-theme-argon"
    And I should see the post header "Hello world!"