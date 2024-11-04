class ProfilesPage {
  get addProfileButton() {return cy.get('[data-test="newProfileSelect"]')}
  get profileType() {return cy.get('.v-list-item__title')}
  get nameSearchInput() {return cy.get('[class="v-text-field__slot"]').eq(0).find('input');}
  get searchResult() {return cy.get('td.text-start a')}
  }
  
  export default new ProfilesPage();