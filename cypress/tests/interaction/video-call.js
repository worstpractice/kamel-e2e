/// <reference types="cypress" />
'use strict';
const { random } = require('./../../support/random');


describe('a user logs in and clicks the video button', () => {
  const { email } = random.user(); // email without matching password
  const { password } = random.user(); // password without matching email

  it('can reach the site', () => {
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

  it('no error message should exist at this point', () => {
    cy.get('.error-message').should('not.exist');
  });

  it('clicks the "Login" button', () => {
    cy.get('button').contains(/sign in/i).click();
  });

  it('is informed that the email or password is wrong', () => {
    cy.get('.error-message').should('exist').and('not.be.hidden');
  });
});
