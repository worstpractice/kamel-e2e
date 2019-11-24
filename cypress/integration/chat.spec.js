/// <reference types="Cypress" />
'use strict';

// NOTE: This test only works if you already have somebody logged onto the server
//       so the test has someone to talk to.

context('a user wants to chat', () => {

  beforeEach(() => {
    cy.login();
  });

  it('sends someone a greeting', () => {

    cy.get('.chat-board > h3')
      .should('have.text', 'Select contact')
      .and('be.visible');

    cy.get('li')
      .click();

    cy.get('.chat-board > h3')
      .should('not.have.text', 'Select contact')
      .and('be.visible');

    cy.get('input')
      .focus()
      .type('My man!');

    cy.get('button')
      .contains(/send/i)
      .click();

    cy.get('.chat-board_message')
      .should('have.text', 'My man!')
      .and('be.visible');
  });
});
