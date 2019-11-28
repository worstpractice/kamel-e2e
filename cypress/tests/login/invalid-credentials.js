/// <reference types="cypress" />
'use strict';


describe('a login is attempted with invalid credentials', () => {

  // afterEach(() => {
  //   cy.haltOnError();
  // });

  it('attempts to log in normally', () => {
    cy.login('fakeuser@not.registered', 'derp');
  });

  it('is presented with an error message', () => {
    cy.contains(/wrong/i).should('be.visible');
  });

  it('fails to log in', () => {
    cy.contains(/contact/i).should('not.exist');
  });
});
