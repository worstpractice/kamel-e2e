'use strict';

context('a user wants to log in', () => {

  it('should be enough to just click on the login button', () => {
    cy.visit('/');

    cy.get('h3')
      .should('have.text', 'Login')
      .and('be.visible');

    cy.get('button')
      .should('have.text', 'Login')
      .and('be.visible')
      .click();

    cy.get('.chat-board')
      .should('be.visible');

    cy.get('.chat-board_messages')
      .should('be.visible');

    cy.get('.contact-list')
      .should('be.visible');
  });
});
