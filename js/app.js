const myApp = angular.module("wallet", ['ui.router']);
const baseUrl = 'http://localhost:3000/';

myApp.config(function($stateProvider, $httpProvider) {
  $httpProvider.interceptors.push('BearerAuthInterceptor');

  $stateProvider
    .state({
      name: "login",
      url: "",
      templateUrl: "views/login.html",
      controller: "loginCtrl",
    })
    .state({
      name: "new-manager",
      url: "/new-manager",
      templateUrl: "views/newManager.html",
      controller: "newManagerCtrl",
    })
    .state({
      name: "home",
      url: "/home",
      templateUrl: "views/home.html",
      controller: "homeCtrl",
      onEnter: isAuthorized,
    })
    .state({
      name: "clientsHome",
      url: "/clients-home",
      templateUrl: "views/clientsHome.html",
      controller: "clientsHomeCtrl",
      onEnter: isAuthorized,
    })
    .state({
      name: "clients-add",
      url: "/clients-add",
      templateUrl: "views/clients-add.html",
      controller: "clientsAddCtrl",
      onEnter: isAuthorized,
    })
    .state({
      name: "clients-edit",
      url: "/clients-edit",
      templateUrl: "views/clients-edit.html",
      controller: "clientsEditCtrl",
      onEnter: isAuthorized,
    })
    .state({
      name: "client-cards",
      url: "/client-cards",
      templateUrl: "views/client-cards.html",
      controller: "cardsManagementCtrl",
      onEnter: isAuthorized,
    })
    .state({
      name: "card-visualization",
      url: "/card-visualization",
      templateUrl: "views/card-visualization.html",
      controller: "cardVisualizationCtrl",
      onEnter: isAuthorized,
    })
    .state({
      name: "card-create",
      url: "/card-create",
      templateUrl: "views/card-create.html",
      controller: "cardCreateCtrl",
      onEnter: isAuthorized,
    })
    .state({
      name: "client-visualization",
      url: "/client-visualization",
      templateUrl: "views/client-visualization.html",
      controller: "clientVisualizationCtrl",
      onEnter: isAuthorized,
    })
    .state({
      name: "recover",
      url: "/password-recover",
      templateUrl: "views/password-recover.html",
      controller: "passwordRecoverCtrl",
    })
    .state({
      name: "change-password",
      url: "/change-password",
      templateUrl: "views/change-password.html",
      controller: "changePasswordCtrl",
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
