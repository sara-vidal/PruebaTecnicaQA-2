import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("A user takes a screenshot named {string}", (name) => {
    cy.screenshot(name);
});

When("A user searches {string} and takes a screenshot named {string}", (text, name) => {
    cy.get('p').contains(text).screenshot(name);
})

Then("The screenshot is stored in the screenshots folder", () => { })