describe('ToDo app', () => {
  it('add todo item', () => {
    cy.visit('http://localhost:3000/');
    cy.addTodoItem('Item 1');
    cy.addTodoItem('Item 2');

    cy.getTodoItem('Item 1').should('exist');
    cy.getTodoItem('Item 2').should('exist');
    cy.getMainInput().should('have.value', '');
  });

  it('complete todo item', () => {
    cy.visit('http://localhost:3000/');
    cy.addTodoItem('Item 1');
    cy.addTodoItem('Item 2');

    cy.completeTodoItem('Item 1');
    cy.getTodoItemCheckbox('Item 1').should('be.checked');
  });

  it('delete todo item', () => {
    cy.visit('http://localhost:3000/');
    cy.addTodoItem('Item 1');
    cy.addTodoItem('Item 2');

    cy.deleteTodoItem('Item 1');
    cy.getTodoItem('Item 1').should('not.exist');
  });

  it('filter todo items', () => {
    cy.visit('http://localhost:3000/');
    cy.addTodoItem('Item 1');
    cy.addTodoItem('Item 2');
    cy.addTodoItem('Item 3');
    cy.completeTodoItem('Item 1');

    cy.filterItems('Active');
    cy.getTodoItem('Item 1').should('not.exist');
    cy.getTodoItem('Item 2').should('exist');
    cy.getTodoItem('Item 3').should('exist');

    cy.filterItems('Completed');
    cy.getTodoItem('Item 1').should('exist');
    cy.getTodoItem('Item 2').should('not.exist');
    cy.getTodoItem('Item 3').should('not.exist');
  });

  it('clear completed items', () => {
    cy.visit('http://localhost:3000/');
    cy.addTodoItem('Item 1');
    cy.addTodoItem('Item 2');
    cy.addTodoItem('Item 3');
    cy.addTodoItem('Item 4');
    cy.completeTodoItem('Item 1');
    cy.completeTodoItem('Item 4');

    cy.clearCompletedItems();
    cy.getTodoItem('Item 1').should('not.exist');
    cy.getTodoItem('Item 2').should('exist');
    cy.getTodoItem('Item 3').should('exist');
    cy.getTodoItem('Item 4').should('not.exist');
  });
});
