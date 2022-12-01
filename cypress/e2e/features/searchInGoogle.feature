Feature: Search concept in Google

    Background:
        Given A web browser is at the Google page and the 'Antes de ir a Google' window is closed

    Scenario: Search "Automatización" in Google
        When A user enters the word "Automatización" in the search field and presses enter
        Then The url will contain "/search?q=Automatizaci%C3%B3n"