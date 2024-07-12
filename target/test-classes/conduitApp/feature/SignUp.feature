
Feature: Sign Up new user

    Background: Preconditions
        * def dataGenerator = Java.type('helpers.DataGenerator')
        * def timeValidator = read('classpath:helpers/timeValidator.js')
        * def randomEmail = dataGenerator.getRandomEmail()
        * def randomUsername = dataGenerator.getRandomUsername()
        Given url apiURL
    
    Scenario: New user Sign Up
        Given path 'users'
        And request
        """
                {
                "user": {
                        "email": #(randomEmail),
                        "password": "123456",
                        "username": #(randomUsername)
                        }
                }
        """
        When method Post
        Then status 200
        And match response == 
        """
             {
                "user": {
                    "email": #(randomEmail),
                    "username": #(randomUsername),
                    "bio": null,
                    "image": "#string",
                    "token": "#string"
                    }
            }
        """
    
    Scenario Outline: Validate Sign Up error messages
        Given path 'users'
        And request
        """
                {
                "user": {
                        "email": "<email>",
                        "password": "<password>",
                        "username": "<username>"
                        }
                }
        """
        When method Post
        Then status 422

        Examples:
            | email                | password  | username          | errorResponse                                         |
            | #(randomEmail)       | Karate123 | KarateUser123     | {"errors":{"username":["has already been taken"]}}    |
            | KatateUser1@test.com | Karate123 | #(randomUsername) | {"errors":{"email":["has already been taken"]}}       |
            |                      | Karate123 | #(randomUsername) | {"errors":{"email":["can't be blank"]}}               |
            | #(randomEmail)       | Karate123 |                   | {"errors":{"username":["can't be blank"]}}            |
            

    
