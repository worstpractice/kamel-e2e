/// <reference types="Cypress" />
'use strict';

// NOTE: This test only works if you already have somebody logged onto the server
//       so the test has someone to talk to.

context('a user wants to video chat', () => {

  it('steps through the whole procedure of starting up a video chat', () => {
    cy.visit('/');

    cy.get('button')
      .contains(/login/i)
      .click();

    cy.get('.chat-board > h3')
      .should('have.text', 'Select contact')
      .and('be.visible');

    cy.get('li')
      .click();

    cy.get('.chat-board > h3')
      .should('not.have.text', 'Select contact')
      .and('be.visible');

    cy.get('span')
      .click();

    // At the moment, this blows up
  });
});
