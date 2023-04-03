describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/login');
    cy.get('[data-cy=username]').type('admin');
    cy.get('[data-cy=password]').type('admin', { force: true });
    cy.get('[data-cy=submit]').click().intercept('/');
    cy.contains('Inventory');
  });
});
