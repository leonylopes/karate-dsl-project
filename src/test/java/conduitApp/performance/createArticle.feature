
Feature: Articles

Background: Define URL
    * url apiURL
    * def articleRequestBody = read('classpath:conduitApp/json/newArticleRequest.json')
    * def dataGenerator = Java.type('helpers.DataGenerator')
    * set articleRequestBody.article.title = __gatling.Title
    * set articleRequestBody.article.description = __gatling.Description
    * set articleRequestBody.article.body = dataGenerator.getRandomArticleValues().body

    Scenario: Create and delete article
        #Given header Authorization = 'Token ' + token
        Given path 'articles'
        And request articleRequestBody
        When method Post
        Then status 200
        * def articleId = response.article.slug

        #* karate.pause(5000)

        #Given path 'articles',articleId
        #When method Delete
        #Then status 204



