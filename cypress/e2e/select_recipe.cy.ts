/// <reference types="cypress" />

describe('select searched recipe spec', () => {
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

  it('opens recipe dialog', () => {
    cy.get('[data-cy="recipe-card-Chicken Handi"]').click();
    cy.get('[data-cy="recipe-dialog"]').should('be.visible');
  });

  it('selects ingredients tab', () => {
    cy.get('[data-cy="tab-ingredients"]').click();
    cy.get('[data-cy="list-ingredients"]').should('be.visible');
  });
});
