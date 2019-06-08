describe('App', ()=>{
  it('It works',()=>{
    cy.visit('/')
  });
});

describe('App', ()=>{
  it('It works',()=>{
    cy.visit('/')
    cy.contains('Find out more')
  });
});