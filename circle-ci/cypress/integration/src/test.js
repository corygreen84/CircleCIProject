describe('Adopt a pet image upload test', () => {

    // visits the "Lost pet page" //
    it('Visits the main page', () => {
        cy.visit('http://localhost:8080/')
        cy.contains('h1', 'Welcome to Your Vue.js App')
    })
})