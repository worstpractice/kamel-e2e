/// <reference types="cypress" />
'use strict';
const sameGuy = require('./../../fixtures/same-guy.json');


describe('the same guy wants to sign up again', () => {

  const { name, email, password, language } = sameGuy;

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

  it('stays on the same page after clicking', () => {
    cy.url().should('match', /register/i);
  });

  it('is informed that the email is already taken', () => {
    cy.get('.error-message').should('exist').and('be.visible');
  });

  it('even when spamming the "Sign up" button', () => {
    cy.get('button').contains(/sign up/i).click({ multiple: true });
  });

  it('even with a different name', () => {

    cy.get('form').within(($form) => {
      cy.get('#userName').type('{selectAll}').type('{backspace}');
      cy.get('#userName').type('Totally Not Me Again');
    });
    cy.get('button').contains(/sign up/i).click({ multiple: true });
  });

  it('even with a different password', () => {

    cy.get('form').within(($form) => {
      cy.get('#password').type('{selectAll}').type('{backspace}');
      cy.get('#password').type('notme2020');
    });
    cy.get('button').contains(/sign up/i).click({ multiple: true });
  });

  it('even with a different language preference', () => {

    cy.get('form').within(($form) => {
      cy.get('.login_form_user-input_select', { force: true }).select('Swahili');
    });
    cy.get('button').contains(/sign up/i).click({ multiple: true });
  });
});
