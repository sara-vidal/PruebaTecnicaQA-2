import {
    Given,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

import googlePage from '../../pages/GooglePage';

Then("The url will contain {string}", (text) => {
    cy.url().should("contains", text);
});

Given("A web browser is at the {string} page for {string}", (page, concept) => {
    googlePage.goToResultsPage(concept);
    googlePage.goToResultLink(page);
});