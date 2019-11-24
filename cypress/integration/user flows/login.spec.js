'use strict';

context('a user wants to log in', () => {

  beforeEach(() => {
    cy.login();
  });

  it('log in to the site', () => {
    cy.get('.chat-board')
      .should('be.visible');

    cy.get('.chat-board_messages')
      .should('be.visible');

    cy.get('.contact-list')
      .should('be.visible');
  });
});
