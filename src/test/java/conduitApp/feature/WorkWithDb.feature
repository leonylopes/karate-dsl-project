
Feature: work with db

Background: connect to db
    * def dbHandler = Java.type('helpers.DbHandler')

    Scenario: Seed database with a new job
        * eval dbHandler.addNewJobWithName("Qa7")

    Scenario: Get level for job
        * def level = dbHandler.getMinAndMaxLevelsForJob("Qa7")
        * print level.minLvl
        * print level.maxLvl
        And match level.minLvl == '80'
        And match level.maxLvl == '120'