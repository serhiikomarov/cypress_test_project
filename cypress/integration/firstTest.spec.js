/// <reference types="cypress" />

// it('By ID', ()=> {
//     cy.visit('https://facebook.com/')
//     cy.get('#email')
// })

// it('By Class', ()=> {
//     cy.visit('https://docs.cypress.io/guides/overview/why-cypress')
//     cy.get('.DocSearch-Button-Placeholder')
// })

// it('By Tag', ()=> {
//     cy.viewport(1200, 800)
//     cy.visit('https://docs.cypress.io/guides/overview/why-cypress')
//     cy.get('nav')
// })

// it('By Different Tag', ()=> {
//     cy.viewport(1200, 800)
//     cy.visit('https://facebook.com/')
//     cy.get('[data-testid="open-registration-form-button"][role="button"]')
// });

// it('By Different Types', ()=> {
//     cy.viewport(1200, 800)
//     cy.visit('https://facebook.com/')
//     cy.get('[data-testid="open-registration-form-button"][role="button"]')
// });

// it.only('By Contains name', ()=> {
//     cy.viewport(1200, 800)
//     cy.visit('https://next.privat24.ua/')
//     cy.get('*[class^="card"]')
// });

it('Using Get with Find and Eq', ()=> {
    cy.viewport(1200, 800)
    cy.visit('https://next.privat24.ua/deposit')
    cy.get('tbody').find('td').find('div').find('button').eq('0')
});

it.only('Using Get with Find and Eq', ()=> {
    cy.viewport(1500, 800)
    cy.visit('https://docs.cypress.io/guides/overview/why-cypress#In-a-nutshell')
    cy.get('ul[class^="scrollactive-nav"]').find('li').eq('8')
});