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

describe('App', ()=>{
  it('It works',()=>{
    cy.visit('/')
    cy.contains('Find out more').click()
    cy.url().should('include', 'https://www.theguardian.com')
  });
});