class googlePage {
    elements = {
        beforeWindowAcceptButton: () => cy.get("#L2AGLb"),
        searchField: () => cy.get(".gLFyf"),
    };

    typeText(text) {
        this.elements.searchField().type(text);
    }

    pressEnter() {
        this.elements.searchField().type('{enter}');
    }

    closeBeforeWindow() {
        this.elements.beforeWindowAcceptButton().click();
    }

    searchText(text) {
        this.typeText(text);
        this.pressEnter();
    }

    goToResultLink(text) {
        cy.contains(text).first().click();
    }

    goToResultsPage(text) {
        cy.visit("/");
        this.closeBeforeWindow();
        this.searchText(text);
    }

}

module.exports = new googlePage();