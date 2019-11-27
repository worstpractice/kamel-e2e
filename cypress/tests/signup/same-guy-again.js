/// <reference types="cypress" />
'use strict';
const { random } = require('./../../lib/random'); // destructure random.user() for name, email & password

context('a new user wants to sign up', () => {

  const { name, email, password, language } = random.user();

  it('can reach the site', () => {
    cy.visit('/');
  });

  it('has "/login" visible in the navbar', () => {
    cy.url().should('match', /login/i);
  });

  it('clicks the "Register" button', () => {
    cy.get('a').contains(/register/i).click();
  });

  it('now has "/register" visible in the navbar', () => {
    cy.url().should('match', /register/i);
  });

  it('fills out the form', () => {

    cy.get('form').within(($form) => {
      cy.get('#userName').type(name);
      cy.get('#email').type(email);
      cy.get('#password').type(password);
      cy.get('.login_form_user-input_select', { force: true }).select(language);
    });
  });

  it('clicks the "Sign up" button', () => {
    cy.get('button').contains(/sign up/i).click();
  });

  it('arrives back at the "/login" page', () => {
    cy.url().should('match', /login/i);
  });

  it('fills out the login form', () => {
    cy.get('form').within(($form) => {
      cy.get('#email').type(email);
      cy.get('#password').type(password);
    });
  });

  it('clicks the "Login" button', () => {
    cy.get('button').contains(/sign in/i).click();
  });

  it('has successfully signed up and logged in', () => {
    cy.url().should('match', /[^login]/i);
    cy.url().should('match', /[^register]/i);
  });
});
