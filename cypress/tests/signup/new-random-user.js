/// <reference types="cypress" />
'use strict';
const { random } = require('./../../support/random');


describe('a new user wants to sign up', () => {

  // afterEach(() => {
  //   cy.haltOnError();
  // });

  const { name, email, password, language } = random.user();

  it('attempts to sign up normally', () => {
    cy.register(name, email, password, language);
  });

  it('is informed that the registration has succeeded', () => {
    cy.contains(/success/i).should('be.visible');
  });

  it('redirects to the login page', () => {
    cy.url().should('match', /login/i);
  });

  it('attempts to log in normally', () => {
    cy.login(email, password);
  });

  it('is not presented with any error message', () => {
    cy.contains(/wrong/i).should('not.exist');
  });

  it('arrives to the chat screen', () => {
    cy.contains(/contact/i).should('be.visible');
  });
});
