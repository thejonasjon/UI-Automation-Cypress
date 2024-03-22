
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
















// class LoginPage {
//     enterURL() {
//      cy.visit({
//        url: 'https://www.amazon.com/',
//        method: 'GET',
//     });
//    }
//    clickHamburgerMenu() {
//     cy.get('[id="nav-hamburger-menu"]').then(($hm) => {
//         cy.wrap($hm).find('span').should('contain', 'All')
//         cy.wrap($hm).click()
//     })
//     // return this;
//    }
//     enterUserNamePassword(username, password) {
//      cy.get('[id="input-email"]').type(username);
//      cy.get('[id="input-password"]').type(password);
//      return this;
//    }
//     clickSubmitButton() {
//      cy.get('[type="submit"]').eq(0).click();
//      return this;
//    }
//     verifyPageTitle() {
//      return cy.title().should("eq", "Search -");
//    }
//  }
//  const login = new LoginPage();
//  export default login;