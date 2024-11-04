Cypress.Commands.add("errorHandler", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  Cypress.Commands.add("setupTestEnvironment", () => {
    cy.errorHandler();
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.clearCookies();
  });