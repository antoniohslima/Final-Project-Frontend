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
      url: "/clients-home",
      templateUrl: "view/clientsHome.html",
      controller: "clientsHomeCtrl",
      onEnter: isAuthorized,
    })
    .state({
      name: "clients-add",
      url: "/clients-add",
      templateUrl: "view/clients-add.html",
      controller: "clientsAddCtrl",
      onEnter: isAuthorized,
    })
    .state({
      name: "clients-edit",
      url: "/clients-edit",
      templateUrl: "view/clients-edit.html",
      controller: "clientsEditCtrl",
      onEnter: isAuthorized,
    })
    .state({
      name: "client-cards",
      url: "/client-cards",
      templateUrl: "view/client-cards.html",
      controller: "cardsManagementCtrl",
      onEnter: isAuthorized,
    })
    .state({
      name: "card-visualization",
      url: "/card-visualization",
      templateUrl: "view/card-visualization.html",
      controller: "cardVisualizationCtrl",
      onEnter: isAuthorized,
    })
    .state({
      name: "card-create",
      url: "/card-create",
      templateUrl: "view/card-create.html",
      controller: "cardCreateCtrl",
      onEnter: isAuthorized,
    })
    .state({
      name: "client-visualization",
      url: "/client-visualization",
      templateUrl: "view/client-visualization.html",
      controller: "clientVisualizationCtrl",
      onEnter: isAuthorized,
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
