Feature: Take a screenshot of a page or a certain element inside a page

    Background:
        Given A web browser is at the "Wikipedia" page for "Automatización"

    Scenario: Take screenshot of the "Automatización" page of Wikipedia
        When A user takes a screenshot named "Wikipedia page for Automatización"
        Then The screenshot is stored in the screenshots folder

    Scenario: Take screenshot of the "first automated process" paragraph of "Automatización" Wikipedia article
        When A user searches "primer proceso" and takes a screenshot named "First automated process"
        Then The screenshot is stored in the screenshots folder