import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("A user searches {string} in the Wikipedia page", (text) => {
    cy.get('p').contains(text);
});

Then("The paragraph for {string} contains the year {string}", (text, year) => {
    (cy.get('p').contains(text)).should("include.text", year);
})