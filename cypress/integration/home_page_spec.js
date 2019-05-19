describe('App', ()=>{
  it('It works',()=>{
    cy.visit('/')
    cy.contains('News Summary')
  });
});