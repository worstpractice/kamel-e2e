/// <reference types="cypress" />
'use strict';
const { ariadna, erik, leo, moritz } = require('./../fixtures/team-kamel.json');


describe('a kamel signs up', () => {

  const { name, email, password, language } = erik; // <-- Destructure your desired Kamel here

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
      cy.get('[name="language"]').select(language);
    });
  });

  it('clicks the "Sign up" button', () => {
    cy.get('button').contains(/sign up/i).click();
  });

  it('logs in normally', () => {
    cy.login(email, password);
  });

  it('has successfully signed up and logged in', () => {
    cy.url().should('match', /[^login]/i);
    cy.url().should('match', /[^register]/i);
  });
});
