function fn() {
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev';
  }
  var config = {
    apiURL: 'https://api.realworld.io/api/'
  }
  if (env == 'dev') {
    config.userEmail = 'karate@learn.com'
    config.userPassword = '12345678'
  } else if (env == 'qa') {
    config.userEmail = 'karate2@learn.com'
    config.userPassword = '87654321'
  }

  var accessToken = karate.callSingle('classpath:helpers/CreateToken.feature', config).authToken
  karate.configure('headers', {Authorization: 'Token ' + accessToken})

  return config;
}