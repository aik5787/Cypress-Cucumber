class ProfilePage {
  get userName() { return cy.get('.ft-widget__username'); }
  get userEmail() {return cy.get('.pr-0')}
  get addNoteButton() {return cy.get('[data-test="profileAddNote"]')}
  get addTaskButton() { return cy.get('[data-test="profileAddTask"]')}
  get allNotes() { return cy.get('[datat-test="followNotesLink"]')}

  }
  
  export default new ProfilePage();