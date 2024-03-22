cy.amazon = {
    returnUrlUnlessErrorFound: (theUrl) => {
        const log = Cypress.log({
            name: 'environment information',
            displayName: 'EVN',
            message: `URL: ${theUrl}`,
            autoEnd: false
        })

        if (theUrl) {
            log.end()
            return theUrl.replace(/\/$/, '')
        } else {
            log.end()
            throw `Environment is not supported: ${Cypress.env('ENVIRONMENT')}`
        }
    },

    getAmazonBaseUrl: () => {
        const appUrls = {
            local: 'http://localhost:3000',
            staging: 'https://www.amazon.com/'
        }
        const amazonUrl = appUrls[Cypress.env('ENVIRONMENT')] || Cypress.env('ENVIRONMENT')
        return cy.amazon.returnUrlUnlessErrorFound(amazonUrl)
    }
}