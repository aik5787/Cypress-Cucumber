Feature: Manage User Profile

  Background:
    Given I navigate to the Foundant application
    When I log in with valid credentials
    And I open the BETA site
    Then I should see the BETA site successfully loaded

  Scenario: Create User Profile
    When I navigate to the PROFILES section
    And I create a new profile with necessary details
    Then the new profile should be successfully created

  Scenario: Create Note  
    When I navigate to the user profile for adding a note
    And I add a note to the profile
    Then the new note should be successfully created and deleted

  Scenario: Create Task
    When I navigate to the user profile for adding a task
    And I add a task to the profile
    Then the new task should be successfully created and deleted
  @smoke
  Scenario: Log Out
    When I log out
    Then I should be redirected to the login page
