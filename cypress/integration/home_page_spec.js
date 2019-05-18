

describe('Home Page', ()=>{
  it('should say hello world',()=>{
    cy.visit('/')
    cy.contains('Hello world')
  });
});