'use strict';

// NOTE: This test only works if you already have somebody logged onto the server
//       so the test has someone to talk to.

context('a user wants to chat', () => {

  beforeEach(() => {
    cy.login();
  });

  it('send someone a greeting (clicking "send")', () => {

    cy.get('.chat-board > h3')
      .should('have.text', 'Select contact')
      .and('be.visible');

    cy.get('li')
      .click({ multiple: true });

    cy.get('.chat-board > h3')
      .should('not.have.text', 'Select contact')
      .and('be.visible');

    cy.get('input')
      .focus()
      .type('My man!');

    cy.get('button') // Sends message by pressing the "send" button
      .contains(/send/i)
      .click({ multiple: true });

    cy.get('.chat-board_message')
      .should('have.text', 'My man!')
      .and('be.visible');
  });

  it('send someone a greeting (pressing Enter)', () => {

    cy.get('.chat-board > h3')
      .should('have.text', 'Select contact')
      .and('be.visible');

    cy.get('li')
      .click({ multiple: true });

    cy.get('.chat-board > h3')
      .should('not.have.text', 'Select contact')
      .and('be.visible');

    cy.get('input') // Sends message by pressing enter in the input text field
      .focus()
      .type('My man!{enter}');

    cy.get('.chat-board_message')
      .should('have.text', 'My man!')
      .and('be.visible');
  });
});
