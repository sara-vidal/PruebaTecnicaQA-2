Feature: Access a website from the Google search results page

    Scenario: Access to the Wikipedia article for "Automatización"
        Given A web browser is at the results page for "Automatización" search in Google
        When A user clicks on the link with the text "Wikipedia"
        Then The url will contain "wikipedia.org/wiki/Automatizaci%C3%B3n"