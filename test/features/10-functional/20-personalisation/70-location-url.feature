Feature: Show location in url

    # As a search engine
    # When I follow a link to Ask Izzy
    # I want to see a helpful page
    # So I know it's a good resource

    Background:
        Given a fresh session

    Scenario: Search via bookmark
        When I visit /search/housing/in/Richmond-Victoria
        Then I should see "I found 3 services in Richmond, Victoria"
        When I click on "Change your answers"
        And I click on "Where are you?"
        Then I should see "Automatically detect your location"
        When I search for "carlt"
        And I click on "Carlton"
        And I click on "Done"
        And I click on "Done"
        Then I should be at /search/housing/in/Carlton-Victoria/
