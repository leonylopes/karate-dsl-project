
Feature: Articles

Background: Define URL
    * url apiURL
    * def articleRequestBody = read('classpath:conduitApp/json/newArticleRequest.json')
    * def dataGenerator = Java.type('helpers.DataGenerator')
    * set articleRequestBody.article.title = dataGenerator.getRandomArticleValues().title
    * set articleRequestBody.article.description = dataGenerator.getRandomArticleValues().description
    * set articleRequestBody.article.body = dataGenerator.getRandomArticleValues().body
    #Given path 'users/login'
    #And request {"user": {"email": "karate@learn.com","password": "12345678"}}
    #When method Post
    #Then status 200
    #* def tokenResponse = callonce read('classpath:helpers/CreateToken.feature')
    #* def token = tokenResponse.authToken

    Scenario: Create a new article
        #Given header Authorization = 'Token ' + token
        Given path 'articles'
        And request articleRequestBody
        When method Post
        Then status 200
        And match response.article.title == articleRequestBody.article.title
    
    Scenario: Create and delete article
        #Given header Authorization = 'Token ' + token
        Given path 'articles'
        And request articleRequestBody
        When method Post
        Then status 200
        And match response.article.title == articleRequestBody.article.title
        * def articleId = response.article.slug

        Given params { limit: 10, offset: 0 }
        Given path 'articles',articleId
        When method Get
        Then status 200
        And match response.article.title == articleRequestBody.article.title

        #Given header Authorization = 'Token ' + token
        Given path 'articles',articleId
        When method Delete
        Then status 204

        Given params { limit: 10, offset: 0 }
        Given path 'articles'
        When method Get
        Then status 200
        And match response.articles[0].title != articleRequestBody.article.title



