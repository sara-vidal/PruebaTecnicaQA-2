import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import googlePage from '../../pages/GooglePage';

Given("A web browser is at the results page for {string} search in Google", (concept) => {
    googlePage.goToResultsPage(concept);
});

When("A user clicks on the link with the text {string}", (page) => {
    googlePage.goToResultLink(page);
});