import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "@pages/loginPage.mjs";
import UserSitesPage from "@pages/userSitesPage.mjs";
import verificationData from "@fixtures/verificationData.json";
import Header from "@pages/header.mjs";
import ProfilesPage from "@pages/profilesPage.mjs";
import CreateProfilePage from "@pages/createProfilePage.mjs";
import ProfilePage from "@pages/profilePage.mjs";
import newProfileData from "@fixtures/newProfileData.json";
import NewNotePage from "@pages/newNotePage.mjs";
import AllNotesPage from "@pages/allNotesPage.mjs";
import newNoteData from "@fixtures/newNoteData.json";
import urls from "@fixtures/urls.json";
import NewTaskPage from "@pages/newTaskPage.mjs";
import AllTasksPage from "@pages/allTasksPage.mjs";
import newTaskData from "@fixtures/newTaskData.json";

Before(() => {
  cy.setupTestEnvironment();
});

Given("I navigate to the Foundant application", () => {
  cy.visit("/");
});

When("I log in with valid credentials", () => {
  LoginPage.login(Cypress.env("USERNAME"), Cypress.env("PASSWORD"));
});

When("I open the BETA site", () => {
  UserSitesPage.betaSite.click();
});

Then("I should see the BETA site successfully loaded", () => {
  cy.url().should("include", verificationData.betaSiteUrl);
  cy.contains(verificationData.betaSiteTitle).should("exist");
});

When("I navigate to the PROFILES section", () => {
  Header.profileSection.click();
});

When("I create a new profile with necessary details", () => {
  ProfilesPage.addProfileButton.click();
  ProfilesPage.profileType.contains(newProfileData.profileType).click();
  cy.wrap(CreateProfilePage.fillProfileForm()).as("profileData");
});

Then("the new profile should be successfully created", () => {
  Header.profileSection.click();
  cy.get("@profileData").then((profileData) => {
    const fullName = `${profileData.firstName} ${profileData.lastName}`;
    ProfilesPage.nameSearchInput.type(fullName);
    ProfilesPage.searchResult.contains(fullName).should("exist").and("be.visible").click();
    ProfilePage.userEmail.should("have.text", profileData.email);
  });
});

When("I navigate to the user profile for adding a note", () => {
  cy.visit(urls.userProfileUrl);
});

When("I add a note to the profile", () => {
  ProfilePage.addNoteButton.click();
  NewNotePage.addNewNote(newNoteData);
});

Then("the new note should be successfully created and deleted", () => {
  ProfilePage.allNotes.click();
  cy.contains(newNoteData.noteLabel).click();
  AllNotesPage.selectedNote.should("have.text", newNoteData.noteDetails);
  AllNotesPage.deleteNote(newNoteData);
});

When("I navigate to the user profile for adding a task", () => {
  cy.visit(urls.userProfileUrl);
});

When("I add a task to the profile", () => {
  cy.visit(urls.userProfileUrl);
  ProfilePage.addTaskButton.click();
  NewTaskPage.addNewTask(newTaskData);
});

Then("the new task should be successfully created and deleted", () => {
  Header.tasksSection.click();
  cy.contains(newTaskData.taskLabel).click();
  AllTasksPage.selectedTask.should("have.text", newTaskData.taskDetails);
  AllTasksPage.deleteTask(newTaskData.taskLabel);
});

When("I log out", () => {
  Header.profileIcon.click();
  Header.logoutButton.contains(verificationData.logoutButtonText).click();
});

Then("I should be redirected to the login page", () => {
  cy.contains(verificationData.loginPageText).should("exist");
});
