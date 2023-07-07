/// <reference types="cypress" />

describe('splendor app example', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173')
    })

    it('loads onboarding page', () => {
        cy.contains('Take Care Of Your Health!').should('be.visible')
        cy.contains('With O Medic').should('be.visible')
        cy.contains('Manage your health ease with us').should('be.visible')
        cy.get('.onboarding_page-hero-image').should('have.attr', 'src', 'images/doctor-1.png')
        cy.contains('Get Started').should('have.attr', 'href', '/login/')
    })

    it('loads login page', () => {
        cy.contains('Get Started').click()
        cy.contains('Wellcome to our app!').should('be.visible')
        cy.get('input[name="username"]').should('be.visible')
        cy.get('input[name="password"]').should('be.visible')
        cy.contains('Login').should('be.visible').should('have.attr', 'type', 'submit')
        cy.contains("Don't have an account? Signup here").should('be.visible')
        cy.get('.block-footer>a').should('have.attr', 'href', '/signup/')
    })

    it('shows login errors', () => {
        cy.contains('Get Started').click()
        const button = cy.contains('Login')

        button.click()
        cy.contains('Erro: o campo do nome de usuário está vazio.').should('be.visible')

        const inputUsername = cy.get('input[name="username"]')
        inputUsername.type('test')
        button.click()
        cy.contains('Erro: o campo da senha está vazio.').should('be.visible')

        const inputPassword = cy.get('input[name="password"]')
        inputPassword.type('test')
        button.click()
        cy.contains('Erro: o usuário test não está cadastrado neste site. Se você não está certo de seu nome de usuário, experimente o endereço de e-mail.').should('be.visible')

        inputUsername.clear()
        inputUsername.type('awesometeam')
        button.click()
        cy.contains('Erro: A senha informada para o usuário awesometeam está incorreta. Perdeu a senha?').should('be.visible')

        inputPassword.clear()
        inputPassword.type('wearesplendor#123')
        button.click()
        cy.contains('Splendor Developer').should('be.visible')
    })
})
