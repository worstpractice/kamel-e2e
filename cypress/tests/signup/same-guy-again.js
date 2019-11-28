/// <reference types="cypress" />
'use strict';
const sameGuy = require('./../../fixtures/same-guy.json');


describe('the same guy wants to sign up again', () => {

  // afterEach(() => {
  //   cy.haltOnError();
  // });

  const { name, email, password, language } = sameGuy;

  it('attempts to sign up normally', () => {
    cy.register(name, email, password, language);
  });

  it('is informed that the email is already taken', () => {
    cy.get('.error-message').should('be.visible');
  });

  it('even when spamming the "Sign up" button', () => {
    cy.get('button').contains(/sign up/i).focus().click();
  });

  it('even with a different name', () => {
    cy.get('form').within(($form) => {
      cy.get('#userName').focus().clear().type('Totally Not Me Again');
    });
    cy.get('button').contains(/sign up/i).focus().click();
  });

  it('and a different password', () => {
    cy.get('form').within(($form) => {
      cy.get('#password').focus().clear().type('notme2020');
    });
    cy.get('button').contains(/sign up/i).focus().click();
  });

  it('and a different language preference', () => {
    cy.get('form').within(($form) => {
      cy.get('select').focus().select('Swahili');
    });
    cy.get('button').contains(/sign up/i).focus().click();
  });

  it('is not redirected to "/login"', () => {
    cy.url().should('match', /register/i);
  });
});
