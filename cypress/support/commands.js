/// <reference types="cypress" />
'use strict';
const Chance = require('chance');

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

Cypress.Commands.add('signUp', () => {
  const chance = new Chance();
  const username = chance.word();
  const password = chance.string();
  const email = chance.email();
  const language = 'fr';
  cy.visit('/');
  cy.get('input[name=username]')
    .type(username);
  cy.get('input[name=email]')
    .type(email);
  cy.get('input[name=password]')
    .type(password);
  cy.get('input[name=language]')
    .type(language);
  cy.get('button')
    .click({ multiple: true });
});

Cypress.Commands.add('signUpAndLogin', () => {
  const chance = new Chance();
  const username = chance.word();
  const password = chance.string();
  const email = chance.email();
  const language = 'fr';
  cy.visit('/');
  cy.get('input[name=username]')
    .type(username);
  cy.get('input[name=email]')
    .type(email);
  cy.get('input[name=password]')
    .type(password);
  cy.get('input[name=language]')
    .type(language);
  cy.get('button')
    .click({ multiple: true });
  cy.visit('/');
});

