//js/routes.js
angular.module('chaty').config(function($stateProvider){
$stateProvider
  .state('app',{
    url:'/app',
    templateUrl:"templates/app.html",
    abstract:true
  }).state('app.about',{
    url:'/about',
    views:{
      "pageContent":{
        templateUrl:"templates/about.html"
      }
    }
  }).state('app.activeusers',{
    url:'/activeusers',
    views:{
      "pageContent":{
        templateUrl:"templates/activeusers.html"
      }
    }
  }).state('app.chatroom',{
    url:'/chatroom',
    views:{
      "pageContent":{
        templateUrl:"templates/chatroom.html"
      }
    }
  }).state('app.privatechat',{
    url:'/privatechat',
    views:{
      "pageContent":{
        templateUrl:"templates/privatechat.html"
      }
    }
  })

  .state('basic',{
    url:'/basic',
    templateUrl:"templates/basic.html",
    abstract:true
  }).state('basic.start', {
    url:"",
    views: {
      "pageContent": {
        templateUrl: "templates/start.html",
            
      }
    }
  }).state('basic.login', {
    url: "/login",
    views: {
      "pageContent": {
        templateUrl: "templates/login.html",
        
      }
    }
  }).state('basic.register', {
    url: "/login",
    views: {
      "pageContent": {
        templateUrl: "templates/register.html",
        
      }
    }
  })

})

