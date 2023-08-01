// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('addTodoItem', (text) => {
  cy.get('input[placeholder]').type(`${text}{Enter}`);
});

Cypress.Commands.add('getMainInput', () => {
  return cy.get('input[placeholder]');
});

Cypress.Commands.add('getTodoItem', (text) => {
  return cy.get('label').contains(text);
});

Cypress.Commands.add('completeTodoItem', (text) => {
  cy.getTodoItem(text).click();
});

Cypress.Commands.add('getTodoItemCheckbox', (text) => {
  return cy.getTodoItem(text).get('input[type="checkbox"]');
});

Cypress.Commands.add('deleteTodoItem', (text) => {
  cy.get('li').contains(text).trigger('mouseover');
  cy.get('li').contains(text).get('input[type="button"]').click();
});

Cypress.Commands.add('filterItems', (filterName) => {
  cy.get(`button[name='${filterName}']`).click();
});

Cypress.Commands.add('clearCompletedItems', () => {
  cy.get('button').contains('Clear completed').click();
});
