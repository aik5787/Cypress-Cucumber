import { faker } from "@faker-js/faker";
import newProfileData from "../fixtures/newProfileData.json";

class CreateProfilePage {
  get firstName() {return cy.get('[data-test="crmEditProfileIndividualFirstName"]')}
  get lastName() {return cy.get('[data-test="crmEditProfileIndividualLastName"]')}
  get designations() {return cy.get('[data-test="crmEditProfileInformationDesignationsSelect"]')}
  get designationOption() {return cy.get('[role="listbox"]').eq(1)}
  get addPhoneNumberButton() {return cy.get('[data-test="profileAddPhoneNumber"]')}
  get phoneNumberInput() {return cy.get('[data-test="profileDeletePhoneNumber"]')}
  get addEmailButton() {return cy.get('[data-test="profileAddEmailAddress"]')}
  get emailInput() {return cy.get('[data-test="profileUpdateEmailAddress"]')}
  get saveButton() {return cy.get('[data-test="actionButton"]')}

  generatePhoneNumber() {
    const areaCode = Math.floor(Math.random() * 900) + 100;
    const centralOfficeCode = Math.floor(Math.random() * 900) + 100;
    const lineNumber = Math.floor(Math.random() * 9000) + 1000;

    return `(${areaCode}) ${centralOfficeCode}-${lineNumber}`;
  }

  fillProfileForm() {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const phoneNumber = this.generatePhoneNumber();
    const email = faker.internet.email();

    this.firstName.type(firstName);
    this.lastName.type(lastName);
    this.designations.click({ force: true });
    this.designationOption.contains(newProfileData.designationOption).click();
    this.addPhoneNumberButton.click();
    this.phoneNumberInput.type(phoneNumber);
    this.addEmailButton.click();
    this.emailInput.type(email);
    this.saveButton.click();
    
    return { firstName, lastName, phoneNumber, email };
  }
}

export default new CreateProfilePage();
