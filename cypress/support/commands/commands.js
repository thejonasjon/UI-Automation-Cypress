Cypress.Commands.add("selectCategory", (selector, value) => {
    cy.get(selector).then(($element) => {
        cy.wrap($element).should('contain', value).click()
    })
})

Cypress.Commands.add("VerifyHmenuTitle", (selector, value) => {
    cy.get(selector).then(($element) => {
        cy.wrap($element).should('be.visible').and('contain', value)
    })
})

Cypress.Commands.add("searchProduct", (selector, value) => {
    cy.get(selector).then(($element) => {
        cy.wrap($element).should('be.visible').type(value)
    })
})

Cypress.Commands.add("sortProduct", (parentSelector, childSelector, value) => {
    cy.get(parentSelector).then(($element) => {
        cy.wrap($element).should('be.visible').click()
    })
    cy.get(childSelector).then(($element) => {
        cy.wrap($element).should('be.visible')
        .and('contain', value).click()
    })
})

Cypress.Commands.add("VerifyProductDetail", (parentSelector, childSelector, value) => {
    cy.get(parentSelector).then(($element) => {
        cy.wrap($element).should('be.visible').click()
    })
    cy.get(childSelector).then(($element) => {
        cy.wrap($element).should('be.visible')
        .and('contain', value).click()
    })
})