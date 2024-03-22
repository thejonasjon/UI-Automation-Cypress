// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add("pageHeader", (elementSelector, headerText) => {
//     cy.contains(elementSelector, headerText)
// })

// Cypress.Commands.add("labelField", (elementSelector, labelText) => {
//     cy.contains(elementSelector, labelText)
// })

// Cypress.Commands.add("inputField", (elementSelector, placeholderText, required) => {
//     cy.get(elementSelector, {timeout: Cypress.timeout.medium}).then(($el) => {
//         if (required !== ''){
//             cy.wrap($el).should('have.attr', 'required')
//             cy.wrap($el).should('have.attr', 'placeholder', placeholderText)
//         } else {
//             cy.wrap($el).should('have.attr', 'placeholder', placeholderText)
//         }
//     })
// })

// Cypress.Commands.add("submitButton", (elementSelector, buttonText, disabled = '') => {
//     cy.get(elementSelector).then(($el) => {
//         if (disabled !== ''){
//             cy.wrap($el).should('have.attr', 'type', 'submit')
//             cy.wrap($el).should('have.attr', 'disabled')
//             .and('contain', buttonText)
//         } else {
//             cy.wrap($el).should('have.attr', 'type', 'submit')
//             .and('contain', buttonText)
//         }
//     })
// })

// Cypress.Commands.add("anchorLink", (elementSelector, linkText) => {
//     cy.contains(elementSelector, linkText)
// })

// // Cypress.Commands.add("verifyField", (elementSelector = [], labelText, inputPlaceholderText, inputText,  required = '') => {
// //     cy.labelField(elementSelector[0], labelText)
// //     cy.InputField(elementSelector[1], inputPlaceholderText, required).type(inputText)
// // })

// Cypress.Commands.add("enterDate", (elementSelector, date) => {
//     if (date !== ''){
//         cy.get(elementSelector).should('have.attr', 'placeholder', Cypress.projectTexts.datePlaceholder)
//         cy.get(elementSelector).type(date)
//     }
//     else {
//         cy.get(elementSelector).focus().blur()
//     }
// })

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