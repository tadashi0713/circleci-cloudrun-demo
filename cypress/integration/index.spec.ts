describe('Index', () => {
    it('Should show text after click button', () => {
        cy.visit('/')
        cy.get('[data-testid="Button"]').click()
        cy.get('[data-testid="Text"]').should('have.text', 'Hello')
    })
})
