class Header {
  get profileSection() {return cy.get('[data-test="topNavProfiles"]')}
  get tasksSection() {return cy.get('[data-test="topNavTasks"]')}
  get profileIcon() {return cy.get('[class="dropdown"] a')}
  get logoutButton() {return cy.get('[class="dropdown-item"]')}
  }
  
  export default new Header();