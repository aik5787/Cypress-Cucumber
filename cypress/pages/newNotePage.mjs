class NewNotesPage {
  get noteLabelInput() { return cy.get('[data-test="addNoteLabel"]')}
  get dateInput() { return cy.get('[data-test="addNoteDate"]')}
  get currentDate() { return cy.get('[class*="day-cell current"]')}
  get detailsPlaceholder() { return cy.get('[dir="auto"] p')}
  get addNoteSubmit() { return cy.get('[data-test="addNoteSubmit"]')}
  
  addNewNote(newNoteData) {
    this.noteLabelInput.type(newNoteData.noteLabel);
    this.dateInput.click();
    this.currentDate.click();
    this.detailsPlaceholder.click({ force: true });
    this.detailsPlaceholder.type(newNoteData.noteDetails, { force: true });
    this.addNoteSubmit.click({ force: true });
  }
}

export default new NewNotesPage();
