import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import googlePage from '../../pages/GooglePage';

Given("A web browser is at the Google page and the 'Antes de ir a Google' window is closed", () => {
    cy.visit("/");
    googlePage.closeBeforeWindow();
});

When("A user enters the word {string} in the search field and presses enter", (word) => {
    googlePage.searchText(word);
});