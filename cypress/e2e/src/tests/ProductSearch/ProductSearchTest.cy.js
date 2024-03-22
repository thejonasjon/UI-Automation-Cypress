/// <reference types="cypress" />
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import search from "../../pages/ProductSearch/ProductSearchPage.cy";


Given("I have launched the website URL", () => {
    search.enterURL();
});

When("User click the hambuger menu", () => {
    search.clickHamburgerMenu()
});

And("User can filter computer product", () => {
    search.verifyPageTitle();
    search.clickComputer();
    search.clickTableAccessories()
    search.searchItem()
    search.sortItem()
});

Then("User can confirm product detail", () => {
    search.verifyItem()
});