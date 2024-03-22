
Cypress.Commands.add("waitLoadingMessage", () => {
    cy.wait(1000)
})

Cypress.Commands.add("clearLocalStorageAndCookies", () => {
    cy.clearLocalStorage({log: false})
    cy.clearCookies({log: false})
})

