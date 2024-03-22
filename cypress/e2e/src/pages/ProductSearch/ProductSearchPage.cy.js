
class ProductSearchPage {
    enterURL() {
     cy.visit('/');
   }

   clickHamburgerMenu() {
        cy.wait(5000) // This not a best practice but I could not figure wired behaviour of autoreload.
        cy.get(Cypress.ProductSearchSelectors.hamburgerMenu).click()
    }

    verifyPageTitle() {
        cy.wait(5000) // This not a best practice but I could not figure wired behaviour of autoreload.
        cy.VerifyHmenuTitle(Cypress.ProductSearchSelectors.hamburgerMenuTitle, 'Digital Content & Devices')
   }

   clickComputer(){
        cy.wait(5000) // This not a best practice but I could not figure wired behaviour of autoreload.
        cy.selectCategory(Cypress.ProductSearchSelectors.hmenuComputer, 'Computer')
   }

   clickTableAccessories(){
        cy.wait(5000) // This not a best practice but I could not figure wired behaviour of autoreload.
        cy.get(Cypress.ProductSearchSelectors.hmenuTabletAccessories).eq(0).scrollIntoView().click({force: true})
   }

   searchItem(){
        cy.searchProduct(Cypress.ProductSearchSelectors.searchProductInput, 'JETech')
        cy.get(Cypress.ProductSearchSelectors.searchIputButton).click()
   }

   sortItem(){
        cy.sortProduct(Cypress.ProductSearchSelectors.sortProductButton,
                        Cypress.ProductSearchSelectors.SortOption1,
                        'Price: Low to High'
                    )
   }

   verifyItem(){
        cy.get(Cypress.ProductSearchSelectors.productItems).eq(0).click()
        cy.get(Cypress.ProductSearchSelectors.aboutProductSection).should('contain', 'About this item')
   }
 }
 const search = new ProductSearchPage();
 export default search;