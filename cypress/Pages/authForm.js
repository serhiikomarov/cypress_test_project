cy.get('#login').clear().type(PA.inCorrectLogin);
        cy.get('#password').clear().type(PA.correctPassword);
        cy.get('button.login-btn').click();