class NewTaskPage {
    get typeInput() { return cy.get('[data-test="addTaskTaskType"]')}
    get typeOption() { return cy.get('.select-option-text')}
    get progressInput() { return cy.get('[data-test="addTaskProgress"]')}
    get progressOption() { return cy.get('.select-dropdown .select-option')}
    get assigneeInput() { return cy.get('[data-test="addTaskAssignee"]')}
    get assigneeOption() { return cy.get('.select-dropdown .select-option')}
    get dateInput() { return cy.get('[data-test="addTaskDueDate"]')}
    get currentDate() { return cy.get('[class*="day-cell current"]')}
    get labelInput() { return cy.get('[data-test="addTaskLabel"]')}
    get detailsPlaceholder() { return cy.get('.fr-wrapper .fr-element[contenteditable="true"]')}
    get addTaskSubmit() { return cy.get('[data-test="addTaskSubmit"]')}

    addNewTask(newTaskData) {
      this.typeInput.click();
      this.typeOption.contains(newTaskData.typeOption).click();
      this.progressInput.click();
      this.progressOption.contains(newTaskData.progressOption).click({ force: true });
      this.assigneeInput.click();
      this.assigneeOption.contains(newTaskData.assigneeOption).click();
      this.dateInput.click();
      this.currentDate.next().click();
      this.labelInput.click().type(newTaskData.taskLabel);
      this.detailsPlaceholder.click().type(newTaskData.taskDetails);
      this.addTaskSubmit.click();
  }

  }
  
  export default new NewTaskPage();