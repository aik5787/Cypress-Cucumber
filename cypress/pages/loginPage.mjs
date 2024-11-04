class LoginPage {
  get userNameInput() {return cy.get('[name="username"]')}
  get continueButton() {return cy.get('[name="action"]')}
  get passwordInput() {return cy.get('[name="password"]')}

  login(userName, password) {
    this.userNameInput.type(userName, { force: true });
    this.continueButton.click();
    this.passwordInput.type(password);
    this.continueButton.click();
  }
}

export default new LoginPage();
