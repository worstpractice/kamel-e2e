/// <reference types="cypress" />
'use strict';
const Chance = require('chance');

const chance = new Chance();

const username = chance.word();
const password = chance.string();
const email = chance.email();
const language = 'fr';

context('a user wants to sign up', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('signs up to the site', () => {
    cy.get('input[name=username]')
      .type(username);

    cy.get('input[name=email]')
      .type(email);

    cy.get('input[name=password]')
      .type(password);

    cy.get('input[name=language]')
      .type(language);

    cy.get('button')
      .click({ multiple: true });
  });
});
