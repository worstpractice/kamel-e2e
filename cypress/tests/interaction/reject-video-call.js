/// <reference types="cypress" />
'use strict';
const { random } = require('./../../support/random');
const sameGuy = require('./../../fixtures/same-guy.json');


describe('a user wants to video call someone', () => {

  // afterEach(() => {
  //   cy.haltOnError();
  // });

  const { email, password } = sameGuy; // It's assumed this guy is a valid & registered user

  it('logs in normally', () => {
    cy.login(email, password);
  });

  it('is not presented with any error message', () => {
    cy.contains(/wrong/i).should('not.exist');
  });

  it('arrives to the chat screen', () => {
    cy.contains(/contact/i).should('be.visible');
  });

  it('selects the first name from the contact list', () => { // Must have a user selected first to RECIEVE call
    cy.get('.contact-list').within(($list) => {
      cy.get('li', { timeout: 60000 }).first().within(($item) => {
        cy.get('.contact-list_wrapp_details_name').click();
      });
    });
  });

  it('starts recieving a video call', () => {
    cy.contains(/incoming/i, { timeout: 60000 }).should('be.visible');
  });

  it('accepts the offer', () => {
    cy.get('#toolbar > .fa-video').focus().within(($offer) => {
      cy.get('[data-icon="video"]').click();
    });
  });
});
