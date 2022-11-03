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
    .state({
      name: "home",
      url: "/home",
      templateUrl: "view/home.html",
      controller: "homeCtrl",
    })
    .state({
      name: "clientsHome",
      url: "/clientsHome",
      templateUrl: "view/clientsHome.html",
      controller: "clientsHomeCtrl",
    })
})