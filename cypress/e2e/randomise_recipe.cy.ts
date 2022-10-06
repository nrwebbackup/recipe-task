/// <reference types="cypress" />

describe('select searched recipe spec', () => {
  it('visits index page', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="logo"]').should('be.visible');
  });

  it('clicks randomise button', () => {
    cy.get('[data-cy="random-button"]').should('be.visible').click();
    cy.get('[data-cy="recipe-dialog"]').should('be.visible');
  });

  it('selects ingredients tab', () => {
    cy.get('[data-cy="tab-ingredients"]').click();
    cy.get('[data-cy="list-ingredients"]').should('be.visible');
  });
});
