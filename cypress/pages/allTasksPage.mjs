class AllTasksPage {
  get selectedTask() { return cy.get('[data-test="viewTaskDetailsRichText"] p')}
  get deleteTaskButton() { return cy.get('[data-test="deleteTask"]')}
  get confirmDeleteTaskButton() { return cy.get('[data-test="confirmDelete"]')}

  getExtraMenuButton(taskLabel) {
    return cy.contains(taskLabel).parents(".d-flex.align-items-center").find('button[data-test="extraMenu"]');
  }

  deleteTask(taskLabel) {
    this.getExtraMenuButton(taskLabel).click();
    this.deleteTaskButton.click();
    this.confirmDeleteTaskButton.click();
  }
}

export default new AllTasksPage();
