'use strict';

// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
// import './commands'

// Alternatively you can use CommonJS syntax:
require('./commands');

////////////////////////////////////////////////////////////////////////////////

// NOTE: https://github.com/cypress-io/cypress/issues/518#issuecomment-552382781

function abortEarly() {
  if (this !== undefined && this.currentTest.state === 'failed') {
    return cy.task('shouldSkip', true);
  }
  cy.task('shouldSkip').then((value) => {
    if (this !== undefined && value) {
      this.skip();
    }
  });
}

beforeEach(abortEarly);
afterEach(abortEarly);

before(() => {
  if (Cypress.browser.isHeaded) {
    // Reset the shouldSkip flag at the start of a run, so that it doesn't carry over into subsequent runs.
    // Do this only for headed runs because in headless runs, the `before` hook is executed for each spec file.
    cy.task('resetShouldSkipFlag');
  }
});

////////////////////////////////////////////////////////////////////////////////
