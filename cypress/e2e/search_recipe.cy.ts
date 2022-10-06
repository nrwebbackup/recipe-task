/// <reference types="cypress" />

describe('search recipes spec', () => {
  it('visits index page', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="logo"]').should('be.visible');
  });

  it('enters text input into search bar', () => {
    cy.get('[data-cy="searchbar"]')
      .type('chicken')
      .should('have.value', 'chicken');
  });

  it('loads in recipe cards', () => {
    cy.get('[data-cy="recipecards"]')
      .children()
      .should('have.length.at.least', 1);
  });

  it('adds plain flour filter', () => {
    cy.get('[data-cy="ingredient-select"]').click();
    cy.get('[data-cy="Flour"]').click();

    cy.get('[data-cy="recipecards"]').children().should('have.length', 1);
  });
});
