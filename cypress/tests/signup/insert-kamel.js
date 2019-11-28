/// <reference types="cypress" />
'use strict';
const { ariadna, erik, leo, moritz } = require('./../../fixtures/team-kamel.json');


describe('a kamel signs up', () => {

  // afterEach(() => {
  //   cy.haltOnError();
  // });

  const { name, email, password, language } = moritz; // <-- Destructure your desired Kamel here

  it('attempts to register normally', () => {
    cy.register(name, email, password, language);
  });
});
