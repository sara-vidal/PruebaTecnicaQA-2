Feature: Search text in Wikipedia article

    Background:
        Given A web browser is at the "Wikipedia" page for "Automatización"

    Scenario: Search "primer proceso" in the "Automatización" article and check if the year is correct
        When A user searches "primer proceso" in the Wikipedia page
        Then The paragraph for "primer proceso" contains the year "1785"