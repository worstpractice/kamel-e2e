'use strict';

context('a user wants to log in', () => {

  it('clicking the login button should grant you access', () => {
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
