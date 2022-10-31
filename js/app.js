const myApp = angular.module("wallet", ['ui.router']);
const baseUrl = 'http://localhost:3000/';

myApp.config(function($stateProvider) {
  $stateProvider
    .state({
      name: "login",
      url: "/",
      templateUrl: "view/login.html",
      controller: "loginCtrl",
    })
    .state({
      name: "new-manager",
      url: "/new-manager",
      templateUrl: "view/newManager.html",
      controller: "newManagerCtrl",
    })
})