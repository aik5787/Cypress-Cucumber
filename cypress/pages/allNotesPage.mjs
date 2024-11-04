class AllNotesPage {
  get selectedNote() { return cy.get('[data-test="viewNoteDetailsRichText"] p')}
  get deleteNoteButton() { return cy.get('[data-test="deleteNote"]')}
  get confirmDeleteNoteButton() { return cy.get('[data-test="confirmDelete"]')}
  getExtraMenuButton(noteLabel) {
    return cy.contains(noteLabel).parents(".d-flex.align-items-center").find('button[data-test="extraMenu"]');
  }

  deleteNote(newNoteData) {
    this.getExtraMenuButton(newNoteData.noteLabel).click();
    this.deleteNoteButton.click();
    this.confirmDeleteNoteButton.click();
  }
}

export default new AllNotesPage();
