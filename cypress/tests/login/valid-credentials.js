/// <reference types="cypress" />
'use strict';
const { random } = require('./../../support/random');
const sameGuy = require('./../../fixtures/same-guy.json');


describe('a login is attempted with valid credentials', () => {

  // afterEach(() => {
  //   cy.haltOnError();
  // });

  const { email, password } = sameGuy; // It's assumed this guy is a valid & registered user

  it('reaches the site', () => {
    cy.visit('/');
  });

  it('has "/login" visible in the navbar', () => {
    cy.url().should('match', /login/i);
  });

  it('fills out the login form', () => {
    cy.get('form').within(($form) => {
      cy.get('#email').type(email);
      cy.get('#password').type(password);
    });
  });

  it('is not presented with any error message', () => {
    cy.contains(/wrong/i).should('not.exist');
  });

  it('arrives to the chat screen', () => {
    cy.contains(/contact/i).should('be.visible');
  });
});
