/// <reference types="cypress" />
'use strict';

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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (email, password) => {

  // afterEach(() => {
  //   cy.haltOnError();
  // });

  cy.visit('/');

  cy.url().should('match', /login/i);

  cy.get('form').within(($form) => {
    cy.get('#email').focus().clear().type(email);
    cy.get('#password').focus().clear().type(password);
  });

  cy.get('button').contains(/sign in/i).focus().click({ multiple: true });
});


Cypress.Commands.add('register', (name, email, password, language) => {

  // afterEach(() => {
  //   cy.haltOnError();
  // });

  cy.visit('/');

  cy.url().should('match', /login/i);

  cy.get('a').contains(/register/i).focus().click();

  cy.url().should('match', /register/i);

  cy.get('form').within(($form) => {
    cy.get('#userName').focus().clear().type(name);
    cy.get('#email').focus().clear().type(email);
    cy.get('#password').focus().clear().type(password);
    cy.get('select').focus().select(language);
  });

  cy.get('button').contains(/sign up/i).focus().click();
});


Cypress.Commands.add('haltOnError', () => {
  if (this.currentTest.state === 'failed') {
    Cypress.runner.stop(); // In case of fire, pull over to the sidewalk & slowly exit the test runner
  }
});
