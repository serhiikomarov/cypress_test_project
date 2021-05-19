it('Авторизация Логин + Пароль верные учётные данные', () => {
    cy.fixture('PersonalArea').then(PA => {
        cy.visit(PA.baseUrl);
        cy.get('#login').clear().type(PA.correctLogin);
        cy.get('#password').clear().type(PA.correctPassword);
        cy.get('button.login-btn').click();
        cy.get('button.btn-need-email-skip').click();
        cy.get('nav.menu').find('a').eq('3').click();

    })
})

it('Авторизация Логин + Пароль неверные учётные данные', () => {
    cy.fixture('PersonalArea').then(PA => {
        cy.visit(PA.baseUrl);
        cy.get('#login').clear().type(PA.inCorrectLogin);
        cy.get('#password').clear().type(PA.correctPassword);
        cy.get('button.login-btn').click();
        cy.url().should('eq', PA.baseUrl)

        cy.get('#login').clear().type(PA.correctLogin);
        cy.get('#password').clear().type(PA.inCorrectPassword);
        cy.get('button.login-btn').click();
        cy.url().should('eq', PA.baseUrl);
    })
})


