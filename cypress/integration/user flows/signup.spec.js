/// <reference types="cypress" />
'use strict';
const { random } = require('./../../random');

context('a new user wants to sign up', () => {

  it('visits the site', () => {
    cy.visit('/');
  });
});
