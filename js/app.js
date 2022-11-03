const myApp = angular.module("wallet", ['ui.router']);
const baseUrl = 'http://localhost:3000/';

myApp.config(function($stateProvider, $httpProvider) {
  $httpProvider.interceptors.push('BearerAuthInterceptor');

  $stateProvider
    .state({
      name: "login",
      url: "",
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
      onEnter: isAuthorized,
    })
    .state({
      name: "clientsHome",
      url: "/clientsHome",
      templateUrl: "view/clientsHome.html",
      controller: "clientsHomeCtrl",
    })
    .state({
      name: "clients-add",
      url: "/clients-add",
      templateUrl: "view/clients-add.html",
      controller: "clients-addCtrl",
    })
})

const isAuthorized = ($state, $rootScope) => {
  const isLogged = localStorage.getItem("token");

  if (!isLogged) {
    $state.go("login");
    return;
  }

  $rootScope.isLogged = true;
};
