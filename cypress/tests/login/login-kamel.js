/// <reference types="cypress" />
'use strict';
const { ariadna, erik, leo, moritz } = require('./../../fixtures/team-kamel.json');


describe('a kamel logs in', () => {

  // afterEach(() => {
  //   cy.haltOnError();
  // });

  const { name, email, password, language } = moritz; // <-- Destructure your desired Kamel here

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
